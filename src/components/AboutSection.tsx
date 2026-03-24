"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const metrics = [
  {
    label: "Academic CGPA",
    value: "8.31 / 10",
    bar: 83,
    context: "Top 20% of cohort",
    color: "167, 139, 250",
  },
  {
    label: "DSA Problems Solved",
    value: "400+",
    bar: 72,
    context: "LeetCode · Easy / Med / Hard",
    color: "52, 211, 153",
  },
  {
    label: "LeetCode Contest Rating",
    value: "1,519",
    bar: 62,
    context: "Top 38.7% globally",
    color: "251, 191, 36",
  },
  {
    label: "Max Coding Streak",
    value: "55 Days",
    bar: 55,
    context: "255 active days in past year",
    color: "96, 165, 250",
  },
];

const traits = [
  {
    label: "Problem Solver",
    desc: "I break complex challenges into elegant algorithmic solutions.",
    color: "59, 130, 246",
  },
  {
    label: "Fast Learner",
    desc: "Comfortable picking up new frameworks and paradigms quickly.",
    color: "16, 185, 129",
  },
  {
    label: "Team Player",
    desc: "Strong collaboration experience in agile team environments.",
    color: "245, 158, 11",
  },
];

export default function AboutSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="about" ref={ref} className="abt-section">
      <div className="abt-outer">
        
        {/* Left: 1/3 Description Column */}
        <div className="abt-label-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="label-eyebrow">About Me</p>
            <h2 className="label-heading">
              My Journey<br />So Far
            </h2>
            <div className="label-body">
              <p>
                I'm a Computer Science student at <strong>Lovely Professional University</strong>, passionate about building things that live on the internet. My journey started with curiosity about how websites work — that curiosity quickly turned into a deep love for both the creative and engineering sides of development.
              </p>
              <p>
                I focus on writing clean, efficient code with a strong emphasis on performance and scalability. My background in <strong>Data Structures and Algorithms</strong> gives me an edge when approaching architecture decisions and optimizing critical code paths.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right: 2/3 Content panels */}
        <div className="abt-panels">
          
          {/* Top Panel: Traits Grid */}
          <div className="abt-panel traits-panel">
            <h3 className="panel-title">Core Traits</h3>
            <div className="traits-grid">
              {traits.map((t, i) => (
                <motion.div
                  key={t.label}
                  className="trait-card"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.2 + i * 0.1, duration: 0.5 }}
                >
                  <div className="trait-color-bar" style={{ background: `rgb(${t.color})` }} />
                  <span className="trait-label" style={{ color: `rgb(${t.color})` }}>{t.label}</span>
                  <p className="trait-desc">{t.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Bottom Panel: Metrics */}
          <div className="abt-panel metrics-panel">
            <div className="panel-head">
              <h3 className="panel-title">Performance Metrics</h3>
              <p className="panel-subtitle">quantifiable engineering stats</p>
            </div>

            <div className="metrics-list">
              {metrics.map((m, i) => (
                <motion.div
                  key={m.label}
                  className="metric-row"
                  initial={{ opacity: 0, x: 20 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.12, duration: 0.5 }}
                >
                  <div className="metric-header">
                    <span className="metric-label">{m.label}</span>
                    <span className="metric-value" style={{ color: `rgb(${m.color})` }}>{m.value}</span>
                  </div>
                  <div className="metric-track">
                    <motion.div
                      className="metric-fill"
                      style={{ background: `rgb(${m.color})` }}
                      initial={{ width: 0 }}
                      animate={inView ? { width: `${m.bar}%` } : {}}
                      transition={{ delay: 0.4 + i * 0.12, duration: 0.8, ease: "easeOut" }}
                    />
                  </div>
                  <span className="metric-context">{m.context}</span>
                </motion.div>
              ))}
            </div>
          </div>

        </div>
      </div>

      <style>{`
        .abt-section {
          padding: 8rem 0;
          position: relative;
        }

        .abt-outer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (min-width: 860px) {
          .abt-outer {
            grid-template-columns: 320px 1fr;
            gap: 5rem;
          }
        }

        /* Label Column */
        .abt-label-col {
          position: sticky;
          top: 100px;
        }

        .label-eyebrow {
          font-family: var(--font-geist-mono);
          font-size: 0.7rem;
          font-weight: 600;
          letter-spacing: 0.14em;
          text-transform: uppercase;
          color: #a78bfa;
          margin-bottom: 1rem;
        }

        .label-heading {
          font-size: clamp(2.4rem, 5vw, 3.6rem);
          font-weight: 900;
          letter-spacing: -0.04em;
          color: #eaeaf5;
          line-height: 1.05;
          margin-bottom: 1.5rem;
        }

        .label-body {
          display: flex;
          flex-direction: column;
          gap: 1.25rem;
        }

        .label-body p {
          font-size: 0.95rem;
          color: rgba(234, 234, 245, 0.6);
          line-height: 1.75;
          max-width: 320px;
        }

        .label-body strong {
          color: rgba(234, 234, 245, 0.95);
          font-weight: 600;
        }

        /* Content Panels */
        .abt-panels {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .abt-panel {
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          background: rgba(4, 4, 16, 0.4);
          padding: 2.5rem;
        }

        .panel-title {
          font-size: 1.2rem;
          font-weight: 800;
          color: #eaeaf5;
          letter-spacing: -0.02em;
          margin-bottom: 1.5rem;
        }

        .panel-head {
          display: flex;
          justify-content: space-between;
          align-items: baseline;
          flex-wrap: wrap;
          gap: 1rem;
          margin-bottom: 2rem;
        }

        .panel-head .panel-title {
          margin-bottom: 0;
        }

        .panel-subtitle {
          font-family: var(--font-geist-mono);
          font-size: 0.7rem;
          color: rgba(234,234,245,0.4);
        }

        /* Traits Grid */
        .traits-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
          gap: 1.25rem;
        }

        .trait-card {
          background: rgba(255, 255, 255, 0.015);
          border: 1px solid rgba(255, 255, 255, 0.04);
          border-radius: 12px;
          padding: 1.25rem;
          position: relative;
          overflow: hidden;
          transition: background 0.3s;
        }

        .trait-card:hover {
          background: rgba(255, 255, 255, 0.03);
        }

        .trait-color-bar {
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 3px;
          opacity: 0.7;
        }

        .trait-label {
          display: block;
          font-family: var(--font-geist-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          margin-bottom: 0.5rem;
          margin-top: 0.2rem;
        }

        .trait-desc {
          font-size: 0.85rem;
          color: rgba(234, 234, 245, 0.5);
          line-height: 1.6;
        }

        /* Metrics */
        .metrics-list {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .metric-row {
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .metric-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          gap: 1rem;
        }

        .metric-label {
          font-family: var(--font-geist-mono);
          font-size: 0.8rem;
          font-weight: 600;
          color: #eaeaf5;
          letter-spacing: 0.02em;
          text-transform: uppercase;
        }

        .metric-value {
          font-family: var(--font-geist-mono);
          font-size: 1.25rem;
          font-weight: 800;
          line-height: 1;
        }

        .metric-track {
          height: 6px;
          background: rgba(255, 255, 255, 0.05);
          border-radius: 99px;
          overflow: hidden;
        }

        .metric-fill {
          height: 100%;
          border-radius: 99px;
          box-shadow: 0 0 10px currentColor;
        }

        .metric-context {
          font-family: var(--font-geist-mono);
          font-size: 0.65rem;
          color: rgba(234, 234, 245, 0.35);
          text-align: right;
        }

        @media (max-width: 600px) {
          .abt-panel {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
}
