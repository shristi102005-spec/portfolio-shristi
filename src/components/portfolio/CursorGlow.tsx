import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function CursorGlow() {
  const [pos, setPos] = useState({ x: -200, y: -200 });
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      setVisible(true);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <motion.div
      className="pointer-events-none fixed z-[100] h-[400px] w-[400px] rounded-full mix-blend-screen"
      style={{
        background: "radial-gradient(circle, oklch(0.7 0.25 285 / 0.15), transparent 70%)",
        left: pos.x - 200,
        top: pos.y - 200,
        opacity: visible ? 1 : 0,
      }}
      animate={{ left: pos.x - 200, top: pos.y - 200 }}
      transition={{ type: "spring", damping: 30, stiffness: 200, mass: 0.5 }}
    />
  );
}