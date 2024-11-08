import React from 'react';
import { BarChart2, Shield, Zap, Globe2 } from 'lucide-react';

export default function Features() {
  return (
    <div id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Advanced Trading Features</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Our AI-powered platform combines cutting-edge technology with robust security to deliver exceptional trading results.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            {
              icon: <BarChart2 className="h-6 w-6" />,
              title: "Real-time Analysis",
              description: "Advanced market analysis with millisecond precision"
            },
            {
              icon: <Shield className="h-6 w-6" />,
              title: "Bank-grade Security",
              description: "Multi-layer encryption and secure asset storage"
            },
            {
              icon: <Zap className="h-6 w-6" />,
              title: "Lightning Fast",
              description: "Execute trades with ultra-low latency"
            },
            {
              icon: <Globe2 className="h-6 w-6" />,
              title: "Global Markets",
              description: "Access to worldwide trading opportunities"
            }
          ].map((feature, index) => (
            <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-colors">
              <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}