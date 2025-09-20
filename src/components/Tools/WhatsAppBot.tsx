import React, { useState } from 'react';
import { MessageSquare, Send, Bot, CheckCircle } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';

export const WhatsAppBot: React.FC = () => {
  const [phoneNumber, setPhoneNumber] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const botFeatures = [
    { title: 'Forward Message Verification', description: 'Forward any message to get instant fact-check results' },
    { title: 'Voice Note Analysis', description: 'Send voice messages for audio content verification' },
    { title: 'Image OCR Check', description: 'Send screenshots or images to extract and verify text' },
    { title: 'Group Moderation', description: 'Add bot to groups for automatic misinformation flagging' }
  ];

  const handleConnect = () => {
    setIsConnected(true);
  };

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">WhatsApp Fact-Check Bot</h2>
          <p className="text-gray-600">Forward messages to get instant verification results</p>
        </CardHeader>
        
        <CardContent>
          {!isConnected ? (
            <div className="text-center py-8">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold mb-2">Connect Your WhatsApp</h3>
              <p className="text-gray-600 mb-6">Add our bot to start fact-checking messages</p>
              
              <div className="max-w-md mx-auto space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    WhatsApp Number
                  </label>
                  <input
                    type="tel"
                    value={phoneNumber}
                    onChange={(e) => setPhoneNumber(e.target.value)}
                    placeholder="+91 98765 43210"
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-transparent"
                  />
                </div>
                <button 
                  onClick={handleConnect}
                  className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg transition-colors"
                >
                  Connect Bot
                </button>
              </div>
            </div>
          ) : (
            <div className="space-y-6">
              <div className="bg-green-50 border border-green-200 rounded-lg p-4">
                <div className="flex items-center space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-600" />
                  <span className="text-green-800 font-medium">Bot Connected Successfully!</span>
                </div>
                <p className="text-green-700 text-sm mt-1">
                  Bot Number: <code className="bg-green-100 px-1 rounded">+91 98765-TRUTH</code>
                </p>
              </div>

              <div className="bg-gray-50 rounded-lg p-4">
                <h4 className="font-semibold mb-3">How to Use:</h4>
                <ol className="list-decimal list-inside space-y-2 text-sm text-gray-700">
                  <li>Forward any suspicious message to the Truth Lens bot</li>
                  <li>Send voice notes or images for verification</li>
                  <li>Receive instant fact-check results with sources</li>
                  <li>Share verified information back to groups</li>
                </ol>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white border rounded-lg p-3">
                  <h5 className="font-medium text-sm">Today's Stats</h5>
                  <div className="mt-2 space-y-1 text-sm">
                    <div className="flex justify-between">
                      <span>Messages Checked</span>
                      <span className="font-medium">127</span>
                    </div>
                    <div className="flex justify-between">
                      <span>False Claims Detected</span>
                      <span className="font-medium text-red-600">23</span>
                    </div>
                    <div className="flex justify-between">
                      <span>Accuracy Rate</span>
                      <span className="font-medium text-green-600">94%</span>
                    </div>
                  </div>
                </div>

                <div className="bg-white border rounded-lg p-3">
                  <h5 className="font-medium text-sm">Quick Actions</h5>
                  <div className="mt-2 space-y-2">
                    <button className="w-full text-left text-sm bg-blue-50 hover:bg-blue-100 px-2 py-1 rounded transition-colors">
                      Test Bot Connection
                    </button>
                    <button className="w-full text-left text-sm bg-green-50 hover:bg-green-100 px-2 py-1 rounded transition-colors">
                      Download Chat History
                    </button>
                    <button className="w-full text-left text-sm bg-gray-50 hover:bg-gray-100 px-2 py-1 rounded transition-colors">
                      Manage Settings
                    </button>
                  </div>
                </div>
              </div>
            </div>
          )}
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Bot Features</h3>
        </CardHeader>
        
        <CardContent>
          <div className="space-y-4">
            {botFeatures.map((feature, index) => (
              <div key={index} className="flex items-start space-x-3 p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                  <Bot className="h-4 w-4 text-blue-600" />
                </div>
                <div>
                  <h4 className="font-medium">{feature.title}</h4>
                  <p className="text-sm text-gray-600">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <h3 className="text-lg font-semibold">Telegram Integration</h3>
        </CardHeader>
        
        <CardContent>
          <div className="text-center py-6">
            <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
              <Send className="h-6 w-6 text-blue-600" />
            </div>
            <h4 className="font-medium mb-2">Coming Soon</h4>
            <p className="text-sm text-gray-600 mb-4">
              Telegram bot integration with similar functionality
            </p>
            <Badge variant="info" size="sm">In Development</Badge>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};