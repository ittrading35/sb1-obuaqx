import React from 'react';
import { Bot } from 'lucide-react';

export default function Navbar() {
  return (
    <nav className="fixed w-full z-50 bg-gray-900/80 backdrop-blur-sm border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <Bot className="h-8 w-8 text-blue-500" />
            <span className="ml-2 text-xl font-bold">TradeMaster AI</span>
          </div>
          <div className="hidden md:block">
            <div className="flex items-center space-x-8">
              <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
              <a href="#stats" className="hover:text-blue-400 transition-colors">Performance</a>
              <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors">
                Get Started
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}