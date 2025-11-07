import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line, Area, AreaChart } from 'recharts';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { TrendingUp, TrendingDown, DollarSign, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { useState } from 'react';

const cashFlowData = [
  { month: 'Now', income: 180000, expenses: 85000, emi: 0, surplus: 95000, withEV: 60000 },
  { month: 'Month 6', income: 180000, expenses: 85000, emi: 35000, surplus: 60000, withEV: 60000 },
  { month: 'Month 12', income: 185000, expenses: 88000, emi: 35000, surplus: 62000, withEV: 62000 },
  { month: 'Month 24', income: 195000, expenses: 92000, emi: 35000, surplus: 68000, withEV: 68000 },
  { month: 'Month 36', income: 210000, expenses: 98000, emi: 35000, surplus: 77000, withEV: 77000 },
  { month: 'Month 60', income: 230000, expenses: 105000, emi: 35000, surplus: 90000, withEV: 90000 },
];

const loanOptions = [
  { name: '3 Years', tenure: 36, emi: 45000, totalInterest: 300000, totalPayment: 1800000, monthly: 45000, recommended: false },
  { name: '5 Years', tenure: 60, emi: 35000, totalInterest: 500000, totalPayment: 2000000, monthly: 35000, recommended: true },
  { name: '7 Years', tenure: 84, emi: 28000, totalInterest: 700000, totalPayment: 2200000, monthly: 28000, recommended: false },
];

const investmentShift = [
  { category: 'Current', savings: 40, investments: 35, expenses: 25 },
  { category: 'With EV', savings: 25, investments: 35, expenses: 40 },
];

export default function EVAffordabilityChart() {
  const [selectedLoan, setSelectedLoan] = useState(1);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-6"
    >
      <div>
        <h4 className="text-gray-900 mb-1">EV Affordability Simulation</h4>
        <p className="text-sm text-gray-600">Based on ₹15L EV purchase with comprehensive analysis</p>
      </div>

      {/* Key Metrics Cards with 3D effect */}
      <div className="grid grid-cols-3 gap-3">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card className="p-4 bg-gradient-to-br from-green-50 via-green-100 to-green-50 border-green-300 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-green-200 rounded-lg">
                <TrendingUp className="w-4 h-4 text-green-700" />
              </div>
              <div className="text-xs text-green-700">Monthly Income</div>
            </div>
            <div className="text-2xl text-gray-900">₹1.8L</div>
            <div className="flex items-center gap-1 mt-1 text-xs text-green-600">
              <ArrowUpRight className="w-3 h-3" />
              <span>Growing 5% annually</span>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card className="p-4 bg-gradient-to-br from-orange-50 via-orange-100 to-orange-50 border-orange-300 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-orange-200 rounded-lg">
                <DollarSign className="w-4 h-4 text-orange-700" />
              </div>
              <div className="text-xs text-orange-700">Recommended EMI</div>
            </div>
            <div className="text-2xl text-gray-900">₹35K</div>
            <div className="text-xs text-orange-600 mt-1">19% of income</div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          whileHover={{ scale: 1.05, rotateY: 5 }}
          style={{ transformStyle: 'preserve-3d' }}
        >
          <Card className="p-4 bg-gradient-to-br from-blue-50 via-blue-100 to-blue-50 border-blue-300 shadow-lg hover:shadow-xl transition-all">
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-blue-200 rounded-lg">
                <TrendingUp className="w-4 h-4 text-blue-700" />
              </div>
              <div className="text-xs text-blue-700">Post-EMI Surplus</div>
            </div>
            <div className="text-2xl text-gray-900">₹60K</div>
            <div className="text-xs text-blue-600 mt-1">Healthy buffer</div>
          </Card>
        </motion.div>
      </div>

      {/* Cash Flow Projection with 3D styling */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-purple-50/30 border-purple-200 shadow-xl">
          <h5 className="text-gray-900 mb-4">Future Cash Flow Projection (5-Year Horizon)</h5>
          <div className="h-72">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={cashFlowData}>
                <defs>
                  <linearGradient id="colorIncome" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#22c55e" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#22c55e" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorSurplus" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  </linearGradient>
                  <linearGradient id="colorExpenses" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#ef4444" stopOpacity={0.6}/>
                    <stop offset="95%" stopColor="#ef4444" stopOpacity={0.1}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis dataKey="month" stroke="#6b7280" />
                <YAxis stroke="#6b7280" />
                <Tooltip 
                  formatter={(value: number) => `₹${(value/1000).toFixed(0)}K`}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #e5e7eb',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                />
                <Legend />
                <Area type="monotone" dataKey="income" stroke="#22c55e" strokeWidth={3} fillOpacity={1} fill="url(#colorIncome)" name="Income" />
                <Area type="monotone" dataKey="expenses" stroke="#ef4444" strokeWidth={2} fillOpacity={1} fill="url(#colorExpenses)" name="Expenses + EMI" />
                <Area type="monotone" dataKey="surplus" stroke="#3b82f6" strokeWidth={3} fillOpacity={1} fill="url(#colorSurplus)" name="Surplus" />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </motion.div>

      {/* Loan Options with interactive selection */}
      <div>
        <h5 className="text-gray-900 mb-3">Compare Loan Tenure Options</h5>
        <div className="space-y-3">
          {loanOptions.map((option, index) => (
            <motion.div
              key={option.name}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 + index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => setSelectedLoan(index)}
            >
              <Card 
                className={`p-4 cursor-pointer transition-all ${
                  option.recommended 
                    ? 'bg-gradient-to-r from-orange-50 to-orange-100 border-orange-400 border-2 shadow-lg' 
                    : selectedLoan === index
                    ? 'bg-gradient-to-r from-blue-50 to-blue-100 border-blue-300 border-2'
                    : 'bg-white hover:shadow-md'
                }`}
              >
                <div className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="text-lg text-gray-900">{option.name} Loan</span>
                      {option.recommended && (
                        <span className="px-3 py-1 bg-orange-600 text-white text-xs rounded-full shadow-sm">
                          ⭐ Best Choice
                        </span>
                      )}
                      {selectedLoan === index && !option.recommended && (
                        <span className="px-3 py-1 bg-blue-600 text-white text-xs rounded-full">
                          Selected
                        </span>
                      )}
                    </div>
                    <div className="grid grid-cols-3 gap-4 text-sm">
                      <div>
                        <div className="text-gray-600">Monthly EMI</div>
                        <div className="text-lg text-gray-900">₹{option.emi.toLocaleString()}</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Total Interest</div>
                        <div className="text-lg text-gray-900">₹{(option.totalInterest/100000).toFixed(1)}L</div>
                      </div>
                      <div>
                        <div className="text-gray-600">Total Payment</div>
                        <div className="text-lg text-gray-900">₹{(option.totalPayment/100000).toFixed(1)}L</div>
                      </div>
                    </div>
                  </div>
                  <div className="ml-4">
                    <div className="w-20 h-20 rounded-full border-4 border-gray-200 flex items-center justify-center relative">
                      <motion.div
                        className="absolute inset-0 rounded-full"
                        style={{
                          background: `conic-gradient(${option.recommended ? '#ea580c' : '#3b82f6'} ${(option.tenure/84)*360}deg, #e5e7eb 0deg)`
                        }}
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 2, delay: 0.5 + index * 0.1 }}
                      />
                      <div className="relative z-10 bg-white rounded-full w-14 h-14 flex items-center justify-center">
                        <div className="text-center">
                          <div className="text-xs text-gray-600">Tenure</div>
                          <div className="text-sm">{option.tenure}m</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Investment Shift Analysis */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
      >
        <Card className="p-6 bg-gradient-to-br from-white to-indigo-50/30 border-indigo-200 shadow-xl">
          <h5 className="text-gray-900 mb-4">Budget Allocation Shift</h5>
          <div className="grid grid-cols-2 gap-6">
            {investmentShift.map((scenario, idx) => (
              <div key={scenario.category} className="space-y-3">
                <h6 className="text-sm text-gray-700">{scenario.category}</h6>
                <div className="space-y-2">
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">💰 Savings</span>
                      <span className="text-gray-900">{scenario.savings}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-green-400 to-green-600 rounded-full shadow-inner"
                        initial={{ width: 0 }}
                        animate={{ width: `${scenario.savings}%` }}
                        transition={{ duration: 1, delay: 0.9 + idx * 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">📈 Investments</span>
                      <span className="text-gray-900">{scenario.investments}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-blue-400 to-blue-600 rounded-full shadow-inner"
                        initial={{ width: 0 }}
                        animate={{ width: `${scenario.investments}%` }}
                        transition={{ duration: 1, delay: 1.0 + idx * 0.2 }}
                      />
                    </div>
                  </div>
                  <div>
                    <div className="flex justify-between text-xs mb-1">
                      <span className="text-gray-600">💳 Expenses</span>
                      <span className="text-gray-900">{scenario.expenses}%</span>
                    </div>
                    <div className="h-3 bg-gray-200 rounded-full overflow-hidden">
                      <motion.div 
                        className="h-full bg-gradient-to-r from-orange-400 to-orange-600 rounded-full shadow-inner"
                        initial={{ width: 0 }}
                        animate={{ width: `${scenario.expenses}%` }}
                        transition={{ duration: 1, delay: 1.1 + idx * 0.2 }}
                      />
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </Card>
      </motion.div>

      {/* Final Verdict */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 1.2 }}
      >
        <Card className="p-5 bg-gradient-to-r from-green-50 via-green-100 to-green-50 border-green-300 shadow-xl">
          <div className="flex items-start gap-3">
            <div className="p-2 bg-green-200 rounded-full">
              <TrendingUp className="w-5 h-5 text-green-700" />
            </div>
            <div className="flex-1">
              <div className="text-green-900 mb-2">
                <strong>✅ AI Verdict: You Can Afford This EV!</strong>
              </div>
              <p className="text-sm text-green-800">
                The 5-year loan option provides optimal balance - manageable EMI of ₹35K, healthy surplus of ₹60K+, and your income growth trajectory supports this investment. Your budget allocation remains balanced with 35% still going to investments.
              </p>
            </div>
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
