
import React from 'react'
import TopBar from '../TopBar/TopBar'
import Sidebar from '../Sidebar/Sidebar'
import styles from './Layout.module.css'

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Sidebar />
      <main className={styles.content}>
        <TopBar />
        {children}
      </main>
    </div>
  )
}

export default Layout
