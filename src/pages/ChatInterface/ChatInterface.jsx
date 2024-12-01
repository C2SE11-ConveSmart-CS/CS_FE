import React, { useContext, useEffect, useState } from 'react'
import styles from './ChatInterface.module.css'
import ChatSidebar from './ChatSidebar'
import ChatMain from './ChatMain'
import ChatInfo from './ChatInfo'
import Layout from '../../components/Layout/Layout' // Import Layout
import { ChatContext } from '../../contexts/ChatsContext'

function ChatInterface() {
  const { selectedConversation } = useContext(ChatContext)
  const [currentUserId, setCurrentUserId] = useState("")
  
  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.chatContent}>
          <ChatSidebar className={styles.chatSidebar} prop={{setCurrentUserId}}/>
          {selectedConversation ? (
            <ChatMain className={styles.chatMain} prop={{currentUserId}} />
          ) : (
            <div className={styles.chatMain}>Select conversation</div>
          )}
          <ChatInfo className={styles.chatInfo} />
        </div>
      </div>
    </Layout>
  )
}

export default ChatInterface
