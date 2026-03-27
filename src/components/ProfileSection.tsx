"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export default function ProfileSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="profile" ref={ref} className="profile-section">

      {/* ── Top: 1/3 label + 2/3 feature panel (Laravel ratio) ─── */}
      <div className="profile-outer">

        {/* Left description column */}
        <motion.div
          className="profile-desc-col"
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <p className="eyebrow">About the Engineer</p>
          <h2 className="desc-heading">
            Building at the intersection of code &amp; craft
          </h2>
          <p className="desc-body">
            Computer Science student at Lovely Professional University, with a
            strong research background in DSA and systems design. I write
            production-grade code and ship projects that work under real
            constraints.
          </p>
          <p className="desc-body">
            CGPA <strong>8.31 / 10</strong> · LeetCode <strong>400+</strong> problems ·
            Contest Rating <strong>1,519</strong>
          </p>
        </motion.div>

        {/* Right: Code window feature panel */}
        <motion.div
          className="profile-feature-panel"
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.15, duration: 0.6 }}
        >
          {/* MacOS-style code window */}
          <div className="code-window">
            <div className="cw-titlebar">
              <span className="cw-dot cw-red" />
              <span className="cw-dot cw-yellow" />
              <span className="cw-dot cw-green" />
              <span className="cw-filename">profile.ts</span>
            </div>
            <pre className="cw-body"><code>
  <span className="kw">const</span> <span className="var">developer</span> <span className="op">=</span> {"{"}{"\n"}
{"  "}<span className="key">name</span><span className="op">:</span>      <span className="str">&apos;Abhishek Singh Chauhan&apos;</span>,{"\n"}
{"  "}<span className="key">role</span><span className="op">:</span>      <span className="str">&apos;Full-Stack Engineer&apos;</span>,{"\n"}
{"  "}<span className="key">education</span><span className="op">:</span> <span className="str">&apos;B.Tech CSE — LPU&apos;</span>,{"\n"}
{"  "}<span className="key">cgpa</span><span className="op">:</span>      <span className="num">8.31</span>,{"\n"}
{"  "}<span className="key">dsa</span><span className="op">:</span>       <span className="str">&apos;400+ problems&apos;</span>,{"\n"}
{"  "}<span className="key">rating</span><span className="op">:</span>    <span className="num">1519</span>,{"\n"}
{"  "}<span className="key">status</span><span className="op">:</span>    <span className="str">&apos;Open to opportunities&apos;</span>{"\n"}
{"}"};
            </code></pre>
          </div>
        </motion.div>
      </div>

      {/* ── Bottom: 3-cell stat row (thin border dividers) ─────── */}
      <div className="profile-stat-row">
        {[
          {
            value: "8.31",
            unit: "/ 10",
            label: "Academic CGPA",
            sub: "Top 20% of cohort · LPU",
            color: "167, 139, 250",
          },
          {
            value: "400+",
            unit: "",
            label: "DSA Problems Solved",
            sub: "LeetCode · Easy / Med / Hard",
            color: "52, 211, 153",
          },
          {
            value: "1,519",
            unit: "",
            label: "Contest Rating",
            sub: "Top 38.7% globally",
            color: "251, 191, 36",
          },
        ].map((s, i) => (
          <motion.div
            key={s.label}
            className="stat-cell"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.3 + i * 0.1, duration: 0.5 }}
          >
            <p className="stat-num" style={{ color: `rgb(${s.color})` }}>
              {s.value}
              {s.unit && <span className="stat-unit">{s.unit}</span>}
            </p>
            <p className="stat-label">{s.label}</p>
            <p className="stat-sub">{s.sub}</p>
          </motion.div>
        ))}
      </div>

      <style>{`
        .profile-section {
          padding: 2rem 1.5rem 7rem;
          max-width: 1200px;
          margin: 0 auto;
        }

        /* ── Top 1/3 + 2/3 layout ─────────────────────────────── */
        .profile-outer {
          display: grid;
          grid-template-columns: 1fr;
          gap: 3.5rem;
          margin-bottom: 4rem;
          align-items: center;
        }

        @media (min-width: 860px) {
          .profile-outer {
            grid-template-columns: 1fr 1.6fr;
            gap: 6rem;
          }
        }

        .profile-desc-col {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .eyebrow {
          font-family: var(--font-geist-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a78bfa;
        }

        .desc-heading {
          font-size: clamp(2rem, 4vw, 3rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #eaeaf5;
          line-height: 1.1;
          margin: 0;
        }

        .desc-body {
          font-size: 0.95rem;
          color: rgba(234, 234, 245, 0.55);
          line-height: 1.8;
        }

        .desc-body strong {
          color: rgba(234, 234, 245, 0.9);
          font-weight: 600;
        }

        /* ── Code window ──────────────────────────────────────── */
        .profile-feature-panel {
          width: 100%;
        }

        .code-window {
          background: rgba(6, 6, 20, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.07);
          border-radius: 18px;
          overflow: hidden;
          box-shadow: 0 30px 60px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(167, 139, 250, 0.05);
        }

        .cw-titlebar {
          display: flex;
          align-items: center;
          gap: 7px;
          padding: 13px 18px;
          background: rgba(255, 255, 255, 0.025);
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .cw-dot {
          width: 12px;
          height: 12px;
          border-radius: 50%;
          flex-shrink: 0;
        }
        .cw-red    { background: #ff5f56; }
        .cw-yellow { background: #ffbd2e; }
        .cw-green  { background: #27c93f; }

        .cw-filename {
          font-family: var(--font-geist-mono);
          font-size: 0.72rem;
          color: rgba(234, 234, 245, 0.3);
          margin-left: 8px;
        }

        .cw-body {
          padding: 1.75rem 2rem;
          font-family: var(--font-geist-mono);
          font-size: 0.88rem;
          line-height: 1.85;
          color: rgba(234, 234, 245, 0.8);
          overflow-x: auto;
          margin: 0;
          tab-size: 2;
        }

        .cw-body .kw  { color: #c084fc; }
        .cw-body .var { color: #93c5fd; }
        .cw-body .op  { color: rgba(234, 234, 245, 0.35); }
        .cw-body .key { color: #f9a8d4; }
        .cw-body .str { color: #86efac; }
        .cw-body .num { color: #fbbf24; }

        /* ── Stat row — 3 cells with hairline dividers ─────────── */
        .profile-stat-row {
          display: grid;
          grid-template-columns: 1fr;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          overflow: hidden;
        }

        @media (min-width: 600px) {
          .profile-stat-row {
            grid-template-columns: repeat(3, 1fr);
          }
        }

        .stat-cell {
          padding: 2.25rem 2rem;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.25s;
        }

        @media (min-width: 600px) {
          .stat-cell:last-child { border-right: none; }
          .stat-cell { border-bottom: none; }
        }

        .stat-cell:hover {
          background: rgba(255, 255, 255, 0.015);
        }

        .stat-num {
          font-family: var(--font-geist-mono);
          font-size: 2.4rem;
          font-weight: 800;
          line-height: 1;
          margin-bottom: 0.5rem;
          letter-spacing: -0.03em;
        }

        .stat-unit {
          font-size: 1.2rem;
          margin-left: 4px;
          opacity: 0.7;
        }

        .stat-label {
          font-size: 0.85rem;
          font-weight: 600;
          color: #eaeaf5;
          margin-bottom: 0.35rem;
        }

        .stat-sub {
          font-family: var(--font-geist-mono);
          font-size: 0.72rem;
          color: rgba(234, 234, 245, 0.3);
          letter-spacing: 0.03em;
        }
      `}</style>
    </section>
  );
}