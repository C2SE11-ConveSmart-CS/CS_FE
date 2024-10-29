import React, { useEffect, useState } from 'react'
import styles from './Sidebar.module.css'
import ChatItem from './ChatItem'
import axios from 'axios'  // Bạn có thể sử dụng axios hoặc fetch API để gọi API

const Sidebar = () => {
  // State để lưu dữ liệu chat
  const [chatData, setChatData] = useState([])

  // Sử dụng useEffect để gọi API khi component được mount
  useEffect(() => {
    // Gọi API Messenger để lấy danh sách cuộc trò chuyện
    const fetchChatData = async () => {
      try {
        const response = await axios.get(
          'https://graph.facebook.com/v14.0/me/conversations', // Thay thế bằng endpoint API Messenger thật
          {
            params: {
              access_token: 'YOUR_ACCESS_TOKEN', // Thêm token của bạn
              fields: 'senders,message_count',  // Bạn có thể điều chỉnh các fields muốn lấy
            },
          }
        )
        // Cập nhật state với dữ liệu từ API
        setChatData(response.data.data)
      } catch (error) {
        console.error('Lỗi khi gọi API Messenger:', error)
      }
    }

    fetchChatData()
  }, [])  // useEffect sẽ chỉ chạy một lần khi component được mount

  return (
    <aside className={styles.sidebar}>
      <header className={styles.header}>
        <div className={styles.title}>
          <h2 className={styles.heading}>Hội Thoại</h2>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/d25a303721ea5f3aa4e706b525f2c45417f7a7ebe2db57185dc0b60c22094edb?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt=""
            className={styles.titleIcon}
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
          <button className={styles.filterButton} aria-label="Filter">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/171026591218a4791084d8e867eaaf0a3f21f6f65f247ea7cb780a5764c07f00?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.filterIcon}
            />
          </button>
        </div>
      </header>
      <nav className={styles.chatList}>
        {/* Hiển thị danh sách cuộc trò chuyện từ API */}
        {chatData.map((chat, index) => (
          <ChatItem
            key={index}
            avatar={chat.senders.data[0].picture.url}  // Thay đổi theo cấu trúc API
            name={chat.senders.data[0].name}
            message={chat.snippet}  // Tin nhắn gần nhất
            time={new Date(chat.updated_time).toLocaleTimeString()} // Định dạng thời gian
            tags={[]}  // Thêm tags nếu có
            social={[]}  // Thêm dữ liệu social nếu có
            isOnline={false}  // Có thể điều chỉnh nếu có thông tin online
          />
        ))}
      </nav>
    </aside>
  )
}

export default Sidebar
