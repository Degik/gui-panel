import React from 'react';
import styles from '../styles/Dashboard.module.css';
import DashboardSidebar from './Sidebar/Sidebar';
import Header from './Header/Header';

interface DashboardProps {
    section: string;
    path: string;
    username: string;
    role: string;
    userAvatar?: string;
};

const SmartFactoryDashboard: React.FC<DashboardProps> = ({section, path, username, role, userAvatar}) => {
  return (
    <div className={styles.dashboardContainer}>
      <DashboardSidebar
        logo="https://cdn.builder.io/api/v1/image/assets/TEMP/58732b88-def1-4101-b19d-67b6a972b6f3?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
        companyName="Smart Factory"
      />
      <main className={styles.mainContent}>
        <Header
          section={section}
          path={path}
          userAvatar="https://cdn.builder.io/api/v1/image/assets/TEMP/57e79c8bd3d39936cea39228d1ee31a14473b1dc9bcd470bf4db445be31efd89?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
          userName={username}
          role={role}
        />
        {/* Main dashboard content would go here */}
      </main>
    </div>
  );
};

export default SmartFactoryDashboard;