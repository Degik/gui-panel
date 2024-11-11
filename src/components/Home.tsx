import React from 'react';
import Header from './dashboard/Header';
import Sidebar from './dashboard/Sidebar';
import WelcomeSection from './dashboard/WelcomeSection';
import FeatureCard from './dashboard/FeatureCard';
import useFactoryData from '../api/login';
import styles from './dashboard/SmartFactoryDashboard.module.css';

interface HomeProps {
    username: string;
    role: string;
}

const Home: React.FC<HomeProps> = ({ username, role }) => {
    const data = useFactoryData();

    return (
        <div className={styles.landingPage}>
            <Header username={username} role={role} />
            <div className={styles.mainContent}>
                <Sidebar />
                <div className={styles.dashboardContent}>
                    <WelcomeSection username={username} />
                    <div className={styles.featureGrid}>
                        <FeatureCard 
                            title="Visualize Data" 
                            buttonText="Take me there" 
                        />
                        <FeatureCard 
                            title="Notifications" 
                            buttonText="Manage notification settings" 
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
