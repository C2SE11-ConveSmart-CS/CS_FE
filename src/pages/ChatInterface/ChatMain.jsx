/**
 * This code was generated by Builder.io.
 */
import React, { useContext, useEffect, useRef } from 'react'
import styles from './ChatMain.module.css'
import ChatHeader from './ChatHeader'
import ChatThread from './ChatThread'
import ChatInput from './ChatInput'
import { ChatContext } from '../../contexts/ChatsContext'
import useListenMessages from '../../hooks/useListenNewMessages'

function ChatMain() {
  console.log('chat main')
  const { selectedConversation, messages } = useContext(ChatContext)
  const lastMessageRef = useRef()
  useEffect(() => {
    setTimeout(() => {
      lastMessageRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, 100)
  }, [messages])
  console.log('selectedConversation:', selectedConversation)
  console.log('messages:', messages)
  useListenMessages()

  return (
    <main className={styles.messageThread}>
      <ChatHeader {...selectedConversation} />
      <ChatThread messages={messages} lastMessageRef={lastMessageRef} />
      <ChatInput />
    </main>
  )
}

export default ChatMain
