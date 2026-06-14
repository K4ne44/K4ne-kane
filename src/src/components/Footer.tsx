"use client";

import { motion } from "framer-motion";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative border-t border-white/5">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-left"
          >
            <h3 className="text-xl font-bold">
              Muvunyi{" "}
              <span className="text-gradient">Hidjazi</span>
            </h3>
            <p className="text-sm text-gray-500 mt-1 font-mono">
              (K4NE / KANE)
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="flex gap-4"
          >
            {[
              { icon: "fab fa-github", href: "https://github.com/k4ne" },
              { icon: "fab fa-linkedin", href: "https://linkedin.com/in/k4ne" },
              { icon: "fab fa-twitter", href: "https://twitter.com/k4ne" },
              { icon: "fas fa-envelope", href: "mailto:muvunyihidjazi@gmail.com" },
            ].map((social, i) => (
              <motion.a
                key={i}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, y: -3 }}
                className="w-10 h-10 rounded-xl glass flex items-center justify-center text-gray-400 hover:text-purple-400 hover:border-purple-500/30 transition-all"
              >
                <i className={social.icon} />
              </motion.a>
            ))}
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 pt-8 border-t border-white/5 text-center"
        >
          <p className="text-gray-500 italic text-sm mb-2">
            &ldquo;Building the future through code.&rdquo;
          </p>
          <p className="text-gray-600 text-xs">
            Copyright &copy; {currentYear} Muvunyi Hidjazi (K4NE). All rights
            reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
