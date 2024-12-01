import React from 'react';
import { PlatformStats } from './PlatformStats';
import styles from './StatisticsCard.module.css';

const platformData = [
  {
    platformName: 'Messenger',
    count: 680,
    readCount: 669,
    unreadCount: 11,
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2ebdd1c22c3940935b6b15265ac83f5c6a40c7d4fce15168269d0c2a41c9ed69?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa'
  },
  {
    platformName: 'Instagram',
    count: 456,
    readCount: 423,
    unreadCount: 33,
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/815d2e8c2164880e52af35893282c17763bc5b071172992f967e1c9c0cd10719?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa'
  },
  {
    platformName: 'Telegram',
    count: 98,
    readCount: 54,
    unreadCount: 44,
    iconSrc: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bef183854e74a63b4f1da5a61317d998b42aaec60e17348694fdee58b97b31bf?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa'
  }
];

export function StatisticsCard() {
  return (
    <div className={styles.container}>
      <div className={styles.chartWrapper}>
        <div className={styles.headerSection}>
          <h2 className={styles.title}>Tổng quan về số liệu</h2>
          <p className={styles.subtitle}>
            Thống kế tổng quan về số lượng tin nhắn trên từng nền tảng
          </p>
        </div>
        <div className={styles.statsContainer}>
          {platformData.map((platform, index) => (
            <React.Fragment key={platform.platformName}>
              <PlatformStats {...platform} />
              {index < platformData.length - 1 && <div className={styles.divider} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </div>
  );
}
export default StatisticsCard;