import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './styles/SidebarItem.module.css';

interface SidebarItemProps {
  icon: string;
  text: string;
  path: string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, path }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(path); // Navigate to the path when the item is clicked
  };

  return (
    <div className={styles.sidebarItem} onClick={handleClick}>
      <img src={icon} alt={text} className={styles.icon} />
      <span className={styles.text}>{text}</span>
    </div>
  );
};

export default SidebarItem;
