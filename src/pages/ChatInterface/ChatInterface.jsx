import React, { useContext, useState } from 'react'
import Layout from '../../components/Layout/Layout' // Import Layout
import { ChatContext } from '../../contexts/ChatsContext'
import ChatInfo from './ChatInfo'
import styles from './ChatInterface.module.css'
import ChatMain from './ChatMain'
import ChatSidebar from './ChatSidebar'

function ChatInterface() {
  const { selectedConversation } = useContext(ChatContext)
  const [currentUserId, setCurrentUserId] = useState('')

  return (
    <Layout>
      <div className={styles.container}>
        <div className={styles.chatContent} style={{ display: 'flex' }}>
          <ChatSidebar
            className={styles.chatSidebar}
            prop={{ setCurrentUserId }}
          />
          {selectedConversation ? (
            <ChatMain className={styles.chatMain} prop={{ currentUserId }} />
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
