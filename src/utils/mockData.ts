import { MisinformationAlert, Community, User, RegionData } from '../types';

export const mockAlerts: MisinformationAlert[] = [
  {
    id: '1',
    title: 'Fake COVID-19 Cure Claims',
    description: 'False claims about turmeric curing COVID-19 spreading on WhatsApp',
    region: 'Maharashtra',
    severity: 'high',
    timestamp: new Date(Date.now() - 2 * 60 * 60 * 1000),
    category: 'health',
    sources: ['WhatsApp', 'Facebook'],
    verificationStatus: 'verified-false'
  },
  {
    id: '2',
    title: 'Manipulated Election Video',
    description: 'Deepfake video showing false election rally footage',
    region: 'Delhi',
    severity: 'critical',
    timestamp: new Date(Date.now() - 1 * 60 * 60 * 1000),
    category: 'political',
    sources: ['Twitter', 'YouTube'],
    verificationStatus: 'verified-false'
  },
  {
    id: '3',
    title: 'Bank Closure Rumors',
    description: 'False information about major bank closures causing panic',
    region: 'Karnataka',
    severity: 'medium',
    timestamp: new Date(Date.now() - 30 * 60 * 1000),
    category: 'economic',
    sources: ['Telegram', 'WhatsApp'],
    verificationStatus: 'disputed'
  }
];

export const mockCommunities: Community[] = [
  { id: '1', name: 'Truth Seekers Mumbai', members: 15420, trustScore: 94, recentFlags: 3 },
  { id: '2', name: 'Fact Check Delhi', members: 12890, trustScore: 91, recentFlags: 7 },
  { id: '3', name: 'Digital Literacy India', members: 8950, trustScore: 88, recentFlags: 2 }
];

export const mockUser: User = {
  id: '1',
  name: 'Arjun Sharma',
  immunityScore: 76,
  level: 4,
  badges: ['Fact Checker', 'Community Guardian', 'Truth Seeker'],
  contributions: 142
};

export const mockRegionData: RegionData[] = [
  { region: 'Mumbai', lat: 19.0760, lng: 72.8777, intensity: 0.8, alerts: 12 },
  { region: 'Delhi', lat: 28.7041, lng: 77.1025, intensity: 0.9, alerts: 15 },
  { region: 'Bangalore', lat: 12.9716, lng: 77.5946, intensity: 0.6, alerts: 8 },
  { region: 'Chennai', lat: 13.0827, lng: 80.2707, intensity: 0.4, alerts: 5 },
  { region: 'Kolkata', lat: 22.5726, lng: 88.3639, intensity: 0.7, alerts: 10 }
];