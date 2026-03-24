"use client";

import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";

// ── Dashboard data ────────────────────────────────────────────────
const generateGrid = () =>
  Array.from({ length: 52 }, () =>
    Array.from({ length: 7 }, () => Math.floor(Math.random() * 5))
  );
const commitGrid = generateGrid();
const barData = [12, 28, 18, 42, 35, 55, 40, 68, 52, 78, 60, 85, 70, 92, 65, 80, 58, 75, 88, 95, 72, 84, 66, 90, 78];
const logItems = [
  { label: "Solved: Trapping Rain Water (Hard)", time: "2m ago",  color: "52, 211, 153" },
  { label: "Push: feat/auth-middleware → main",  time: "1h ago",  color: "96, 165, 250" },
  { label: "Earned: Oracle Cloud DevOps Pro",    time: "3d ago",  color: "251, 191, 36" },
  { label: "Solved: LRU Cache (Medium)",         time: "4d ago",  color: "52, 211, 153" },
  { label: "Push: refactor/job-queue-system",    time: "5d ago",  color: "96, 165, 250" },
];
const sideItems = [
  { label: "Overview",   icon: "⊞", active: true,  href: "#home" },
  { label: "Projects",   icon: "◫", href: "#projects" },
  { label: "Skills",     icon: "◈", href: "#skills" },
  { label: "Experience", icon: "◉", href: "#experience" },
  { label: "Contact",    icon: "◎", href: "#contact" },
];
type HeatLevel = 0 | 1 | 2 | 3 | 4;
const heatColor = (v: HeatLevel) =>
  ["rgba(255,255,255,0.04)", "rgba(124,58,237,0.2)", "rgba(124,58,237,0.45)", "rgba(124,58,237,0.7)", "rgba(167,139,250,0.95)"][Math.min(v, 4)];

