import React from 'react';
import { useLocation, Routes, Route } from 'react-router-dom';
import styles from '../styles/Dashboard.module.css';
import DashboardSidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import UserSettings from './UserSettings/UserSettings';

interface DashboardProps {
  username: string;
  role: string;
  userAvatar?: string;
}

const SmartFactoryDashboard: React.FC<DashboardProps> = ({ username, role, userAvatar }) => {
  const location = useLocation(); // Take the current location

  // Map the section name to the path
  const sectionMap: { [key: string]: string } = {
    '': 'Home',
    'march-reports': 'March Reports',
    'user-settings': 'User Settings',
    'reports': 'Reports',
    'data-view': 'Data View',
    'log': 'Log',
    'production-lines': 'Production Lines',
    'dashboards/overview': 'Dashboards Overview',
    'dashboards/production-lines': 'Production Lines Dashboards',
    'dashboards/line-1': 'Production Line #1',
    'dashboards/saved-folder': 'Saved Dashboard Folder',
  };

  // Take the section name from the map
  const section = sectionMap[location.pathname] || 'Unknown Section';
  const path = location.pathname;

  return (
    <div className={styles.dashboardContainer}>
      {/* Sidebar */}
      <DashboardSidebar
        //logo="https://cdn.builder.io/api/v1/image/assets/TEMP/58732b88-def1-4101-b19d-67b6a972b6f3?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
        //companyName="Smart Factory"
      />

      {/* PPrincipal content */}
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
            {/* <Route path="/" element={<HomeContent />} /> */}
            <Route path="/user-settings" element={<UserSettings />} />
            {/* Add others routes */}
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default SmartFactoryDashboard;
