import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function Stats() {
  return (
    <div id="stats" className="py-24 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-400">Annual Return</h3>
              <ArrowUpRight className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-4xl font-bold text-green-500">+42.8%</p>
            <p className="text-sm text-gray-500 mt-2">Based on historical performance</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-400">Win Rate</h3>
              <ArrowUpRight className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-4xl font-bold text-green-500">89.3%</p>
            <p className="text-sm text-gray-500 mt-2">Success rate on all trades</p>
          </div>
          <div className="bg-gray-800/50 p-8 rounded-2xl border border-gray-700">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-medium text-gray-400">Total Volume</h3>
              <ArrowUpRight className="h-5 w-5 text-green-500" />
            </div>
            <p className="text-4xl font-bold text-green-500">$2.4B+</p>
            <p className="text-sm text-gray-500 mt-2">Total trading volume</p>
          </div>
        </div>
      </div>
    </div>
  );
}