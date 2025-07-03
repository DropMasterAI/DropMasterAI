import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  const modules = [
    { path: 'onboarding', label: 'Onboarding Wizard' },
    { path: 'store-preview', label: 'Store Preview' },
    { path: 'ai-hints', label: 'AI Assistant Hints' },
    { path: 'test-order', label: 'Test Order Mode' },
    { path: 'mobile-preview', label: 'Mobile Preview' },
    { path: 'learning-center', label: 'Learning Center' },
    { path: 'feedback', label: 'Feedback' },
    { path: 'store-builder', label: 'Store Builder' },
    { path: 'smart-goals', label: 'Smart Goals' },
    { path: 'marketing', label: 'Marketing AI' },
    { path: 'finance', label: 'Financial Dashboard' },
    { path: 'affiliate', label: 'Affiliate System' },
    { path: 'training', label: 'Training Center' }
  ];

  return (
    <div style={{ padding: 20 }}>
      <h2>Dashboard</h2>
      <nav style={{ display: 'flex', flexWrap: 'wrap' }}>
        {modules.map(m => (
          <Link key={m.path} to={`/dashboard/${m.path}`} style={{ margin: 5 }}>
            <button>{m.label}</button>
          </Link>
        ))}
      </nav>
    </div>
  );
};

export default Dashboard;