import React from 'react'
import styles from './PageOverview.module.css'

export function PageOverview() {
  return (
    <section className={styles.pageOverview}>
      <h2 className={styles.title}>Tổng quan về trang</h2>
      <p className={styles.subtitle}>Thông tin chung về trang của bạn</p>
      <div className={styles.stats}>
        <div className={styles.statItem}>
          <img
            src="/icons/message.png"
            alt="Messages"
            className={styles.statIcon}
          />
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Tin nhắn tới trang</span>
            <span className={styles.statValue}>23.680</span>
          </div>
        </div>
        <div className={styles.statItem}>
          <img
            src="/icons/comment.png"
            alt="Comments"
            className={styles.statIcon}
          />
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Bình luận tới trang</span>
            <span className={styles.statValue}>1.267</span>
          </div>
        </div>
        <div className={styles.statItem}>
          <img
            src="/icons/call.png"
            alt="Calls"
            className={styles.statIcon}
          />
          <div className={styles.statInfo}>
            <span className={styles.statLabel}>Cuộc gọi tới trang</span>
            <span className={styles.statValue}>641</span>
          </div>
        </div>
      </div>
    </section>
  )
}
