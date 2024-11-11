import React from 'react';
import styles from './SmartFactoryDashboard.module.css';

interface WelcomeSectionProps {
  username?: string;
  children?: React.ReactNode;
}

const WelcomeSection: React.FC<{ username?: string, children?: React.ReactNode }> = ({ username, children }) => {
  return (
    <section className={styles.welcomeSection}>
      <h1 className={styles.welcomeTitle}>
        Welcome to your Smart Factory {'{INSERT NAME}'} {username && `, ${username}`}
      </h1>
      {children}
    </section>
  );
};

export default WelcomeSection;