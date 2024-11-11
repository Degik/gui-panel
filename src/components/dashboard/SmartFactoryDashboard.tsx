import React from 'react';
import styles from './SmartFactoryDashboard.module.css';
import Header from './Header';
import Sidebar from './Sidebar';
import WelcomeSection from './WelcomeSection';
import FeatureCard from './FeatureCard';

const SmartFactoryDashboard: React.FC = () => {
  return (
    <div className={styles.landingPage}>
      <Header />
      <main className={styles.mainContent}>
        <Sidebar />
        <section className={styles.dashboardContent}>
          <WelcomeSection />
          <div className={styles.featureGrid}>
            <FeatureCard
              title="Efficiently visualize the data collected from the machines and create new kpis with the help of AI"
              buttonText="Take me there"
            />
            <FeatureCard
              title="Stay always up to date with anomalies on the factory floor with our notification system"
              buttonText="Manage notification settings"
            />
            <FeatureCard
              title="Receive a customizable report that sums up all the information you need and forecasting"
              buttonText="Manage Report Settings"
            />
            <FeatureCard
              title="Discover the performance of your factory with dashboards tailored to your needs."
              buttonText="Create a new Dashboard"
            />
          </div>
        </section>
      </main>
    </div>
  );
};

export default SmartFactoryDashboard;