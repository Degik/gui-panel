import React from 'react';
import styles from './SmartFactoryDashboard.module.css';

interface NavItem {
  icon: string;
  text: string;
}

const Sidebar: React.FC = () => {
  const favorites: NavItem[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a1623533feb957ed0356b69b19c86481c64ebf03b9a3e91420e6ce2924e91bd?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "Overview" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/5a1623533feb957ed0356b69b19c86481c64ebf03b9a3e91420e6ce2924e91bd?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "March Reports" },
  ];

  const dashboards: NavItem[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/0949995bd2a21ce720d84c11dc64463261305492e6cd6409f1dd6840a7747be9?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "Overview" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/eaf772e37067af09780cab33ecbf00699526f2539b536d7e2dac43b2122526b2?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "Production Lines" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/e3b90cb81ae2d13b7f436f0b1eb6c2f6bc7f9ccd539fab9a05bf5ea532afb99f?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "Production Sites" },
  ];

  const pages: NavItem[] = [
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a2d40f2dc06da50836fbfaf464c0a55962656ee10fce9369f212feb80de42c46?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "User Settings" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "Reports" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "Forecasting" },
    { icon: "https://cdn.builder.io/api/v1/image/assets/TEMP/a71c21e7b5dfbcb7b600377b94bb0ba6e150f444fca7a9c978d6d84a0e3b8cea?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130", text: "Data View" },
  ];

  return (
    <aside className={styles.dashboardSidebar}>
      <nav>
        <div className={styles.sidebarSection}>
          <hr className={styles.sidebarDivider} />
          <div className={styles.sidebarButtons}>
            <button className={styles.sidebarButton}>Favorites</button>
            <button className={styles.sidebarButton}>Recently</button>
          </div>
          {favorites.map((item, index) => (
            <a key={index} href="#" className={styles.sidebarLink}>
              <img src={item.icon} alt="" className={styles.sidebarIcon} />
              <span>{item.text}</span>
            </a>
          ))}
        </div>
        <div className={styles.sidebarSection}>
          <h2 className={styles.sidebarHeading}>Dashboards</h2>
          {dashboards.map((item, index) => (
            <a key={index} href="#" className={styles.sidebarLink}>
              <img src={item.icon} alt="" className={styles.sidebarIcon} />
              <span>{item.text}</span>
            </a>
          ))}
        </div>
        <div className={styles.sidebarSection}>
          <h2 className={styles.sidebarHeading}>Pages</h2>
          {pages.map((item, index) => (
            <a key={index} href="#" className={styles.sidebarLink}>
              <img src={item.icon} alt="" className={styles.sidebarIcon} />
              <span>{item.text}</span>
            </a>
          ))}
        </div>
      </nav>
    </aside>
  );
};

export default Sidebar;