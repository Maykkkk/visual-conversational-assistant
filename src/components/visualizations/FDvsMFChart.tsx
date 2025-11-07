import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar, LineChart, Line, Area, AreaChart } from 'recharts';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { Shield, TrendingUp, AlertTriangle, Calendar, Target } from 'lucide-react';
import { useState } from 'react';

const returnsData = [
  { year: 'Year 1', fd: 106500, mf: 112000 },
  { year: 'Year 2', fd: 113423, mf: 125440 },
  { year: 'Year 3', fd: 120795, mf: 140493 },
  { year: 'Year 4', fd: 128646, mf: 157352 },
  { year: 'Year 5', fd: 137009, mf: 176234 },
];

const comparisonData = [
  { category: 'Returns', fd: 3, mf: 5, fullMark: 5 },
  { category: 'Safety', fd: 5, mf: 2, fullMark: 5 },
  { category: 'Liquidity', fd: 4, mf: 4, fullMark: 5 },
  { category: 'Tax Benefits', fd: 2, mf: 4, fullMark: 5 },
  { category: 'Flexibility', fd: 2, mf: 5, fullMark: 5 },
];

const riskScenarios = [
  { scenario: 'Best Case', fd: 140000, mf: 195000 },
  { scenario: 'Expected', fd: 137009, mf: 176234 },
  { scenario: 'Worst Case', fd: 135000, mf: 145000 },
];

const tenureAnalysis = [
  { tenure: '1Y', fdRate: 6.0, mfReturn: 8, fdValue: 106000, mfValue: 108000 },
  { tenure: '3Y', fdRate: 6.5, mfReturn: 11, fdValue: 120795, mfValue: 133100 },
  { tenure: '5Y', fdRate: 7.0, mfReturn: 13, fdValue: 140255, mfValue: 184244 },
  { tenure: '10Y', fdRate: 7.5, mfReturn: 14, fdValue: 206103, mfValue: 370722 },
];

