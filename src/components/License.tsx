import React, { useState } from 'react';
import { Key, Check, X } from 'lucide-react';

export default function License() {
  const [licenseKey, setLicenseKey] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleActivate = () => {
    // Simulate license check
    setTimeout(() => {
      setStatus(licenseKey.length > 16 ? 'success' : 'error');
    }, 1000);
  };

  return (
    <div id="license" className="py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-block p-3 bg-blue-500/10 rounded-2xl mb-4">
              <Key className="h-8 w-8 text-blue-400" />
            </div>
            <h2 className="text-3xl font-bold mb-4">Activate Your License</h2>
            <p className="text-gray-400">
              Enter your license key to unlock all premium features and start trading
            </p>
          </div>

          <div className="bg-gray-800/30 p-8 rounded-2xl border border-gray-700">
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">License Key</label>
                <input
                  type="text"
                  value={licenseKey}
                  onChange={(e) => setLicenseKey(e.target.value)}
                  className="w-full bg-gray-900 border border-gray-700 rounded-lg px-4 py-3 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="XXXX-XXXX-XXXX-XXXX"
                />
              </div>

              <button
                onClick={handleActivate}
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-lg font-semibold transition-colors"
              >
                Activate License
              </button>

              {status !== 'idle' && (
                <div className={`flex items-center justify-center p-4 rounded-lg ${
                  status === 'success' ? 'bg-green-500/10 text-green-400' : 'bg-red-500/10 text-red-400'
                }`}>
                  {status === 'success' ? (
                    <>
                      <Check className="h-5 w-5 mr-2" />
                      License activated successfully!
                    </>
                  ) : (
                    <>
                      <X className="h-5 w-5 mr-2" />
                      Invalid license key. Please try again.
                    </>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}