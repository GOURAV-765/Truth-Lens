import React from 'react';
import { 
  Home, 
  Search, 
  Users, 
  Brain, 
  Camera, 
  Settings, 
  Shield,
  TrendingUp,
  MessageSquare,
  Globe
} from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export const Sidebar: React.FC<SidebarProps> = ({ activeTab, onTabChange }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: Home },
    { id: 'fact-check', label: 'Fact Check', icon: Search },
    { id: 'community', label: 'Community', icon: Users },
    { id: 'education', label: 'Learn', icon: Brain },
    { id: 'ar-tools', label: 'AR Tools', icon: Camera },
    { id: 'trending', label: 'Trending', icon: TrendingUp },
    { id: 'languages', label: 'Languages', icon: Globe },
    { id: 'whatsapp', label: 'WhatsApp Bot', icon: MessageSquare },
    { id: 'settings', label: 'Settings', icon: Settings }
  ];

  return (
    <div className="w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 z-10">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-white" />
          </div>
          <h1 className="text-xl font-bold text-gray-900">Truth Lens</h1>
        </div>
      </div>
      
      <nav className="p-4">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const IconComponent = item.icon;
            return (
              <li key={item.id}>
                <button
                  onClick={() => onTabChange(item.id)}
                  className={`w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-left transition-colors ${
                    activeTab === item.id
                      ? 'bg-blue-50 text-blue-700 border border-blue-200'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <IconComponent className="h-5 w-5" />
                  <span>{item.label}</span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>
      
      <div className="absolute bottom-4 left-4 right-4">
        <div className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-3 rounded-lg text-center">
          <p className="text-sm font-medium">Truth Score</p>
          <p className="text-2xl font-bold">76%</p>
          <p className="text-xs opacity-75">Keep learning!</p>
        </div>
      </div>
    </div>
  );
};