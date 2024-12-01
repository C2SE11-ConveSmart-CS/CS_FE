import React from 'react';
import styles from './StatisticsCard.module.css';

export function PlatformStats({ platformName, count, readCount, unreadCount, iconSrc }) {
  return (
    <div className={styles.platformStats}>
      <div className={styles.platformName}>{platformName}</div>
      <div className={styles.statsContent}>
        <div className={styles.countSection}>
          <img
            loading="lazy"
            src={iconSrc}
            alt={`${platformName} icon`}
            className={styles.platformIcon}
          />
          <div>{count}</div>
        </div>
        <div className={styles.messageStats}>
          <div className={styles.readCount}>{readCount} SMS đã đọc</div>
          <div className={styles.unreadCount}>{unreadCount} SMS chưa đọc</div>
        </div>
      </div>
    </div>
  );
}