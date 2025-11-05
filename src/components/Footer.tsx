'use client';

import { motion } from 'framer-motion';
import { Code2, ExternalLink, Github, Linkedin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="relative mt-auto border-t border-white/10 flex-shrink-0">
      <div className="max-w-7xl mx-auto px-4 md:px-6 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 items-center text-center md:text-left">
          {/* Left - Branding */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.1 }}
            className="space-y-1 md:space-y-2"
          >
            <div className="flex items-center justify-center md:justify-start gap-2">
              <Code2 className="w-4 h-4 md:w-5 md:h-5 text-neon-orange" />
              <span className="font-display font-bold text-base md:text-lg">devs-prompt</span>
            </div>
            <p className="text-xs md:text-sm text-gray-400">
              Transform ideas into world-class developer prompts
            </p>
          </motion.div>

          {/* Center - Copyright */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-center"
          >
            <a
              href="https://bagaspra16-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect group hover:glass-effect-strong transition-all"
            >
              <span className="text-sm text-gray-400">© {new Date().getFullYear()}</span>
              <span className="text-sm text-gray-400">develop by </span>
              <span className="font-semibold text-neon-orange group-hover:text-neon-gold transition-colors flex items-center gap-1">
                bagaspra16
                <ExternalLink className="w-3 h-3" />
              </span>
            </a>
          </motion.div>

          {/* Right - Links */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center justify-center md:justify-end gap-2 md:gap-3"
          >
            <a
              href="https://bagaspra16-portfolio.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-effect hover:glass-effect-strong hover:text-neon-orange transition-all group"
              aria-label="Portfolio"
            >
              <Code2 className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://github.com/bagaspra16"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-effect hover:glass-effect-strong hover:text-neon-orange transition-all group"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
            <a
              href="https://linkedin.com/in/bagas-pratama-junianika"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg glass-effect hover:glass-effect-strong hover:text-neon-orange transition-all group"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 group-hover:scale-110 transition-transform" />
            </a>
          </motion.div>
        </div>

      </div>

      {/* Decorative gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-neon-orange to-transparent opacity-50" />
    </footer>
  );
}
