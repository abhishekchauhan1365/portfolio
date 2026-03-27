"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: "relative", overflow: "hidden" }}>

      {/* ── Enhanced Tea CTA section ─────────────────────────────── */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "5rem 2rem 0",
        }}
      >
        {/* Card-style container for tea section */}
        <div style={{
          background: "linear-gradient(135deg, rgba(124, 58, 237, 0.08), rgba(79, 70, 229, 0.03))",
          borderRadius: "32px",
          border: "1px solid rgba(167, 139, 250, 0.15)",
          backdropFilter: "blur(8px)",
          padding: "2rem",
          position: "relative",
          overflow: "hidden",
        }}>
          {/* Decorative elements */}
          <div style={{
            position: "absolute",
            top: "-50%",
            right: "-20%",
            width: "300px",
            height: "300px",
            background: "radial-gradient(circle, rgba(167, 139, 250, 0.15), transparent)",
            borderRadius: "50%",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute",
            bottom: "-30%",
            left: "-10%",
            width: "200px",
            height: "200px",
            background: "radial-gradient(circle, rgba(45, 212, 191, 0.1), transparent)",
            borderRadius: "50%",
            pointerEvents: "none",
          }} />

          <div style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "2rem",
            flexWrap: "wrap",
            position: "relative",
            zIndex: 2,
          }}>
            {/* Left side - Tea imagery with steam animation */}
            <div style={{
              flex: "0 0 auto",
              position: "relative",
            }}>
              <div style={{
                position: "relative",
                width: "180px",
                height: "180px",
                margin: "0 auto",
              }}>
                <div style={{
                  position: "absolute",
                  inset: 0,
                  background: "radial-gradient(circle, rgba(167, 139, 250, 0.2), transparent)",
                  borderRadius: "50%",
                  filter: "blur(20px)",
                }} />
                <img
                  src="/cup_of_tea.png"
                  alt="A warm cup of tea"
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    borderRadius: "50%",
                    display: "block",
                    filter: "brightness(0.95) contrast(1.08)",
                    boxShadow: "0 25px 40px -12px rgba(0,0,0,0.5), 0 0 0 2px rgba(167,139,250,0.2)",
                    position: "relative",
                    zIndex: 1,
                  }}
                />
                {/* Animated steam rings */}
                <div style={{
                  position: "absolute",
                  top: "-15px",
                  left: "50%",
                  transform: "translateX(-50%)",
                  display: "flex",
                  gap: "8px",
                  pointerEvents: "none",
                }}>
                  {[...Array(3)].map((_, i) => (
                    <motion.div
                      key={i}
                      animate={{
                        y: [-5, -15, -5],
                        opacity: [0.4, 0.8, 0.4],
                        scale: [0.8, 1.2, 0.8],
                      }}
                      transition={{
                        duration: 2 + i * 0.3,
                        repeat: Infinity,
                        delay: i * 0.5,
                      }}
                      style={{
                        width: `${8 + i * 3}px`,
                        height: `${8 + i * 3}px`,
                        background: "radial-gradient(circle, rgba(167, 139, 250, 0.6), transparent)",
                        borderRadius: "50%",
                        filter: "blur(2px)",
                      }}
                    />
                  ))}
                </div>
                <motion.span
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                  style={{
                    position: "absolute",
                    bottom: "-10px",
                    right: "10px",
                    fontSize: "2rem",
                    filter: "drop-shadow(0 0 6px rgba(167,139,250,0.5))",
                  }}
                >
                  ☕
                </motion.span>
              </div>
            </div>

            {/* Right side - Text and CTA */}
            <div style={{
              flex: 1,
              minWidth: "250px",
            }}>
              <div style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "0.5rem",
                background: "rgba(167, 139, 250, 0.12)",
                padding: "0.3rem 1rem",
                borderRadius: "40px",
                marginBottom: "1rem",
              }}>
                <span style={{
                  width: "8px",
                  height: "8px",
                  background: "#f59e0b",
                  borderRadius: "50%",
                  display: "inline-block",
                }} />
                <span style={{
                  fontFamily: "var(--font-geist-mono)",
                  fontSize: "0.7rem",
                  fontWeight: 600,
                  letterSpacing: "0.08em",
                  color: "#f59e0b",
                }}>
                  SUPPORT THE WORK
                </span>
              </div>

              <h3 style={{
                fontSize: "clamp(1.8rem, 5vw, 2.5rem)",
                fontWeight: 800,
                letterSpacing: "-0.03em",
                color: "#eaeaf5",
                lineHeight: 1.2,
                marginBottom: "1rem",
              }}>
                Buy me a <span style={{
                  background: "linear-gradient(135deg, #f59e0b, #d97706)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}>cup of tea</span>
              </h3>

              <p style={{
                fontSize: "0.9rem",
                color: "rgba(234,234,245,0.55)",
                lineHeight: 1.6,
                marginBottom: "1.5rem",
                maxWidth: "420px",
              }}>
                Late nights, endless cups of tea, and a passion for building 
                meaningful things. Your support keeps the code flowing and 
                the creativity brewing. ☕✨
              </p>

              <div style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
              }}>
                <motion.a
                  href="https://buymeacoffee.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1.8rem",
                    background: "linear-gradient(135deg, #f59e0b, #d97706)",
                    color: "#fff",
                    borderRadius: "12px",
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    textDecoration: "none",
                    boxShadow: "0 8px 20px -8px rgba(245, 158, 11, 0.4)",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span style={{ fontSize: "1.2rem" }}>☕</span>
                  Buy me a tea
                </motion.a>
                
                <motion.a
                  href="https://ko-fi.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.05, y: -2 }}
                  style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "0.6rem",
                    padding: "0.75rem 1.5rem",
                    background: "rgba(255, 255, 255, 0.05)",
                    border: "1px solid rgba(255, 255, 255, 0.1)",
                    color: "rgba(234,234,245,0.8)",
                    borderRadius: "12px",
                    fontWeight: 600,
                    fontSize: "0.85rem",
                    textDecoration: "none",
                    transition: "all 0.2s ease",
                  }}
                >
                  <span>🎁</span>
                  Support on Ko-fi
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* ── Separator ──────────────────────────────────────── */}
      <div style={{
        maxWidth: "1200px",
        margin: "4rem auto 0",
        height: "1px",
        background: "linear-gradient(90deg, transparent, rgba(167,139,250,0.2), transparent)",
      }} />

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
          maxWidth: "1200px",
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

      {/* Add keyframes for animations */}
      <style>{`
        @keyframes float-steam {
          0%, 100% { transform: translateX(-50%) translateY(0); opacity: 1; }
          50% { transform: translateX(-50%) translateY(-8px); opacity: 0.7; }
        }
      `}</style>
    </footer>
  );
}