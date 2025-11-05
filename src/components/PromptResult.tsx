'use client';

import { motion } from 'framer-motion';
import { Copy, Check, ArrowLeftRight } from 'lucide-react';
import { useState } from 'react';

interface PromptResultProps {
  originalPrompt: string;
  enhancedPrompt: string;
  onReset: () => void;
}

export default function PromptResult({ 
  originalPrompt, 
  enhancedPrompt, 
  onReset 
}: PromptResultProps) {
  const [copied, setCopied] = useState(false);
  const [showComparison, setShowComparison] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(enhancedPrompt);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      className="w-full max-w-7xl mx-auto space-y-3 md:space-y-4 pb-4 md:pb-6"
    >
      {/* Success Header & Actions */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", delay: 0.1 }}
        className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
      >
        <div className="inline-flex items-center gap-2 px-4 md:px-6 py-2 md:py-3 rounded-full glass-effect-strong">
          <div className="w-2 h-2 md:w-3 md:h-3 rounded-full bg-green-500 animate-pulse" />
          <span className="text-sm md:text-lg font-semibold text-white">
            ✨ Enhanced Successfully
          </span>
        </div>
        
        <div className="flex gap-2 w-full sm:w-auto">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowComparison(!showComparison)}
            className="flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg glass-effect hover:glass-effect-strong transition-all flex items-center justify-center gap-2 text-xs md:text-sm"
          >
            <ArrowLeftRight className="w-3 h-3 md:w-4 md:h-4" />
            <span className="hidden sm:inline">{showComparison ? 'Hide' : 'Show'} Comparison</span>
            <span className="sm:hidden">{showComparison ? 'Hide' : 'Compare'}</span>
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleCopy}
            className="flex-1 sm:flex-none px-3 md:px-4 py-2 rounded-lg bg-neon-orange hover:bg-neon-gold transition-colors flex items-center justify-center gap-2 text-xs md:text-sm font-semibold"
          >
            {copied ? (
              <>
                <Check className="w-3 h-3 md:w-4 md:h-4" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3 md:w-4 md:h-4" />
                Copy
              </>
            )}
          </motion.button>
        </div>
      </motion.div>

      {/* Main Content - Side by Side or Single View */}
      {showComparison ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-4"
        >
          {/* Original Prompt */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-gray-600 to-gray-700 rounded-2xl opacity-20 blur-xl" />
            <div className="relative glass-effect-strong rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col">
              <h3 className="text-base md:text-lg font-display font-bold text-gray-400 mb-3 md:mb-4 flex-shrink-0">
                📝 Original Prompt
              </h3>
              <div className="bg-black/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10 overflow-y-auto custom-scrollbar max-h-[300px] md:max-h-[500px] touch-pan-y overscroll-contain">
                <p className="text-gray-300 leading-relaxed whitespace-pre-wrap text-xs md:text-sm select-text">
                  {originalPrompt}
                </p>
              </div>
              <div className="mt-3 md:mt-4 text-xs text-gray-500 flex-shrink-0">
                {originalPrompt.length} characters
              </div>
            </div>
          </div>

          {/* Enhanced Prompt */}
          <div className="relative">
            <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-neon-gold rounded-2xl opacity-30 blur-xl animate-pulse-slow" />
            <div className="relative glass-effect-strong rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col">
              <h3 className="text-base md:text-lg font-display font-bold text-neon-orange mb-3 md:mb-4 flex-shrink-0">
                ✨ Enhanced Prompt
              </h3>
              <div className="bg-black/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-neon-orange/20 overflow-y-auto custom-scrollbar max-h-[300px] md:max-h-[500px] touch-pan-y overscroll-contain">
                <p className="text-white leading-relaxed whitespace-pre-wrap text-xs md:text-sm select-text">
                  {enhancedPrompt}
                </p>
              </div>
              <div className="mt-3 md:mt-4 text-xs text-neon-orange flex-shrink-0">
                {enhancedPrompt.length} chars • {Math.round((enhancedPrompt.length / originalPrompt.length) * 100)}% improvement
              </div>
            </div>
          </div>
        </motion.div>
      ) : (
        <div className="relative">
          <div className="absolute -inset-1 bg-gradient-to-r from-neon-orange to-neon-gold rounded-2xl opacity-30 blur-xl animate-pulse-slow" />
          <div className="relative glass-effect-strong rounded-xl md:rounded-2xl p-4 md:p-6 flex flex-col">
            <h3 className="text-lg md:text-xl font-display font-bold text-neon-orange mb-3 md:mb-4 flex-shrink-0">
              Enhanced Prompt
            </h3>
            <div className="bg-black/50 rounded-lg md:rounded-xl p-4 md:p-6 border border-white/10 overflow-y-auto custom-scrollbar max-h-[400px] md:max-h-[500px] touch-pan-y overscroll-contain">
              <p className="text-white leading-relaxed whitespace-pre-wrap text-sm md:text-base select-text">
                {enhancedPrompt}
              </p>
            </div>
            <div className="mt-3 md:mt-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs md:text-sm text-gray-400 flex-shrink-0">
              <span>{enhancedPrompt.length} characters</span>
              <span>{Math.round((enhancedPrompt.length / originalPrompt.length) * 100)}% improvement</span>
            </div>
          </div>
        </div>
      )}

      {/* Bottom Action */}
      <div className="flex justify-center pt-2 md:pt-3">
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onReset}
          className="w-full sm:w-auto px-6 md:px-8 py-2.5 md:py-3 rounded-lg md:rounded-xl glass-effect-strong hover:border-neon-orange transition-all font-semibold text-sm md:text-base"
        >
          Enhance Another Prompt
        </motion.button>
      </div>
    </motion.div>
  );
}