export default function FDvsMFChart() {
  const [selectedTenure, setSelectedTenure] = useState('5Y');

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-6"
    >
      <div>
        <h4 className="text-gray-900 mb-1">Investment Comparison: FD vs Mutual Fund</h4>
        <p className="text-sm text-gray-600">₹1,00,000 investment analysis with risk-return profiles</p>
      </div>

      {/* Key Comparison Cards with 3D effect */}
      <div className="grid grid-cols-2 gap-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.03, rotateY: 5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card className="p-5 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border-blue-300 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-blue-200 rounded-xl shadow-inner">
                <Shield className="w-6 h-6 text-blue-700" />
              </div>
              <div>
                <span className="text-sm text-blue-700">Fixed Deposit</span>
                <div className="text-xs text-blue-600">Safe & Guaranteed</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-gray-900">6.5%</span>
                <span className="text-sm text-gray-600">avg. return</span>
              </div>
              <div className="pt-2 border-t border-blue-200">
                <div className="text-sm text-gray-700 mb-1">5-Year Maturity Value</div>
                <div className="text-2xl text-gray-900">₹1,37,009</div>
                <div className="text-xs text-green-600 mt-1">+37.0% gain</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="flex-1 bg-blue-200 rounded-lg p-2 text-center">
                <div className="text-xs text-blue-700">Risk</div>
                <div className="text-sm text-blue-900">Very Low</div>
              </div>
              <div className="flex-1 bg-blue-200 rounded-lg p-2 text-center">
                <div className="text-xs text-blue-700">Lock-in</div>
                <div className="text-sm text-blue-900">5 Years</div>
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.03, rotateY: -5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card className="p-5 bg-gradient-to-br from-green-50 via-green-100 to-green-50 border-green-300 shadow-xl hover:shadow-2xl transition-all">
            <div className="flex items-center gap-3 mb-3">
              <div className="p-3 bg-green-200 rounded-xl shadow-inner">
                <TrendingUp className="w-6 h-6 text-green-700" />
              </div>
              <div>
                <span className="text-sm text-green-700">Mutual Fund</span>
                <div className="text-xs text-green-600">Growth Focused</div>
              </div>
            </div>
            <div className="space-y-2">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl text-gray-900">12-15%</span>
                <span className="text-sm text-gray-600">avg. return</span>
              </div>
              <div className="pt-2 border-t border-green-200">
                <div className="text-sm text-gray-700 mb-1">5-Year Expected Value</div>
                <div className="text-2xl text-gray-900">₹1,76,234</div>
                <div className="text-xs text-green-600 mt-1">+76.2% gain</div>
              </div>
            </div>
            <div className="mt-4 flex gap-2">
              <div className="flex-1 bg-green-200 rounded-lg p-2 text-center">
                <div className="text-xs text-green-700">Risk</div>
                <div className="text-sm text-green-900">Moderate</div>
              </div>
              <div className="flex-1 bg-green-200 rounded-lg p-2 text-center">
                <div className="text-xs text-green-700">Flexibility</div>
                <div className="text-sm text-green-900">High</div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>

      {/* Returns Projection with 3D styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-purple-50/30 border-purple-200 shadow-xl">
          <h5 className="text-gray-900 mb-4">Growth Trajectory Comparison</h5>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={returnsData}>
                <defs>
                  <linearGradient id="colorFD" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorMF" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="year" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="fd" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorFD)" name="Fixed Deposit" />
                <Area type="monotone" dataKey="mf" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorMF)" name="Mutual Fund" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Risk-Return Radar Chart */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-indigo-50/30 border-indigo-200 shadow-xl">
          <h5 className="text-gray-900 mb-4">Multi-Factor Analysis</h5>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart data={comparisonData}>
                <PolarGrid stroke="#e5e7eb" />
                <PolarAngleAxis dataKey="category" stroke="#6b7280" />
                <PolarRadiusAxis angle={90} domain={[0, 5]} stroke="#6b7280" />
                <Radar 
                  name="Fixed Deposit" 
                  dataKey="fd" 
                  stroke="#3b82f6" 
                  fill="#3b82f6" 
                  fillOpacity={0.6}
                  strokeWidth={2}
                />
                <Radar 
                  name="Mutual Fund" 
                  dataKey="mf" 
                  stroke="#22c55e" 
                  fill="#22c55e" 
                  fillOpacity={0.6}
                  strokeWidth={2}
                />
                <Legend />
                <Tooltip 
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px'
                  }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Risk Scenarios */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-amber-50/30 border-amber-200 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <AlertTriangle className="w-5 h-5 text-amber-600" />
            <h5 className="text-gray-900">Risk Scenario Analysis (5 Years)</h5>
          </div>
          <div className="space-y-3">
            {riskScenarios.map((scenario, index) => (
              <motion.div
                key={scenario.scenario}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
                className="flex items-center gap-4"
              >
                <div className="w-24 text-sm text-gray-700">{scenario.scenario}</div>
                <div className="flex-1 flex gap-3">
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-blue-700">FD</span>
                      <span className="text-gray-900">₹{(scenario.fd/1000).toFixed(0)}K</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(scenario.fd/200000)*100}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-green-700">MF</span>
                      <span className="text-gray-900">₹{(scenario.mf/1000).toFixed(0)}K</span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full"
                        initial={{ width: 0 }}
                        animate={{ width: `${(scenario.mf/200000)*100}%` }}
                        transition={{ duration: 1, delay: 0.6 + index * 0.1 }}
                      />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Tenure-wise Returns */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-teal-50/30 border-teal-200 shadow-xl">
          <div className="flex items-center gap-2 mb-4">
            <Calendar className="w-5 h-5 text-teal-600" />
            <h5 className="text-gray-900">Tenure Impact Analysis</h5>
          </div>
          <div className="grid grid-cols-4 gap-3">
            {tenureAnalysis.map((item, index) => (
              <motion.div
                key={item.tenure}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.9 + index * 0.1 }}
                whileHover={{ scale: 1.05 }}
                onClick={() => setSelectedTenure(item.tenure)}
              >
                <Card 
                  className={`p-4 cursor-pointer transition-all ${
                    selectedTenure === item.tenure 
                      ? 'bg-gradient-to-br from-teal-50 to-teal-100 border-teal-400 border-2 shadow-lg' 
                      : 'bg-white hover:shadow-md'
                  }`}
                >
                  <div className="text-center mb-3">
                    <div className="text-2xl text-gray-900">{item.tenure}</div>
                    <div className="text-xs text-gray-600">Investment Period</div>
                  </div>
                  <div className="space-y-2 text-xs">
                    <div className="bg-blue-100 rounded p-2">
                      <div className="text-blue-700 mb-1">FD @ {item.fdRate}%</div>
                      <div className="text-blue-900">₹{(item.fdValue/1000).toFixed(0)}K</div>
                    </div>
                    <div className="bg-green-100 rounded p-2">
                      <div className="text-green-700 mb-1">MF @ {item.mfReturn}%</div>
                      <div className="text-green-900">₹{(item.mfValue/1000).toFixed(0)}K</div>
                    </div>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Recommendations */}
      <div className="space-y-3">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.0 }}
        >
          <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-lg">
            <div className="flex items-start gap-3">
              <Shield className="w-5 h-5 text-blue-700 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-blue-900">
                <strong>FD Best For:</strong> Capital protection, guaranteed returns, senior citizens, emergency fund, short-term goals (1-3 years)
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.1 }}
        >
          <Card className="p-4 bg-gradient-to-r from-green-50 to-green-100 border-green-200 shadow-lg">
            <div className="flex items-start gap-3">
              <TrendingUp className="w-5 h-5 text-green-700 flex-shrink-0 mt-0.5" />
              <div className="text-sm text-green-900">
                <strong>MF Best For:</strong> Wealth creation, inflation beating, tax efficiency (LTCG), retirement planning, long-term goals (5+ years)
              </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.2 }}
        >
          <Card className="p-5 bg-gradient-to-r from-orange-50 via-orange-100 to-orange-50 border-orange-300 shadow-xl">
            <div className="flex items-start gap-3">
              <div className="p-2 bg-orange-200 rounded-full flex-shrink-0">
                <Target className="w-5 h-5 text-orange-700" />
              </div>
              <div className="flex-1">
                <div className="text-orange-900 mb-2">
                  <strong>🎯 AI Recommendation: Balanced Approach</strong>
                </div>
                <p className="text-sm text-orange-800 mb-2">
                  Based on your profile, consider a <strong>60:40 portfolio (MF:FD)</strong> for optimal risk-adjusted returns.
                </p>
                <div className="flex gap-2 text-xs">
                  <div className="flex-1 bg-green-200 rounded p-2">
                    <div className="text-green-700">MF (₹60K)</div>
                    <div className="text-green-900">Growth focused</div>
                  </div>
                  <div className="flex-1 bg-blue-200 rounded p-2">
                    <div className="text-blue-700">FD (₹40K)</div>
                    <div className="text-blue-900">Safety cushion</div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
