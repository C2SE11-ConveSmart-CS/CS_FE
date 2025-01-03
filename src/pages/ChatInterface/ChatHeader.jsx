
import React from 'react'
import styles from './ChatHeader.module.css'

function ChatHeader({ avatar, name }) {
  return (
    <header className={styles.header}>
      <div className={styles.userInfo}>
        <img src={avatar} alt={`${name}'s Avatar`} className={styles.avatar} />
        <div className={styles.nameActivity}>
          <h2 className={styles.name}>{name}</h2>
          <p className={styles.activity}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e75312fccd5a5be153750b953d7928e3c25513c4b0003af5ffc2ea94f420cc?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.activityIcon}
            />
            Đã xem bởi Sam Sam
          </p>
          <div className={styles.actions}>
            <button className={styles.actionButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/479ce06b2dec73c925dec328f65c89b98abe31ecb22f7830f804f2cbd2b56541?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 1"
              />
            </button>
            <button className={styles.actionButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f54f96a586d2d86f076133d03944c7caba9d6f0290f457c1d86f89c4f473399?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 2"
              />
            </button>
            <button className={styles.actionButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/280bdc715cadecfb080b79a1e74a47f5b88803590d1cc028c534ff617a978138?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 3"
              />
            </button>
            <button className={styles.actionButton}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efbf526c74b53f5b4b856fbead16f53c48eca58d923d23ada3a51239bea4ab1?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 4"
              />
            </button>
          </div>
        </div>
      </div>
      <div className={styles.headerActions}>
        <button className={styles.headerButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/089c33e47c461615545f40669be039f382fb946f0c4eef413b0c7425cacb56c3?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Action 5"
          />
        </button>
        <button className={styles.headerButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/85b6306de571c1dfb36b9836fd1a259a9dda6ed5b9de5999265e0641f66a29fa?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Action 6"
          />
        </button>
        <button className={styles.headerButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bcc8faea4d0e3fe1ecb549c3c13bb8aacf0e1376b5cd00d5f526c336d7a2c8?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Action 7"
          />
        </button>
        <button className={styles.headerButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/50dd60bb1967db1b4b766d197609e27070705fa65f003a9a70c690d33809a241?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Action 8"
          />
        </button>
        <button className={styles.headerButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/a557aa66ec16c9f76c94e7814eca12b575c51ac99934297c8ee2ca4af589e3f0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Action 9"
          />
        </button>
      </div>
    </header>
  )
}

export default ChatHeader
