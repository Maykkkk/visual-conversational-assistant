import { useState } from 'react';
import WelcomePage from './components/WelcomePage';
import Dashboard from './components/Dashboard';

export default function App() {
  const [currentPage, setCurrentPage] = useState<'welcome' | 'dashboard'>('welcome');

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-50">
      {currentPage === 'welcome' ? (
        <WelcomePage onGetStarted={() => setCurrentPage('dashboard')} />
      ) : (
        <Dashboard onBack={() => setCurrentPage('welcome')} />
      )}
    </div>
  );
}
