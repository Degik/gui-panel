import React from 'react';
import styles from './styles/SidebarItem.module.css';

interface SidebarItemProps {
  icon: string;
  text: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text }) => {
  return (
    <div className={styles.sidebarItem}>
      <img src={icon} alt="" className={styles.itemIcon} />
      <span className={styles.itemText}>{text}</span>
    </div>
  );
};

export default SidebarItem;