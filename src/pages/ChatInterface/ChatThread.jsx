import React, { useState, useEffect, useContext } from 'react'
import styles from './ChatThread.module.css'
import ChatMessage from './ChatMessage'
import { AuthContext } from '../../contexts/AuthContext'

const tagOptions = [
  'KH VIP',
  'Kiểm hàng',
  'Câu hỏi',
  'Mua hàng',
  'Đã gửi',
  'Trả hàng',
]

function ChatThread({ time, messages, lastMessageRef }) {
  const {authUser} = useContext(AuthContext)
  const [selectedTags, setSelectedTags] = useState([])

  const toggleTag = tag => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    )
  }

  useEffect(() => {
    lastMessageRef?.current?.scrollIntoView({ behavior: 'smooth' })
  }, [messages, lastMessageRef])

  return (
    <section className={styles.thread}>
      {messages?.map((message, id) => (
        <div key={id} ref={lastMessageRef}>
          {/* <ChatMessage key={message.id} {...message} sender={message.senderId === authUser ? 'agent':message.senderId}/> */}
          <ChatMessage key={message.id} {...message}/> 
        </div>
      ))}

      <div className={styles.tags}>
        {tagOptions.map((tag, index) => (
          <span
            key={index}
            className={`${styles.tag} ${selectedTags.includes(tag) ? styles.selected : ''}`}
            onClick={() => toggleTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>
    </section>
  )
}

export default ChatThread
