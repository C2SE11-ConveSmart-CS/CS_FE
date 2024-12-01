import React from 'react'
import { MessageCard } from './components/MessageCard'
import { SentimentCard } from './components/SentimentCard'
import styles from './MessageAnalytics.module.css'

const messageData = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/8447ed3f349418e9bec1a58b2797c604ac5028b8527587101be377e299c9d0b2?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    title: 'Tin nhắn về sản phẩm, dịch vụ',
    count: 696,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/691487958fdf35c3aca5ec2cac6156ca95e6cf089924b1d21f8342cd197ebdf7?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    title: 'Tin nhắn về phản hồi, khiếu nại',
    count: 152,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/4c0a48fd941d46e0ae2dab09ca8f2b5a54cd3b9062636b0106f573e3b9feb8d3?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    title: 'Tin nhắn về yêu cầu hỗ trợ',
    count: 386,
  },
]

const sentimentData = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/257408d3e25351fc142ae7d51e0ec81e6df4fa47cec3f46102d3c4fabb0ddba3?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    title: 'Tin nhắn tích cực',
    count: 224,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a5721e72dc49837e18bb42a4cb8dbea3317bd6edf664b1e5084cf9e2667261f0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    title: 'Tin nhắn tiêu cực',
    count: 28,
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/f1654a015402b1cd6b1d5a8fffe2598f90d0308c97a7ec927539590533062d89?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    title: 'Tin nhắn trung lập',
    count: 982,
  },
]

export const MessageAnalytics = () => {
  return (
    <div className={styles.analyticsContainer}>
      <div className={styles.analyticsGrid}>
        <section className={styles.messageSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Tổng quan về nội dung tin nhắn
            </h2>
            <p className={styles.sectionDescription}>
              Phân tích nội dung tin nhắn
            </p>
          </div>
          <div className={styles.messageList}>
            {messageData.map((message, index) => (
              <MessageCard
                key={index}
                icon={message.icon}
                title={message.title}
                count={message.count}
              />
            ))}
          </div>
        </section>

        <section className={styles.sentimentSection}>
          <div className={styles.sectionHeader}>
            <h2 className={styles.sectionTitle}>
              Tổng quan về cảm xúc tin nhắn
            </h2>
            <p className={styles.sectionDescription}>
              Phân tích cảm xúc tin nhắn
            </p>
          </div>
          <div className={styles.sentimentList}>
            {sentimentData.map((sentiment, index) => (
              <SentimentCard
                key={index}
                icon={sentiment.icon}
                title={sentiment.title}
                count={sentiment.count}
              />
            ))}
          </div>
        </section>
      </div>
    </div>
  )
}