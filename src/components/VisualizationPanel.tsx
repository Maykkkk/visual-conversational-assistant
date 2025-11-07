import { Card } from './ui/card';
import { QueryType } from './Dashboard';
import TravelSpendChart from './visualizations/TravelSpendChart';
import EVAffordabilityChart from './visualizations/EVAffordabilityChart';
import FDvsMFChart from './visualizations/FDvsMFChart';
import { Sparkles } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

interface VisualizationPanelProps {
  queryType: QueryType;
}

export default function VisualizationPanel({ queryType }: VisualizationPanelProps) {
  return (
    <Card className="p-6 bg-white overflow-y-auto h-[80vh]">
      {!queryType ? (
        <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
          <div className="w-16 h-16 bg-gradient-to-br from-orange-100 to-orange-200 rounded-full flex items-center justify-center">
            <Sparkles className="w-8 h-8 text-orange-600" />
          </div>
          <div>
            <h3 className="text-xl text-gray-900 mb-2">3D Visual Analytics</h3>
            <p className="text-gray-600 max-w-md">
              Ask me a question to see interactive 3D visualizations of your financial data
            </p>
          </div>
          <div className="grid grid-cols-3 gap-4 pt-6">
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-1">📊</div>
              <div className="text-sm text-gray-600">Spending Analytics</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-1">💰</div>
              <div className="text-sm text-gray-600">Loan Simulations</div>
            </div>
            <div className="p-4 bg-orange-50 rounded-lg">
              <div className="text-2xl mb-1">📈</div>
              <div className="text-sm text-gray-600">Investment Compare</div>
            </div>
          </div>
        </div>
      ) : (
        <div className="space-y-6 relative">
          {/* Small avatar in top left corner */}
          <div className="absolute top-0 left-0 z-10">
            <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-orange-300 shadow-lg bg-gradient-to-br from-orange-100 to-orange-200">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1712168567859-e24cbc155219?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGF2YXRhcnxlbnwxfHx8fDE3NjIxNTg2OTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="AI Advisor"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="flex items-center gap-2 pb-4 border-b pt-14">
            <Sparkles className="w-5 h-5 text-orange-600" />
            <h3 className="text-lg text-gray-900">Visual Analysis</h3>
          </div>
          
          {queryType === 'travel-spend' && <TravelSpendChart />}
          {queryType === 'ev-affordability' && <EVAffordabilityChart />}
          {queryType === 'fd-vs-mf' && <FDvsMFChart />}
        </div>
      )}
    </Card>
  );
}
