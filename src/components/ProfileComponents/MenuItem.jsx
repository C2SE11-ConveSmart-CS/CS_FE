// MenuItem.jsx
import React from 'react';
import styles from './ProfileCard.module.css';

const MenuItem = ({ icon, label, onClick }) => {
  return (
    <div className={styles.menuItem} onClick={onClick}> {/* Gọi onClick ở đây */}
      <img src={icon} alt={label} className={styles.menuIcon} />
      <span className={styles.menuLabel}>{label}</span>
    </div>
  );
};

export default MenuItem;
