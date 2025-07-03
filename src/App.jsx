import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import OnboardingWizard from './components/OnboardingWizard';
import StorePreview from './components/StorePreview';
import AIAssistantHints from './components/AIAssistantHints';
import TestOrderMode from './components/TestOrderMode';
import MobilePreview from './components/MobilePreview';
import LearningCenter from './components/LearningCenter';
import FeedbackButton from './components/FeedbackButton';
import DragDropEditor from './components/DragDropEditor';
import SmartGoals from './components/SmartGoals';
import MarketingAI from './pages/MarketingAI';
import FinancialDashboard from './pages/FinancialDashboard';
import AffiliateSystem from './pages/AffiliateSystem';
import TrainingCenterPage from './pages/TrainingCenterPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/dashboard/onboarding" element={<OnboardingWizard />} />
        <Route path="/dashboard/store-preview" element={<StorePreview />} />
        <Route path="/dashboard/ai-hints" element={<AIAssistantHints />} />
        <Route path="/dashboard/test-order" element={<TestOrderMode />} />
        <Route path="/dashboard/mobile-preview" element={<MobilePreview />} />
        <Route path="/dashboard/learning-center" element={<LearningCenter />} />
        <Route path="/dashboard/feedback" element={<FeedbackButton />} />
        <Route path="/dashboard/store-builder" element={<DragDropEditor />} />
        <Route path="/dashboard/smart-goals" element={<SmartGoals />} />
        <Route path="/dashboard/marketing" element={<MarketingAI />} />
        <Route path="/dashboard/finance" element={<FinancialDashboard />} />
        <Route path="/dashboard/affiliate" element={<AffiliateSystem />} />
        <Route path="/dashboard/training" element={<TrainingCenterPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;