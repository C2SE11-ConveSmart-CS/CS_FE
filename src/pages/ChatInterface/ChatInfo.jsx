/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './ChatInfo.module.css'
import CustomerInfo from './CustomerInfo'
import ChatNotes from './ChatNotes'
import AttachedFiles from './AttachedFiles'

function ChatInfo() {
  return (
    <aside className={styles.chatInformation}>
      <nav className={styles.infoNav}>
        <button className={`${styles.navButton} ${styles.active}`}>
          Thông tin
        </button>
      </nav>
      <CustomerInfo />
      <ChatNotes />
      <AttachedFiles />
    </aside>
  )
}

export default ChatInfo
