'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Zap } from 'lucide-react';

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
            { icon: '🎯', title: 'Precise', desc: 'Clear technical direction' },
            { icon: '⚡', title: 'Fast', desc: 'Results in seconds' },
            { icon: '🚀', title: 'Professional', desc: 'Industry standards' },
          ].map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 + i * 0.1 }}
              className="glass-effect rounded-xl p-4 text-center"
            >
              <div className="text-3xl mb-2">{feature.icon}</div>
              <div className="font-semibold text-white mb-1">{feature.title}</div>
              <div className="text-sm text-gray-400">{feature.desc}</div>
            </motion.div>
          ))}
        </div>
      </form>
    </motion.div>
  );
}
