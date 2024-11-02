import React from 'react'
import styles from './DashboardLayout.module.css'
import { Header } from './Header'
import { OrderOverview } from './OrderOverview'
import { PageOverview } from './PageOverview'
import { RevenueOverview } from './RevenueOverview'
import { MetricsOverview } from './MetricsOverview'
import { CustomerOverview } from './CustomerOverview'
import { OrderStatus } from './OrderStatus'
import { TopPerformers } from './TopPerformers'

export function DashboardLayout() {
  return (
    <main className={styles.dashboard}>
      <div className={styles.container}>
        <Header />
        <OrderOverview />
        <section className={styles.overviewGrid}>
          <PageOverview />
          <RevenueOverview />
        </section>
        <MetricsOverview />
        <section className={styles.overviewGrid}>
          <CustomerOverview />
          <OrderStatus />
        </section>
        <section className={styles.overviewGrid}>
          <TopPerformers />
        </section>
      </div>
    </main>
  )
}
