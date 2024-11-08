import React from 'react';
import { Users, Gift, DollarSign, Award } from 'lucide-react';

export default function Affiliate() {
  return (
    <div id="affiliate" className="py-24 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Affiliate Program</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Join our affiliate program and earn substantial commissions by referring new traders
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {[
            {
              icon: <Users className="h-6 w-6" />,
              title: "Referral Bonus",
              description: "Earn 30% commission on trading fees"
            },
            {
              icon: <Gift className="h-6 w-6" />,
              title: "Welcome Package",
              description: "Special bonuses for new affiliates"
            },
            {
              icon: <DollarSign className="h-6 w-6" />,
              title: "Instant Payouts",
              description: "Weekly payments, no minimum threshold"
            },
            {
              icon: <Award className="h-6 w-6" />,
              title: "Tier Benefits",
              description: "Increased rates for top performers"
            }
          ].map((item, index) => (
            <div key={index} className="bg-gray-800/30 p-6 rounded-xl border border-gray-700">
              <div className="h-12 w-12 bg-blue-500/10 rounded-lg flex items-center justify-center text-blue-400 mb-4">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-400">{item.description}</p>
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-blue-600 to-violet-600 rounded-2xl p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Start Earning Today</h3>
          <p className="text-lg mb-6 opacity-90">Join thousands of successful affiliates earning passive income</p>
          <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
            Become an Affiliate
          </button>
        </div>
      </div>
    </div>
  );
}