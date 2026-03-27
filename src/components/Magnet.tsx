"use client";

import { useEffect, useRef } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

interface MagnetProps {
  children: React.ReactNode;
  padding?: number;
  disabled?: boolean;
  magnetStrength?: number;
  activeTransition?: string;
  inactiveTransition?: string;
  wrapperClassName?: string;
  innerClassName?: string;
}

export default function Magnet({
  children,
  padding = 100,
  disabled = false,
  magnetStrength = 2,
  wrapperClassName = "",
  innerClassName = "",
}: MagnetProps) {
  const wrapperRef = useRef<HTMLDivElement>(null);

  // Motion values for smooth X/Y translation
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Physics springs for organic pull
  const springX = useSpring(x, { stiffness: 150, damping: 15, mass: 0.1 });
  const springY = useSpring(y, { stiffness: 150, damping: 15, mass: 0.1 });

  useEffect(() => {
    if (disabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!wrapperRef.current) return;

      const { left, top, width, height } = wrapperRef.current.getBoundingClientRect();
      const centerX = left + width / 2;
      const centerY = top + height / 2;

      const distX = Math.abs(centerX - e.clientX);
      const distY = Math.abs(centerY - e.clientY);

      // Check if mouse is within the magnetic field (padding distance)
      if (distX < width / 2 + padding && distY < height / 2 + padding) {
        // Calculate the pull relative to the center
        const offsetX = (e.clientX - centerX) / magnetStrength;
        const offsetY = (e.clientY - centerY) / magnetStrength;
        x.set(offsetX);
        y.set(offsetY);
      } else {
        x.set(0);
        y.set(0);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [x, y, padding, disabled, magnetStrength]);

  return (
    <div
      ref={wrapperRef}
      className={wrapperClassName}
      style={{ position: "relative", display: "inline-block" }}
    >
      <motion.div
        style={{
          x: springX,
          y: springY,
        }}
        className={innerClassName}
      >
        {children}
      </motion.div>
    </div>
  );
}