import React from 'react';
import styles from './styles/SidebarSection.module.css';
import SidebarItem from './SidebarItem';

interface SidebarSectionProps {
  title: string;
  items: Array<{ icon: string; text: string }>;
}

const SidebarSection: React.FC<SidebarSectionProps> = ({ title, items }) => {
  return (
    <section className={styles.sidebarSection}>
      <h2 className={styles.sectionTitle}>{title}</h2>
      <ul className={styles.itemList}>
        {items.map((item, index) => (
          <li key={index}>
            <SidebarItem icon={item.icon} text={item.text} />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default SidebarSection;