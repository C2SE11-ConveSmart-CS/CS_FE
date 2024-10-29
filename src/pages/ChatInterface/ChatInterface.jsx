import React, { useContext } from 'react'
import styles from './ChatInterface.module.css'
import ChatSidebar from './ChatSidebar'
import ChatMain from './ChatMain'
import ChatInfo from './ChatInfo'
import Layout from '../../components/Layout/Layout' // Import Layout
import { ChatContext } from '../../contexts/ChatsContext'

function ChatInterface() {
  const { selectedConversation } = useContext(ChatContext)

  return (
    <Layout>
      <div className={styles.container}>
        {/* Bố trí phần chính của giao diện chat */}
        <div className={styles.chatContent}>
          <ChatSidebar className={styles.chatSidebar} />
          {selectedConversation ? (
            <ChatMain className={styles.chatMain} />
          ) : (
            <div className={styles.chatMain}>Please select conversation</div>
          )}
          <ChatInfo className={styles.chatInfo} />
        </div>
      </div>
    </Layout>
  )
}

export default ChatInterface
