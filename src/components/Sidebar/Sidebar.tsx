import React from 'react';
import styles from './styles/Sidebar.module.css';
import SidebarSection from './SidebarSection';
import SidebarItem from './SidebarItem';

interface DashboardSidebarProps {
  logo: string;
  companyName: string;
}

const DashboardSidebar: React.FC<DashboardSidebarProps> = ({ logo, companyName }) => {
  const favoritesItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5a1623533feb957ed0356b69b19c86481c64ebf03b9a3e91420e6ce2924e91bd?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Overview' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5a1623533feb957ed0356b69b19c86481c64ebf03b9a3e91420e6ce2924e91bd?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'March Reports' },
  ];

  const sectionsItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2d40f2dc06da50836fbfaf464c0a55962656ee10fce9369f212feb80de42c46?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'User Settings' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Reports' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a71c21e7b5dfbcb7b600377b94bb0ba6e150f444fca7a9c978d6d84a0e3b8cea?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Data View' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Log' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0d48c9f5dfc5a5a35e09f99f937cac2777cbffd55ad9387fca9e140c2b0bc70f?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Production Lines' },
  ];

  const dashboardsItems = [
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0949995bd2a21ce720d84c11dc64463261305492e6cd6409f1dd6840a7747be9?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Overview' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eaf772e37067af09780cab33ecbf00699526f2539b536d7e2dac43b2122526b2?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Production Lines Dashboards' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e4f31bc08d7f9cce9aa4820b2adc97643d3b0c001526273b80178ee6bf890b69?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Production Line #1' },
    { icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e3b90cb81ae2d13b7f436f0b1eb6c2f6bc7f9ccd539fab9a05bf5ea532afb99f?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130', text: 'Saved Dashboard Folder Name' },
  ];

  return (
    <aside className={styles.dashboardSidebar}>
      <header className={styles.logoContainer}>
        <img src={logo} alt="Company Logo" className={styles.logo} />
        <h1 className={styles.companyName}>{companyName}</h1>
      </header>
      <SidebarSection title="Favorites" items={favoritesItems} />
      <SidebarSection title="Sections" items={sectionsItems} />
      <SidebarSection title="Dashboards" items={dashboardsItems} />
      <button className={styles.createDashboardButton}>Create new Dashboard</button>
    </aside>
  );
};

export default DashboardSidebar;