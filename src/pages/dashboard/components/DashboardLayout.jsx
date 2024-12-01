import React from 'react'
import styles from './DashboardLayout.module.css'
import { Header } from './Header'
import Layout from '../../../components/Layout/Layout'
import {DashboardOverview} from '../overview/DashboardOverview'
import StatisticsCard from '../statistics/StatisticsCard'
import {MessageAnalytics} from '../messageAnalytics/MessageAnalytics'
export function DashboardLayout() {
  return (
    <Layout>
    <main className={styles.dashboard}>
      <div className={styles.container}>
        <Header />
        <DashboardOverview />
        <StatisticsCard />
        <MessageAnalytics />
      </div>
    </main>
    </Layout>
  )
}
