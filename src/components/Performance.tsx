import React from 'react';
import { LineChart, Activity, Timer, Target } from 'lucide-react';

export default function Performance() {
  // Sample data for the chart
  const chartData = [65, 45, 75, 55, 60, 70, 80, 65, 75, 80, 85, 90];
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <div id="performance" className="py-24 relative overflow-hidden">
      {/* Ambient light effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/4 w-[500px] h-[500px] bg-blue-500/20 rounded-full blur-[120px] animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-violet-500/20 rounded-full blur-[100px] animate-pulse animation-delay-2000" />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4">Performance Metrics</h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            Track your trading performance with detailed analytics and insights
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="col-span-2 bg-gray-800/30 rounded-2xl p-8 border border-gray-700 backdrop-blur-sm relative group">
            {/* Chart container glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 via-transparent to-violet-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
            
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-semibold">Monthly Performance</h3>
              <select className="bg-gray-800 border border-gray-700 rounded-lg px-3 py-1">
                <option>Last 30 Days</option>
                <option>Last 90 Days</option>
                <option>Last Year</option>
              </select>
            </div>

            {/* Enhanced chart */}
            <div className="relative">
              <div className="h-64 flex items-end space-x-2 mb-4">
                {chartData.map((height, i) => (
                  <div key={i} className="flex-1 flex flex-col items-center">
                    <div className="relative w-full">
                      <div
                        className="w-full bg-gradient-to-t from-blue-500/20 to-blue-400/5 rounded-t-lg hover:from-blue-500/30 hover:to-blue-400/10 transition-all duration-300"
                        style={{ height: `${height}%` }}
                      >
                        {/* Glow effect on hover */}
                        <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-blue-400/20 rounded-full blur-sm opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </div>
                    <span className="text-xs text-gray-500 mt-2">{months[i]}</span>
                  </div>
                ))}
              </div>

              {/* Chart overlay effects */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent pointer-events-none" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-blue-500/50 to-transparent" />
            </div>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <Activity className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="font-medium">Success Rate</h4>
              </div>
              <p className="text-2xl font-bold text-green-400">92.5%</p>
              <p className="text-sm text-gray-400 mt-1">+2.5% from last month</p>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <Timer className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="font-medium">Avg. Hold Time</h4>
              </div>
              <p className="text-2xl font-bold">4.2 hrs</p>
              <p className="text-sm text-gray-400 mt-1">Optimal duration</p>
            </div>

            <div className="bg-gray-800/30 p-6 rounded-xl border border-gray-700 backdrop-blur-sm hover:border-blue-500/50 transition-colors">
              <div className="flex items-center mb-4">
                <Target className="h-5 w-5 text-blue-400 mr-2" />
                <h4 className="font-medium">Profit Target</h4>
              </div>
              <p className="text-2xl font-bold text-green-400">$12,450</p>
              <p className="text-sm text-gray-400 mt-1">Monthly goal</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}