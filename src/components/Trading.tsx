import React from 'react';
import { TrendingUp, Wallet, ArrowRightLeft, Settings } from 'lucide-react';

export default function Trading() {
  return (
    <div id="trading" className="py-24 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Advanced Trading Tools</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Professional-grade tools designed for both novice and experienced traders
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <TrendingUp className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold">Market Analysis</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between p-3 bg-gray-800/50 rounded-lg">
                <span>BTC/USD</span>
                <span className="text-green-400">+2.45%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-800/50 rounded-lg">
                <span>ETH/USD</span>
                <span className="text-red-400">-1.23%</span>
              </div>
              <div className="flex justify-between p-3 bg-gray-800/50 rounded-lg">
                <span>SOL/USD</span>
                <span className="text-green-400">+5.67%</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-800/30 rounded-2xl p-8 border border-gray-700">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Settings className="h-6 w-6 text-blue-400" />
              </div>
              <h3 className="ml-4 text-xl font-semibold">Trading Settings</h3>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Auto-trading</span>
                <div className="w-12 h-6 bg-blue-600 rounded-full relative cursor-pointer">
                  <div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full"></div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <span>Risk Level</span>
                <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1">
                  <option>Conservative</option>
                  <option>Moderate</option>
                  <option>Aggressive</option>
                </select>
              </div>
              <div className="flex justify-between items-center">
                <span>Trading Pairs</span>
                <span className="text-blue-400">12 Active</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}