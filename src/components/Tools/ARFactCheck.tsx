import React, { useState } from 'react';
import { Camera, Scan, Smartphone, Zap } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const ARFactCheck: React.FC = () => {
  const [isScanning, setIsScanning] = useState(false);

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">AR Fact-Check Mode</h2>
          <p className="text-gray-600">Point your camera at content for instant verification</p>
        </CardHeader>
        
        <CardContent>
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-700 rounded-xl p-6 h-64 flex items-center justify-center">
            {!isScanning ? (
              <div className="text-center text-white">
                <Camera className="h-16 w-16 mx-auto mb-4 opacity-75" />
                <h3 className="text-lg font-semibold mb-2">Camera View</h3>
                <p className="text-gray-300 mb-4">Tap to start AR fact-checking</p>
                <button 
                  onClick={() => setIsScanning(true)}
                  className="bg-blue-500 hover:bg-blue-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Start Scanning
                </button>
              </div>
            ) : (
              <div className="relative w-full h-full">
                <div className="absolute inset-0 border-2 border-blue-400 rounded-lg animate-pulse"></div>
                <div className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-sm">
                  Scanning...
                </div>
                
                {/* Simulated detected content */}
                <div className="absolute bottom-4 left-4 right-4 bg-white bg-opacity-95 p-3 rounded-lg">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-sm font-medium">Detected Claim</p>
                      <p className="text-xs text-gray-600">"New vaccine causes serious side effects"</p>
                    </div>
                    <Badge variant="danger" size="sm">FALSE</Badge>
                  </div>
                  <div className="mt-2 flex space-x-2">
                    <button className="text-xs bg-blue-500 text-white px-2 py-1 rounded">
                      View Details
                    </button>
                    <button 
                      onClick={() => setIsScanning(false)}
                      className="text-xs bg-gray-500 text-white px-2 py-1 rounded"
                    >
                      Stop
                    </button>
                  </div>
                </div>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Real-Time Browser Plugin</h3>
          </CardHeader>
          
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <Zap className="h-6 w-6 text-green-600" />
              </div>
              <div>
                <h4 className="font-medium">Chrome Extension</h4>
                <p className="text-sm text-gray-600">Highlights suspicious content automatically</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Installation Status</span>
                <Badge variant="success" size="sm">Active</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Content Scanned Today</span>
                <span className="font-medium">247 items</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Flags Raised</span>
                <span className="font-medium text-red-600">12 items</span>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg transition-colors">
              Open Settings
            </button>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h3 className="text-lg font-semibold">Mobile Scanner</h3>
          </CardHeader>
          
          <CardContent>
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                <Smartphone className="h-6 w-6 text-purple-600" />
              </div>
              <div>
                <h4 className="font-medium">Truth Lens Mobile</h4>
                <p className="text-sm text-gray-600">Scan posters, newspapers, and screens</p>
              </div>
            </div>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between text-sm">
                <span>Quick Scan Mode</span>
                <Badge variant="info" size="sm">Enabled</Badge>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Languages Supported</span>
                <span className="font-medium">12</span>
              </div>
              <div className="flex items-center justify-between text-sm">
                <span>Offline Mode</span>
                <Badge variant="warning" size="sm">Limited</Badge>
              </div>
            </div>
            
            <button className="w-full mt-4 bg-purple-600 hover:bg-purple-700 text-white py-2 px-4 rounded-lg transition-colors">
              Download App
            </button>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};