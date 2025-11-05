'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap, Target, Rocket } from 'lucide-react';

interface PromptFormProps {
  onSubmit: (prompt: string) => void;
  isLoading: boolean;
}

export default function PromptForm({ onSubmit, isLoading }: PromptFormProps) {
  const [prompt, setPrompt] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim() && !isLoading) {
      onSubmit(prompt);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
      className="w-full max-w-4xl mx-auto"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* Header */}
        <div className="text-center space-y-4 mt-8 md:mt-0">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", delay: 0.3 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-effect"
          >
            <Sparkles className="w-5 h-5 text-neon-gold animate-pulse" />
            <span className="text-sm font-medium text-gray-300">
              AI-Powered Prompt Enhancement
            </span>
          </motion.div>
          
          <h2 className="text-5xl md:text-6xl font-display font-bold text-glow leading-tight">
            Transform Your Ideas Into
            <br />
            <span className="text-neon-orange">Developer-Grade Prompts</span>
          </h2>
          
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Turn raw thoughts into precise, professional prompts that follow software engineering best practices.
          </p>
        </div>

        {/* Input Area */}
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-neon-gold rounded-2xl opacity-20 blur-xl" />
          <div className="relative glass-effect-strong rounded-2xl p-6 space-y-4">
            <label htmlFor="prompt" className="block text-sm font-medium text-gray-300 mb-2">
              Your Raw Prompt
            </label>
            <textarea
              id="prompt"
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              placeholder="Enter your raw idea or prompt here... e.g., 'make a login page with react'"
              className="w-full h-48 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-neon-orange focus:ring-2 focus:ring-neon-orange/20 transition-all resize-none"
              disabled={isLoading}
            />
            
            <div className="flex items-center justify-between">
              <div className="text-sm text-gray-500">
                {prompt.length} characters
              </div>
              
              <motion.button
                type="submit"
                disabled={!prompt.trim() || isLoading}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="relative group px-8 py-3 rounded-xl font-semibold text-white bg-gradient-to-r from-neon-orange to-neon-gold disabled:opacity-50 disabled:cursor-not-allowed overflow-hidden"
              >
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform" />
                <span className="relative flex items-center gap-2">
                  <Zap className="w-5 h-5" />
                  {isLoading ? 'Processing...' : 'Enhance Prompt'}
                </span>
              </motion.button>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
          {[
            { 
              Icon: Target, 
              title: 'Precise', 
              desc: 'Clear technical direction',
              gradient: 'from-orange-500/20 via-orange-400/10 to-transparent',
              iconBg: 'bg-gradient-to-br from-[#FF8C42] to-[#FF6B35]',
              glow: 'group-hover:shadow-[0_0_30px_rgba(255,140,66,0.3)]'
            },
            { 
              Icon: Zap, 
              title: 'Fast', 
              desc: 'Results in seconds',
              gradient: 'from-amber-500/20 via-yellow-400/10 to-transparent',
              iconBg: 'bg-gradient-to-br from-[#FFD700] to-[#FFA500]',
              glow: 'group-hover:shadow-[0_0_30px_rgba(255,215,0,0.3)]'
            },
            { 
              Icon: Rocket, 
              title: 'Professional', 
              desc: 'Industry standards',
              gradient: 'from-orange-600/20 via-red-500/10 to-transparent',
              iconBg: 'bg-gradient-to-br from-[#FF6B35] to-[#D84315]',
              glow: 'group-hover:shadow-[0_0_30px_rgba(255,107,53,0.3)]'
            },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className={`relative glass-effect rounded-xl p-4 md:p-6 text-center group hover:glass-effect-strong transition-all duration-300 overflow-hidden before:absolute before:inset-0 before:bg-gradient-to-br before:${feature.gradient} before:opacity-0 hover:before:opacity-100 before:transition-opacity before:duration-500`}
            >
              <motion.div 
                className={`relative inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 mb-3 md:mb-4 rounded-xl ${feature.iconBg} shadow-lg ${feature.glow} transition-all duration-300`}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <feature.Icon className="w-7 h-7 md:w-8 md:h-8 text-white drop-shadow-lg" strokeWidth={2} />
              </motion.div>
              <div className="relative z-10 font-semibold text-white mb-1 text-sm md:text-base">{feature.title}</div>
              <div className="relative z-10 text-xs md:text-sm text-gray-400">{feature.desc}</div>
            </motion.div>
          ))}
        </div>
      </form>
    </motion.div>
  );
}
