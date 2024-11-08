
import React, { useContext, useEffect, useRef } from 'react'
import styles from './ChatMain.module.css'
import ChatHeader from './ChatHeader'
import ChatThread from './ChatThread'
import ChatInput from './ChatInput'
import { ChatContext } from '../../contexts/ChatsContext'
import useListenMessages from '../../hooks/useListenNewMessages'

function ChatMain({prop}) {
  console.log('chat main')
  const { selectedConversation, messages } = useContext(ChatContext)
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [messages])
  console.log('selectedConversation:', selectedConversation)
  useListenMessages()

  return (
    <main className={styles.messageThread}>
      <ChatHeader {...selectedConversation} />
      <ChatThread messages={messages} lastMessageRef={lastMessageRef} />
      <ChatInput prop={{currentUserId: prop.currentUserId}}  />
    </main>
  )
}

export default ChatMain
