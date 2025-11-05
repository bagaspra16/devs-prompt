'use client';

import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import PromptForm from '@/components/PromptForm';
import PromptResult from '@/components/PromptResult';
import LoadingScene from '@/components/LoadingScene';

export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [originalPrompt, setOriginalPrompt] = useState('');
  const [enhancedPrompt, setEnhancedPrompt] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (prompt: string) => {
    setIsLoading(true);
    setError('');
    setOriginalPrompt(prompt);

    try {
      const response = await fetch('/api/enhance', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ userPrompt: prompt }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to enhance prompt');
      }

      setEnhancedPrompt(data.result);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
      console.error('Error:', err);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReset = () => {
    setOriginalPrompt('');
    setEnhancedPrompt('');
    setError('');
  };

  return (
    <main className="min-h-[calc(100vh-200px)] pt-20 md:pt-32 pb-6 md:pb-8 px-4 md:px-6">
      <div className="max-w-7xl mx-auto h-full">
        <AnimatePresence mode="wait">
          {isLoading && <LoadingScene key="loading" />}
        </AnimatePresence>

        {!enhancedPrompt && !error && (
          <PromptForm onSubmit={handleSubmit} isLoading={isLoading} />
        )}

        {enhancedPrompt && !isLoading && (
          <PromptResult
            originalPrompt={originalPrompt}
            enhancedPrompt={enhancedPrompt}
            onReset={handleReset}
          />
        )}

        {error && !isLoading && (
          <div className="max-w-4xl mx-auto">
            <div className="glass-effect-strong rounded-2xl p-8 text-center space-y-4">
              <div className="text-6xl">⚠️</div>
              <h3 className="text-2xl font-display font-bold text-red-400">
                Oops! Something went wrong
              </h3>
              <p className="text-gray-400">{error}</p>
              <button
                onClick={handleReset}
                className="px-8 py-3 rounded-xl bg-neon-orange hover:bg-neon-gold transition-colors font-semibold"
              >
                Try Again
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}
