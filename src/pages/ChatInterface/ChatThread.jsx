import React, { useState } from 'react'
import styles from './ChatThread.module.css'
import ChatMessage from './ChatMessage'

// Dữ liệu messages
// const messages = [
//   { id: 1, sender: 'agent', content: 'Chào bạn, bạn cần tôi giúp gì không ạ?' },
//   {
//     id: 2,
//     sender: 'user',
//     content: 'Xin giá dây chuyền này ạ',
//     avatar:
//       'https://cdn.builder.io/api/v1/image/assets/TEMP/02fbd188a124f6519b5f7ae3f51af3e54d43eaebd90be220f1cfd53901da4bc0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
//   },
//   // Các message khác
// ];

const tagOptions = [
  'KH VIP',
  'Kiểm hàng',
  'Câu hỏi',
  'Mua hàng',
  'Đã gửi',
  'Trả hàng',
]

function ChatThread({ messages, lastMessageRef }) {
  // Sử dụng state để lưu các tag đã chọn
  const [selectedTags, setSelectedTags] = useState([])

  // Hàm để xử lý khi người dùng bấm chọn tag
  const toggleTag = tag => {
    setSelectedTags(prevTags =>
      prevTags.includes(tag)
        ? prevTags.filter(t => t !== tag)
        : [...prevTags, tag]
    )
  }

  return (
    <section className={styles.thread}>
      {/* Các message hiển thị */}
      {messages?.map((message, id) => (
        <div key={id} ref={lastMessageRef}>
          <ChatMessage key={message.id} {...message} />
        </div>
      ))}
      <p className={styles.timestamp}>Hôm nay 12:56 CH</p>

      {/* Thẻ tag nằm cố định ở cuối */}
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
