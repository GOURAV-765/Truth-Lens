import React from 'react';
import { AlertTriangle, Clock, MapPin, ExternalLink } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { MisinformationAlert } from '../../types';

interface AlertCardProps {
  alert: MisinformationAlert;
}

export const AlertCard: React.FC<AlertCardProps> = ({ alert }) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case 'critical': return 'danger';
      case 'high': return 'warning';
      case 'medium': return 'info';
      default: return 'default';
    }
  };

  const getVerificationColor = (status: string) => {
    switch (status) {
      case 'verified-false': return 'danger';
      case 'disputed': return 'warning';
      case 'verified-true': return 'success';
      default: return 'info';
    }
  };

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffMs = now.getTime() - date.getTime();
    const diffHours = Math.floor(diffMs / (1000 * 60 * 60));
    const diffMinutes = Math.floor(diffMs / (1000 * 60));
    
    if (diffHours > 0) return `${diffHours}h ago`;
    return `${diffMinutes}m ago`;
  };

  return (
    <Card hover className="border-l-4 border-l-red-500">
      <CardHeader>
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-2">
            <AlertTriangle className="h-5 w-5 text-red-500" />
            <h3 className="font-semibold text-gray-900">{alert.title}</h3>
          </div>
          <Badge variant={getSeverityColor(alert.severity)} size="sm">
            {alert.severity.toUpperCase()}
          </Badge>
        </div>
      </CardHeader>
      
      <CardContent>
        <p className="text-gray-600 mb-4">{alert.description}</p>
        
        <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
          <div className="flex items-center space-x-1">
            <MapPin className="h-4 w-4" />
            <span>{alert.region}</span>
          </div>
          <div className="flex items-center space-x-1">
            <Clock className="h-4 w-4" />
            <span>{formatTimeAgo(alert.timestamp)}</span>
          </div>
        </div>

        <div className="flex items-center justify-between">
          <Badge variant={getVerificationColor(alert.verificationStatus)} size="sm">
            {alert.verificationStatus.replace('-', ' ').toUpperCase()}
          </Badge>
          <button className="flex items-center space-x-1 text-blue-600 hover:text-blue-800 text-sm font-medium">
            <span>View Details</span>
            <ExternalLink className="h-4 w-4" />
          </button>
        </div>
      </CardContent>
    </Card>
  );
};