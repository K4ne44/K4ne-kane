"use client";

import { motion } from "framer-motion";

const socials = [
  { icon: "fab fa-github", href: "https://github.com/K4ne44", label: "GitHub" },
  { icon: "fab fa-linkedin", href: "https://linkedin.com/in/k4ne", label: "LinkedIn" },
  { icon: "fab fa-instagram", href: "https://www.instagram.com/k4ne.rw/", label: "instagram" },
  { icon: "fas fa-envelope", href: "https://mail.google.com/mail/u/0/#search/k4ne4ever%40gmail.com", label: "Email" },
];

export default function FloatingSocials() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      {socials.map((social, i) => (
        <motion.a
          key={social.label}
          href={social.href}
          target="_blank"
          rel="noopener noreferrer"
          initial={{ opacity: 0, scale: 0, x: 100 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ delay: 1.5 + i * 0.1, type: "spring" }}
          whileHover={{ scale: 1.15, y: -2 }}
          className="w-11 h-11 rounded-full glass flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all shadow-lg"
          title={social.label}
        >
          <i className={social.icon} />
        </motion.a>
      ))}
    </div>
  );
}
