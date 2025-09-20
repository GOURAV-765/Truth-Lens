import React, { useState } from 'react';
import { Brain, Trophy, Target, BookOpen, Star } from 'lucide-react';
import { Card, CardHeader, CardContent } from '../ui/Card';
import { Badge } from '../ui/Badge';
import { ProgressBar } from '../ui/ProgressBar';
import { User } from '../../types';

interface DigitalLiteracyProps {
  user: User;
}

export const DigitalLiteracy: React.FC<DigitalLiteracyProps> = ({ user }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showQuiz, setShowQuiz] = useState(false);

  const quizQuestions = [
    {
      question: "What is the best way to verify a viral video?",
      options: [
        "Check if friends shared it",
        "Reverse image search and check sources",
        "Look at the number of shares",
        "Trust if it seems realistic"
      ],
      correct: 1
    },
    {
      question: "Which of these is a red flag for fake news?",
      options: [
        "Multiple credible sources",
        "Emotional language and ALL CAPS",
        "Author byline and date",
        "Professional website design"
      ],
      correct: 1
    }
  ];

  const lessons = [
    { title: "Spotting Deepfakes", duration: "5 min", completed: true },
    { title: "Source Verification", duration: "3 min", completed: true },
    { title: "Emotional Manipulation", duration: "4 min", completed: false },
    { title: "Fact vs Opinion", duration: "2 min", completed: false }
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <h2 className="text-xl font-bold text-gray-900">Your Digital Immunity Score</h2>
          <p className="text-gray-600">Track your misinformation detection skills</p>
        </CardHeader>
        
        <CardContent>
          <div className="text-center mb-6">
            <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-4">
              {user.immunityScore}
            </div>
            <h3 className="text-lg font-semibold">Immunity Score</h3>
            <p className="text-gray-600">Level {user.level} Truth Seeker</p>
          </div>

          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Overall Progress</span>
                <span className="text-sm text-gray-600">{user.immunityScore}/100</span>
              </div>
              <ProgressBar value={user.immunityScore} color="blue" />
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              <div className="text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Target className="h-6 w-6 text-green-600" />
                </div>
                <p className="text-sm font-medium">Accuracy</p>
                <p className="text-xs text-gray-600">92%</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Brain className="h-6 w-6 text-blue-600" />
                </div>
                <p className="text-sm font-medium">Analysis</p>
                <p className="text-xs text-gray-600">Level 4</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Trophy className="h-6 w-6 text-yellow-600" />
                </div>
                <p className="text-sm font-medium">Badges</p>
                <p className="text-xs text-gray-600">{user.badges.length}</p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2">
                  <Star className="h-6 w-6 text-purple-600" />
                </div>
                <p className="text-sm font-medium">Contributions</p>
                <p className="text-xs text-gray-600">{user.contributions}</p>
              </div>
            </div>

            <div className="pt-4 border-t">
              <h4 className="font-semibold mb-2">Your Badges</h4>
              <div className="flex flex-wrap gap-2">
                {user.badges.map((badge, index) => (
                  <Badge key={index} variant="success" size="sm">
                    {badge}
                  </Badge>
                ))}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold text-gray-900">Quick Learning</h2>
            <p className="text-gray-600">2-minute micro-lessons</p>
          </CardHeader>
          
          <CardContent>
            <div className="space-y-3">
              {lessons.map((lesson, index) => (
                <div key={index} className="flex items-center justify-between p-3 border rounded-lg hover:bg-gray-50 transition-colors">
                  <div className="flex items-center space-x-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center ${
                      lesson.completed ? 'bg-green-500 text-white' : 'bg-gray-200'
                    }`}>
                      {lesson.completed ? '✓' : index + 1}
                    </div>
                    <div>
                      <p className="font-medium">{lesson.title}</p>
                      <p className="text-sm text-gray-600">{lesson.duration}</p>
                    </div>
                  </div>
                  <button className={`px-3 py-1 rounded text-sm ${
                    lesson.completed 
                      ? 'bg-gray-200 text-gray-700' 
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  } transition-colors`}>
                    {lesson.completed ? 'Review' : 'Start'}
                  </button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <h2 className="text-xl font-bold text-gray-900">Immunity Game</h2>
            <p className="text-gray-600">Test your skills with daily challenges</p>
          </CardHeader>
          
          <CardContent>
            {!showQuiz ? (
              <div className="text-center py-8">
                <div className="w-16 h-16 bg-gradient-to-br from-green-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Trophy className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold mb-2">Daily Challenge</h3>
                <p className="text-gray-600 mb-4">Test your misinformation detection skills</p>
                <button 
                  onClick={() => setShowQuiz(true)}
                  className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg transition-colors"
                >
                  Start Quiz
                </button>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Question {currentQuestion + 1} of {quizQuestions.length}</span>
                  <ProgressBar value={(currentQuestion + 1) / quizQuestions.length * 100} className="w-24" />
                </div>
                
                <div>
                  <h3 className="font-semibold mb-4">{quizQuestions[currentQuestion].question}</h3>
                  <div className="space-y-2">
                    {quizQuestions[currentQuestion].options.map((option, index) => (
                      <button
                        key={index}
                        className="w-full text-left p-3 border rounded-lg hover:bg-gray-50 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="flex justify-between pt-4">
                  <button className="px-4 py-2 text-gray-600 hover:text-gray-900">
                    Skip
                  </button>
                  <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                    Next
                  </button>
                </div>
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};