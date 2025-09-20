import React, { useState } from 'react';
import { Search, Camera, Mic, Upload, MessageSquare } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { FactCheckResult } from '../../types';

export const FactCheckTool: React.FC = () => {
  const [activeTab, setActiveTab] = useState('text');
  const [inputText, setInputText] = useState('');
  const [result, setResult] = useState<FactCheckResult | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const tabs = [
    { id: 'text', label: 'Text', icon: MessageSquare },
    { id: 'voice', label: 'Voice', icon: Mic },
    { id: 'image', label: 'Image/OCR', icon: Camera },
    { id: 'upload', label: 'Upload', icon: Upload }
  ];

  const handleFactCheck = async () => {
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const mockResult: FactCheckResult = {
        claim: inputText,
        verdict: 'false',
        confidence: 87,
        sources: ['PIB Fact Check', 'AltNews', 'Factly'],
        explanation: 'This claim has been debunked by multiple fact-checking organizations. The original image was taken from a different context.',
        counterNarrative: 'The actual event occurred in 2019 and was unrelated to the current context being shared.'
      };
      setResult(mockResult);
      setIsLoading(false);
    }, 2000);
  };

  const getVerdictColor = (verdict: string) => {
    switch (verdict) {
      case 'true': return 'success';
      case 'false': return 'danger';
      case 'misleading': return 'warning';
      default: return 'info';
    }
  };

  return (
    <Card>
      <CardHeader>
        <h2 className="text-xl font-bold text-gray-900">Multi-Modal Fact Checker</h2>
        <p className="text-gray-600">Verify claims across text, voice, images, and documents</p>
      </CardHeader>
      
      <CardContent>
        <div className="mb-6">
          <div className="flex space-x-1 bg-gray-100 p-1 rounded-lg">
            {tabs.map((tab) => {
              const IconComponent = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-md transition-all ${
                    activeTab === tab.id 
                      ? 'bg-white text-blue-600 shadow-sm' 
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <IconComponent className="h-4 w-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        {activeTab === 'text' && (
          <div className="space-y-4">
            <textarea
              value={inputText}
              onChange={(e) => setInputText(e.target.value)}
              placeholder="Paste the claim you want to fact-check..."
              className="w-full h-32 p-3 border border-gray-300 rounded-lg resize-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            />
            <button
              onClick={handleFactCheck}
              disabled={!inputText.trim() || isLoading}
              className="w-full flex items-center justify-center space-x-2 bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
            >
              <Search className="h-5 w-5" />
              <span>{isLoading ? 'Fact-checking...' : 'Fact Check'}</span>
            </button>
          </div>
        )}

        {activeTab === 'voice' && (
          <div className="text-center py-12">
            <Mic className="h-16 w-16 text-blue-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Voice Fact Checker</h3>
            <p className="text-gray-600 mb-4">Click to start recording your claim</p>
            <button className="bg-red-500 hover:bg-red-600 text-white px-6 py-3 rounded-full transition-colors">
              Start Recording
            </button>
          </div>
        )}

        {activeTab === 'image' && (
          <div className="text-center py-12">
            <Camera className="h-16 w-16 text-green-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Image & OCR Verification</h3>
            <p className="text-gray-600 mb-4">Upload an image or screenshot to extract and verify text</p>
            <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors">
              Take Photo / Upload
            </button>
          </div>
        )}

        {activeTab === 'upload' && (
          <div className="text-center py-12 border-2 border-dashed border-gray-300 rounded-lg">
            <Upload className="h-16 w-16 text-purple-500 mx-auto mb-4" />
            <h3 className="text-lg font-semibold mb-2">Upload Document</h3>
            <p className="text-gray-600 mb-4">Drop files here or click to browse</p>
            <button className="bg-purple-500 hover:bg-purple-600 text-white px-6 py-3 rounded-lg transition-colors">
              Choose Files
            </button>
          </div>
        )}

        {isLoading && (
          <div className="mt-6 p-4 bg-blue-50 rounded-lg">
            <div className="flex items-center space-x-3">
              <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-blue-600"></div>
              <span className="text-blue-700">Analyzing claim with AI...</span>
            </div>
            <ProgressBar value={75} className="mt-3" />
          </div>
        )}

        {result && !isLoading && (
          <div className="mt-6 p-6 bg-gray-50 rounded-lg">
            <div className="flex items-start justify-between mb-4">
              <h3 className="text-lg font-semibold">Fact Check Result</h3>
              <Badge variant={getVerdictColor(result.verdict)} size="lg">
                {result.verdict.toUpperCase()}
              </Badge>
            </div>
            
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Confidence Score</span>
                <span className="text-sm font-bold">{result.confidence}%</span>
              </div>
              <ProgressBar value={result.confidence} color={result.confidence > 70 ? 'green' : 'amber'} />
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="font-semibold mb-2">Explanation:</h4>
                <p className="text-gray-700">{result.explanation}</p>
              </div>

              {result.counterNarrative && (
                <div>
                  <h4 className="font-semibold mb-2">Counter-Narrative:</h4>
                  <p className="text-gray-700 bg-blue-50 p-3 rounded">{result.counterNarrative}</p>
                </div>
              )}

              <div>
                <h4 className="font-semibold mb-2">Sources:</h4>
                <div className="flex flex-wrap gap-2">
                  {result.sources.map((source, index) => (
                    <Badge key={index} variant="info" size="sm">
                      {source}
                    </Badge>
                  ))}
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button className="flex-1 bg-green-500 hover:bg-green-600 text-white py-2 px-4 rounded-lg transition-colors">
                  Share Fact-Check
                </button>
                <button className="flex-1 bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg transition-colors">
                  Generate Infographic
                </button>
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
};