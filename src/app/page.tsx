"use client";

import { useEffect } from "react";
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileSection from "@/components/ProfileSection";
import AboutSection from "@/components/AboutSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import ExperienceSection from "@/components/ExperienceSection";
import AchievementsSection from "@/components/AchievementsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import Background from "@/components/Background";
import Preloader from "@/components/Preloader";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  // Track cursor strictly through MotionValues to prevent any React re-renders
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  // Core cursor coordinates
  const cursorX = mouseX;
  const cursorY = mouseY;

  // Follower (smooth physics)
  const smoothX = useSpring(mouseX, { stiffness: 400, damping: 25 });
  const smoothY = useSpring(mouseY, { stiffness: 400, damping: 25 });
  const followerX = useTransform(smoothX, v => v - 24);
  const followerY = useTransform(smoothY, v => v - 24);

  // Background glow (slow physics)
  const glowSpringX = useSpring(mouseX, { stiffness: 80, damping: 30 });
  const glowSpringY = useSpring(mouseY, { stiffness: 80, damping: 30 });
  const glowX = useTransform(glowSpringX, v => v - 300);
  const glowY = useTransform(glowSpringY, v => v - 300);

  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", updateMousePosition, { passive: true });

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, [mouseX, mouseY]);

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", position: "relative" }}>
      
      {/* Cinematic Startup Sequence */}
      <Preloader />
      
      {/* Interactive Canvas Particle Mesh Background */}
      <Background />
      
      {/* Global Scroll Progress Bar */}
      <motion.div
        style={{
          scaleX,
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          height: "3px",
          background: "linear-gradient(90deg, #7c3aed, #4f46e5)",
          transformOrigin: "0%",
          zIndex: 9999,
        }}
      />

      {/* Global Interactive Cursor Glow Effect */}
      <motion.div
        style={{
          x: glowX,
          y: glowY,
          position: "fixed",
          top: 0,
          left: 0,
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(124, 58, 237, 0.04) 0%, transparent 60%)",
          pointerEvents: "none",
          zIndex: 50, // Render behind text but above deep background
        }}
        className="custom-cursor-glow"
      />

      {/* Custom Mouse Cursor Core - Mix Blend Difference for interaction */}
      <motion.div
        style={{
          x: cursorX,
          y: cursorY,
          position: "fixed",
          top: 0,
          left: 0,
          width: "14px",
          height: "14px",
          borderRadius: "50%",
          background: "#fff",
          pointerEvents: "none",
          zIndex: 10000,
          mixBlendMode: "difference",
        }}
        className="custom-cursor-core"
      />
      
      {/* Custom Mouse Cursor Follower */}
      <motion.div
        style={{
          x: followerX,
          y: followerY,
          position: "fixed",
          top: 0,
          left: 0,
          width: "48px",
          height: "48px",
          borderRadius: "50%",
          background: "rgba(124, 58, 237, 0.05)",
          border: "1px solid rgba(124, 58, 237, 0.2)",
          pointerEvents: "none",
          zIndex: 9999,
        }}
        className="custom-cursor-follower"
      />

      <Navbar />
      
      <main style={{ flex: 1, position: "relative", zIndex: 1 }}>
        <HeroSection />
        
        <ProfileSection />
        
        <AboutSection />
        <SkillsSection />
        
        <ProjectsSection />
        <ExperienceSection />
        
        <AchievementsSection />
        <ContactSection />
      </main>

      <Footer />

      <style>{`
        /* Hide default cursor on desktop environments */
        @media (pointer: fine) {
          body { cursor: none; }
          a, button, input, textarea { cursor: none; }
          
          /* Kinematic Hover Sizing */
          .custom-cursor-core {
            transition: width 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275), 
                        height 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275),
                        margin 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
            /* Centering mechanism */
            margin-top: -7px;
            margin-left: -7px;
          }

          body:has(a:hover) .custom-cursor-core,
          body:has(button:hover) .custom-cursor-core,
          body:has(.interactive:hover) .custom-cursor-core {
            width: 50px !important;
            height: 50px !important;
            margin-top: -25px !important;
            margin-left: -25px !important;
          }
        }
        
        /* Hide custom cursor on touch devices */
        @media (pointer: coarse) {
          .custom-cursor-core, .custom-cursor-follower { display: none !important; }
        }
      `}</style>
    </div>
  );
}