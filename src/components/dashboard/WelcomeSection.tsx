import React from 'react';
import styles from './SmartFactoryDashboard.module.css';

const WelcomeSection: React.FC<{ children?: React.ReactNode }> = ({ children }) => {
  return (
    <section className={styles.welcomeSection}>
      <h1 className={styles.welcomeTitle}>
        Welcome to your Smart Factory {'{INSERT NAME}'}
      </h1>
      {children}
    </section>
  );
};

export default WelcomeSection;