/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './OrderStatus.module.css'

const statuses = [
  { label: 'Lead', value: '2.367', change: '345', increasing: true },
  { label: 'Contacted', value: '612', change: '16', decreasing: true },
  { label: 'Qualified', value: '0', change: '0', balance: true },
  { label: 'Đang giao hàng', value: '0', change: '0', balance: true },
  { label: 'Huỷ đơn', value: '0', change: '0', balance: true },
  { label: 'Won', value: '0', change: '0', balance: true },
]

export function OrderStatus() {
  return (
    <section className={styles.orderStatus}>
      <h2 className={styles.title}>Đơn hàng theo trạng thái</h2>
      <p className={styles.subtitle}>
        Thống kế tổng các trạng thái của các đơn hàng
      </p>
      <div className={styles.statuses}>
        {statuses.map(status => (
          <div key={status.label} className={styles.statusItem}>
            <div className={styles.statusMain}>
              <span className={styles.statusLabel}>{status.label}</span>
              <span className={styles.statusValue}>{status.value}</span>
            </div>
            <div className={styles.statusChange}>
              <span>{status.change}</span>
              {status.increasing && (
                <img
                  src="/icons/trend-up.png"
                  alt="Increasing"
                  className={styles.trendIcon}
                />
              )}
              {status.decreasing && (
                <img
                  src="/icons/trend-down.png"
                  alt="Decreasing"
                  className={styles.trendIcon}
                />
              )}
              {status.balance && (
                <img
                  src="/icons/trend.png"
                  alt="Balance"
                  className={styles.trendIcon}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
