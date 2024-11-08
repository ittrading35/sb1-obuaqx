import React from 'react';
import { Bot, ChevronRight } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-32 pb-96 sm:pt-40">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h1 className="text-4xl sm:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-500 mb-6">
            Trade Smarter with AI-Powered Precision
          </h1>
          <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
            Harness the power of advanced machine learning algorithms to execute trades with unprecedented accuracy and speed.
          </p>
          <div className="flex justify-center gap-4">
            <button className="flex items-center bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
              Start Trading <ChevronRight className="ml-2 h-5 w-5" />
            </button>
            <button className="flex items-center bg-gray-800 hover:bg-gray-700 px-6 py-3 rounded-lg text-lg font-semibold transition-colors">
              View Demo
            </button>
          </div>
        </div>
        <div className="mt-20 relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-96 h-96 bg-blue-500/30 rounded-full filter blur-3xl"></div>
          </div>
          <img 
            src="https://images.unsplash.com/photo-1642790106117-e829e14a795f?auto=format&fit=crop&q=80&w=2000"
            alt="Trading Dashboard"
            className="relative rounded-xl shadow-2xl border border-gray-800"
          />
        </div>
      </div>
    </div>
  );
}