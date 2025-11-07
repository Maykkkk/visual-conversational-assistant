import { useState } from 'react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { ArrowLeft, Send, Mic, Sparkles } from 'lucide-react';
import ChatInterface from './ChatInterface';
import VisualizationPanel from './VisualizationPanel';

interface DashboardProps {
  onBack: () => void;
}

export type QueryType = 'travel-spend' | 'ev-affordability' | 'fd-vs-mf' | null;

export default function Dashboard({ onBack }: DashboardProps) {
  const [inputValue, setInputValue] = useState('');
  const [currentQuery, setCurrentQuery] = useState<QueryType>(null);
  const [isAvatarSpeaking, setIsAvatarSpeaking] = useState(false);
  const [messages, setMessages] = useState<Array<{ role: 'user' | 'assistant'; content: string }>>([
    {
      role: 'assistant',
      content:
        "Hello! I'm your AI financial advisor. I can help you with insights like:\n• Show travel spend\n• Can I afford an EV?\n• Compare FD vs mutual fund returns\n\nWhat would you like to explore today?",
    },
  ]);

  const handleSendMessage = () => {
    if (!inputValue.trim()) return;

    const userMessage = inputValue.trim();
    setMessages((prev) => [...prev, { role: 'user', content: userMessage }]);
    setInputValue('');
    setIsAvatarSpeaking(true);

    setTimeout(() => {
      let response = '';
      let queryType: QueryType = null;

      const lowerMessage = userMessage.toLowerCase();

      if (lowerMessage.includes('travel') && lowerMessage.includes('spend')) {
        queryType = 'travel-spend';
        response =
          "Here's your travel spending breakdown for the last 6 months. I can see you've spent ₹45,000 on travel, with flights taking up the largest portion at 55%. Would you like me to suggest ways to optimize these expenses?";
      } else if (
        lowerMessage.includes('ev') ||
        lowerMessage.includes('electric vehicle') ||
        lowerMessage.includes('afford')
      ) {
        queryType = 'ev-affordability';
        response =
          'Based on your current financial profile, I’ve simulated the impact of purchasing an electric vehicle. With your monthly income of ₹1,80,000 and current expenses, you can comfortably afford an EV in the ₹15-20 lakh range. The loan impact shows healthy cash flow even after EMI payments. Shall I show you suitable loan options?';
      } else if (
        lowerMessage.includes('fd') ||
        lowerMessage.includes('mutual fund') ||
        lowerMessage.includes('compare')
      ) {
        queryType = 'fd-vs-mf';
        response =
          "I've compared Fixed Deposits and Mutual Funds for you. Over a 5-year period, mutual funds show higher returns potential (12-15% avg) compared to FDs (6-7%), but they come with market-linked risks. FDs offer guaranteed returns and are ideal for risk-averse investors. Based on your profile, I'd recommend a balanced approach. Would you like a personalized allocation suggestion?";
      } else {
        response =
          "I understand you're asking about " +
          userMessage +
          '. I can provide detailed insights on travel spending, EV affordability analysis, or investment comparisons. Could you please rephrase your question using one of these topics?';
      }

      setCurrentQuery(queryType);
      setMessages((prev) => [...prev, { role: 'assistant', content: response }]);

      setTimeout(() => setIsAvatarSpeaking(false), 2000);
    }, 1000);
  };

  const handleQuickQuery = (query: string) => {
    setInputValue(query);
    setTimeout(() => handleSendMessage(), 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-50">
      {/* Header */}
      <header className="px-6 py-4 bg-white shadow-sm">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Button onClick={onBack} variant="ghost" className="gap-2">
              <ArrowLeft className="w-4 h-4" />
              Back
            </Button>
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-br from-orange-500 to-orange-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-medium">iB</span>
              </div>
              <div>
                <div className="text-gray-900 font-medium">AI Financial Advisor</div>
                <div className="text-sm text-gray-500">Powered by ICICI Bank</div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 px-6 py-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr,400px] gap-6 h-[calc(100vh-100px)]">
          {/* Visualization Section */}
          <div className="flex flex-col">
            <VisualizationPanel queryType={currentQuery} />
          </div>

          {/* Chat Interface Section */}
          <div className="flex flex-col">
            <Card className="flex-1 flex flex-col bg-white shadow-md rounded-2xl">
              <div className="p-4 border-b">
                <h3 className="text-gray-900 font-medium">Conversation</h3>
                <p className="text-xs text-gray-500 mt-1">Ask anything about your finances</p>
              </div>

              <ChatInterface messages={messages} isAvatarSpeaking={isAvatarSpeaking} />

              <div className="p-4 border-t space-y-3">
                {/* Quick Action Chips */}
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => handleQuickQuery('Show travel spend')}
                    className="px-3 py-1 text-xs bg-orange-50 text-orange-700 rounded-full hover:bg-orange-100 border border-orange-200"
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Travel spend
                  </button>
                  <button
                    onClick={() => handleQuickQuery('Can I afford an EV?')}
                    className="px-3 py-1 text-xs bg-orange-50 text-orange-700 rounded-full hover:bg-orange-100 border border-orange-200"
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Afford an EV?
                  </button>
                  <button
                    onClick={() => handleQuickQuery('Compare FD vs mutual fund')}
                    className="px-3 py-1 text-xs bg-orange-50 text-orange-700 rounded-full hover:bg-orange-100 border border-orange-200"
                  >
                    <Sparkles className="w-3 h-3 inline mr-1" />
                    Compare investments
                  </button>
                </div>

                {/* Input Area */}
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask me anything..."
                    className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500"
                  />
                  <Button onClick={handleSendMessage} className="bg-orange-600 hover:bg-orange-700">
                    <Send className="w-4 h-4" />
                  </Button>
                  <Button
                    variant="outline"
                    className="border-orange-600 text-orange-600 hover:bg-orange-50"
                  >
                    <Mic className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </main>
    </div>
  );
}
