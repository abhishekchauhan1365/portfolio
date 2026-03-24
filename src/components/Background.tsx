"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  opacity: number;
  layer: number; // 0 = background (slow, dim), 1 = foreground (fast, bright)
  hue: number;   // slight color variation per particle
}

interface AuroraOrb {
  x: number;
  y: number;
  vx: number;
  vy: number;
  radius: number;
  r: number;
  g: number;
  b: number;
  alpha: number;
  alphaDir: number;
}

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let mouse = { x: -9999, y: -9999 };
    let particles: Particle[] = [];
    let orbs: AuroraOrb[] = [];
    let t = 0;

    const W = () => canvas.width;
    const H = () => canvas.height;

    // --- Config ---
    const PARTICLE_COUNT = 110;
    const CONNECT_DIST = 130;
    const MOUSE_GLOW_RADIUS = 200;
    const MOUSE_REPEL = 100;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize aurora orbs — large drifting light blobs
    const initOrbs = () => {
      orbs = [
        {
          x: W() * 0.2, y: H() * 0.25,
          vx: 0.25, vy: 0.12,
          radius: Math.max(W(), H()) * 0.42,
          r: 124, g: 58, b: 237,
          alpha: 0.07, alphaDir: 0.0003,
        },
        {
          x: W() * 0.8, y: H() * 0.6,
          vx: -0.18, vy: -0.15,
          radius: Math.max(W(), H()) * 0.38,
          r: 56, g: 100, b: 235,
          alpha: 0.055, alphaDir: -0.0002,
        },
        {
          x: W() * 0.5, y: H() * 0.85,
          vx: 0.1, vy: -0.08,
          radius: Math.max(W(), H()) * 0.35,
          r: 167, g: 100, b: 255,
          alpha: 0.045, alphaDir: 0.00025,
        },
      ];
    };

    const initParticles = () => {
      particles = Array.from({ length: PARTICLE_COUNT }, () => {
        const layer = Math.random() > 0.4 ? 0 : 1;
        return {
          x: Math.random() * W(),
          y: Math.random() * H(),
          vx: (Math.random() - 0.5) * (layer === 1 ? 0.55 : 0.22),
          vy: (Math.random() - 0.5) * (layer === 1 ? 0.55 : 0.22),
          radius: layer === 1 ? Math.random() * 1.8 + 0.8 : Math.random() * 0.9 + 0.3,
          opacity: layer === 1 ? Math.random() * 0.55 + 0.25 : Math.random() * 0.25 + 0.08,
          layer,
          hue: Math.random() * 40 - 20, // ±20 hue offset for color variety
        };
      });
    };

    const onMouseMove = (e: MouseEvent) => { mouse.x = e.clientX; mouse.y = e.clientY; };
    const onMouseLeave = () => { mouse.x = -9999; mouse.y = -9999; };

    const drawFrame = () => {
      t += 0.004;
      ctx.clearRect(0, 0, W(), H());

      // ==========================================
      // 1. Aurora orbs — drifting radial glow blobs
      // ==========================================
      for (const orb of orbs) {
        // Breathe alpha
        orb.alpha += orb.alphaDir;
        if (orb.alpha > 0.1 || orb.alpha < 0.03) orb.alphaDir *= -1;

        // Drift
        orb.x += orb.vx;
        orb.y += orb.vy;

        // Bounce off edges softly
        if (orb.x < -orb.radius * 0.3 || orb.x > W() + orb.radius * 0.3) orb.vx *= -1;
        if (orb.y < -orb.radius * 0.3 || orb.y > H() + orb.radius * 0.3) orb.vy *= -1;

        const g = ctx.createRadialGradient(orb.x, orb.y, 0, orb.x, orb.y, orb.radius);
        g.addColorStop(0, `rgba(${orb.r}, ${orb.g}, ${orb.b}, ${orb.alpha})`);
        g.addColorStop(0.5, `rgba(${orb.r}, ${orb.g}, ${orb.b}, ${orb.alpha * 0.3})`);
        g.addColorStop(1, `rgba(${orb.r}, ${orb.g}, ${orb.b}, 0)`);

        ctx.beginPath();
        ctx.arc(orb.x, orb.y, orb.radius, 0, Math.PI * 2);
        ctx.fillStyle = g;
        ctx.fill();
      }

      // ==========================================
      // 2. Cursor spotlight glow
      // ==========================================
      if (mouse.x > 0) {
        const spotlight = ctx.createRadialGradient(mouse.x, mouse.y, 0, mouse.x, mouse.y, MOUSE_GLOW_RADIUS);
        spotlight.addColorStop(0, "rgba(167, 139, 250, 0.06)");
        spotlight.addColorStop(0.5, "rgba(124, 58, 237, 0.025)");
        spotlight.addColorStop(1, "rgba(0,0,0,0)");
        ctx.beginPath();
        ctx.arc(mouse.x, mouse.y, MOUSE_GLOW_RADIUS, 0, Math.PI * 2);
        ctx.fillStyle = spotlight;
        ctx.fill();
      }

      // ==========================================
      // 3. Particle connections
      // ==========================================
      for (let i = 0; i < particles.length; i++) {
        for (let j = i + 1; j < particles.length; j++) {
          const a = particles[i];
          const b = particles[j];

          // Only connect same/adjacent layers
          if (Math.abs(a.layer - b.layer) > 1) continue;

          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dist = Math.hypot(dx, dy);
          if (dist > CONNECT_DIST) continue;

          // Proximity to mouse brightens the line
          const midX = (a.x + b.x) / 2;
          const midY = (a.y + b.y) / 2;
          const mdist = Math.hypot(midX - mouse.x, midY - mouse.y);
          const mouseFactor = Math.max(0, 1 - mdist / (MOUSE_GLOW_RADIUS * 1.2));

          const baseOpacity = (1 - dist / CONNECT_DIST) * 0.12;
          const finalOpacity = baseOpacity + mouseFactor * 0.28;

          ctx.beginPath();
          ctx.moveTo(a.x, a.y);
          ctx.lineTo(b.x, b.y);
          ctx.strokeStyle = `rgba(167, 139, 250, ${Math.min(finalOpacity, 0.55)})`;
          ctx.lineWidth = a.layer === 1 ? 0.9 : 0.4;
          ctx.stroke();
        }

        // Mouse connections (foreground particles only)
        const p = particles[i];
        if (p.layer === 1) {
          const mdx = p.x - mouse.x;
          const mdy = p.y - mouse.y;
          const mDist = Math.hypot(mdx, mdy);
          if (mDist < CONNECT_DIST * 1.6) {
            const opacity = (1 - mDist / (CONNECT_DIST * 1.6)) * 0.6;
            ctx.beginPath();
            ctx.moveTo(p.x, p.y);
            ctx.lineTo(mouse.x, mouse.y);
            ctx.strokeStyle = `rgba(200, 160, 255, ${opacity})`;
            ctx.lineWidth = 1;
            ctx.stroke();
          }
        }
      }

      // ==========================================
      // 4. Particles
      // ==========================================
      for (const p of particles) {
        // Mouse repel
        const dx = p.x - mouse.x;
        const dy = p.y - mouse.y;
        const dist = Math.hypot(dx, dy);
        if (dist < MOUSE_REPEL && dist > 0) {
          const force = (MOUSE_REPEL - dist) / MOUSE_REPEL;
          p.vx += (dx / dist) * force * 0.45;
          p.vy += (dy / dist) * force * 0.45;
        }

        // Speed cap per layer
        const maxSpeed = p.layer === 1 ? 1.8 : 0.6;
        const speed = Math.hypot(p.vx, p.vy);
        if (speed > maxSpeed) {
          p.vx = (p.vx / speed) * maxSpeed;
          p.vy = (p.vy / speed) * maxSpeed;
        }

        // Friction
        p.vx *= p.layer === 1 ? 0.98 : 0.995;
        p.vy *= p.layer === 1 ? 0.98 : 0.995;

        p.x += p.vx;
        p.y += p.vy;

        // Wrap
        if (p.x < 0) p.x = W();
        if (p.x > W()) p.x = 0;
        if (p.y < 0) p.y = H();
        if (p.y > H()) p.y = 0;

        // Proximity to cursor boosts particle brightness
        const particleDist = Math.hypot(p.x - mouse.x, p.y - mouse.y);
        const brightBoost = Math.max(0, 1 - particleDist / MOUSE_GLOW_RADIUS) * 0.6;
        const finalOpacity = Math.min(p.opacity + brightBoost, 0.95);

        // Foreground particles get a subtle glow
        if (p.layer === 1 && brightBoost > 0.1) {
          ctx.beginPath();
          ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
          const glowGrad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
          glowGrad.addColorStop(0, `rgba(167, 139, 250, ${brightBoost * 0.3})`);
          glowGrad.addColorStop(1, "rgba(167,139,250,0)");
          ctx.fillStyle = glowGrad;
          ctx.fill();
        }

        // Core dot
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        // Slightly shift hue: foreground = violet, bg = deeper indigo
        const r = p.layer === 1 ? 167 : 100;
        const g = p.layer === 1 ? 139 : 90;
        const b = p.layer === 1 ? 250 : 220;
        ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${finalOpacity})`;
        ctx.fill();
      }

      animId = requestAnimationFrame(drawFrame);
    };

    resize();
    initOrbs();
    initParticles();
    drawFrame();

    const onResize = () => { resize(); initOrbs(); initParticles(); };
    window.addEventListener("resize", onResize);
    window.addEventListener("mousemove", onMouseMove, { passive: true });
    window.addEventListener("mouseleave", onMouseLeave);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener("resize", onResize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        pointerEvents: "none",
        zIndex: 0,
      }}
    />
  );
}
