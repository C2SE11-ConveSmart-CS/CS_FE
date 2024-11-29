import React from 'react'
import styles from './Header.module.css'


export function Header() {
  return (
    <header className={styles.header}>
      <h1 className={styles.title}>Bán hàng đa kênh</h1>
      <div className={styles.filters}>
        <div className={styles.filterItem}>
          <img
            src="/icons/employee.png" 
            alt="Employee filter"
            className={styles.icon}
          />
          <span className={styles.filterText}>Tất cả</span>
          <img
            src="/icons/dropdown.png"
            alt="Dropdown"
            className={styles.dropdownIcon}
          />
        </div>
        <div className={styles.filterItem}>
          <img
            src="/icons/calendar.png"
            alt="Date filter"
            className={styles.icon}
          />
          <span className={styles.filterText}>01/08/2024 - 31/08/2024</span>
          <img
            src="/icons/dropdown.png"
            alt="Dropdown"
            className={styles.dropdownIcon}
          />
        </div>
      </div>
    </header>
  )
}
