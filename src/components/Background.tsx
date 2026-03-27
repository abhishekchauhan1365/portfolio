"use client";

import { useEffect, useRef } from "react";

export default function Background() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animId: number;
    let t = 0;
    
    // Config
    const GRID_SIZE = 60;
    const SCANNER_SPEED = 2.5;
    const LASER_OPACITY = 0.15;
    
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", resize);
    resize();

    const drawGrid = () => {
      // Logic moved to CSS background on the wrapper for performance
    };

    const drawScanner = () => {
      const scanY = (t * SCANNER_SPEED) % canvas.height;
      
      const grad = ctx.createLinearGradient(0, scanY - 50, 0, scanY);
      grad.addColorStop(0, "transparent");
      grad.addColorStop(1, `rgba(124, 58, 237, ${LASER_OPACITY})`);
      
      ctx.fillStyle = grad;
      ctx.fillRect(0, scanY - 50, canvas.width, 50);

      // Scanning line
      ctx.strokeStyle = `rgba(167, 139, 250, ${LASER_OPACITY * 2})`;
      ctx.lineWidth = 1;
      ctx.beginPath();
      ctx.moveTo(0, scanY);
      ctx.lineTo(canvas.width, scanY);
      ctx.stroke();
    };

    const drawHolographicLayer = () => {
       // Subtle drifting code fragments
       const scale = 0.5;
       ctx.font = `${10 * scale}px monospace`;
       ctx.fillStyle = "rgba(124, 58, 237, 0.1)";
       
       for (let i = 0; i < 5; i++) {
          const x = (t * (10 + i) * 0.1) % canvas.width;
          const y = ((i * 200) + (t * 0.5)) % canvas.height;
          ctx.fillText(`SYSTEM_NODE_0${i} // [STABLE]`, x, y);
       }
    };

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Background gradient
      const bgGrad = ctx.createRadialGradient(
        canvas.width / 2, canvas.height / 2, 0,
        canvas.width / 2, canvas.height / 2, canvas.width
      );
      bgGrad.addColorStop(0, "rgba(8, 8, 28, 1)");
      bgGrad.addColorStop(1, "rgb(2, 3, 10)");
      ctx.fillStyle = bgGrad;
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      drawGrid();
      drawScanner();
      drawHolographicLayer();

      t++;
      animId = requestAnimationFrame(render);
    };

    render();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        backgroundImage: 'linear-gradient(rgba(124, 58, 237, 0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(124, 58, 237, 0.04) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
      }}
    >
      <canvas
        ref={canvasRef}
        style={{
          width: "100%",
          height: "100%",
        }}
      />
    </div>
  );
}