"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const certificationsData = [
  {
    index: "01",
    title: "Oracle Cloud Infrastructure — DevOps Professional",
    issuer: "Oracle",
    date: "Oct 2025",
    skills: ["CI/CD", "Kubernetes", "OCI DevOps", "IaC"],
    color: "234, 88, 12",
  },
  {
    index: "02",
    title: "Oracle Cloud Infrastructure — AI Foundations Associate",
    issuer: "Oracle",
    date: "Aug 2025",
    skills: ["Machine Learning", "Generative AI", "OCI AI Services"],
    color: "234, 88, 12",
  },
  {
    index: "03",
    title: "Privacy & Security in Online Social Media",
    issuer: "NPTEL — IIT",
    date: "Apr 2025",
    skills: ["Cybersecurity", "Privacy Engineering", "Threat Modelling"],
    color: "59, 130, 246",
  },
];

export default function AchievementsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="achievements" ref={ref} className="ach-section">
      <div className="ach-outer">
        
        {/* Left: 1/3 Description Column */}
        <div className="ach-label-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="label-eyebrow">Certifications</p>
            <h2 className="label-heading">
              Professional<br />Credentials
            </h2>
            <p className="label-body">
              Validated expertise in cloud infrastructure, artificial intelligence, and cybersecurity from industry-leading organizations.
            </p>
          </motion.div>
        </div>

        {/* Right: 2/3 Table panel with hairline borders */}
        <div className="ach-panel">
          {/* Column labels */}
          <div className="cert-table-head" aria-hidden>
            <span>#</span>
            <span>Certification</span>
            <span>Issuer</span>
            <span>Skills</span>
            <span>Date</span>
          </div>

          {/* Rows */}
          <ol className="cert-list">
            {certificationsData.map((item, i) => (
              <motion.li
                key={item.index}
                className="cert-row"
                initial={{ opacity: 0, x: 20 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.12, duration: 0.55, ease: "easeOut" }}
                style={{ "--accent": `rgb(${item.color})` } as React.CSSProperties}
              >
                {/* Index */}
                <span className="cert-idx">{item.index}</span>

                {/* Title */}
                <p className="cert-name">{item.title}</p>

                {/* Issuer */}
                <span className="cert-issuer" style={{ color: `rgb(${item.color})` }}>
                  {item.issuer}
                </span>

                {/* Skills */}
                <ul className="cert-tags" aria-label="skills covered">
                  {item.skills.map((s) => (
                    <li key={s} className="cert-tag">{s}</li>
                  ))}
                </ul>

                {/* Date */}
                <time className="cert-date">{item.date}</time>
              </motion.li>
            ))}
          </ol>
        </div>
      </div>

      <style>{`
        .ach-section {
          padding: 8rem 0;
          position: relative;
        }

        .ach-outer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (min-width: 860px) {
          .ach-outer {
            grid-template-columns: 320px 1fr;
            gap: 5rem;
          }
        }

        /* Label Column */
        .ach-label-col {
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
          max-width: 300px;
        }

        /* Table panel */
        .ach-panel {
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          background: rgba(4, 4, 16, 0.4);
          overflow: hidden;
        }

        /* Table-style header */
        .cert-table-head {
          display: none;
        }

        @media (min-width: 768px) {
          .cert-table-head {
            display: grid;
            grid-template-columns: 40px 1fr 100px 1fr 70px;
            gap: 1rem;
            padding: 1.25rem 1.75rem;
            border-bottom: 1px solid rgba(255,255,255,0.06);
            background: rgba(255,255,255,0.015);
            font-family: var(--font-geist-mono);
            font-size: 0.65rem;
            font-weight: 600;
            letter-spacing: 0.1em;
            text-transform: uppercase;
            color: rgba(234,234,245,0.3);
          }
        }

        /* List */
        .cert-list {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        /* Each row */
        .cert-row {
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
          padding: 1.5rem;
          border-bottom: 1px solid rgba(255,255,255,0.04);
          position: relative;
          transition: background 0.25s;
        }

        .cert-row:last-child {
          border-bottom: none;
        }

        .cert-row::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 2px;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.25s;
        }

        .cert-row:hover {
          background: rgba(255,255,255,0.02);
        }

        .cert-row:hover::before {
          opacity: 1;
        }

        @media (min-width: 768px) {
          .cert-row {
            display: grid;
            grid-template-columns: 40px 1fr 100px 1fr 70px;
            align-items: center;
            gap: 1rem;
            padding: 1.5rem 1.75rem;
          }
        }

        .cert-idx {
          font-family: var(--font-geist-mono);
          font-size: 0.75rem;
          color: rgba(234,234,245,0.2);
        }

        .cert-row:hover .cert-idx {
          color: var(--accent);
        }

        .cert-name {
          font-size: 0.9rem;
          font-weight: 700;
          color: #eaeaf5;
          line-height: 1.4;
          margin: 0;
        }

        .cert-issuer {
          font-size: 0.8rem;
          font-weight: 600;
        }

        .cert-tags {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-wrap: wrap;
          gap: 0.4rem;
        }

        .cert-tag {
          font-family: var(--font-geist-mono);
          font-size: 0.65rem;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.06);
          color: rgba(234,234,245,0.6);
        }

        .cert-date {
          font-family: var(--font-geist-mono);
          font-size: 0.75rem;
          color: rgba(234,234,245,0.4);
          text-align: right;
        }

        @media (max-width: 767px) {
          .cert-date {
            text-align: left;
          }
          .cert-row {
            padding-left: 2rem;
          }
          .cert-idx {
            position: absolute;
            left: 1rem;
            top: 1.6rem;
            font-size: 0.6rem;
          }
        }
      `}</style>
    </section>
  );
}
