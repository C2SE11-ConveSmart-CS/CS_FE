import React from 'react'
import { StatCard } from './components/StatCard'
import { MetricCard } from './components/MetricCard'
import styles from './DashboardOverview.module.css'

const pageStats = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/1a00c840ab115e7f1f79406515fd60e311a471337808ac1a81aa3b67c61581a3?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    label: 'Tin nhắn tới trang',
    value: '1234',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/704f0816b2e005f5cde3acfb0aa8257e4748b821bf0d8ae3ba4b618e6a2042f8?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    label: 'Tin nhắn đã đọc',
    value: '1000',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/07a9e8416d008d316a48d051660f1c20df792b04d1303bf84b225424b16bfe7b?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    label: 'Tin nhắn chưa đọc',
    value: '234',
  },
]

const customerMetrics = [
  {
    title: 'Tổng khách hàng',
    value: '999',
  },
  {
    title: 'Khách hàng cá nhân',
    value: '630',
  },
  {
    title: 'Khách hàng doanh nghiệp',
    value: '369',
  },
]

export const DashboardOverview = () => {
  return (
    <div className={styles.dashboardContainer}>
      <section className={styles.pageOverview}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Tổng quan về trang</h2>
          <p className={styles.sectionDescription}>
            Thông tin chung về trang của bạn
          </p>
        </div>
        <div className={styles.abczxc}>
        {pageStats.map((stat, index) => (
          <StatCard
            key={index}
            icon={stat.icon}
            label={stat.label}
            value={stat.value}
          />
        ))}
        </div>
        
      </section>

      <section className={styles.customerOverview}>
        <div className={styles.sectionContent}>
          <h2 className={styles.sectionTitle}>Tổng quan về khách hàng</h2>
          <p className={styles.sectionDescription}>
            Thống kế tổng quan về số lượng khách hàng
          </p>
        </div>
        <div className={styles.metricsGrid}>
          {customerMetrics.map((metric, index) => (
            <MetricCard key={index} title={metric.title} value={metric.value} />
          ))}
        </div>
      </section>
    </div>
  )
}
