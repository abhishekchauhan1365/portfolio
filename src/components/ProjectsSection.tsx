"use client";

import { motion, useInView, useMotionValue, useMotionTemplate } from "framer-motion";
import { useRef } from "react";
import { TechIcon } from "./TechIcon";

const projects = [
  {
    title: "Science Literacy",
    subtitle: "Educational Web Platform",
    desc: "A full-stack educational platform focused on promoting scientific thinking and awareness through interactive articles, quizzes, and experiments.",
    what_i_did: [
      "Built the complete interactive frontend",
      "Developed robust backend REST APIs",
      "Integrated MongoDB database",
      "Implemented secure JWT authentication",
    ],
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "JWT", "REST APIs"],
    github: "#",
    live: "#",
  },
  {
    title: "ChurnSense",
    subtitle: "Customer Churn Prediction System",
    desc: "A machine learning pipeline built to predict customer churn using behavioral and demographic data, helping businesses identify at-risk customers.",
    what_i_did: [
      "Performed data cleaning & preprocessing",
      "Applied intensive feature engineering",
      "Trained classification ML models",
      "Visualized insights using graphs",
    ],
    tags: ["Python", "Pandas", "NumPy", "Scikit-learn", "Matplotlib"],
    github: "#",
  },
  {
    title: "Healthcare Web App",
    subtitle: "Internship Project",
    desc: "A responsive healthcare application enabling users to efficiently browse doctors, book appointments, and manage their personal accounts.",
    what_i_did: [
      "Designed clean frontend UI components",
      "Fixed bugs & optimized performance",
      "Enhanced overall user experience",
      "Collaborated in a team environment",
    ],
    tags: ["HTML", "CSS", "JavaScript", "Git"],
    github: "#",
  },
];

