import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';

// Components
import DashboardSidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

// Import the sections
import UserSettings from './UserSettings/UserSettings';
import DataView from './DataView/DataView';
import Home from './Home/Home';

interface DashboardProps {
  username: string;
  role: string;
  userAvatar?: string;
}

const SmartFactoryDashboard: React.FC<DashboardProps> = ({ username, role, userAvatar }) => {
  const location = useLocation(); // Take the current location

  // Map the section name to the path
  const sectionMap: { [key: string]: string } = {
    'home': 'Home',
    'user-settings': 'User Settings',
    'data-view': 'Data View',
    'march-reports': 'March Reports',
    'reports': 'Reports',
    'log': 'Log',
    'production-lines': 'Production Lines',
    'dashboards/overview': 'Dashboards Overview',
    'dashboards/production-lines': 'Production Lines Dashboards',
    'dashboards/line-1': 'Production Line #1',
    'dashboards/saved-folder': 'Saved Dashboard Folder',
  };

  // Take the section name from the map
  const section = sectionMap[location.pathname.replace('/', '')] || 'Unknown Section';
  const path = location.pathname;

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <DashboardSidebar />

      {/* Main content */}
      <main className={styles.mainContent}>
        {/* Header */}
        <Header
          section={section}
          path={path}
          userAvatar={
            userAvatar ||
            "https://cdn.builder.io/api/v1/image/assets/TEMP/57e79c8bd3d39936cea39228d1ee31a14473b1dc9bcd470bf4db445be31efd89?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
          }
          userName={username}
          role={role}
        />

        {/* Dynamic routes */}
        <div className={styles.content}>
          <Routes>
            {/* Default route redirects to Home */}
            <Route path="/" element={<Navigate to="home" replace />} />
            <Route path="home" element={<Home />} />
            <Route path="user-settings" element={<UserSettings />} />
            <Route path="data-view" element={<DataView />} />
            {/* Add others routes */}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default SmartFactoryDashboard;
