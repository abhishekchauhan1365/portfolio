"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", id: "home" },
  { label: "Profile", id: "profile" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Achievements", id: "achievements" },
  { label: "Contact", id: "contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState("home");

  const handleDownload = () => {
    setTimeout(() => {
      const link = document.createElement("a");
      link.href = "https://drive.google.com/uc?export=download&id=1ARjP22qSJD6hS1e7-RfpVUh9ex5Dq7PB";
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }, 500);
  };

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll Spy logic for active tab highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveTab(entry.target.id);
          }
        });
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );

    navLinks.forEach((link) => {
      const el = document.getElementById(link.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          height: "72px",
          transition: "all 0.3s ease",
          background: scrolled
            ? "rgba(5, 5, 16, 0.85)"
            : "transparent",
          backdropFilter: scrolled ? "blur(20px)" : "none",
          borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "none",
        }}
      >
        <div style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "0 2rem",
          height: "100%",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}>
          {/* Logo */}
          <a
            href="#home"
            style={{
              background: "none",
              border: "none",
              cursor: "pointer",
              padding: 0,
              textDecoration: "none",
            }}
          >
            <motion.div
              whileHover={{ scale: 1.05 }}
              style={{
                fontSize: "1.4rem",
                fontWeight: 800,
                letterSpacing: "-0.04em",
                color: "#e8e8f0",
                display: "flex",
                alignItems: "baseline"
              }}
            >
              Abhishek
              <span style={{ color: "#a78bfa", fontSize: "1.8rem", lineHeight: 0 }}>.</span>
            </motion.div>
          </a>

          {/* Desktop Nav */}
          <nav style={{ display: "flex", gap: "1.5rem", alignItems: "center" }} className="desktop-nav">
            {navLinks.map((link, i) => {
              const isActive = activeTab === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * i + 0.3 }}
                  whileHover={{ color: "#a78bfa" }}
                  style={{
                    background: "none",
                    border: "none",
                    cursor: "pointer",
                    color: isActive ? "#a78bfa" : "rgba(232,232,240,0.7)",
                    fontSize: "0.85rem",
                    fontWeight: isActive ? 600 : 500,
                    transition: "all 0.2s",
                    display: "none",
                    position: "relative",
                    padding: "0.5rem",
                    textDecoration: "none",
                  }}
                  className="nav-link"
                >
                  {link.label}
                  {isActive && (
                    <motion.div
                      layoutId="activeTabIndicator"
                      style={{
                        position: "absolute",
                        bottom: 0,
                        left: 0,
                        right: 0,
                        height: "2px",
                        background: "#a78bfa",
                        borderRadius: "2px",
                      }}
                    />
                  )}
                </motion.a>
              );
            })}
            
            <motion.a
              href="https://drive.google.com/file/d/1ARjP22qSJD6hS1e7-RfpVUh9ex5Dq7PB/view?usp=sharing"
              target="_blank"
              onClick={handleDownload}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.6 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                textDecoration: "none",
                padding: "0.5rem 1.25rem",
                borderRadius: "99px",
                fontSize: "0.875rem",
                fontWeight: 600,
                boxShadow: "0 0 20px rgba(124, 58, 237, 0.35)",
                display: "none",
                marginLeft: "1rem",
              }}
              className="nav-cta"
            >
              Download CV
            </motion.a>

            {/* Hamburger */}
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="hamburger"
              aria-label="Toggle menu"
              style={{
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: "0.5rem",
                display: "flex",
                flexDirection: "column",
                gap: "5px",
              }}
            >
              {[0, 1, 2].map((i) => (
                <motion.span
                  key={i}
                  animate={{
                    rotate: menuOpen && i === 0 ? 45 : menuOpen && i === 2 ? -45 : 0,
                    y: menuOpen && i === 0 ? 11 : menuOpen && i === 2 ? -11 : 0,
                    opacity: menuOpen && i === 1 ? 0 : 1,
                  }}
                  style={{
                    display: "block",
                    width: "24px",
                    height: "2px",
                    background: "#e8e8f0",
                    borderRadius: "2px",
                  }}
                />
              ))}
            </button>
          </nav>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            style={{
              position: "fixed",
              top: "72px",
              left: 0,
              right: 0,
              zIndex: 99,
              background: "rgba(5, 5, 16, 0.97)",
              backdropFilter: "blur(20px)",
              padding: "1.5rem 2rem 2rem",
              borderBottom: "1px solid rgba(255,255,255,0.06)",
              display: "flex",
              flexDirection: "column",
              gap: "1.25rem",
            }}
            className="mobile-menu"
          >
            {navLinks.map((link, i) => {
              const isActive = activeTab === link.id;
              return (
                <motion.a
                  key={link.id}
                  href={`#${link.id}`}
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 * i }}
                  style={{
                    background: "none",
                    border: "none",
                    textAlign: "left",
                    color: isActive ? "#a78bfa" : "rgba(232,232,240,0.85)",
                    fontSize: "1.1rem",
                    fontWeight: isActive ? 600 : 500,
                    cursor: "pointer",
                    padding: "0.5rem 0",
                    textDecoration: "none",
                  }}
                >
                  {link.label}
                </motion.a>
              );
            })}
            
            <a
              href="https://drive.google.com/file/d/1ARjP22qSJD6hS1e7-RfpVUh9ex5Dq7PB/view?usp=sharing"
              target="_blank"
              onClick={() => {
                setMenuOpen(false);
                handleDownload();
              }}
              style={{
                background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
                color: "#fff",
                textDecoration: "none",
                padding: "0.75rem 1.5rem",
                borderRadius: "99px",
                fontSize: "1rem",
                fontWeight: 600,
                textAlign: "center",
                marginTop: "0.5rem",
              }}
            >
              Download CV
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (min-width: 640px) {
          .nav-link { display: inline-flex !important; }
          .nav-cta { display: inline-flex !important; }
          .hamburger { display: none !important; }
          .mobile-menu { display: none !important; }
        }
      `}</style>
    </>
  );
}