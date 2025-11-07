import { Button } from './ui/button';
import { Card } from './ui/card';
import { Sparkles, TrendingUp, Target, Zap } from 'lucide-react';
import React from 'react';
import '@google/model-viewer'; // enables <model-viewer> web component

interface WelcomePageProps {
  onGetStarted: () => void;
}

export default function WelcomePage({ onGetStarted }: WelcomePageProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Header */}
      <header className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
              <span className="text-white">iB</span>
            </div>
            <span className="text-orange-600">ICICI Bank</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <main className="flex-1 flex items-center justify-center px-6 py-12">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Content */}
          <div className="space-y-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-orange-100 rounded-full">
              <Sparkles className="w-4 h-4 text-orange-600" />
              <span className="text-orange-800">AI-Powered Financial Advisory</span>
            </div>
            
            <h1 className="text-5xl text-gray-900">
              Visual Conversational Assistant
            </h1>
            
            <p className="text-xl text-gray-600">
              Conversational AI with 3D visuals acts as your personal financial advisor—offering real-time insights, product comparisons, and simulations through natural voice or gesture-based queries.
            </p>

            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <TrendingUp className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Real-Time Insights</h3>
                  <p className="text-gray-600">Get instant visual analytics of your spending patterns and financial health</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Target className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Goal-Based Planning</h3>
                  <p className="text-gray-600">Simulate financial scenarios and understand loan impacts on your future</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-orange-100 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-orange-600" />
                </div>
                <div>
                  <h3 className="text-gray-900">Smart Comparisons</h3>
                  <p className="text-gray-600">Compare investment products with visual risk and return analysis</p>
                </div>
              </div>
            </div>

            <Button 
              onClick={onGetStarted}
              className="bg-orange-600 hover:bg-orange-700 text-white px-8 py-6 rounded-xl"
            >
              Get Started
            </Button>
          </div>

          {/* Right Visual — 3D Human Advisor Avatar */}
          <div className="relative flex items-center justify-center">
            <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-orange-300 rounded-3xl blur-3xl opacity-30"></div>

            <Card className="relative p-8 bg-white/80 backdrop-blur border-orange-200 flex flex-col items-center justify-center rounded-3xl shadow-lg">
              <model-viewer
                src="/models/base.glb"
                alt="AI Financial Advisor Avatar"
                auto-rotate
                camera-controls
                ar
                shadow-intensity="1"
                exposure="1"
                style={{
                  width: '400px',
                  height: '400px',
                  borderRadius: '16px',
                  background: 'transparent',
                }}
              ></model-viewer>

              <div className="mt-8 grid grid-cols-3 gap-4 w-full">
                <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-center">
                  <div className="text-2xl text-orange-600">92%</div>
                  <div className="text-sm text-gray-600">Accuracy</div>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-center">
                  <div className="text-2xl text-orange-600">3D</div>
                  <div className="text-sm text-gray-600">Visuals</div>
                </Card>
                <Card className="p-4 bg-gradient-to-br from-orange-50 to-orange-100 border-orange-200 text-center">
                  <div className="text-2xl text-orange-600">24/7</div>
                  <div className="text-sm text-gray-600">Available</div>
                </Card>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
