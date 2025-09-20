export interface MisinformationAlert {
  id: string;
  title: string;
  description: string;
  region: string;
  severity: 'low' | 'medium' | 'high' | 'critical';
  timestamp: Date;
  category: 'political' | 'health' | 'social' | 'economic' | 'other';
  sources: string[];
  verificationStatus: 'verified-false' | 'disputed' | 'needs-review' | 'verified-true';
}

export interface CredibilityScore {
  overall: number;
  bias: number;
  factualAccuracy: number;
  sourceReliability: number;
  sensationalism: number;
  explanation: string;
}

export interface Community {
  id: string;
  name: string;
  members: number;
  trustScore: number;
  recentFlags: number;
}

export interface User {
  id: string;
  name: string;
  immunityScore: number;
  level: number;
  badges: string[];
  contributions: number;
}

export interface FactCheckResult {
  claim: string;
  verdict: 'true' | 'false' | 'misleading' | 'unverified';
  confidence: number;
  sources: string[];
  explanation: string;
  counterNarrative?: string;
}

export interface RegionData {
  region: string;
  lat: number;
  lng: number;
  intensity: number;
  alerts: number;
}