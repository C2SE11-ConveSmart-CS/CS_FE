import React from 'react'
import styles from './TopPerformers.module.css'

const conversionLeaders = [
  { rank: 1, name: 'James', leads: 1, avatar: '/avatars/james.png' },
  { rank: 2, name: 'Will', leads: 1, avatar: '/avatars/will.png' },
  { rank: 3, name: 'Mark', leads: 1, avatar: '/avatars/mark.png' },
  { rank: 4, name: 'Tom', leads: 1, avatar: '/avatars/tom.png' },
  { rank: 5, name: 'Selena', leads: 1, avatar: '/avatars/selena.png' },
  { rank: 6, name: 'Karina', leads: 1, avatar: '/avatars/karina.png' },
]

const revenueLeaders = [
  {
    rank: 1,
    name: 'Tom',
    revenue: '64.789.000',
    avatar: '/avatars/tom.png',
  },
  {
    rank: 2,
    name: 'Selena',
    revenue: '59.450.000',
    avatar: '/avatars/selena.png',
  },
  {
    rank: 3,
    name: 'Mark',
    revenue: '57.200.000',
    avatar: '/avatars/mark.png',
  },
  {
    rank: 4,
    name: 'James',
    revenue: '45.000.000',
    avatar: '/avatars/james.png',
  },
  {
    rank: 5,
    name: 'Karina',
    revenue: '36.713.000',
    avatar: '/avatars/karina.png',
  },
  {
    rank: 6,
    name: 'Will',
    revenue: '31.213.000',
    avatar: '/avatars/will.png',
  },
]

export function TopPerformers() {
  return (
    <section className={styles.topPerformers}>
      <div className={styles.section}>
        <h2 className={styles.title}>Nhân viên chuyển đổi khách hàng</h2>
        <p className={styles.subtitle}>
          Bảng xếp hạng nhân viên chuyển đổi khách hàng nhiều nhất
        </p>
        <div className={styles.rankings}>
          {conversionLeaders.map(leader => (
            <div key={leader.name} className={styles.rankItem}>
              <div className={styles.rankInfo}>
              {leader.rank === 1 ? (
                <img
                  src={`/icons/gold.png`}
                  alt={`Rank 1`}
                  className={styles.rankBadge}
                />
                ) : leader.rank === 2 ? (
                <img
                  src={`/icons/silver.png`}
                  alt={`Rank 2`}
                  className={styles.rankBadge}
                />
                ) : leader.rank === 3 ? (
                <img
                  src={`/icons/bronze.png`}
                  alt={`Rank 3`}
                  className={styles.rankBadge}
                />
                ) : (
                  <span className={styles.rankNumber}>{leader.rank}</span>
                )}
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className={styles.avatar}
                />
                <span className={styles.name}>{leader.name}</span>
              </div>
              <span className={styles.metric}>{leader.leads} Leads</span>
            </div>
          ))}
        </div>
      </div>

      <div className={styles.section}>
        <h2 className={styles.title}>Nhân viên có doanh thu cao nhất</h2>
        <p className={styles.subtitle}>
          Bảng xếp hạng nhân viên có doanh thu cao nhất
        </p>
        <div className={styles.rankings}>
          {revenueLeaders.map(leader => (
            <div key={leader.name} className={styles.rankItem}>
              <div className={styles.rankInfo}>
              {leader.rank === 1 ? (
                <img
                  src={`/icons/gold.png`}
                  alt={`Rank 1`}
                  className={styles.rankBadge}
                />
                ) : leader.rank === 2 ? (
                <img
                  src={`/icons/silver.png`}
                  alt={`Rank 2`}
                  className={styles.rankBadge}
                />
                ) : leader.rank === 3 ? (
                <img
                  src={`/icons/bronze.png`}
                  alt={`Rank 3`}
                  className={styles.rankBadge}
                />
                ) : (
                  <span className={styles.rankNumber}>{leader.rank}</span>
                )}
                <img
                  src={leader.avatar}
                  alt={leader.name}
                  className={styles.avatar}
                />
                <span className={styles.name}>{leader.name}</span>
              </div>
              <span className={styles.metric}>{leader.revenue} VND</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
