"use client";

import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const roles = [
  "Software Developer",
  "React Developer",
  "Full Stack Developer",
  "Problem Solver",
  "Student Developer",
];

export default function HeroSection() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState("");
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  useEffect(() => {
    const currentRole = roles[roleIndex];
    let timeout: NodeJS.Timeout;

    if (!isDeleting && charIndex < currentRole.length) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex + 1));
        setCharIndex((prev) => prev + 1);
      }, 60);
    } else if (!isDeleting && charIndex === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && charIndex > 0) {
      timeout = setTimeout(() => {
        setDisplayText(currentRole.slice(0, charIndex - 1));
        setCharIndex((prev) => prev - 1);
      }, 40);
    } else if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-hidden section-padding"
    >
      <div
        className="absolute inset-0 opacity-30"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(124, 58, 237, 0.08), transparent 40%)`,
        }}
      />

      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-500/10 rounded-full blur-[100px] animate-float-slow" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-[120px] animate-float" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-1/3 right-1/3 w-48 h-48 bg-blue-500/10 rounded-full blur-[80px] animate-float-slow" style={{ animationDelay: "-5s" }} />

      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative mb-8"
        >
          <div className="w-40 h-40 md:w-52 md:h-52 rounded-full relative animate-float">
            <div className="absolute inset-0 rounded-full animate-pulse-glow" />
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-purple-500 via-cyan-400 to-purple-600 p-[3px]">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                <div className="w-full h-full rounded-full bg-gradient-to-br from-purple-900/50 to-cyan-900/50 flex items-center justify-center">
                  <span className="text-5xl md:text-6xl font-bold text-gradient-simple">
                    K
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-sm md:text-base uppercase tracking-[0.3em] text-purple-400 mb-3 font-mono">
            K4NE / KANE
          </p>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-4 tracking-tight">
            Muvunyi{" "}
            <span className="text-gradient">Hidjazi</span>
          </h1>
          <div className="h-10 md:h-12 flex items-center justify-center mb-8">
            <span className="text-xl md:text-2xl lg:text-3xl text-gray-300 font-mono">
              <span>{displayText}</span>
              <span className="text-purple-400 animate-pulse">|</span>
            </span>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex flex-wrap gap-4 justify-center"
        >
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full bg-gradient-to-r from-purple-600 to-cyan-500 text-white font-medium shadow-lg shadow-purple-500/25 hover:shadow-purple-500/40 transition-shadow"
          >
            View Projects
          </motion.a>
          <motion.a
            href="#"
            onClick={(e) => {
              e.preventDefault();
              alert("CV download will be available soon.");
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full border border-purple-500/30 text-purple-300 font-medium glass-hover hover:border-purple-500/50 transition-all"
          >
            Download CV
          </motion.a>
          <motion.a
            href="#contact"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-8 py-3 rounded-full glass font-medium text-gray-300 hover:text-white border border-white/10 transition-all"
          >
            Contact Me
          </motion.a>
        </motion.div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <i className="fas fa-chevron-down text-purple-400/50 text-xl" />
        </motion.div>
      </motion.div>
    </section>
  );
}
