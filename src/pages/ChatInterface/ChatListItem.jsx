
import React, { useContext } from 'react'
import styles from './ChatListItem.module.css'
import moment from 'moment'
import { ChatContext } from '../../contexts/ChatsContext'

function ChatListItem({
  senderId,
  _id,
  type,
  avatar,
  name,
  message,
  time,
  tags = [],
  social = [],
  isVerified,
  prop
}) {
  const { setSelectedConversation } = useContext(ChatContext)
  const { setSelectedCustomer } = useContext(ChatContext);
  return (
    <article
      className={styles.chatItem}
      onClick={() => {
        console.log('chat list item', senderId,prop.username)
        setSelectedCustomer({ avatar, name });
        prop.setCurrentUserId(prop.username)
        setSelectedConversation({
          _id,
          senderId,
          avatar,
          name,
          message,
          time,
          tags,
          social,
          isVerified,
          type
        })
      }
      }
    >
      <img src={avatar} alt={`${name}'s avatar`} className={styles.avatar} />
      <div className={styles.content}>
        <div className={styles.header}>
          <h3 className={styles.name}>
            {isVerified && (
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcdb8bfe685882c8562e6bdd95f814867d8f1cd9ecaf29dd2d9c8393a97aa137?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Verified"
                className={styles.verifiedIcon}
              />
            )}
            {name}
          </h3>
          <div className={styles.socialIcons}>
            {social.map((icon, index) => (
              <img
                key={index}
                src={icon}
                alt=""
                className={styles.socialIcon}
              />
            ))}
          </div>
        </div>
        <p className={styles.message}>{message}</p>
        <div className={styles.footer}>
          <div className={styles.tags}>
            {tags.map((tag, index) => (
              <span key={index} className={styles.tag}>
                {tag}
              </span>
            ))}
          </div>
          <time className={styles.time}>{moment(time).format('HH:mm')}</time>
        </div>
      </div>
    </article>
  )
}

export default ChatListItem
