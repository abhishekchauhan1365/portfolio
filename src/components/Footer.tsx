"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>

      {/* ── Tea CTA section ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "5rem 2rem 0",
          display: "flex",
          alignItems: "center",
          gap: "3rem",
          flexWrap: "wrap",
          justifyContent: "center",
        }}
      >
        {/* Tea image */}
        <div style={{ position: "relative", flexShrink: 0 }}>
          <img
            src="/cup_of_tea.png"
            alt="A warm cup of tea"
            style={{
              width: "clamp(140px, 20vw, 200px)",
              height: "clamp(140px, 20vw, 200px)",
              objectFit: "cover",
              borderRadius: "24px",
              display: "block",
              filter: "brightness(0.92) contrast(1.05)",
              boxShadow: "0 20px 50px rgba(0,0,0,0.55), 0 0 0 1px rgba(255,255,255,0.05)",
            }}
          />
          {/* Steam emoji overlay */}
          <span style={{
            position: "absolute",
            top: "-18px",
            left: "50%",
            transform: "translateX(-50%)",
            fontSize: "1.6rem",
            filter: "drop-shadow(0 0 8px rgba(167,139,250,0.4))",
            animation: "float-steam 3s ease-in-out infinite",
          }}>☕</span>
        </div>

        {/* Text */}
        <div style={{ maxWidth: "380px" }}>
          <p style={{
            fontFamily: "var(--font-geist-mono)",
            fontSize: "0.7rem",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            color: "rgba(167,139,250,0.5)",
            marginBottom: "0.75rem",
          }}>
            If my work helped you
          </p>
          <h3 style={{
            fontSize: "clamp(1.6rem, 4vw, 2.2rem)",
            fontWeight: 900,
            letterSpacing: "-0.03em",
            color: "#eaeaf5",
            lineHeight: 1.15,
            marginBottom: "1rem",
          }}>
            Wanna buy me<br />a cup of tea?
          </h3>
          <p style={{
            fontSize: "0.9rem",
            color: "rgba(234,234,245,0.4)",
            lineHeight: 1.7,
            marginBottom: "1.5rem",
          }}>
            I build things late into the night — fuelled by tea and the joy of solving problems.
            If you liked my work, a small gesture means a lot. ☕
          </p>
          <motion.a
            href="https://buymeacoffee.com"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.04, y: -2 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.5rem",
              padding: "0.65rem 1.5rem",
              background: "linear-gradient(135deg, #7c3aed, #4f46e5)",
              color: "#fff",
              borderRadius: "10px",
              fontWeight: 700,
              fontSize: "0.88rem",
              textDecoration: "none",
              boxShadow: "0 8px 24px -6px rgba(124,58,237,0.55)",
            }}
          >
            ☕ Buy me a tea
          </motion.a>
        </div>
      </motion.div>

      {/* ── Separator ──────────────────────────────────────── */}
      <div style={{
        maxWidth: "900px",
        margin: "4rem auto 0",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.15), transparent)",
      }} />


      <style>{`
        @keyframes float-steam {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(-8px); opacity: 0.7; }
        }
      `}</style>

      {/* Big PORTFOLIO wordmark */}
      <div style={{
        padding: "3rem 1.5rem 0",
        textAlign: "center",
        overflow: "hidden",
        userSelect: "none",
        pointerEvents: "none",
      }}>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{
            fontSize: "clamp(4.5rem, 18vw, 16rem)",
            fontWeight: 900,
            letterSpacing: "-0.04em",
            lineHeight: 0.85,
            background: "linear-gradient(135deg, #7c3aed 0%, #a78bfa 50%, #4f46e5 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
            fontFamily: "var(--font-geist-sans), Arial, sans-serif",
          }}
        >
          PORTFOLIO
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div style={{
        borderTop: "1px solid rgba(255,255,255,0.05)",
        padding: "1.75rem 1.5rem",
        marginTop: "3rem",
      }}>
        <div style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: "1rem",
        }}>
          <div style={{
            fontSize: "1.2rem",
            fontWeight: 800,
            letterSpacing: "-0.04em",
            color: "#eaeaf5",
          }}>
            Abhishek<span style={{ color: "#a78bfa" }}>.</span>
          </div>

          <p style={{
            color: "rgba(234,234,245,0.25)",
            fontSize: "0.78rem",
            fontFamily: "var(--font-geist-mono)",
          }}>
            © {year} — Built with Next.js &amp; ❤️
          </p>

          <div style={{ display: "flex", gap: "1.5rem" }}>
            {[
              { name: "GitHub", url: "https://github.com/abhishekchauhan1365" },
              { name: "LinkedIn", url: "https://linkedin.com/in/abhisheksinghchauhan1" },
              { name: "LeetCode", url: "https://leetcode.com/u/abhisheksinghchauhan1365" },
            ].map((link) => (
              <motion.a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ color: "#a78bfa" }}
                style={{
                  color: "rgba(234,234,245,0.3)",
                  fontSize: "0.78rem",
                  textDecoration: "none",
                  transition: "color 0.2s",
                  fontFamily: "var(--font-geist-mono)",
                }}
              >
                {link.name}
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
