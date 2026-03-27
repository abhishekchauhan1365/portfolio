"use client";

import React, { useState, useEffect, useRef, useMemo } from 'react';
import { motion, useInView } from 'framer-motion';
import Magnet from './Magnet';

export default function HeroSection() {
  const [uptime, setUptime] = useState("00:00:00:00");
  const heroRef = useRef<HTMLElement | null>(null);
  const dashRef = useRef(null);
  const heroInView = useInView(heroRef, { once: false, amount: 0.1 });
  const dashInView = useInView(dashRef, { once: false, amount: 0.1 });
  
  // Spotlight effect
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect();
    if (!rect) return;
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    setMousePos({ x, y });
    if (heroRef.current) {
      heroRef.current.style.setProperty("--mouse-x", `${x}px`);
      heroRef.current.style.setProperty("--mouse-y", `${y}px`);
    }
  };

  // Uptime ticker
  useEffect(() => {
    const startTime = new Date('2024-01-01T00:00:00').getTime();
    const timer = setInterval(() => {
      const now = Date.now();
      const diff = now - startTime;
      const d = Math.floor(diff / (1000 * 60 * 60 * 24));
      const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
      const s = Math.floor((diff % (1000 * 60)) / 1000);
      setUptime(`${d.toString().padStart(3, '0')}:${h.toString().padStart(2, '0')}:${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`);
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  // Dashboard Data
  const stats = useMemo(() => [
    { label: "DSA Mastery", value: "400+", note: "+28 solve velocity", color: "#8b5cf6" },
    { label: "Medium Solved", value: "312", note: "efficient", color: "#2dd4bf" },
    { label: "Hard Conquered", value: "18", note: "top tier", color: "#f59e0b" },
    { label: "Rating", value: "1,519", note: "top 38.7%", color: "#60a5fa" },
  ], []);

  const commitGridData = useMemo(() => 
    Array.from({ length: 52 }, () => 
      Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
    ), []
  );

  const logItems = useMemo(() => [
    { label: "Solved: Trapping Rain Water (Hard)", time: "2m ago", color: "#2dd4bf" },
    { label: "Push: feat/auth → main", time: "1h ago", color: "#8b5cf6" },
    { label: "Award: Oracle DevOps Pro", time: "3d ago", color: "#f59e0b" },
    { label: "Solved: LRU Cache (Med)", time: "4d ago", color: "#2dd4bf" },
  ], []);

  return (
    <>
      <section 
        className="hero-top" 
        ref={heroRef} 
        onMouseMove={handleMouseMove}
      >
        <div className="hero-orb hero-orb-1" />
        <div className="hero-orb hero-orb-2" />
        <div className="hero-orb hero-orb-3" />
        <div className="ht-grid-overlay" />
        <div className="ht-spotlight" />
        <div className="ht-bg-text">ENGINEER</div>

        <div className="hero-code-snippet" aria-hidden="true">
          <pre><code>{`> npx create-portfolio
\u2713 Abhishek Singh Chauhan
\u2713 Full-Stack Engineer
\u2713 400+ DSA Problems
\u2713 System Architect`}</code></pre>
        </div>

        <motion.div
          className="ht-main-layout"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        >
          <div className="ht-left-pillar">
            <div className="ht-pillar-block">
              <span className="ht-p-label">GEOGRAPHIC_LOC</span>
              <span className="ht-p-val">Kanpur, UP, India</span>
            </div>
            <div className="ht-pillar-block">
              <span className="ht-p-label">STATUS</span>
              <div className="ht-status-line">
                <span className="ht-s-dot pulse" />
                <span className="ht-s-text">OPEN_FOR_OPPORTUNITIES</span>
              </div>
            </div>
            <div className="ht-pillar-block">
              <span className="ht-p-label">CORE_STACK</span>
              <span className="ht-p-val">TypeScript • React • Node</span>
            </div>
          </div>

          <div className="ht-central-block">
            <div className="ht-spec-float">BUILD_ID_MAR_27_2026 // SYSTEM_STABLE</div>
            
            <h1 className="ht-massive-title">
              <span className="ht-t-top">ABHISHEK</span>
              <span className="ht-t-mid">SINGH CHAUHAN</span>
            </h1>

            <div className="ht-telemetry-wrap">
              <div className="ht-tel-line" />
              <div className="ht-tel-content">
                <span className="ht-tel-item">CPU_LOAD: 12%</span>
                <span className="ht-tel-sep" />
                <span className="ht-tel-item">MEMORY_USAGE: 1.2GB</span>
                <span className="ht-tel-sep" />
                <span className="ht-tel-item">LATENCY: 14MS</span>
                <span className="ht-tel-sep" />
                <span className="ht-tel-item">ENGINE_READY: TRUE</span>
              </div>
              <div className="ht-tel-line" />
            </div>

            <div className="ht-central-metrics">
              <div className="ht-cm-item">
                <span className="ht-cm-l">ROLE</span>
                <span className="ht-cm-v">ENGINEER</span>
              </div>
              <div className="ht-cm-sep" />
              <div className="ht-cm-item">
                <span className="ht-cm-l">CORE</span>
                <span className="ht-cm-v">FULL-STACK</span>
              </div>
            </div>

            <p className="ht-central-tagline">
              Architecting resilient systems where <strong>precision engineering</strong> meets <strong>visionary design</strong>.
            </p>

            <div className="ht-central-ctas">
              <Magnet padding={60} magnetStrength={3}>
                <a href="#projects" className="ht-btn-primary interactive">
                  <span>VIEW_WORK_V4</span>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </a>
              </Magnet>
              <a href="#contact" className="ht-btn-ghost interactive">INIT_CON</a>
            </div>
          </div>

          <div className="ht-right-pillar">
            <Magnet padding={100} magnetStrength={2}>
              <div className="ht-circle-frame-v2">
                <img src="/abhishek-photo.png" alt="Abhishek" onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Abhishek&background=7c3aed&color=fff&size=200`; }} />
                <div className="ht-portrait-glow" />
              </div>
            </Magnet>
            <div className="ht-pillar-stats">
              <div className="ht-ps-item">
                <span className="ht-ps-label">UPTIME</span>
                <span className="ht-ps-val">{uptime}</span>
              </div>
              <div className="ht-ps-item">
                <span className="ht-ps-label">DSA_INDEX</span>
                <span className="ht-ps-val">400+ SOLVED</span>
              </div>
            </div>
          </div>
        </motion.div>

        <div className="ht-diag-feed">
          <span className="ht-diag-entry">LINK_STATUS: ENCRYPTED</span>
          <span className="ht-diag-entry">DATA_RATE: 1.2 GB/S</span>
        </div>

        <div className="ht-scroll-cue">
          <div className="ht-sc-line" />
          <span className="ht-sc-text">DASHBOARD // ANALYSIS</span>
        </div>
      </section>

      <section className="dashboard-section" ref={dashRef}>
        <div className="dash-label-row">
          <span className="dash-eyebrow">● SYSTEM ANALYSIS</span>
          <div className="dash-divider" />
        </div>

        <motion.div
          className="dash-container"
          initial={{ opacity: 0, scale: 0.98 }}
          animate={dashInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 0.8 }}
        >
          <aside className="dash-sidebar">
            <div className="dash-logo-box">
              <div className="dash-logo-icon">⏟</div>
              <div className="dash-logo-text">
                <span className="dash-logo-main">SYSTEM</span>
                <span className="dash-logo-sub">Production</span>
              </div>
            </div>
            <nav className="dash-nav">
              <div className="dash-nav-item active">⊞ Dashboard</div>
              <div className="dash-nav-item">❏ Projects</div>
              <div className="nav-group-label">Analysis</div>
              <div className="dash-nav-item">⋄ LeetCode</div>
              <div className="dash-nav-item">❏ GitHub</div>
            </nav>
            <div className="dash-sidebar-footer">
              <div className="footer-stat"><span>Latency</span><span>14ms</span></div>
              <div className="footer-stat"><span>Uptime</span><span>{uptime.slice(0, 8)}</span></div>
            </div>
          </aside>

          <main className="dash-main">
            <header className="dash-header"><h2 className="dash-title">Overview</h2></header>
            <div className="dash-flow">
              <div className="dash-metrics-grid">
                {stats.map((s) => (
                  <div key={s.label} className="dash-tile">
                    <span className="tile-label">{s.label}</span>
                    <span className="tile-val" style={{ color: s.color }}>{s.value}</span>
                    <span className="tile-note">{s.note}</span>
                  </div>
                ))}
                <div className="dash-tile dash-skill-tile">
                  <span className="tile-label">CORE_SKILLSET</span>
                  <div className="skill-spread">
                    <span className="s-node">React</span>
                    <span className="s-node">Next.js</span>
                    <span className="s-node">Node</span>
                    <span className="s-node">TS</span>
                  </div>
                </div>
              </div>
              <div className="dash-row">
                <div className="dash-card dash-activity">
                  <h3 className="card-title">Live Feed</h3>
                  <ul className="log-list">
                    {logItems.map((item, i) => (
                      <li key={i} className="log-item">
                        <span className="log-dot" style={{ background: item.color }} />
                        <span className="log-text">{item.label}</span>
                        <span className="log-time">{item.time}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="dash-card dash-heat">
                  <h3 className="card-title">Commit Flux</h3>
                  <div className="heat-grid">
                    {commitGridData.slice(0, 32).map((week, wi) => (
                      <div key={wi} className="heat-week">
                        {week.map((val, di) => (
                          <div key={di} className="heat-cell" style={{ background: `rgba(139, 92, 246, ${val * 0.2})` }} />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <footer className="dash-footer">
              <div className="footer-brand">🌐 112 Solved Solutions</div>
              <div className="dash-search-box"><span>⌕</span><input type="text" placeholder="Search Analysis" disabled /></div>
            </footer>
          </main>
        </motion.div>
      </section>

      <style>{`
        .hero-top { position: relative; min-height: 100vh; display: flex; flex-direction: column; align-items: center; justify-content: center; padding: 6rem 2rem; overflow: hidden; background-color: #02020a; }
        .hero-orb { position: absolute; border-radius: 50%; filter: blur(120px); opacity: 0.15; pointer-events: none; }
        .hero-orb-1 { width: 500px; height: 500px; top: -150px; left: -150px; background: #8b5cf6; }
        .hero-orb-2 { width: 400px; height: 400px; bottom: -100px; right: -100px; background: #2dd4bf; }
        .hero-orb-3 { width: 300px; height: 300px; top: 50%; left: 50%; background: #f59e0b; opacity: 0.1; }

        .ht-grid-overlay { position: absolute; inset: 0; pointer-events: none; z-index: 1; background-image: linear-gradient(rgba(139, 92, 246, 0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(139, 92, 246, 0.08) 1px, transparent 1px); background-size: 50px 50px; }
        .ht-spotlight { position: absolute; width: 600px; height: 600px; background: radial-gradient(circle, rgba(139, 92, 246, 0.2) 0%, transparent 70%); border-radius: 50%; pointer-events: none; transform: translate(-50%, -50%); top: var(--mouse-y); left: var(--mouse-x); z-index: 1; opacity: 0.6; }

        .ht-bg-text { position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); font-size: 24vw; font-weight: 900; color: rgba(255, 255, 255, 0.006); white-space: nowrap; pointer-events: none; z-index: 0; }

        .hero-code-snippet { position: absolute; bottom: 8%; left: 5%; font-family: var(--font-geist-mono); font-size: 0.7rem; color: rgba(139, 92, 246, 0.4); background: rgba(0, 0, 0, 0.3); backdrop-filter: blur(8px); padding: 0.8rem 1.2rem; border-radius: 12px; border-left: 2px solid #8b5cf6; z-index: 10; }

        .ht-main-layout { display: flex; justify-content: space-between; align-items: center; gap: 3rem; width: 100%; max-width: 1200px; margin: 0 auto; position: relative; z-index: 2; }
        .ht-left-pillar { width: 260px; display: flex; flex-direction: column; gap: 2.5rem; align-items: flex-start; text-align: left; }
        .ht-central-block { flex: 1; display: flex; flex-direction: column; align-items: center; text-align: center; gap: 1.5rem; }
        .ht-right-pillar { width: 260px; display: flex; flex-direction: column; gap: 2.5rem; align-items: flex-end; text-align: right; }
        .ht-pillar-block { display: flex !important; flex-direction: column !important; gap: 0.4rem !important; }
        .ht-spec-float { font-family: var(--font-geist-mono); font-size: 0.65rem; color: rgba(139, 92, 246, 0.45); letter-spacing: 0.1em; margin-bottom: -0.5rem; }
        .ht-status-line { display: flex; align-items: center; gap: 0.5rem; }
        .ht-s-dot { width: 6px; height: 6px; border-radius: 50%; background: #2dd4bf; }
        .ht-s-dot.pulse { animation: ht-pulse 2s infinite; }
        @keyframes ht-pulse { 0% { box-shadow: 0 0 0 0 rgba(45, 212, 191, 0.4); } 70% { box-shadow: 0 0 0 6px rgba(45, 212, 191, 0); } 100% { box-shadow: 0 0 0 0 rgba(45, 212, 191, 0); } }
        .ht-s-text { font-family: var(--font-geist-mono); font-size: 0.6rem; color: #2dd4bf; }
        .ht-p-label { font-family: var(--font-geist-mono); font-size: 0.55rem; color: rgba(255, 255, 255, 0.2); letter-spacing: 0.1em; }
        .ht-p-val { font-size: 0.85rem; font-weight: 600; color: rgba(255, 255, 255, 0.8); }

        .ht-massive-title { font-size: clamp(3rem, 8vw, 5.8rem); font-weight: 950; line-height: 0.85; display: flex; flex-direction: column; align-items: center; }
        .ht-t-top { color: #fff; }
        .ht-t-mid { color: transparent; -webkit-text-stroke: 1.5px rgba(255, 255, 255, 0.3); }

        .ht-telemetry-wrap { display: flex; align-items: center; gap: 1.2rem; width: 100%; max-width: 580px; margin: 0.4rem auto; justify-content: center; }
        .ht-tel-line { flex: 1; height: 1px; background: linear-gradient(to right, transparent, rgba(139, 92, 246, 0.1), transparent); }
        .ht-tel-content { display: flex; gap: 1rem; align-items: center; justify-content: center; }
        .ht-tel-item { font-family: var(--font-geist-mono); font-size: 0.5rem; color: rgba(255, 255, 255, 0.15); }
        .ht-tel-sep { width: 3px; height: 3px; border-radius: 50%; background: rgba(255, 255, 255, 0.1); }

        .ht-central-metrics { display: flex; align-items: center; gap: 2rem; background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); padding: 0.5rem 1.8rem; border-radius: 100px; margin: 0 auto; }
        .ht-cm-item { display: flex; flex-direction: column; gap: 0.2rem; align-items: center; }
        .ht-cm-l { font-family: var(--font-geist-mono); font-size: 0.55rem; color: rgba(255, 255, 255, 0.2); }
        .ht-cm-v { font-size: 0.85rem; font-weight: 800; color: #fff; }
        .ht-cm-sep { width: 1px; height: 20px; background: rgba(255, 255, 255, 0.05); }

        .ht-central-tagline { font-size: 0.9rem; color: rgba(255, 255, 255, 0.4); max-width: 500px; text-align: center; line-height: 1.6; margin: 0 auto; }
        .ht-central-ctas { display: flex; align-items: center; gap: 1.5rem; margin-top: 1rem; }
        .ht-btn-primary { background: #8b5cf6; color: #fff; padding: 0.8rem 2rem; border-radius: 12px; font-weight: 900; text-decoration: none; font-size: 0.75rem; display: flex; align-items: center; gap: 0.8rem; box-shadow: 0 10px 20px -10px rgba(139, 92, 246, 0.5); }
        .ht-btn-ghost { color: rgba(255, 255, 255, 0.5); font-family: var(--font-geist-mono); font-size: 0.7rem; text-decoration: none; border: 1px solid rgba(255, 255, 255, 0.1); padding: 0.8rem 1.5rem; border-radius: 12px; transition: all 0.2s; }
        .ht-btn-ghost:hover { background: rgba(255, 255, 255, 0.05); color: #fff; border-color: rgba(255, 255, 255, 0.2); }

        .ht-circle-frame-v2 { width: 160px; height: 160px; border-radius: 50%; border: 1px solid rgba(139, 92, 246, 0.3); padding: 6px; position: relative; margin-bottom: 2rem; }
        .ht-circle-frame-v2 img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; filter: grayscale(1) contrast(1.1); }
        .ht-portrait-glow { position: absolute; inset: -10px; background: radial-gradient(circle, rgba(139, 92, 246, 0.15), transparent 70%); z-index: -1; }
        .ht-ps-item { display: flex; flex-direction: column; gap: 0.2rem; align-items: flex-end; margin-bottom: 1.5rem; }
        .ht-ps-label { font-family: var(--font-geist-mono); font-size: 0.55rem; color: rgba(255, 255, 255, 0.2); }
        .ht-ps-val { font-family: var(--font-geist-mono); font-size: 1.1rem; font-weight: 800; color: #8b5cf6; }

        .ht-diag-feed { position: absolute; bottom: 3rem; right: 3rem; display: flex; flex-direction: column; gap: 0.3rem; text-align: right; }
        .ht-diag-entry { font-family: var(--font-geist-mono); font-size: 0.5rem; color: rgba(255, 255, 255, 0.1); }
        .ht-scroll-cue { position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%); display: flex; flex-direction: column; align-items: center; gap: 0.8rem; }
        .ht-sc-line { width: 1px; height: 40px; background: linear-gradient(to bottom, #8b5cf6, transparent); }
        .ht-sc-text { font-family: var(--font-geist-mono); font-size: 0.55rem; color: rgba(255, 255, 255, 0.15); letter-spacing: 0.2em; }

        .dashboard-section { padding: 8rem 0; max-width: 1200px; margin: 0 auto; }
        .dash-label-row { display: flex; align-items: center; gap: 1.5rem; margin-bottom: 3rem; padding: 0 1.5rem; }
        .dash-eyebrow { font-family: var(--font-geist-mono); font-size: 0.7rem; color: #8b5cf6; font-weight: 800; letter-spacing: 0.1em; }
        .dash-divider { flex: 1; height: 1px; background: linear-gradient(90deg, rgba(139, 92, 246, 0.2), transparent); }
        .dash-container { display: flex; background: rgba(4, 4, 12, 0.6); backdrop-filter: blur(20px); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 24px; overflow: hidden; height: 500px; }
        .dash-sidebar { width: 220px; border-right: 1px solid rgba(255, 255, 255, 0.05); display: flex; flex-direction: column; }
        .dash-logo-box { padding: 2rem 1.5rem; display: flex; align-items: center; gap: 1rem; border-bottom: 1px solid rgba(255, 255, 255, 0.05); }
        .dash-logo-icon { width: 28px; height: 28px; background: #8b5cf6; border-radius: 6px; display: flex; align-items: center; justify-content: center; color: #fff; font-weight: 900; }
        .dash-logo-main { display: block; font-size: 0.8rem; font-weight: 900; color: #fff; letter-spacing: 0.05em; }
        .dash-logo-sub { font-size: 0.6rem; color: rgba(255, 255, 255, 0.3); }
        .dash-nav { padding: 1.5rem 0.8rem; flex: 1; }
        .dash-nav-item { padding: 0.7rem 1rem; border-radius: 10px; color: rgba(255, 255, 255, 0.4); font-size: 0.8rem; display: flex; align-items: center; gap: 0.8rem; transition: all 0.2s; cursor: pointer; }
        .dash-nav-item.active { background: rgba(139, 92, 246, 0.1); color: #8b5cf6; font-weight: 700; }
        .nav-group-label { padding: 1.5rem 1rem 0.5rem; font-size: 0.6rem; color: rgba(255, 255, 255, 0.2); text-transform: uppercase; font-weight: 800; letter-spacing: 0.1em; }
        .dash-sidebar-footer { padding: 1.5rem; border-top: 1px solid rgba(255, 255, 255, 0.05); }
        .footer-stat { display: flex; justify-content: space-between; font-size: 0.65rem; color: rgba(255, 255, 255, 0.2); margin-bottom: 0.5rem; }
        .dash-main { flex: 1; display: flex; flex-direction: column; padding: 2rem; overflow: hidden; }
        .dash-header { margin-bottom: 2rem; }
        .dash-title { font-size: 1.4rem; font-weight: 900; color: #fff; }
        .dash-flow { display: flex; flex-direction: column; gap: 1.25rem; flex: 1; overflow: hidden; }
        .dash-metrics-grid { display: grid; grid-template-columns: repeat(4, 1fr); gap: 1rem; }
        .dash-tile { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 16px; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.2rem; }
        .tile-label { font-size: 0.55rem; color: rgba(255, 255, 255, 0.25); font-weight: 800; text-transform: uppercase; }
        .tile-val { font-size: 1.25rem; font-weight: 900; }
        .tile-note { font-size: 0.6rem; color: rgba(255, 255, 255, 0.15); }
        .dash-skill-tile { grid-column: span 4; flex-direction: row; align-items: center; justify-content: space-between; }
        .skill-spread { display: flex; gap: 0.8rem; }
        .s-node { font-size: 0.65rem; font-weight: 700; color: #fff; background: rgba(255, 255, 255, 0.05); padding: 0.3rem 0.7rem; border-radius: 6px; }
        .dash-row { display: grid; grid-template-columns: 1.2fr 1fr; gap: 1rem; flex: 1; min-height: 0; }
        .dash-card { background: rgba(255, 255, 255, 0.02); border: 1px solid rgba(255, 255, 255, 0.05); border-radius: 20px; padding: 1.5rem; display: flex; flex-direction: column; overflow: hidden; }
        .card-title { font-size: 0.8rem; font-weight: 800; color: rgba(255, 255, 255, 0.3); text-transform: uppercase; margin-bottom: 1.25rem; letter-spacing: 0.05em; }
        .log-list { list-style: none; display: flex; flex-direction: column; gap: 0.8rem; flex: 1; overflow-y: auto; }
        .log-item { display: grid; grid-template-columns: 6px 1fr auto; align-items: center; gap: 1rem; font-size: 0.75rem; color: rgba(255, 255, 255, 0.6); }
        .log-dot { width: 5px; height: 5px; border-radius: 50%; }
        .log-time { color: rgba(255, 255, 255, 0.2); font-size: 0.65rem; }
        .heat-grid { display: flex; gap: 3px; }
        .heat-week { display: flex; flex-direction: column; gap: 3px; }
        .heat-cell { width: 11px; height: 11px; border-radius: 2px; }
        .dash-footer { margin-top: auto; padding-top: 1.5rem; display: flex; justify-content: space-between; align-items: center; border-top: 1px solid rgba(255, 255, 255, 0.05); }
        .footer-brand { font-size: 0.7rem; color: rgba(255, 255, 255, 0.2); font-weight: 700; }
        .dash-search-box { background: rgba(255, 255, 255, 0.03); border: 1px solid rgba(255, 255, 255, 0.05); padding: 0.4rem 0.8rem; border-radius: 8px; display: flex; align-items: center; gap: 0.5rem; }
        .dash-search-box span { color: rgba(255, 255, 255, 0.2); font-size: 0.8rem; }
        .dash-search-box input { background: transparent; border: none; outline: none; color: #fff; font-size: 0.7rem; width: 120px; }

        @media (max-width: 1150px) {
          .ht-main-layout { flex-direction: column; text-align: center; gap: 3rem; }
          .ht-left-pillar, .ht-right-pillar { width: 100%; align-items: center; text-align: center; }
          .ht-ps-item { align-items: center; }
        }
        @media (max-width: 900px) {
          .dash-sidebar { display: none; }
          .dash-metrics-grid { grid-template-columns: repeat(2, 1fr); }
          .dash-skill-tile { grid-column: span 2; }
          .dash-row { grid-template-columns: 1fr; }
        }
      `}</style>
    </>
  );
}