export default function HeroSection() {
  const heroRef = useRef<HTMLElement | null>(null);
  const dashRef = useRef(null);
  const heroInView = useInView(heroRef, { once: true });
  const dashInView  = useInView(dashRef,  { once: true, margin: "-80px" });
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setTick((t) => t + 1), 1000);
    return () => clearInterval(id);
  }, []);

  const uptime = `${String(Math.floor(tick / 3600)).padStart(2, "0")}:${String(Math.floor((tick % 3600) / 60)).padStart(2, "0")}:${String(tick % 60).padStart(2, "0")}`;

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = "https://drive.google.com/uc?export=download&id=1ARjP22qSJD6hS1e7-RfpVUh9ex5Dq7PB";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (!heroRef.current) return;
    const rect = heroRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    heroRef.current.style.setProperty("--mouse-x", `${x}px`);
    heroRef.current.style.setProperty("--mouse-y", `${y}px`);
  };

  return (
    <>
      {/* ════════════════════════════════════════════════════════
          PART 1 — Premium Hero Section
      ════════════════════════════════════════════════════════ */}
      <section id="home" ref={heroRef} className="hero-top" onMouseMove={handleMouseMove}>

        {/* Massive Background Typography Watermark (Subtler) */}
        <div className="ht-bg-text">ENGINEER</div>

        {/* Ambient glows for massive atmospheric depth (filling the void) */}
        <div className="ht-glow ht-glow-1" />
        <div className="ht-glow ht-glow-2" />
        <div className="ht-glow ht-glow-3" />
        
        {/* Interactive Mouse Spotlight */}
        <div className="ht-spotlight" />

        {/* Fine-line grid backdrop (enriched) */}
        <div className="ht-grid-overlay" />

        {/* Decorative Background Code */}
        <div className="ht-bg-code" aria-hidden="true">
          <pre>
            <code>{`const developer = require('abhishek');
            
developer.initialize({
  role: "Full-Stack Engineer",
  skills: ["TypeScript", "React", "Node", "PostgreSQL"],
  status: "Available for new opportunities"
});

await developer.deploy();`}</code>
          </pre>
        </div>

        {/* ── Two-column layout ─────────────────────────────── */}
        <motion.div
          className="ht-two-col"
          initial={{ opacity: 0, y: 30 }}
          animate={heroInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >

          {/* Left: highly structured text block */}
          <div className="ht-text-col">
            
            <motion.div
              className="ht-badge"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={heroInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.15, duration: 0.4 }}
            >
              <span className="ht-badge-dot" />
              Available for opportunities
            </motion.div>

            <div className="ht-titles">
              <h1 className="ht-name">
                <span className="ht-name-accent">Abhishek</span>
              </h1>
              <p className="ht-role">
                Singh Chauhan · Full-Stack Engineer <br className="ht-role-br" />
                <span className="ht-role-sub">DSA Enthusiast · B.Tech @ LPU</span>
              </p>
            </div>

            <p className="ht-tagline">
              I build production-grade software — from resilient backend systems
              to polished user interfaces — with a deep focus on algorithmic efficiency.
            </p>

            <div className="ht-ctas">
              <a href="#projects" className="ht-btn-primary interactive">
                View Projects
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1ARjP22qSJD6hS1e7-RfpVUh9ex5Dq7PB/view"
                target="_blank"
                onClick={handleDownload}
                className="ht-btn-secondary interactive"
              >
                Download CV
              </a>
              <a href="https://github.com/abhishekchauhan1365" target="_blank" rel="noopener noreferrer" className="ht-btn-secondary interactive" style={{ padding: "0.65rem 1rem" }}>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path fillRule="evenodd" clipRule="evenodd" d="M12 2C6.477 2 2 6.477 2 12c0 4.42 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.008-.866-.013-1.7-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.464-1.11-1.464-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.831.092-.646.35-1.086.636-1.336-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0112 6.844c.85.004 1.705.114 2.504.336 1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.161 22 16.418 22 12c0-5.523-4.477-10-10-10z"/>
                </svg>
                <span style={{ fontSize: "0.9rem", fontWeight: 600, marginLeft: "0.3rem" }}>GitHub</span>
              </a>
            </div>

            {/* Added Content: Tech Stack Snapshot */}
            <div className="ht-tech-stack-row">
              <span className="ht-tech-row-label">Core Tech:</span>
              <div className="ht-tech-chips">
                {["TypeScript", "React", "Node.js", "Express", "MongoDB", "MySQL"].map(tech => (
                  <span key={tech} className="ht-tchip">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Circular Portrait with orbiting floating chips */}
          <motion.div
            className="ht-image-col"
            initial={{ opacity: 0, x: 30, scale: 0.98 }}
            animate={heroInView ? { opacity: 1, x: 0, scale: 1 } : {}}
            transition={{ delay: 0.3, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            {/* Floating Stat Chips moved here to orbit the image safely */}
            {[
              { label: "LeetCode",   value: "1,519",   top: "-8%",  left: "-18%", delay: 0 },
              { label: "CGPA",       value: "8.31",    bottom: "8%", left: "-22%", delay: 1.5 },
              { label: "Problems",   value: "400+",    top: "12%",  right: "-22%", delay: 0.8 },
              { label: "Max Streak", value: "55 Days", bottom: "-5%", right: "-12%", delay: 2.2 },
            ].map((chip, i) => (
              <motion.div
                key={i}
                className="ht-orbit-chip"
                style={{ top: chip.top, left: chip.left, bottom: chip.bottom, right: chip.right }}
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 6 + i, repeat: Infinity, delay: chip.delay, ease: "easeInOut" }}
              >
                <div className="ht-chip-dot" />
                <div>
                  <span className="ht-chip-l">{chip.label}</span>
                  <span className="ht-chip-v">{chip.value}</span>
                </div>
              </motion.div>
            ))}

            <div className="ht-circle-frame">
              <img
                src="/abhishek-photo.png"
                alt="Abhishek Singh Chauhan"
                className="ht-circle-img"
                onError={(e) => {
                  (e.target as HTMLImageElement).src =
                    "https://ui-avatars.com/api/?name=Abhishek+Singh+Chauhan&background=7c3aed&color=fff&size=500";
                }}
              />
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll cue */}
        <motion.div
          className="ht-scroll-cue"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            <path d="M12 5v14"/><path d="m19 12-7 7-7-7"/>
          </svg>
        </motion.div>
      </section>

      {/* ════════════════════════════════════════════════════════
          PART 2 — Developer Dashboard
      ════════════════════════════════════════════════════════ */}
      <section className="hero-dashboard" ref={dashRef}>
        <div className="hd-label-row">
          <span className="hd-eyebrow">Developer Overview</span>
          <div className="hd-divider" />
        </div>

        <motion.div
          className="dashboard-shell"
          initial={{ opacity: 0, y: 40, scale: 0.98 }}
          animate={dashInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        >
          {/* Sidebar */}
          <aside className="db-sidebar">
            <div className="db-identity">
              <img
                src="/abhishek-photo.png"
                alt="Abhishek"
                className="db-avatar"
                onError={(e) => { (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=Abhishek&background=7c3aed&color=fff&size=64`; }}
              />
              <div>
                <span className="db-name">Abhishek S.C.</span>
                <span className="db-role-tag">
                  <span className="db-dot" />
                  Open to Work
                </span>
              </div>
            </div>

            <nav className="db-nav">
              {sideItems.map((item) => (
                <a key={item.label} href={item.href} className={`db-nav-item interactive ${item.active ? "db-nav-active" : ""}`}>
                  <span className="db-nav-icon">{item.icon}</span>
                  {item.label}
                </a>
              ))}
            </nav>

            <div className="db-footer">
              {[
                { key: "Uptime",   val: uptime, mono: true },
                { key: "Status",   val: "Online", green: true },
                { key: "Location", val: "India 🇮🇳" },
              ].map((r) => (
                <div key={r.key} className="db-meta-row">
                  <span className="db-meta-k">{r.key}</span>
                  <span className="db-meta-v" style={{ color: r.green ? "#34d399" : undefined, fontFamily: r.mono ? "var(--font-geist-mono)" : undefined }}>{r.val}</span>
                </div>
              ))}
            </div>
          </aside>

          {/* Main panel */}
          <div className="db-main">
            {/* Metric tiles */}
            <div className="db-metrics">
              {[
                { label: "DSA Problems", value: "400+",  note: "+28 this month",  color: "167, 139, 250" },
                { label: "2XX Solved",   value: "382",   note: "Easy + Medium",   color: "52, 211, 153"  },
                { label: "Hard Solved",  value: "18",    note: "Top difficulty",  color: "251, 191, 36"  },
                { label: "Rating",       value: "1,519", note: "Top 38.7% global",color: "96, 165, 250"  },
              ].map((m, i) => (
                <motion.div key={m.label} className="db-tile"
                  initial={{ opacity: 0, y: 10 }}
                  animate={dashInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.2 + i * 0.08 }}
                >
                  <span className="db-tile-label">{m.label}</span>
                  <span className="db-tile-value" style={{ color: `rgb(${m.color})` }}>{m.value}</span>
                  <span className="db-tile-note">{m.note}</span>
                </motion.div>
              ))}
            </div>

            {/* Chart + Log */}
            <div className="db-row">
              {/* Bar chart */}
              <div className="db-card db-chart-card">
                <div className="db-card-head">
                  <div>
                    <span className="db-card-title">Algorithmic Activity</span>
                    <span className="db-card-sub">problems solved · past 30 days</span>
                  </div>
                  <div style={{ display: "flex", gap: "0.6rem" }}>
                    {[["Med","167,139,250"],["Easy","52,211,153"],["Hard","251,191,36"]].map(([l, c]) => (
                      <span key={l} className="db-legend" style={{ background: `rgba(${c},0.12)`, color: `rgb(${c})` }}>{l}</span>
                    ))}
                  </div>
                </div>
                <div className="db-bars">
                  {barData.map((v, i) => (
                    <div key={i} className="db-bar-col">
                      <motion.div className="db-seg db-seg-med" style={{ height: `${v * 0.5}%` }}
                        initial={{ scaleY: 0 }} animate={dashInView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.4 + i * 0.018, duration: 0.4, ease: "easeOut" }}
                        whileHover={{ opacity: 1 }}
                      />
                      <motion.div className="db-seg db-seg-easy" style={{ height: `${v * 0.35}%` }}
                        initial={{ scaleY: 0 }} animate={dashInView ? { scaleY: 1 } : {}}
                        transition={{ delay: 0.42 + i * 0.018, duration: 0.4, ease: "easeOut" }}
                      />
                      {v > 60 && (
                        <motion.div className="db-seg db-seg-hard" style={{ height: `${v * 0.15}%` }}
                          initial={{ scaleY: 0 }} animate={dashInView ? { scaleY: 1 } : {}}
                          transition={{ delay: 0.44 + i * 0.018, duration: 0.4, ease: "easeOut" }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Activity log */}
              <div className="db-card db-log-card">
                <span className="db-card-title">Recent Activity</span>
                <span className="db-card-sub" style={{ marginBottom: "0.85rem", display: "block" }}>live feed</span>
                <ol className="db-log-list">
                  {logItems.map((item, i) => (
                    <motion.li key={i} className="db-log-item"
                      initial={{ opacity: 0, x: 10 }}
                      animate={dashInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ delay: 0.4 + i * 0.09 }}
                    >
                      <span className="db-log-dot" style={{ background: `rgb(${item.color})` }} />
                      <span className="db-log-label">{item.label}</span>
                      <span className="db-log-time">{item.time}</span>
                    </motion.li>
                  ))}
                </ol>
              </div>
            </div>

            {/* Heatmap + CTA */}
            <div className="db-card db-heat-card">
              <div className="db-card-head" style={{ marginBottom: "0.75rem" }}>
                <span className="db-card-title">Contribution Graph</span>
                <span className="db-card-sub">52 weeks</span>
              </div>
              <div className="db-heatmap">
                {commitGrid.map((week, wi) => (
                  <div key={wi} className="db-heat-week">
                    {week.map((val, di) => (
                      <div key={di} className="db-heat-cell" style={{ background: heatColor(val as HeatLevel) }} />
                    ))}
                  </div>
                ))}
              </div>
              <div className="db-heat-cta">
                <p className="db-heat-headline">
                  B.Tech CSE · CGPA <strong>8.31</strong> · LPU · Full-Stack &amp; DSA
                </p>
                <div style={{ display: "flex", gap: "0.6rem", flexWrap: "wrap" }}>
                  <a href="#projects" className="ht-btn-primary interactive" style={{ padding: "0.45rem 1.1rem", fontSize: "0.8rem" }}>View Projects →</a>
                  <a href="https://leetcode.com/u/abhisheksinghchauhan1365" target="_blank" className="ht-btn-ghost interactive">LeetCode ↗</a>
                  <a href="https://github.com/abhishekchauhan1365" target="_blank" className="ht-btn-ghost interactive">GitHub ↗</a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* ── All styles ────────────────────────────────────── */}
      <style>{`

        /* ══ PART 1: Hero top ════════════════════════════════ */
        .hero-top {
          position: relative;
          min-height: 100vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          padding: 6rem 1.5rem 4rem;
          overflow: hidden;
          background-color: var(--background);
          --mouse-x: 50vw;
          --mouse-y: 50vh;
        }

        /* Ambient super-glows */
        .ht-glow {
          position: absolute; border-radius: 50%; pointer-events: none; filter: blur(150px); opacity: 0.9; z-index: 0;
        }
        .ht-glow-1 { width: 800px; height: 800px; top: -20%; left: -10%; background: rgba(124,58,237,0.15); }
        .ht-glow-2 { width: 700px; height: 700px; bottom: -10%; right: -10%; background: rgba(79,70,229,0.12); }
        .ht-glow-3 { width: 900px; height: 600px; top: 30%; left: 20%; background: rgba(167,139,250,0.04); filter: blur(200px); }

        /* Subtle Grain Effect */
        .hero-top::before {
          content: "";
          position: absolute; inset: 0;
          background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E");
          opacity: 0.015;
          pointer-events: none;
          z-index: 1;
        }

        /* Massive Faded Typography Watermark */
        .ht-bg-text {
          position: absolute;
          top: 50%; left: 50%; transform: translate(-50%, -50%);
          font-size: 24vw;
          font-weight: 900;
          color: rgba(255, 255, 255, 0.008); /* Even subtler */
          white-space: nowrap;
          pointer-events: none;
          z-index: 0;
          letter-spacing: -0.05em;
          user-select: none;
        }

        .ht-spotlight {
          position: absolute;
          width: 800px; height: 800px;
          background: radial-gradient(circle, rgba(167,139,250,0.12) 0%, transparent 65%);
          border-radius: 50%;
          pointer-events: none;
          transform: translate(-50%, -50%);
          top: var(--mouse-y); left: var(--mouse-x);
          z-index: 1;
          opacity: 0;
          transition: opacity 0.5s ease;
        }
        .hero-top:hover .ht-spotlight { opacity: 1; }

        .ht-grid-overlay {
          position: absolute; inset: 0; pointer-events: none; z-index: 0;
          background-image: linear-gradient(rgba(167,139,250,0.05) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(167,139,250,0.05) 1px, transparent 1px);
          background-size: 60px 60px;
          mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
          -webkit-mask-image: radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%);
        }

        @media (pointer: fine) {
          .ht-grid-overlay {
            mask-image: radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), black 40%, transparent 100%);
            -webkit-mask-image: radial-gradient(circle 600px at var(--mouse-x) var(--mouse-y), black 40%, transparent 100%);
          }
        }

        /* Decorative BG Code */
        .ht-bg-code {
          position: absolute;
          top: 20%; right: 4%;
          transform: rotate(3deg);
          font-family: var(--font-geist-mono);
          font-size: 0.9rem;
          color: rgba(167,139,250,0.15);
          pointer-events: none;
          z-index: 0;
          white-space: pre-wrap;
          line-height: 1.6;
          user-select: none;
          text-shadow: 0 0 15px rgba(167,139,250,0.1);
        }

        @media (max-width: 900px) {
          .ht-bg-code { display: none; }
        }

        /* Floating chips refined */
        .ht-orbit-chip {
          position: absolute;
          z-index: 10;
          background: rgba(12, 12, 34, 0.75);
          border: 1px solid rgba(167,139,250,0.2);
          border-radius: 12px;
          padding: 0.5rem 0.9rem;
          backdrop-filter: blur(14px);
          display: flex;
          align-items: center;
          gap: 0.6rem;
          pointer-events: none;
          box-shadow: 0 8px 32px rgba(0,0,0,0.4);
          white-space: nowrap;
        }
        .ht-chip-dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 10px #34d399; flex-shrink: 0; }
        
        @media (max-width: 1000px) {
          .ht-orbit-chip { display: none; } /* Hide the corners if screen is too small */
        }

        .ht-chip-l { display: block; font-family: var(--font-geist-mono); font-size: 0.62rem; color: rgba(234,234,245,0.45); text-transform: uppercase; letter-spacing: 0.05em; line-height: 1.2; }
        .ht-chip-v { display: block; font-family: var(--font-geist-mono); font-size: 1.1rem; font-weight: 800; color: #eaeaf5; line-height: 1.2; }


        /* ── Structural Grid ── */
        .ht-two-col {
          position: relative; z-index: 2;
          display: grid;
          grid-template-columns: minmax(0, 1fr) auto;
          gap: 7rem;
          align-items: center;
          max-width: 1200px; /* Expansive layout constraint */
          width: 100%;
        }

        @media (max-width: 900px) {
          .ht-two-col {
            grid-template-columns: 1fr;
            text-align: center;
            gap: 2.5rem;
          }
          .ht-image-col { order: -1; justify-content: center; }
          .ht-text-col { justify-content: center; align-items: center; text-align: center; }
          .ht-ctas { justify-content: center; }
        }

        .ht-text-col {
          display: flex; flex-direction: column;
          align-items: flex-start; gap: 1.5rem;
          min-width: 0;
        }

        /* Professional Badge */
        .ht-badge {
          display: inline-flex; align-items: center; gap: 8px;
          padding: 0.35rem 0.8rem; border-radius: 8px;
          background: rgba(52,211,153,0.08); border: 1px solid rgba(52,211,153,0.2);
          font-family: var(--font-geist-mono);
          font-size: 0.72rem; font-weight: 600; color: #34d399; letter-spacing: 0.05em;
          text-transform: uppercase;
        }
        .ht-badge-dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 8px #34d399; animation: pulse-dot 2s infinite; }
        @keyframes pulse-dot { 0%,100%{opacity:1} 50%{opacity:0.3} }

        /* Typography */
        .ht-titles { display: flex; flex-direction: column; gap: 0.8rem; width: 100%; }

        .ht-name { 
          font-size: clamp(3rem, 6.5vw, 4.8rem); 
          font-weight: 900; letter-spacing: -0.04em; line-height: 1; margin: 0; 
          word-break: break-word; /* Prevent flowing out */
        }
        .ht-name-accent { color: #eaeaf5; }

        .ht-role { font-size: clamp(1.1rem, 2.5vw, 1.45rem); color: rgba(234,234,245,0.8); font-weight: 600; letter-spacing: -0.01em; line-height: 1.5; }
        .ht-role-sub { font-size: clamp(0.95rem, 1.8vw, 1.1rem); color: #a78bfa; font-weight: 500; }
        .ht-role-br { display: none; }
        @media (max-width: 500px) { .ht-role-br { display: block; } }

        .ht-tagline { font-size: clamp(1rem, 2vw, 1.15rem); color: rgba(234,234,245,0.55); line-height: 1.75; max-width: 530px; }

        /* Actions */
        .ht-ctas { display: flex; gap: 0.75rem; flex-wrap: wrap; margin-top: 0.25rem; }

        .ht-btn-primary {
          display: inline-flex; align-items: center; gap: 0.5rem;
          padding: 0.65rem 1.5rem;
          background: #eaeaf5; color: #08081a;
          border-radius: 10px; font-size: 0.9rem; font-weight: 700;
          text-decoration: none; transition: transform 0.2s, background 0.2s;
        }
        .ht-btn-primary:hover { background: #fff; transform: translateY(-2px); }

        .ht-btn-secondary {
          display: inline-flex; align-items: center;
          padding: 0.65rem 1.5rem;
          background: rgba(255,255,255,0.06); color: #eaeaf5;
          border: 1px solid rgba(255,255,255,0.12); border-radius: 10px;
          font-size: 0.9rem; font-weight: 600; text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }
        .ht-btn-secondary:hover { background: rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.2); }

        .ht-btn-ghost {
          display: inline-flex; align-items: center;
          padding: 0.65rem 0.85rem; color: rgba(234,234,245,0.4);
          font-size: 0.9rem; font-weight: 600; text-decoration: none;
          transition: color 0.2s;
        }
        .ht-btn-ghost:hover { color: #eaeaf5; }

        /* Tech Stack Content Row */
        .ht-tech-stack-row {
          display: flex; align-items: center; gap: 1rem;
          margin-top: 1.5rem; padding-top: 1.5rem;
          border-top: 1px solid rgba(255,255,255,0.06);
          width: 100%; max-width: 530px; flex-wrap: wrap;
        }
        .ht-tech-row-label {
          font-family: var(--font-geist-mono);
          font-size: 0.7rem; color: rgba(234,234,245,0.4);
          text-transform: uppercase; letter-spacing: 0.05em; font-weight: 500;
        }
        .ht-tech-chips { display: flex; gap: 0.5rem; flex-wrap: wrap; }
        .ht-tchip {
          padding: 0.35rem 0.8rem; border-radius: 100px;
          background: rgba(255,255,255,0.02); 
          border: 1px solid rgba(255,255,255,0.05);
          font-size: 0.72rem; color: rgba(234,234,245,0.6);
          font-family: var(--font-geist-mono);
          transition: all 0.2s;
        }
        .ht-tchip:hover { 
          background: rgba(167,139,250,0.08); 
          border-color: rgba(167,139,250,0.25); 
          color: #a78bfa;
          transform: translateY(-1px);
        }

        /* ── Right Column: Circular Small Image ── */
        .ht-image-col {
          display: flex; justify-content: center; align-items: center;
          flex-shrink: 0;
        }

        .ht-circle-frame {
          width: clamp(230px, 22vw, 300px);
          height: clamp(230px, 22vw, 300px);
          border-radius: 50%;
          padding: 2px; /* reduced from extremely thick */
          background: linear-gradient(135deg, rgba(167,139,250,0.5), rgba(79,70,229,0.2) 60%);
          box-shadow: 0 15px 35px rgba(0,0,0,0.4), 0 0 40px rgba(124,58,237,0.15);
          display: flex; align-items: center; justify-content: center;
          position: relative;
        }

        .ht-circle-img {
          width: 100%; height: 100%;
          border-radius: 50%;
          object-fit: cover;
          object-position: center;
          background: #111;
          border: 4px solid #08081a; /* blends perfectly into dark bg rather than a thick black outline */
        }


        /* Scroll cue */
        .ht-scroll-cue {
          position: absolute; bottom: 2rem; color: rgba(234,234,245,0.25); left: 50%; transform: translateX(-50%);
        }

        /* ══ PART 2: Dashboard ═══════════════════════════════ */
        .hero-dashboard {
          padding: 0 1.25rem 5rem;
          max-width: 1240px;
          margin: 0 auto;
        }

        .hd-label-row {
          display: flex; align-items: center; gap: 1rem; margin-bottom: 1.5rem;
        }
        .hd-eyebrow {
          font-family: var(--font-geist-mono); font-size: 0.68rem; font-weight: 600;
          letter-spacing: 0.12em; text-transform: uppercase; color: rgba(167,139,250,0.45);
          white-space: nowrap;
        }
        .hd-divider { flex: 1; height: 1px; background: rgba(255,255,255,0.05); }

        /* Shell */
        .dashboard-shell {
          display: flex; width: 100%;
          background: rgba(8,8,28,0.72);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px; overflow: hidden;
          backdrop-filter: blur(20px);
          box-shadow: 0 0 0 1px rgba(167,139,250,0.04), 0 40px 80px rgba(0,0,0,0.55),
                      inset 0 1px 0 rgba(255,255,255,0.04);
          min-height: 560px; position: relative;
        }

        /* Sidebar */
        .db-sidebar {
          width: 190px; min-width: 190px;
          border-right: 1px solid rgba(255,255,255,0.06);
          padding: 1.5rem 0; display: flex; flex-direction: column;
        }
        .db-identity {
          display: flex; align-items: center; gap: 0.65rem;
          padding: 0 1.1rem 1.1rem;
          border-bottom: 1px solid rgba(255,255,255,0.05); margin-bottom: 0.85rem;
        }
        .db-avatar { width: 34px; height: 34px; border-radius: 9px; object-fit: cover; border: 1px solid rgba(167,139,250,0.2); }
        .db-name { display: block; font-size: 0.78rem; font-weight: 700; color: #eaeaf5; white-space: nowrap; }
        .db-role-tag { display: flex; align-items: center; gap: 4px; font-size: 0.65rem; color: #34d399; margin-top: 2px; }
        .db-dot { width: 6px; height: 6px; border-radius: 50%; background: #34d399; box-shadow: 0 0 6px #34d399; animation: pulse-dot 2s infinite; }

        .db-nav { display: flex; flex-direction: column; flex: 1; padding: 0 0.65rem; gap: 1px; }
        .db-nav-item {
          display: flex; align-items: center; gap: 0.55rem;
          padding: 0.45rem 0.7rem; border-radius: 7px;
          font-size: 0.76rem; font-weight: 500;
          color: rgba(234,234,245,0.42); text-decoration: none;
          transition: background 0.2s, color 0.2s;
        }
        .db-nav-item:hover { background: rgba(255,255,255,0.05); color: rgba(234,234,245,0.82); }
        .db-nav-active { background: rgba(124,58,237,0.15) !important; color: #a78bfa !important; font-weight: 600; }
        .db-nav-icon { font-size: 0.85rem; opacity: 0.65; }

        .db-footer {
          padding: 0.85rem 1.1rem;
          border-top: 1px solid rgba(255,255,255,0.05);
          display: flex; flex-direction: column; gap: 0.45rem;
        }
        .db-meta-row { display: flex; justify-content: space-between; }
        .db-meta-k { font-size: 0.65rem; color: rgba(234,234,245,0.22); font-family: var(--font-geist-mono); }
        .db-meta-v { font-size: 0.67rem; color: rgba(234,234,245,0.5); font-weight: 500; }

        /* Main */
        .db-main { flex: 1; padding: 1.25rem; display: flex; flex-direction: column; gap: 0.85rem; min-width: 0; overflow: hidden; }

        /* Metric tiles */
        .db-metrics {
          display: grid; grid-template-columns: repeat(4,1fr);
          border: 1px solid rgba(255,255,255,0.06); border-radius: 11px; overflow: hidden;
        }
        .db-tile {
          padding: 0.9rem 1.1rem;
          border-right: 1px solid rgba(255,255,255,0.06);
          display: flex; flex-direction: column; gap: 2px;
          transition: background 0.2s;
        }
        .db-tile:last-child { border-right: none; }
        .db-tile:hover { background: rgba(255,255,255,0.02); }
        .db-tile-label { font-family: var(--font-geist-mono); font-size: 0.6rem; color: rgba(234,234,245,0.28); text-transform: uppercase; letter-spacing: 0.07em; }
        .db-tile-value { font-family: var(--font-geist-mono); font-size: 1.45rem; font-weight: 800; line-height: 1.1; letter-spacing: -0.02em; }
        .db-tile-note { font-size: 0.63rem; color: rgba(234,234,245,0.28); font-family: var(--font-geist-mono); }

        /* Chart row */
        .db-row { display: grid; grid-template-columns: 1fr 260px; gap: 0.85rem; flex: 1; min-height: 0; }

        .db-card {
          background: rgba(255,255,255,0.012);
          border: 1px solid rgba(255,255,255,0.06);
          border-radius: 11px; padding: 1rem 1.15rem; overflow: hidden;
        }
        .db-card-head { display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 0.75rem; gap: 0.5rem; flex-wrap: wrap; }
        .db-card-title { font-size: 0.8rem; font-weight: 700; color: #eaeaf5; display: block; }
        .db-card-sub { font-size: 0.62rem; color: rgba(234,234,245,0.25); font-family: var(--font-geist-mono); display: block; margin-top: 2px; }
        .db-legend { font-family: var(--font-geist-mono); font-size: 0.58rem; font-weight: 600; padding: 0.18rem 0.45rem; border-radius: 4px; letter-spacing: 0.04em; }

        /* Bar chart */
        .db-bars { display: flex; align-items: flex-end; gap: 3px; height: 90px; }
        .db-bar-col { display: flex; flex-direction: column-reverse; gap: 1px; flex: 1; height: 100%; }
        .db-seg { border-radius: 2px 2px 0 0; min-height: 2px; transform-origin: bottom; }
        .db-seg-med  { background: rgba(167,139,250,0.65); }
        .db-seg-easy { background: rgba(52,211,153,0.55); }
        .db-seg-hard { background: rgba(251,191,36,0.6); }

        /* Log */
        .db-log-list { list-style: none; padding: 0; margin: 0; display: flex; flex-direction: column; gap: 0.55rem; }
        .db-log-item { display: grid; grid-template-columns: 8px 1fr auto; align-items: center; gap: 0.5rem; }
        .db-log-dot { width: 7px; height: 7px; border-radius: 50%; }
        .db-log-label { font-size: 0.7rem; color: rgba(234,234,245,0.55); overflow: hidden; text-overflow: ellipsis; white-space: nowrap; }
        .db-log-time { font-family: var(--font-geist-mono); font-size: 0.6rem; color: rgba(234,234,245,0.2); white-space: nowrap; }

        /* Heatmap */
        .db-heat-card { flex-shrink: 0; }
        .db-heatmap { display: flex; gap: 3px; overflow: hidden; }
        .db-heat-week { display: flex; flex-direction: column; gap: 3px; }
        .db-heat-cell { width: 10px; height: 10px; border-radius: 2px; transition: outline 0.15s; }
        .db-heat-cell:hover { outline: 1px solid rgba(167,139,250,0.6); }

        .db-heat-cta {
          display: flex; align-items: center; justify-content: space-between;
          flex-wrap: wrap; gap: 0.75rem;
          margin-top: 0.9rem; padding-top: 0.9rem;
          border-top: 1px solid rgba(255,255,255,0.05);
        }
        .db-heat-headline { font-size: 0.82rem; color: rgba(234,234,245,0.5); }
        .db-heat-headline strong { color: #eaeaf5; font-weight: 700; }

        /* ── Responsive ──────────────────────────────────────── */
        @media (max-width: 900px) {
          .db-sidebar { display: none; }
          .db-metrics { grid-template-columns: repeat(2, 1fr); }
          .db-row { grid-template-columns: 1fr; }
          .db-log-card { display: none; }
        }
        @media (max-width: 600px) {
          .hero-dashboard { padding: 0 0.75rem 3rem; }
          .dashboard-shell { border-radius: 14px; }
          .db-metrics { grid-template-columns: 1fr 1fr; }
          .db-heat-cta { flex-direction: column; align-items: flex-start; }
        }
      `}</style>
    </>
  );
}
