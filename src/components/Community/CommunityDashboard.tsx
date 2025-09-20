import React from 'react';
import { Users, Flag, TrendingUp, Award } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { Community } from '../../types';

interface CommunityDashboardProps {
  communities: Community[];
}

export const CommunityDashboard: React.FC<CommunityDashboardProps> = ({ communities }) => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">Community Verification Network</h2>
          <p className="text-gray-600">Crowdsourced fact-checking and community trust scores</p>
        </CardHeader>
        
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communities.map((community) => (
              <Card key={community.id} hover className="border">
                <CardContent className="p-4">
                  <div className="flex items-center justify-between mb-3">
                    <div className="flex items-center space-x-2">
                      <Users className="h-5 w-5 text-blue-500" />
                      <h3 className="font-semibold">{community.name}</h3>
                    </div>
                    <Badge variant="success" size="sm">
                      {community.trustScore}% Trust
                    </Badge>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Members</span>
                      <span className="font-medium">{community.members.toLocaleString()}</span>
                    </div>
                    
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-gray-600">Trust Score</span>
                        <span className="font-medium">{community.trustScore}%</span>
                      </div>
                      <ProgressBar value={community.trustScore} color="green" />
                    </div>
                    
                    <div className="flex items-center justify-between text-sm">
                      <span className="text-gray-600">Recent Flags</span>
                      <div className="flex items-center space-x-1">
                        <Flag className="h-4 w-4 text-red-500" />
                        <span className="font-medium">{community.recentFlags}</span>
                      </div>
                    </div>
                    
                    <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded-lg text-sm transition-colors">
                      Join Community
                    </button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">Community Activity Feed</h2>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            {[
              { user: 'Priya M.', action: 'flagged suspicious content', time: '2 min ago', type: 'flag' },
              { user: 'Rajesh K.', action: 'verified news article', time: '15 min ago', type: 'verify' },
              { user: 'Sneha P.', action: 'contributed fact-check', time: '1 hour ago', type: 'fact-check' },
              { user: 'Mumbai Group', action: 'reached 95% trust score', time: '2 hours ago', type: 'milestone' }
            ].map((activity, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 hover:bg-gray-50 rounded-lg transition-colors">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  activity.type === 'flag' ? 'bg-red-100 text-red-600' :
                  activity.type === 'verify' ? 'bg-green-100 text-green-600' :
                  activity.type === 'fact-check' ? 'bg-blue-100 text-blue-600' :
                  'bg-yellow-100 text-yellow-600'
                }`}>
                  {activity.type === 'flag' && <Flag className="h-4 w-4" />}
                  {activity.type === 'verify' && <TrendingUp className="h-4 w-4" />}
                  {activity.type === 'fact-check' && <Users className="h-4 w-4" />}
                  {activity.type === 'milestone' && <Award className="h-4 w-4" />}
                </div>
                <div className="flex-1">
                  <p className="text-sm">
                    <span className="font-medium">{activity.user}</span> {activity.action}
                  </p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};