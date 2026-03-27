"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const contactLinks = [
  {
    label: "Email",
    value: "abhishekchauhan1365@gmail.com",
    href: "mailto:abhishekchauhan1365@gmail.com",
    color: "124, 58, 237",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <rect width="20" height="16" x="2" y="4" rx="2"></rect>
        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "abhisheksinghchauhan1",
    href: "https://linkedin.com/in/abhisheksinghchauhan1",
    color: "59, 130, 246",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
        <rect width="4" height="12" x="2" y="9"></rect>
        <circle cx="4" cy="4" r="2"></circle>
      </svg>
    ),
  },
  {
    label: "GitHub",
    value: "abhishekchauhan1365",
    href: "https://github.com/abhishekchauhan1365",
    color: "245, 158, 11",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.02c3.14-.35 6.5-1.4 6.5-7a4.6 4.6 0 0 0-1.3-3.2 4.3 4.3 0 0 0-.1-3.2s-1-.3-3.3 1.2a11.5 11.5 0 0 0-6 0C8.3 1.5 7.3 1.8 7.3 1.8a4.3 4.3 0 0 0-.1 3.2A4.6 4.6 0 0 0 5 8c0 5.6 3.4 6.6 6.5 7a4.8 4.8 0 0 0-1 3.02V22"></path>
        <path d="M9 20c-5 1.5-5-2.5-7-3"></path>
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+91 90267 70113",
    href: "tel:+919026770113",
    color: "16, 185, 129",
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.59 1h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 8.91a16 16 0 0 0 5.61 5.61l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"></path>
      </svg>
    ),
  },
];

export default function ContactSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section id="contact" ref={ref} className="contact-section">
      <div className="contact-outer">
        
        {/* Left: 1/3 Description Column */}
        <div className="contact-label-col">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <p className="label-eyebrow">Contact</p>
            <h2 className="label-heading">
              Let's Build<br />Something
            </h2>
            <div className="label-body">
              <p>
                I'm currently open to internships, full-time roles, freelance opportunities, and collaborative projects.
              </p>
              <p>
                Whether you have a specific question, a project idea, or just want to connect — my inbox is always open. Let's chat!
              </p>
            </div>
            
            <div className="contact-ctas">
              <a href="mailto:abhishekchauhan1365@gmail.com" className="cta-primary interactive">
                Say Hello
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path>
                </svg>
              </a>
              <a
                href="https://drive.google.com/file/d/1ARjP22qSJD6hS1e7-RfpVUh9ex5Dq7PB/view?usp=sharing"
                target="_blank" rel="noopener noreferrer"
                className="cta-secondary interactive"
              >
                View Resume
              </a>
            </div>
          </motion.div>
        </div>

        {/* Right: 2/3 Contact Grid */}
        <div className="contact-tiles">
          {contactLinks.map((item, i) => (
            <motion.a
              key={item.label}
              href={item.href}
              target={item.label !== "Email" && item.label !== "Phone" ? "_blank" : undefined}
              rel="noopener noreferrer"
              className="contact-tile interactive"
              initial={{ opacity: 0, y: 25 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: 0.15 + i * 0.1, duration: 0.5 }}
              style={{ "--accent": `rgb(${item.color})` } as React.CSSProperties}
            >
              <div className="tile-icon">
                {item.icon}
              </div>
              <div className="tile-text">
                <span className="tile-label">{item.label}</span>
                <span className="tile-value">{item.value}</span>
              </div>
              <svg className="tile-arrow" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17 17 7"></path><path d="M7 7h10v10"></path>
              </svg>
            </motion.a>
          ))}
        </div>

      </div>

      <style>{`
        .contact-section {
          padding: 8rem 0;
          position: relative;
        }

        .contact-outer {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 1.5rem;
          display: grid;
          grid-template-columns: 1fr;
          gap: 4rem;
          align-items: start;
        }

        @media (min-width: 860px) {
          .contact-outer {
            grid-template-columns: 320px 1fr;
            gap: 5rem;
          }
        }

        /* Label Column */
        .contact-label-col {
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

        .contact-ctas {
          display: flex;
          gap: 0.85rem;
          flex-wrap: wrap;
        }

        .cta-primary {
          display: inline-flex;
          align-items: center;
          gap: 0.45rem;
          padding: 0.65rem 1.5rem;
          background: linear-gradient(135deg, #7c3aed, #4f46e5);
          color: #fff;
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: transform 0.25s, box-shadow 0.25s;
          box-shadow: 0 8px 24px -6px rgba(124, 58, 237, 0.55);
        }

        .cta-primary:hover {
          transform: translateY(-2px);
          box-shadow: 0 14px 28px -6px rgba(124, 58, 237, 0.7);
        }

        .cta-secondary {
          display: inline-flex;
          align-items: center;
          padding: 0.65rem 1.5rem;
          background: rgba(255, 255, 255, 0.04);
          color: rgba(234, 234, 245, 0.8);
          border: 1px solid rgba(255, 255, 255, 0.09);
          border-radius: 10px;
          font-size: 0.9rem;
          font-weight: 600;
          text-decoration: none;
          transition: background 0.2s, border-color 0.2s;
        }

        .cta-secondary:hover {
          background: rgba(255, 255, 255, 0.07);
          border-color: rgba(167, 139, 250, 0.3);
        }

        /* Right Panel: Tiles */
        .contact-tiles {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1.25rem;
        }

        @media (min-width: 550px) {
          .contact-tiles {
            grid-template-columns: 1fr 1fr;
          }
        }

        .contact-tile {
          display: flex;
          align-items: center;
          gap: 1.25rem;
          padding: 1.5rem;
          background: rgba(4, 4, 16, 0.4);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.06);
          text-decoration: none;
          position: relative;
          overflow: hidden;
          transition: background 0.3s, border-color 0.3s;
        }

        .contact-tile::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 2px;
          background: var(--accent);
          opacity: 0.6;
        }

        .contact-tile:hover {
          background: rgba(255, 255, 255, 0.02);
          border-color: rgba(255, 255, 255, 0.1);
        }

        .tile-icon {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          background: rgba(255, 255, 255, 0.03);
          color: var(--accent);
          flex-shrink: 0;
        }

        .tile-text {
          display: flex;
          flex-direction: column;
          gap: 0.25rem;
          flex: 1;
          min-width: 0;
        }

        .tile-label {
          font-family: var(--font-geist-mono);
          font-size: 0.75rem;
          font-weight: 600;
          letter-spacing: 0.05em;
          text-transform: uppercase;
          color: var(--accent);
        }

        .tile-value {
          font-size: 0.9rem;
          font-weight: 600;
          color: #eaeaf5;
          white-space: nowrap;
          overflow: hidden;
          text-overflow: ellipsis;
        }

        .tile-arrow {
          color: rgba(234, 234, 245, 0.2);
          transition: color 0.3s, transform 0.3s;
          flex-shrink: 0;
        }

        .contact-tile:hover .tile-arrow {
          color: #eaeaf5;
          transform: translate(2px, -2px);
        }
      `}</style>
    </section>
  );
}