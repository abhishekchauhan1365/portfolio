"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { TechIcon } from "./TechIcon";

// Skill data — clean, no icons
const stack = [
  {
    label: "Languages",
    color: "59, 130, 246",
    items: ["C++", "C", "Java", "JavaScript", "PHP"],
  },
  {
    label: "Frontend",
    color: "167, 139, 250",
    items: ["React.js", "Next.js", "HTML5", "CSS3", "Tailwind"],
  },
  {
    label: "Backend & DB",
    color: "52, 211, 153",
    items: ["Node.js", "Express.js", "MongoDB", "MySQL", "REST APIs"],
  },
  {
    label: "CS Foundations",
    color: "251, 191, 36",
    items: ["DSA", "Operating Systems", "Computer Networks", "DBMS"],
  },
];

const tools = ["Git", "GitHub", "VS Code", "Postman", "Linux", "Docker", "Figma", "Oracle Cloud"];

export default function SkillsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="skills" ref={ref} className="skills-section">

      {/* ── Laravel-style: full-width bordered block ─────────────── */}
      <div className="skills-outer">

        {/* Left: Section label column */}
        <div className="skills-label-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="label-eyebrow">Technical Stack</p>
            <h2 className="label-heading">
              What I<br />work with
            </h2>
            <p className="label-body">
              Four years of building — a focused, production-ready set of
              technologies chosen for their depth, not breadth.
            </p>

            {/* Tool chips */}
            <div className="tools-row">
              {tools.map((t, i) => (
                <motion.span
                  key={t}
                  className="tool-chip"
                  initial={{ opacity: 0 }}
                  animate={inView ? { opacity: 1 } : {}}
                  transition={{ delay: 0.3 + i * 0.06 }}
                >
                  <TechIcon name={t} size={14} />
                  {t}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </div>

        {/* Right: 2×2 grid of skill panels */}
        <div className="skills-grid">
          {stack.map((group, i) => (
            <motion.div
              key={group.label}
              className="skill-panel"
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + i * 0.12, duration: 0.55 }}
              style={{ "--accent-c": `rgb(${group.color})` } as React.CSSProperties}
            >
              {/* category label */}
              <span
                className="panel-category"
                style={{ color: `rgb(${group.color})` }}
              >
                {group.label}
              </span>

              {/* skill items as a vertical list */}
              <ul className="panel-list">
                {group.items.map((skill, j) => (
                  <motion.li
                    key={skill}
                    className="panel-item"
                    initial={{ opacity: 0, x: -8 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.2 + i * 0.1 + j * 0.05 }}
                  >
                    <TechIcon name={skill} size={16} />
                    {skill}
                  </motion.li>
                ))}
              </ul>

              {/* subtle bottom bar — like Laravel's gradient edge */}
              <div
                className="panel-bar"
                style={{ background: `linear-gradient(90deg, rgba(${group.color}, 0.5), transparent)` }}
              />
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .skills-section {
          padding: 7rem 0;
          position: relative;
        }

        /* Outer wrapper — full content width, hairline bordered */
        .skills-outer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (min-width: 860px) {
          .skills-outer {
            grid-template-columns: 300px 1fr;
            gap: 5rem;
          }
        }

        /* ── Label column ─────────────────────────────────────────── */
        .skills-label-col {
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
          margin-bottom: 1.25rem;
        }

        .label-body {
          font-size: 0.95rem;
          color: rgba(234, 234, 245, 0.5);
          line-height: 1.75;
          margin-bottom: 2rem;
          max-width: 280px;
        }

        .tools-row {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
        }

        .tool-chip {
          font-family: var(--font-geist-mono);
          font-size: 0.7rem;
          font-weight: 500;
          padding: 0.3rem 0.7rem;
          border-radius: 6px;
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.07);
          color: rgba(234, 234, 245, 0.4);
          white-space: nowrap;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: border-color 0.2s, color 0.2s;
        }

        .tool-chip img {
          opacity: 0.55;
          transition: opacity 0.2s;
        }

        .tool-chip:hover {
          border-color: rgba(167, 139, 250, 0.3);
          color: rgba(234, 234, 245, 0.75);
        }

        .tool-chip:hover img {
          opacity: 0.9;
        }

        /* ── Skills grid — 2×2 ───────────────────────────────────── */
        .skills-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 24px;
          overflow: hidden;
        }

        .skill-panel {
          padding: 2.25rem 2rem;
          position: relative;
          border-right: 1px solid rgba(255, 255, 255, 0.06);
          border-bottom: 1px solid rgba(255, 255, 255, 0.06);
          transition: background 0.3s;
          overflow: hidden;
        }

        /* remove edges that would double up */
        .skill-panel:nth-child(even) { border-right: none; }
        .skill-panel:nth-child(n+3) { border-bottom: none; }

        .skill-panel:hover {
          background: rgba(255, 255, 255, 0.015);
        }

        /* Thin gradient bar at bottom of each panel */
        .panel-bar {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          height: 2px;
          opacity: 0;
          transition: opacity 0.3s;
        }

        .skill-panel:hover .panel-bar {
          opacity: 1;
        }

        .panel-category {
          font-family: var(--font-geist-mono);
          font-size: 0.68rem;
          font-weight: 700;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          display: block;
          margin-bottom: 1.25rem;
        }

        .panel-list {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.65rem;
        }

        .panel-item {
          display: flex;
          align-items: center;
          gap: 0.65rem;
          font-size: 0.93rem;
          font-weight: 500;
          color: rgba(234, 234, 245, 0.75);
          transition: color 0.2s;
        }

        .panel-item img {
          opacity: 0.7;
          transition: opacity 0.2s;
        }

        .skill-panel:hover .panel-item {
          color: rgba(234, 234, 245, 0.9);
        }

        .skill-panel:hover .panel-item img {
          opacity: 1;
        }

        @media (max-width: 640px) {
          .skills-grid {
            grid-template-columns: 1fr;
          }
          .skill-panel {
            border-right: none;
          }
          .skill-panel:nth-child(n+4) { border-bottom: none; }
          .skill-panel:nth-child(3) { border-bottom: 1px solid rgba(255,255,255,0.06); }
        }
      `}</style>
    </section>
  );
}
