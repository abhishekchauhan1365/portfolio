"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const experienceData = [
  {
    role: "Frontend Intern",
    company: "Pearl Thoughts",
    duration: "Oct 2025 – Nov 2025",
    description: [
      "Designed and developed a healthcare web application",
      "Worked on responsive UI and user-friendly interface",
      "Improved frontend performance and fixed issues",
      "Collaborated effectively with team members during development",
    ],
    type: "Experience",
    typeColor: "59, 130, 246",
  },
  {
    role: "Frontend Development Trainee",
    company: "Sheryians Coding School – Cohort 1.0",
    duration: "Jan 2025 – Aug 2025",
    description: [
      "Gained hands-on intensive experience in React, JavaScript, and advanced frontend development",
      "Built responsive user interfaces using modern bleeding-edge frameworks",
    ],
    type: "Training",
    typeColor: "245, 158, 11",
  },
  {
    role: "B.Tech in Computer Science and Engineering",
    company: "Lovely Professional University, Punjab",
    duration: "Aug 2023 – Present",
    description: [
      "Current CGPA: 8.31",
      "Focused heavily on Core CS principles including DSA, Operating Systems, DBMS and Computer Networks",
      "Consistently maintained top academic performance with 8.31 GPA",
    ],
    type: "Education",
    typeColor: "16, 185, 129",
  }
];

export default function ExperienceSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="experience" ref={ref} className="exp-section">
      <div className="exp-outer">
        
        {/* Left: 1/3 Description Column */}
        <div className="exp-label-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="label-eyebrow">Career Path</p>
            <h2 className="label-heading">
              Education &<br />Experience
            </h2>
            <p className="label-body">
              A continuous journey of learning, building, and refining skills 
              in full-stack engineering and computer science.
            </p>
          </motion.div>
        </div>

        {/* Right: 2/3 Timeline panel with hairline borders */}
        <div className="exp-timeline">
          {experienceData.map((item, index) => (
            <motion.div
              key={index}
              className="exp-item"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.1 + index * 0.12, duration: 0.55 }}
              style={{ "--accent-c": `rgb(${item.typeColor})` } as React.CSSProperties}
            >
              {/* Timeline dot & vertical line connection */}
              <div className="exp-node">
                <div className="exp-dot" style={{ background: `rgb(${item.typeColor})`, boxShadow: `0 0 10px rgba(${item.typeColor}, 0.5)` }} />
                {index !== experienceData.length - 1 && <div className="exp-line" />}
              </div>

              {/* Content body */}
              <div className="exp-content">
                <div className="exp-header">
                  <div>
                    <div className="exp-title-row">
                      <h3 className="exp-role">{item.role}</h3>
                      <span className="exp-badge" style={{ color: `rgb(${item.typeColor})`, border: `1px solid rgba(${item.typeColor}, 0.2)` }}>
                        {item.type}
                      </span>
                    </div>
                    <span className="exp-company">{item.company}</span>
                  </div>
                  <time className="exp-duration">{item.duration}</time>
                </div>

                <ul className="exp-bullets">
                  {item.description.map((task, idx) => (
                    <li key={idx}>
                      <span className="exp-bullet-icon" style={{ color: `rgb(${item.typeColor})` }}>▹</span>
                      <span className="exp-bullet-text">{task}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        .exp-section {
          padding: 8rem 0;
          position: relative;
        }

        .exp-outer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (min-width: 860px) {
          .exp-outer {
            grid-template-columns: 320px 1fr;
            gap: 5rem;
          }
        }

        /* Label Column (matches SkillsSection) */
        .exp-label-col {
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

        /* Timeline panel */
        .exp-timeline {
          display: flex;
          flex-direction: column;
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          background: rgba(4, 4, 16, 0.4);
          overflow: hidden;
        }

        .exp-item {
          display: flex;
          padding: 2.5rem 2.5rem 2.5rem 2rem;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
          transition: background 0.3s;
        }

        .exp-item:last-child {
          border-bottom: none;
        }

        .exp-item:hover {
          background: rgba(255, 255, 255, 0.015);
        }

        .exp-node {
          width: 32px;
          display: flex;
          flex-direction: column;
          align-items: center;
          margin-right: 1.5rem;
          flex-shrink: 0;
        }

        .exp-dot {
          width: 10px;
          height: 10px;
          border-radius: 50%;
          margin-top: 6px;
          position: relative;
          z-index: 2;
        }

        .exp-line {
          width: 1px;
          flex: 1;
          background: linear-gradient(180deg, var(--accent-c), transparent 80%);
          opacity: 0.25;
          margin-top: 10px;
          margin-bottom: -40px;
        }

        .exp-content {
          flex: 1;
        }

        .exp-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 1.5rem;
          margin-bottom: 1.25rem;
        }

        .exp-title-row {
          display: flex;
          align-items: center;
          gap: 0.75rem;
          margin-bottom: 0.4rem;
          flex-wrap: wrap;
        }

        .exp-role {
          font-size: 1.2rem;
          font-weight: 700;
          color: #eaeaf5;
          letter-spacing: -0.01em;
          margin: 0;
        }

        .exp-badge {
          font-family: var(--font-geist-mono);
          font-size: 0.65rem;
          font-weight: 600;
          padding: 0.2rem 0.5rem;
          border-radius: 4px;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          background: rgba(255,255,255,0.02);
        }

        .exp-company {
          font-size: 0.9rem;
          font-weight: 500;
          color: rgba(234, 234, 245, 0.6);
        }

        .exp-duration {
          font-family: var(--font-geist-mono);
          font-size: 0.75rem;
          color: rgba(234, 234, 245, 0.4);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.05);
          padding: 0.35rem 0.75rem;
          border-radius: 6px;
        }

        .exp-bullets {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 0.6rem;
        }

        .exp-bullets li {
          display: flex;
          align-items: flex-start;
          gap: 0.75rem;
        }

        .exp-bullet-icon {
          font-size: 0.9rem;
          line-height: 1.4;
          font-weight: 800;
        }

        .exp-bullet-text {
          color: rgba(234, 234, 245, 0.65);
          line-height: 1.6;
          font-size: 0.9rem;
        }

        @media (max-width: 600px) {
          .exp-item {
            padding: 2rem 1.5rem;
          }
          .exp-node {
            display: none;
          }
        }
      `}</style>
    </section>
  );
}