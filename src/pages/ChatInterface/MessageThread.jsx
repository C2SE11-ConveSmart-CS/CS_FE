/**
 * This code was generated by Builder.io.
 */
import React from 'react'
import styles from './MessageThread.module.css'

function MessageThread() {
  return (
    <section className={styles.messageThread}>
      <header className={styles.header}>
        <div className={styles.userInfo}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/b5502215fef566aca72e6addf682035f19ffe47bccebc548892d5a5270958015?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Minh Min's avatar"
            className={styles.avatar}
          />
          <div className={styles.nameActivity}>
            <h2 className={styles.name}>Minh Min</h2>
            <p className={styles.lastSeen}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/10e75312fccd5a5be153750b953d7928e3c25513c4b0003af5ffc2ea94f420cc?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt=""
                className={styles.seenIcon}
              />
              Đã xem bởi Sam Sam - 05/05/2024 17:25
            </p>
            <div className={styles.actions}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/479ce06b2dec73c925dec328f65c89b98abe31ecb22f7830f804f2cbd2b56541?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 1"
                className={styles.actionIcon}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5f54f96a586d2d86f076133d03944c7caba9d6f0290f457c1d86f89c4f473399?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 2"
                className={styles.actionIcon}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/280bdc715cadecfb080b79a1e74a47f5b88803590d1cc028c534ff617a978138?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 3"
                className={styles.actionIcon}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8efbf526c74b53f5b4b856fbead16f53c48eca58d923d23ada3a51239bea4ab1?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Action 4"
                className={styles.actionIcon}
              />
            </div>
          </div>
        </div>
        <div className={styles.threadActions}>
          <button className={styles.actionButton} aria-label="Action 1">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/089c33e47c461615545f40669be039f382fb946f0c4eef413b0c7425cacb56c3?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
            />
          </button>
          <button className={styles.actionButton} aria-label="Action 2">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/85b6306de571c1dfb36b9836fd1a259a9dda6ed5b9de5999265e0641f66a29fa?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
            />
          </button>
          <button className={styles.actionButton} aria-label="Action 3">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/42bcc8faea4d0e3fe1ecb549c3c13bb8aacf0e1376b5cd00d5f526c336d7a2c8?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
            />
          </button>
          <button className={styles.actionButton} aria-label="Action 4">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/50dd60bb1967db1b4b766d197609e27070705fa65f003a9a70c690d33809a241?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
            />
          </button>
          <button className={styles.actionButton} aria-label="Action 5">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a557aa66ec16c9f76c94e7814eca12b575c51ac99934297c8ee2ca4af589e3f0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
            />
          </button>
        </div>
      </header>
      <div className={styles.messages}>
        {/* Message components would go here */}
      </div>
      <div className={styles.tags}>
        <span className={styles.tag}>KH VIP</span>
        <span className={styles.tag}>Kiểm hàng</span>
        <span className={styles.tag}>Câu hỏi</span>
        <span className={styles.tag}>Mua hàng</span>
        <span className={styles.tag}>Đã gửi</span>
        <span className={styles.tag}>Trả hàng</span>
      </div>
      <form className={styles.messageEditor}>
        <div className={styles.editorContainer}>
          <textarea
            className={styles.editorInput}
            placeholder="Với sự lộng lẫy của những viên đá ECZ trắng được đính một cách tỉ mỉ trên thiết kế đầy tinh xảo, chiếc mặt dây chuyền đính đá ECZ của PNJ sẽ cùng nàng kiêu hãnh tỏa sáng trên mọi bước đường."
          ></textarea>
          <div className={styles.editorActions}>
            <button
              type="button"
              className={styles.editorButton}
              aria-label="Attach file"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/455a3ffa05b83dfd95a5dd74e88353238d7080c478d136a11f9a5f0fdade9b41?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt=""
              />
            </button>
            <button
              type="submit"
              className={styles.editorButton}
              aria-label="Send message"
            >
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/3a33e34d1ef997c3f4cf4df60edae0a3b0daf7a7e70c2825cbd296cd091a0cb9?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt=""
              />
            </button>
          </div>
        </div>
        <div className={styles.editorFooter}>
          <span className={styles.brand}>PNJ</span>
          <div className={styles.footerActions}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/86c7d949ef9234e3bd219b232100a613e1aa6784da7bd0e0c83e444e9eda0200?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt="Action 1"
              className={styles.footerIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a8a835a604f5330b2988072267943bd9fc741ad16f538574f05c3b63302098c3?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt="Action 2"
              className={styles.footerIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a96ce1d65f885c0a1fc980732cae749cb24b3afd93c8498b063f2765d3658d?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt="Action 3"
              className={styles.footerIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/4cdc42b0ca2ad78f70e4d6832432af7c25868d335d61b02f1110cea7a54b25fe?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt="Action 4"
              className={styles.footerIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/f306df6c31f3cd44350edbdd894eba6a4afc022ab8dbc22997ede3baab58b796?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt="Action 5"
              className={styles.footerIcon}
            />
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/953cf47d46169c987bf933668c9992f9120331c547a79c6d78623536f413ce8f?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt="Action 6"
              className={styles.footerIcon}
            />
          </div>
        </div>
      </form>
    </section>
  )
}

export default MessageThread