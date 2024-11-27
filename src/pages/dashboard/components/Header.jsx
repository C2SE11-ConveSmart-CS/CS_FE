/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './Header.module.css'

export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Bán hàng đa kênh</h1>
      <div className={styles.filters}>
        <div className={styles.filterItem}>
          <img
            src="/assets/icons/employee.svg"
            alt="Employee filter"
            className={styles.icon}
          />
          <span className={styles.filterText}>Tất cả</span>
          <img
            src="/assets/icons/dropdown.svg"
            alt="Dropdown"
            className={styles.dropdownIcon}
          />
        </div>
        <div className={styles.filterItem}>
          <img
            src="/assets/icons/calendar.svg"
            alt="Date filter"
            className={styles.icon}
          />
          <span className={styles.filterText}>01/08/2024 - 31/08/2024</span>
          <img
            src="/assets/icons/dropdown.svg"
            alt="Dropdown"
            className={styles.dropdownIcon}
          />
        </div>
      </div>
    </header>
  )
}
