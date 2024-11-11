import React from 'react';
import styles from './SmartFactoryDashboard.module.css';

interface HeaderProps {
  username?: string;
  role?: string;
}

const Header: React.FC<HeaderProps> = ({username, role}) => {
  return (
    <header className={styles.dashboardHeader}>
      <nav className={styles.iconBreadcrumb}>
        <button className={styles.iconButton} aria-label="Favorites">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/499ee71844dfc0ae43d69d11f41b954d87e562528db6bfc11cabc90f1b04a011?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.iconImg} />
          <div className={styles.tooltip}>
            <span className={styles.tooltipText}>Favorites</span>
            <span className={styles.tooltipShortcut}>⌘F</span>
          </div>
        </button>
        <div className={styles.breadcrumb}>
          <button className={styles.breadcrumbButton}>Section</button>
          <span className={styles.breadcrumbSeparator}>/</span>
          <button className={styles.breadcrumbButton}>Path</button>
        </div>
      </nav>
      <div className={styles.userActions}>
        <button className={styles.iconButton} aria-label="Activities">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/96f433eb037d1cb38627b04fe6a5ba49cbb2c40c3bce1c6eb3e208cb9ef267da?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.iconImg} />
          <div className={styles.tooltip}>
            <span className={styles.tooltipText}>Activities</span>
            <span className={styles.tooltipShortcut}>⌘A</span>
          </div>
        </button>
        <button className={styles.iconButton} aria-label="Notifications">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/2db95c628e1ed5f64a6129eddf03e844d7e7711a119597871edb9bd93d20d26a?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.iconImg} />
        </button>
        <div className={styles.userProfile}>
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/57e79c8bd3d39936cea39228d1ee31a14473b1dc9bcd470bf4db445be31efd89?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.userAvatar} />
            <span className={styles.userName}>{username} ({role})</span>
        </div>
      </div>
    </header>
  );
};

export default Header;