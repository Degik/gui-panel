import React from 'react';
import styles from './SmartFactoryDashboard.module.css';

interface FeatureCardProps {
  title: string;
  buttonText: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, buttonText }) => {
  return (
    <article className={styles.featureCard}>
      <p className={styles.featureDescription}>{title}</p>
      <button className={styles.featureButton}>{buttonText}</button>
    </article>
  );
};

export default FeatureCard;