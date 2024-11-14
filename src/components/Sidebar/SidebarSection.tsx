import React from 'react';
import SidebarItem from './SidebarItem';
import styles from './styles/SidebarSection.module.css';

interface SidebarSectionProps {
  title: string;
  items: { icon: string; text: string; path: string }[];
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  return (
    <div className={styles.sidebarSection}>
      <h3 className={styles.sectionTitle}>{title}</h3>
      <div className={styles.sectionItems}>
        {items.map((item, index) => (
          <SidebarItem key={index} icon={item.icon} text={item.text} path={item.path} />
        ))}
      </div>
    </div>
  );
};

export default SidebarSection;
