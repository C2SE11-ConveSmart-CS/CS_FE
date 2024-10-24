/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './OrderStatus.module.css'

const statuses = [
  { label: 'Lead', value: '2.367', change: '345', increasing: true },
  { label: 'Contacted', value: '612', change: '16', increasing: true },
  { label: 'Qualified', value: '0', change: '0' },
  { label: 'Đang giao hàng', value: '0', change: '0' },
  { label: 'Huỷ đơn', value: '0', change: '0' },
  { label: 'Won', value: '0', change: '0' },
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
                  src="/assets/icons/trend-up.svg"
                  alt="Increasing"
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
