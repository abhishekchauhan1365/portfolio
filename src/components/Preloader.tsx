"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

export default function Preloader() {
  const [complete, setComplete] = useState(false);
  const [percent, setPercent] = useState(0);

  useEffect(() => {
    const start = Date.now();
    const duration = 2400; // 2.4s cinematic load

    const int = setInterval(() => {
      const elapsed = Date.now() - start;
      const progress = Math.min(100, Math.floor((elapsed / duration) * 100));
      setPercent(progress);
      if (progress >= 100) {
        clearInterval(int);
        setTimeout(() => setComplete(true), 400);
      }
    }, 40);
    return () => clearInterval(int);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {!complete && (
        <motion.div
          key="preloader"
          className="preloader-overlay"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0, scale: 1.05 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <div className="preloader-content">
            <motion.div
              className="pl-eyebrow"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              INITIALIZING_SYSTEM_CORE
            </motion.div>

            <motion.h1
              className="pl-title"
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{ duration: 0.6 }}
            >
              ABHISHEK.OS <span>v1.0.4</span>
            </motion.h1>

            <div className="pl-bar-container">
              <motion.div
                className="pl-bar-fill"
                initial={{ width: 0 }}
                animate={{ width: `${percent}%` }}
                transition={{ duration: 0.1 }}
              />
            </div>

            <div className="pl-meta">
              <span>{percent}% COMPLETE</span>
              <span>EST_READY: NOW</span>
            </div>

            <div className="pl-lines">
              {[
                "SECURE_PROTOCOL_INIT...",
                "SYNCING_MODULAR_GRID...",
                "LOADING_ASSET_PIPELINE...",
                "ESTABLISHING_CON_V4...",
              ].map((line, i) => (
                <motion.div
                  key={i}
                  className="pl-line"
                  initial={{ opacity: 0, x: -10 }}
                  animate={percent > (i + 1) * 20 ? { opacity: 0.4, x: 0 } : {}}
                  transition={{ duration: 0.4 }}
                >
                  {line}
                </motion.div>
              ))}
            </div>
          </div>

          <style jsx>{`
            .preloader-overlay {
              position: fixed;
              inset: 0;
              background: #030712;
              z-index: 10000;
              display: flex;
              align-items: center;
              justify-content: center;
              flex-direction: column;
              font-family: var(--font-geist-mono);
            }
            .preloader-content {
              width: 100%;
              max-width: 400px;
              padding: 2rem;
            }
            .pl-eyebrow {
              font-size: 0.7rem;
              letter-spacing: 0.25em;
              color: #7c3aed;
              margin-bottom: 0.5rem;
            }
            .pl-title {
              font-size: 1.4rem;
              font-weight: 800;
              color: white;
              margin-bottom: 1.5rem;
              letter-spacing: -0.02em;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .pl-title span {
              font-size: 0.6rem;
              opacity: 0.4;
              font-weight: 400;
              font-family: var(--font-geist-sans);
            }
            .pl-bar-container {
              width: 100%;
              height: 2px;
              background: rgba(255,255,255,0.05);
              border-radius: 1px;
              overflow: hidden;
              margin-bottom: 0.75rem;
            }
            .pl-bar-fill {
              height: 100%;
              background: #7c3aed;
              box-shadow: 0 0 10px #7c3aed80;
            }
            .pl-meta {
              display: flex;
              justify-content: space-between;
              font-size: 0.6rem;
              color: rgba(255,255,255,0.4);
              letter-spacing: 0.1em;
              margin-bottom: 2rem;
            }
            .pl-lines {
              display: flex;
              flex-direction: column;
              gap: 0.4rem;
            }
            .pl-line {
              font-size: 0.6rem;
              color: white;
            }
          `}</style>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
