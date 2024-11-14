import React from 'react';
import styles from './styles/Header.module.css';

interface HeaderProps {
  section: string;
  path: string;
  userAvatar: string;
  userName: string;
  role: string;
}

const Header: React.FC<HeaderProps> = ({ section, path, userAvatar, userName, role }) => {
  return (
    <header className={styles.Header}>
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <button className={styles.favoriteButton} aria-label="Add to favorites">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/4d221fed1faf3293d443fce0bfd1ac4f1237fe01bd37d307112b2b2c1046a6bb?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.favoriteIcon} />
        </button>
        <ol>
          <li><a href="#">{section}</a></li>
          <li><a href="#" aria-current="page">{path}</a></li>
        </ol>
      </nav>
      <div className={styles.userInfo}>
        <button className={styles.notificationButton} aria-label="Notifications">
          <img src="https://cdn.builder.io/api/v1/image/assets/TEMP/1e6000a94d38944aa66f553de36c98d945ea357c55a35129d63120550b298eb6?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.notificationIcon} />
        </button>
        <img src={userAvatar} alt="" className={styles.userAvatar} />
        <span className={styles.userName}>{userName} ({role})</span>
      </div>
    </header>
  );
};

export default Header;