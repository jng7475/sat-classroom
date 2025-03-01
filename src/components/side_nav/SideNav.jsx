import React from 'react';
import { Link } from 'react-router-dom';
import './SideNav.css';

function SideNav({ activeTab, setActiveTab }) {
  const navItems = [
    { id: 'dashboard', label: 'Dashboard', icon: 'fa-home' },
    { id: 'learning-plan', label: 'My Learning Plan', icon: 'fa-book' },
    { id: 'assignment', label: 'Assignment', icon: 'fa-tasks' },
    { id: 'smart-review', label: 'Smart Review', icon: 'fa-sync' },
    { id: 'ai-assistant', label: 'AI Assistant', icon: 'fa-robot' },
    { id: 'notebook', label: 'Notebook', icon: 'fa-book-open' },
    { id: 'learning-resources', label: 'Learning Resources', icon: 'fa-graduation-cap' },
    { id: 'hall-of-fame', label: 'Hall of Fame', icon: 'fa-trophy' },
    { id: 'notification', label: 'Notification', icon: 'fa-bell' },
  ];

  return (
    <nav className="side-nav">
      <ul>
        {navItems.map((item) => (
          <li key={item.id} className={activeTab === item.id ? 'active' : ''}>
            <Link to={`/${item.id}`} onClick={() => setActiveTab(item.id)}>
              <i className={`fas ${item.icon}`}></i>
              <span>{item.label}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default SideNav; 