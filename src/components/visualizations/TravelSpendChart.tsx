import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import { motion } from 'motion/react';
import { Card } from '../ui/card';
import { useState } from 'react';

const data = [
  { name: 'Flights', value: 24750, percentage: 55, icon: '✈️' },
  { name: 'Hotels', value: 11250, percentage: 25, icon: '🏨' },
  { name: 'Food & Dining', value: 4500, percentage: 10, icon: '🍽️' },
  { name: 'Local Transport', value: 3150, percentage: 7, icon: '🚕' },
  { name: 'Activities', value: 1350, percentage: 3, icon: '🎭' },
];

const COLORS = ['#ea580c', '#fb923c', '#fdba74', '#fed7aa', '#ffedd5'];

export default function TravelSpendChart() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="space-y-6"
    >
      <div>
        <h4 className="text-gray-900 mb-1">Travel Spending Breakdown</h4>
        <p className="text-sm text-gray-600">Last 6 months • Total: ₹45,000</p>
      </div>

      {/* 3D-style Pie Chart */}
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-100/50 to-transparent rounded-3xl blur-2xl"></div>
        <Card className="relative p-6 bg-gradient-to-br from-white to-orange-50/30 border-orange-200 shadow-xl">
          <div className="h-80 relative">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <defs>
                  {COLORS.map((color, index) => (
                    <filter key={`shadow-${index}`} id={`shadow-${index}`}>
                      <feDropShadow dx="0" dy="4" stdDeviation="3" floodOpacity="0.3" />
                    </filter>
                  ))}
                </defs>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  labelLine={false}
                  label={({ name, percentage }) => `${percentage}%`}
                  outerRadius={110}
                  innerRadius={60}
                  fill="#8884d8"
                  dataKey="value"
                  animationBegin={0}
                  animationDuration={1000}
                  paddingAngle={2}
                  onMouseEnter={(_, index) => setActiveIndex(index)}
                  onMouseLeave={() => setActiveIndex(null)}
                >
                  {data.map((entry, index) => (
                    <Cell 
                      key={`cell-${index}`} 
                      fill={COLORS[index % COLORS.length]}
                      filter={`url(#shadow-${index})`}
                      style={{
                        transform: activeIndex === index ? 'scale(1.05)' : 'scale(1)',
                        transformOrigin: 'center',
                        transition: 'all 0.3s ease',
                        cursor: 'pointer'
                      }}
                    />
                  ))}
                </Pie>
                <Tooltip 
                  formatter={(value: number) => `₹${value.toLocaleString()}`}
                  contentStyle={{
                    backgroundColor: 'rgba(255, 255, 255, 0.95)',
                    border: '1px solid #fed7aa',
                    borderRadius: '12px',
                    boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                  }}
                />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </Card>
      </div>

      {/* Animated category cards with 3D effect */}
      <div className="grid grid-cols-2 gap-3">
        {data.map((item, index) => (
          <motion.div
            key={item.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 + 0.3 }}
            whileHover={{ 
              scale: 1.03,
              boxShadow: '0 10px 30px rgba(234, 88, 12, 0.2)'
            }}
          >
            <Card 
              className="p-4 bg-gradient-to-br from-white to-orange-50 border-orange-200 cursor-pointer transition-all"
              style={{
                boxShadow: activeIndex === index 
                  ? '0 10px 30px rgba(234, 88, 12, 0.2)' 
                  : '0 4px 6px rgba(0, 0, 0, 0.05)'
              }}
              onMouseEnter={() => setActiveIndex(index)}
              onMouseLeave={() => setActiveIndex(null)}
            >
              <div className="flex items-center gap-2 mb-2">
                <div className="text-2xl">{item.icon}</div>
                <div 
                  className="w-3 h-3 rounded-full shadow-lg" 
                  style={{ backgroundColor: COLORS[index] }}
                ></div>
                <span className="text-sm text-gray-700">{item.name}</span>
              </div>
              <div className="text-xl text-gray-900">₹{item.value.toLocaleString()}</div>
              <div className="flex items-center gap-2 mt-1">
                <div className="flex-1 bg-gray-200 rounded-full h-1.5 overflow-hidden">
                  <motion.div 
                    className="h-full rounded-full"
                    style={{ backgroundColor: COLORS[index] }}
                    initial={{ width: 0 }}
                    animate={{ width: `${item.percentage}%` }}
                    transition={{ duration: 1, delay: index * 0.1 + 0.5 }}
                  />
                </div>
                <span className="text-xs text-gray-500">{item.percentage}%</span>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>

      {/* Insight card with animation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
      >
        <Card className="p-4 bg-gradient-to-r from-blue-50 to-blue-100 border-blue-200 shadow-lg">
          <div className="text-sm text-blue-900">
            💡 <strong>AI Insight:</strong> Flights account for over half of your travel budget. Consider booking in advance or using reward points to optimize spending. Potential savings: ₹8,000-12,000 per quarter.
          </div>
        </Card>
      </motion.div>
    </motion.div>
  );
}
