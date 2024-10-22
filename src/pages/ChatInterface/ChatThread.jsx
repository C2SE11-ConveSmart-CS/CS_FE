/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './ChatThread.module.css'
import ChatMessage from './ChatMessage'

const messages = [
  { id: 1, sender: 'agent', content: 'Chào bạn, bạn cần tôi giúp gì không ạ?' },
  {
    id: 2,
    sender: 'user',
    content: 'Xin giá dây chuyền này ạ',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/02fbd188a124f6519b5f7ae3f51af3e54d43eaebd90be220f1cfd53901da4bc0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
  },
  {
    id: 3,
    sender: 'user',
    content: '',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/02fbd188a124f6519b5f7ae3f51af3e54d43eaebd90be220f1cfd53901da4bc0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    image:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/f942580a3a064e4480818f22745d3410dacdd6c504dec558e0df8e8343c48001?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
  },
  {
    id: 4,
    sender: 'agent',
    content: 'Mặt dây chuyền Vàng trắng 10K đính đá ECZ có giá 2.642.000₫ ạ!',
  },
  {
    id: 5,
    sender: 'user',
    content: 'Xin giá dây chuyền này ạ',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/02fbd188a124f6519b5f7ae3f51af3e54d43eaebd90be220f1cfd53901da4bc0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
  },
  {
    id: 6,
    sender: 'user',
    content: 'Oki, mua',
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/02fbd188a124f6519b5f7ae3f51af3e54d43eaebd90be220f1cfd53901da4bc0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
  },
]

function ChatThread() {
  return (
    <section className={styles.thread}>
      {messages.map(message => (
        <ChatMessage key={message.id} {...message} />
      ))}
      <p className={styles.timestamp}>Hôm nay 12:56 CH</p>
      <div className={styles.tags}>
        <span className={styles.tag}>KH VIP</span>
        <span className={styles.tag}>Kiểm hàng</span>
        <span className={styles.tag}>Câu hỏi</span>
        <span className={styles.tag}>Mua hàng</span>
        <span className={styles.tag}>Đã gửi</span>
        <span className={styles.tag}>Trả hàng</span>
      </div>
    </section>
  )
}

export default ChatThread
