import React from 'react';
import { Check, Zap, Shield, Bot, Cpu } from 'lucide-react';

export default function Pricing() {
  return (
    <div id="pricing" className="py-24 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-violet-500/5" />
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-blue-500/30 rounded-full blur-[100px]" />
        <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-violet-500/20 rounded-full blur-[80px]" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Choose Your Trading Power</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Select the perfect plan for your trading needs with our flexible pricing options
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Basic Plan */}
          <div className="relative bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <Bot className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Basic</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$29</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Basic AI Trading Signals',
                  '5 Concurrent Trades',
                  'Standard Support',
                  'Market Analysis',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                Get Started
              </button>
            </div>
          </div>

          {/* Pro Plan */}
          <div className="relative bg-gradient-to-b from-blue-600 to-violet-600 rounded-2xl p-8 border border-blue-400 transform hover:scale-105 transition-all duration-300">
            <div className="absolute top-0 right-0 bg-blue-400 text-xs font-bold px-3 py-1 rounded-bl-lg rounded-tr-xl">
              POPULAR
            </div>
            <Zap className="h-8 w-8 text-white mb-4" />
            <h3 className="text-xl font-semibold mb-2">Pro</h3>
            <div className="flex items-baseline mb-6">
              <span className="text-4xl font-bold">$99</span>
              <span className="text-blue-100 ml-2">/month</span>
            </div>
            <ul className="space-y-4 mb-8">
              {[
                'Advanced AI Trading Algorithms',
                'Unlimited Concurrent Trades',
                'Priority Support 24/7',
                'Real-time Market Analysis',
                'Custom Trading Strategies',
                'Risk Management Tools',
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <Check className="h-5 w-5 text-white mr-2" />
                  <span className="text-white">{feature}</span>
                </li>
              ))}
            </ul>
            <button className="w-full bg-white text-blue-600 py-3 rounded-lg font-semibold hover:bg-blue-50 transition-colors">
              Get Started
            </button>
          </div>

          {/* Enterprise Plan */}
          <div className="relative bg-gray-800/30 rounded-2xl p-8 border border-gray-700 hover:border-blue-500 transition-all duration-300 group">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            <div className="relative">
              <Shield className="h-8 w-8 text-blue-400 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Enterprise</h3>
              <div className="flex items-baseline mb-6">
                <span className="text-4xl font-bold">$299</span>
                <span className="text-gray-400 ml-2">/month</span>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  'Custom AI Models',
                  'Unlimited Everything',
                  'Dedicated Account Manager',
                  'White-label Solution',
                  'API Access',
                  'Custom Integration',
                ].map((feature, index) => (
                  <li key={index} className="flex items-center">
                    <Check className="h-5 w-5 text-green-400 mr-2" />
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600/20 hover:bg-blue-600 text-blue-400 hover:text-white py-3 rounded-lg font-semibold transition-colors">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}