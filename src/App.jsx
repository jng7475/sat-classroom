import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TopBar from './components//top_bar/TopBar';
import SideNav from './components/side_nav/SideNav';
import Dashboard from './pages/dashboard/Dashboard';
import LearningPlan from './pages/learning_plan/LearningPlan';
import Assignment from './pages/assignment/Assignment';
import SmartReview from './pages/smart_review/SmartReview';
import AiAssistant from './pages/ai_assistant/AiAssistant';
import Notebook from './pages/notebook/Notebook';
import LearningResources from './pages/learning_resources/LearningResources';
import HallOfFame from './pages/hall_of_fame/HallOfFame';
import Notification from './pages/notification/Notification';
import Profile from './pages/profile/Profile';
import AccountSettings from './pages/account_settings/AccountSettings';
import Help from './pages/help/Help';
import './App.css';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');

  return (
    <Router>
      <div className="app">
        <TopBar />
        <div className="content-container">
          <SideNav activeTab={activeTab} setActiveTab={setActiveTab} />
          <main className="main-content">
            <Routes>
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/learning-plan" element={<LearningPlan />} />
              <Route path="/assignment" element={<Assignment />} />
              <Route path="/smart-review" element={<SmartReview />} />
              <Route path="/ai-assistant" element={<AiAssistant />} />
              <Route path="/notebook" element={<Notebook />} />
              <Route path="/learning-resources" element={<LearningResources />} />
              <Route path="/hall-of-fame" element={<HallOfFame />} />
              <Route path="/notification" element={<Notification />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/account-settings" element={<AccountSettings />} />
              <Route path="/help" element={<Help />} />
              <Route path="*" element={<Navigate to="/dashboard" replace />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App; 