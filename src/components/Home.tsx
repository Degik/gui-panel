import React from 'react';
import Header from './dashboard/Header';
import Sidebar from './dashboard/Sidebar';
import WelcomeSection from './dashboard/WelcomeSection';
import FeatureCard from './dashboard/FeatureCard';
import styles from './dashboard/SmartFactoryDashboard.module.css';

const Home = () => {
    return (
        <div className={styles.landingPage}>
            <Header />
            <div className={styles.mainContent}>
                <Sidebar />
                <div className={styles.dashboardContent}>
                    <WelcomeSection/>
                    <div className={styles.featureGrid}>
                        <FeatureCard 
                            title="Visualize Data"
                            buttonText="Take me there" 
                        />
                        <FeatureCard 
                            title="Notifications"
                            buttonText="Manage notification settings" 
                        />
                        {/* Add others card */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
