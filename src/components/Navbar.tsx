'use client';

import { motion } from 'framer-motion';
import { Code2, Sparkles } from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-40 glass-effect"
    >
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="relative">
              <Code2 className="w-8 h-8 text-neon-orange" />
              <Sparkles className="w-4 h-4 text-neon-gold absolute -top-1 -right-1 animate-pulse" />
            </div>
            <div>
              <h1 className="text-2xl font-display font-bold text-glow">
                devs-prompt
              </h1>
              <p className="text-xs text-gray-400 font-light">
                Transform ideas into world-class prompts
              </p>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full glass-effect text-sm">
              <div className="w-2 h-2 rounded-full bg-neon-orange animate-pulse" />
              <span className="text-gray-300">AI Powered</span>
            </div>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
