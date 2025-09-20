import React, { useState } from 'react';
import { Sidebar } from './components/Navigation/Sidebar';
import { AlertCard } from './components/Dashboard/AlertCard';
import { MisinformationHeatmap } from './components/Dashboard/MisinformationHeatmap';
import { FactCheckTool } from './components/FactCheck/FactCheckTool';
import { CommunityDashboard } from './components/Community/CommunityDashboard';
import { DigitalLiteracy } from './components/Education/DigitalLiteracy';
import { ARFactCheck } from './components/Tools/ARFactCheck';
import { WhatsAppBot } from './components/Tools/WhatsAppBot';
import { Card, CardHeader, CardContent } from './components/ui/Card';
import { Badge } from './components/ui/Badge';
import { mockAlerts, mockCommunities, mockUser, mockRegionData } from './utils/mockData';
import { 
  TrendingUp, 
  Users, 
  Shield, 
  AlertTriangle,
  Globe,
  Settings,
  Bell,
  User
} from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  const renderContent = () => {
    switch (activeTab) {
      case 'fact-check':
        return <FactCheckTool />;
      case 'community':
        return <CommunityDashboard communities={mockCommunities} />;
      case 'education':
        return <DigitalLiteracy user={mockUser} />;
      case 'ar-tools':
        return <ARFactCheck />;
      case 'whatsapp':
        return <WhatsAppBot />;
      case 'languages':
        return (
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-900">Regional Language Support</h2>
              <p className="text-gray-600">Fact-checking in multiple Indian languages</p>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {['Hindi', 'Tamil', 'Telugu', 'Bengali', 'Marathi', 'Gujarati', 'Punjabi', 'Malayalam'].map((lang, index) => (
                  <div key={index} className="p-3 border rounded-lg text-center hover:bg-gray-50 transition-colors">
                    <Globe className="h-6 w-6 mx-auto mb-2 text-blue-600" />
                    <p className="font-medium">{lang}</p>
                    <Badge variant="success" size="sm">Active</Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      case 'trending':
        return (
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-900">Trending Misinformation</h2>
              <p className="text-gray-600">Latest circulating false claims and debunks</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {[
                  { claim: 'Fake vaccine side effects', trend: '+250%', status: 'debunked' },
                  { claim: 'Manipulated election footage', trend: '+180%', status: 'investigating' },
                  { claim: 'False weather warnings', trend: '+120%', status: 'debunked' }
                ].map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-3 border rounded-lg">
                    <div>
                      <p className="font-medium">{item.claim}</p>
                      <div className="flex items-center space-x-2 mt-1">
                        <TrendingUp className="h-4 w-4 text-red-500" />
                        <span className="text-sm text-red-600">{item.trend}</span>
                      </div>
                    </div>
                    <Badge variant={item.status === 'debunked' ? 'danger' : 'warning'} size="sm">
                      {item.status}
                    </Badge>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        );
      case 'settings':
        return (
          <Card>
            <CardHeader>
              <h2 className="text-xl font-bold text-gray-900">Settings</h2>
              <p className="text-gray-600">Customize your Truth Lens experience</p>
            </CardHeader>
            <CardContent>
              <div className="space-y-6">
                <div>
                  <h3 className="font-semibold mb-3">Notifications</h3>
                  <div className="space-y-3">
                    {[
                      'New misinformation alerts',
                      'Community activity updates', 
                      'Educational content recommendations',
                      'Weekly summary reports'
                    ].map((setting, index) => (
                      <div key={index} className="flex items-center justify-between">
                        <span className="text-sm">{setting}</span>
                        <input type="checkbox" defaultChecked className="rounded" />
                      </div>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-3">Privacy</h3>
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Share anonymous usage data</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm">Allow community to see my contributions</span>
                      <input type="checkbox" defaultChecked className="rounded" />
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        );
      default:
        return (
          <div className="space-y-6">
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <Card hover>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Active Alerts</p>
                      <p className="text-2xl font-bold text-red-600">{mockAlerts.length}</p>
                    </div>
                    <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                      <AlertTriangle className="h-6 w-6 text-red-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Badge variant="danger" size="sm">2 Critical</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Community Members</p>
                      <p className="text-2xl font-bold text-blue-600">37.2K</p>
                    </div>
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                      <Users className="h-6 w-6 text-blue-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Badge variant="success" size="sm">+12% this week</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Fact Checks Today</p>
                      <p className="text-2xl font-bold text-green-600">1,247</p>
                    </div>
                    <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                      <Shield className="h-6 w-6 text-green-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Badge variant="success" size="sm">94% Accuracy</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card hover>
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-gray-600">Immunity Score</p>
                      <p className="text-2xl font-bold text-purple-600">{mockUser.immunityScore}%</p>
                    </div>
                    <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center">
                      <TrendingUp className="h-6 w-6 text-purple-600" />
                    </div>
                  </div>
                  <div className="mt-4">
                    <Badge variant="info" size="sm">Level {mockUser.level}</Badge>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Content Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900">Recent Alerts</h2>
                    <p className="text-gray-600">Latest misinformation detected in your region</p>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      {mockAlerts.map((alert) => (
                        <AlertCard key={alert.id} alert={alert} />
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </div>

              <div className="space-y-6">
                <MisinformationHeatmap data={mockRegionData} />
                
                <Card>
                  <CardHeader>
                    <h2 className="text-xl font-bold text-gray-900">Quick Actions</h2>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-2 gap-4">
                      <button 
                        onClick={() => setActiveTab('fact-check')}
                        className="p-4 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 transition-colors text-left"
                      >
                        <Shield className="h-6 w-6 text-blue-600 mb-2" />
                        <p className="font-medium">Fact Check</p>
                        <p className="text-sm text-gray-600">Verify claims</p>
                      </button>
                      
                      <button 
                        onClick={() => setActiveTab('whatsapp')}
                        className="p-4 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 transition-colors text-left"
                      >
                        <Bell className="h-6 w-6 text-green-600 mb-2" />
                        <p className="font-medium">WhatsApp Bot</p>
                        <p className="text-sm text-gray-600">Forward messages</p>
                      </button>
                      
                      <button 
                        onClick={() => setActiveTab('education')}
                        className="p-4 bg-purple-50 hover:bg-purple-100 rounded-lg border border-purple-200 transition-colors text-left"
                      >
                        <User className="h-6 w-6 text-purple-600 mb-2" />
                        <p className="font-medium">Learn</p>
                        <p className="text-sm text-gray-600">Build immunity</p>
                      </button>
                      
                      <button 
                        onClick={() => setActiveTab('community')}
                        className="p-4 bg-amber-50 hover:bg-amber-100 rounded-lg border border-amber-200 transition-colors text-left"
                      >
                        <Users className="h-6 w-6 text-amber-600 mb-2" />
                        <p className="font-medium">Community</p>
                        <p className="text-sm text-gray-600">Join network</p>
                      </button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar activeTab={activeTab} onTabChange={setActiveTab} />
      
      <div className="ml-64 p-6">
        <div className="max-w-7xl mx-auto">
          <header className="mb-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-2xl font-bold text-gray-900 capitalize">
                  {activeTab === 'dashboard' ? 'Dashboard' : activeTab.replace('-', ' ')}
                </h1>
                <p className="text-gray-600">
                  {activeTab === 'dashboard' && 'Real-time misinformation monitoring and community insights'}
                  {activeTab === 'fact-check' && 'Verify claims across multiple formats and sources'}
                  {activeTab === 'community' && 'Connect with truth seekers and share verified information'}
                  {activeTab === 'education' && 'Strengthen your digital literacy and immunity score'}
                  {activeTab === 'ar-tools' && 'Advanced reality-based verification tools'}
                  {activeTab === 'whatsapp' && 'Integrate fact-checking into your messaging workflow'}
                  {activeTab === 'trending' && 'Monitor emerging misinformation patterns'}
                  {activeTab === 'languages' && 'Multilingual support for diverse communities'}
                  {activeTab === 'settings' && 'Customize notifications and privacy preferences'}
                </p>
              </div>
              <div className="flex items-center space-x-4">
                <div className="relative">
                  <Bell className="h-6 w-6 text-gray-600 cursor-pointer hover:text-gray-900" />
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
                </div>
                <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
                  <User className="h-5 w-5 text-white" />
                </div>
              </div>
            </div>
          </header>

          <main>
            {renderContent()}
          </main>
        </div>
      </div>
    </div>
  );
}

export default App;