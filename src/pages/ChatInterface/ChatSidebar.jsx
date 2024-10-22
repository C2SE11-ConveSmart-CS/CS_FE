/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './ChatSidebar.module.css'
import ChatListItem from './ChatListItem'

const chatData = [
  {
    id: 1,
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/4b022afc59366991fdcdc86de0d09941ad8fd229cd5856ac0c6c205be62dcdd1?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    name: 'Ngọc Hải',
    message: 'Xin chào shop!',
    time: '14:24',
    tags: ['KH VIP'],
    social: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8757a171b1521839de8631070071001f832c14db0a591474fcf3c26866b90ff4?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/187222d521f6319efdb45c604a68049f64959e018e02a96a7ff4d9849b261961?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/1b30f8e9b580aa2094eba23d21148703ed58ad8563bde539d4afacc5270c7c66?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    ],
    isVerified: true,
  },
  {
    id: 2,
    avatar:
      'https://cdn.builder.io/api/v1/image/assets/TEMP/613969dcd79a40c443edb263b7f0609a5735bb4883b3b83852db7ada08ef84e5?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    name: 'Thảo Nguyễn',
    message: 'Cần hỗ trợ!',
    time: '14:24',
    tags: ['KH VIP', 'Trả hàng'],
    social: [
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8757a171b1521839de8631070071001f832c14db0a591474fcf3c26866b90ff4?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/8ee5e497f3820d56960a40640eaabb76c2e8a56e7d3e32c87cf9ab6db7a8bac6?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
      'https://cdn.builder.io/api/v1/image/assets/TEMP/cd0803cdbd6d90e9982add719c01a953fe32b22a9c99aec67046415c9233bc78?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    ],
  },
  // ... Add more chat data objects here
]

function ChatSidebar() {
  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h2 className={styles.heading}>Hội Thoại</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d25a303721ea5f3aa4e706b525f2c45417f7a7ebe2db57185dc0b60c22094edb?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt=""
            className={styles.headerIcon}
          />
        </div>
        <div className={styles.searchBar}>
          <div className={styles.searchInput}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/00520198f4bb9cb82a30bd1aa138c4fb6d6049920bed277bf9378c87130a4b49?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.searchIcon}
            />
            <input
              type="text"
              placeholder="Tìm kiếm"
              className={styles.searchField}
            />
          </div>
          <button className={styles.filterButton}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/171026591218a4791084d8e867eaaf0a3f21f6f65f247ea7cb780a5764c07f00?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt="Filter"
              className={styles.filterIcon}
            />
          </button>
        </div>
      </header>
      <nav className={styles.chatList}>
        {chatData.map(chat => (
          <ChatListItem key={chat.id} {...chat} />
        ))}
      </nav>
    </aside>
  )
}

export default ChatSidebar
