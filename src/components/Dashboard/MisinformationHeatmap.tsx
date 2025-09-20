import React from 'react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { RegionData } from '../../types';

interface MisinformationHeatmapProps {
  data: RegionData[];
}

export const MisinformationHeatmap: React.FC<MisinformationHeatmapProps> = ({ data }) => {
  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900">Misinformation Heatmap</h2>
        <p className="text-gray-600">Real-time regional tracking of misinformation spread</p>
      </CardHeader>
      
      <CardContent>
        <div className="relative bg-gradient-to-br from-blue-50 to-indigo-100 rounded-lg p-6 h-80">
          {data.map((region) => (
            <div
              key={region.region}
              className="absolute transform -translate-x-1/2 -translate-y-1/2 cursor-pointer group"
              style={{
                left: `${20 + Math.random() * 60}%`,
                top: `${20 + Math.random() * 60}%`
              }}
            >
              <div
                className={`w-6 h-6 rounded-full animate-pulse transition-all duration-300 group-hover:scale-150 ${
                  region.intensity > 0.7 ? 'bg-red-500' : 
                  region.intensity > 0.5 ? 'bg-amber-500' : 'bg-green-500'
                }`}
                style={{ opacity: region.intensity }}
              />
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                {region.region}: {region.alerts} alerts
              </div>
            </div>
          ))}
          
          <div className="absolute bottom-4 left-4">
            <div className="flex items-center space-x-4 text-sm">
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <span>Low Risk</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-amber-500 rounded-full"></div>
                <span>Medium Risk</span>
              </div>
              <div className="flex items-center space-x-1">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <span>High Risk</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};