import React from 'react'
import useConversation from '../../hooks/useConversation'
import ChatListItem from './ChatListItem'
import styles from './ChatSidebar.module.css'

function ChatSidebar({ prop }) {
  const { loading, conversations } = useConversation()
  console.log(prop)
  if (loading) {
    return <div>Loading...</div>
  }

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
        {/* {conversations?.map(chat => (
          <ChatListItem
            key={chat._id}
            _id={chat._id}
            avatar={chat.senderId?.avatar}
            message={chat.messages[0]?.content}
            name={chat.senderId?.normalize}
            time={chat.updatedAt}
            senderId={chat.senderId?._id}
            prop={{setCurrentUserId: prop.setCurrentUserId, username: chat.senderId?.username}}
          />
        ))} */}

        {conversations?.map(c => (
          <ChatListItem
            key={c.id}
            _id={c.id}
            avatar={c.avatar}
            message={c.lastMessage}
            name={c.name}
            time={c.time}
            senderId={c.senderId}
            type={c.type}
            social={c.social}
            prop={{
              setCurrentUserId: prop.setCurrentUserId,
              username: c.senderId?.username,
            }}
          />
        ))}
      </nav>
    </aside>
  )
}

export default ChatSidebar