function ProjectCard({ p, inView, index }: { p: any, inView: boolean, index: number }) {
  const cardRef = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  const handleMouseLeave = () => {
    mouseX.set(-1000);
    mouseY.set(-1000);
  };

  const backgroundRadial = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, rgba(124, 58, 237, 0.1), transparent 80%)`;
  const borderRadial = useMotionTemplate`radial-gradient(300px circle at ${mouseX}px ${mouseY}px, rgba(167, 139, 250, 0.8), transparent 60%)`;

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: 0.15 + index * 0.1, duration: 0.6, ease: "easeOut" }}
      className="project-card interactive"
    >
      <motion.div className="spotlight-border" style={{ background: borderRadial }} />
      <motion.div className="spotlight-bg" style={{ background: backgroundRadial }} />

      <div className="project-content-layer">
        {/* Action Links */}
        <div className="project-actions">
          {p.github && (
            <a href={p.github} aria-label="GitHub Repo" className="project-link" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
              </svg>
            </a>
          )}
          {p.live && (
            <a href={p.live} aria-label="Live Demo" className="project-link" target="_blank" rel="noopener noreferrer">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line>
              </svg>
            </a>
          )}
        </div>

        {/* Content Area */}
        <div className="project-content">
          <h3>{p.title}</h3>
          <p className="subtitle">{p.subtitle}</p>
          
          <p className="description">{p.desc}</p>
          
          <h4 className="what-i-did-title">What I Did:</h4>
          <ul className="what-i-did-list">
            {p.what_i_did.map((item: string, idx: number) => (
              <li key={idx}>
                <span className="bullet">▹</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack Tags at bottom */}
        <div className="project-tags">
          {p.tags.map((tag: string) => (
            <span key={tag} className="tag">
              <TechIcon name={tag} size={13} />
              {tag}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default function ProjectsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="projects" ref={ref} className="proj-section">
      <div className="proj-outer">
        
        {/* Left: 1/3 Description Column */}
        <div className="proj-label-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="label-eyebrow">Portfolio</p>
            <h2 className="label-heading">
              Featured<br />Projects
            </h2>
            <div className="label-body">
              <p>
                A selection of full-stack applications and machine learning pipelines I've engineered.
              </p>
              <p>
                Each project demonstrates complex problem-solving, architectural design, and modern technical implementations.
              </p>
            </div>
            
            <a href="https://github.com/abhishekchauhan1365" target="_blank" rel="noopener noreferrer" className="view-more-github interactive">
              View all on GitHub
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14"/><path d="m12 5 7 7-7 7"/>
              </svg>
            </a>
          </motion.div>
        </div>

        {/* Right: 2/3 Projects Grid */}
        <div className="proj-grid">
          {projects.map((p, index) => (
            <ProjectCard key={p.title} p={p} inView={inView} index={index} />
          ))}
        </div>

      </div>

      <style>{`
        .proj-section {
          padding: 8rem 0;
          position: relative;
        }

        .proj-outer {
          max-width: 1300px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (min-width: 960px) {
          .proj-outer {
            grid-template-columns: 320px 1fr;
            gap: 5rem;
          }
        }

        /* Label Column */
        .proj-label-col {
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
          margin-bottom: 2rem;
        }

        .label-body p {
          font-size: 0.95rem;
          color: rgba(234, 234, 245, 0.6);
          line-height: 1.75;
          max-width: 320px;
        }

        .view-more-github {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
          padding: 0.65rem 1.25rem;
          background: rgba(255, 255, 255, 0.04);
          color: #eaeaf5;
          border: 1px solid rgba(255, 255, 255, 0.1);
          border-radius: 10px;
          font-size: 0.85rem;
          font-weight: 600;
          text-decoration: none;
          transition: all 0.2s ease;
        }

        .view-more-github:hover {
          background: rgba(255, 255, 255, 0.08);
          border-color: rgba(167, 139, 250, 0.4);
        }

        /* Projects Grid */
        .proj-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 1.5rem;
        }

        @media (max-width: 1100px) {
          .proj-grid {
            grid-template-columns: 1fr;
          }
        }

        /* ── Project Card Styles ────────────────────────────────── */
        .project-card {
          position: relative;
          background: rgba(4, 4, 16, 0.4);
          border: 1px solid rgba(255, 255, 255, 0.06);
          border-radius: 20px;
          padding: 2.25rem 2.25rem;
          display: flex;
          flex-direction: column;
          overflow: hidden;
          transition: transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
        }

        .project-card:hover {
          transform: translateY(-4px);
        }

        /* Interactive Border & Background Glow */
        .spotlight-border {
          position: absolute;
          inset: -1px;
          border-radius: 20px;
          z-index: 1;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
          mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
          -webkit-mask-composite: xor;
          mask-composite: exclude;
          padding: 1px;
        }
        
        .spotlight-bg {
          position: absolute;
          inset: 0;
          border-radius: 20px;
          z-index: 2;
          opacity: 0;
          transition: opacity 0.3s;
          pointer-events: none;
        }

        .project-card:hover .spotlight-border,
        .project-card:hover .spotlight-bg {
          opacity: 1;
        }

        .project-content-layer {
          position: relative;
          z-index: 5;
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        /* Actions */
        .project-actions {
          position: absolute;
          top: 0;
          right: 0;
          display: flex;
          gap: 0.8rem;
          z-index: 10;
        }

        .project-link {
          color: rgba(232, 232, 240, 0.4);
          transition: color 0.2s, transform 0.2s;
        }

        .project-link:hover {
          color: #a78bfa;
          transform: scale(1.1);
        }

        /* Content */
        .project-content {
          flex: 1;
          display: flex;
          flex-direction: column;
        }

        .project-content h3 {
          font-size: 1.4rem;
          font-weight: 800;
          color: #e8e8f0;
          margin-bottom: 0.25rem;
          padding-right: 4rem; /* room for action icons */
        }

        .project-content .subtitle {
          font-family: var(--font-geist-mono);
          font-size: 0.8rem;
          color: #a78bfa;
          margin-bottom: 1.5rem;
        }

        .project-content .description {
          color: rgba(232, 232, 240, 0.6);
          line-height: 1.6;
          font-size: 0.95rem;
          margin-bottom: 1.5rem;
        }

        .what-i-did-title {
          font-size: 0.85rem;
          color: #e8e8f0;
          margin-bottom: 0.75rem;
          font-weight: 600;
        }

        .what-i-did-list {
          list-style: none;
          padding: 0;
          margin: 0 0 2rem 0;
          display: flex;
          flex-direction: column;
          gap: 0.5rem;
        }

        .what-i-did-list li {
          color: rgba(232, 232, 240, 0.7);
          font-size: 0.9rem;
          display: flex;
          align-items: flex-start;
          gap: 0.5rem;
        }

        .bullet {
          color: #34d399;
          font-size: 1rem;
          line-height: 1;
        }

        /* Tags */
        .project-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 0.5rem;
          margin-top: auto;
        }

        .tag {
          font-family: var(--font-geist-mono);
          font-size: 0.75rem;
          color: rgba(232, 232, 240, 0.6);
          background: rgba(255, 255, 255, 0.03);
          border: 1px solid rgba(255, 255, 255, 0.08);
          padding: 0.3rem 0.6rem;
          border-radius: 6px;
          display: inline-flex;
          align-items: center;
          gap: 0.4rem;
          transition: border-color 0.2s, color 0.2s;
        }

        .tag img {
          opacity: 0.6;
          transition: opacity 0.2s;
        }

        .project-card:hover .tag {
          border-color: rgba(124, 58, 237, 0.2);
          color: rgba(167, 139, 250, 0.9);
        }

        .project-card:hover .tag img {
          opacity: 1;
        }
      `}</style>
    </section>
  );
}
