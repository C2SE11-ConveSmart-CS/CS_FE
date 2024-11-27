
import React from 'react'
import styles from './ChatInformation.module.css'

function ChatInformation() {
  return (
    <aside className={styles.chatInformation}>
      <nav className={styles.infoNav}>
        <button className={`${styles.navButton} ${styles.active}`}>
          Thông tin
        </button>
      </nav>
      <section className={styles.customerInfo}>
        <header className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b815139061ad3373a577f70b73280f686d520e0813dc4e7ab1a56959afc022b?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.titleIcon}
            />
            Thông tin khách hàng
          </h3>
          <button className={styles.detailButton}>Xem chi tiết</button>
        </header>
        <div className={styles.customerDetails}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/70354f3f2827d251a23b95cd76c7aebc831752d4d2f186e04ed6d20287074924?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Minh Min's profile"
            className={styles.customerAvatar}
          />
          <div className={styles.customerData}>
            <p className={styles.customerName}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8585cb82ee342153e8304b769f50275fd345c5dc751f0dc47ec614d4908f5b04?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt=""
                className={styles.dataIcon}
              />
              Minh Min
            </p>
            <p className={styles.customerPhone}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ded2fe83fd978b1dba2fdd292e914743eef16d8a0c2c1c852aa41b8dffdd6?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt=""
                className={styles.dataIcon}
              />
              0365864223
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cdd11a77e523781aac44ca80d78d548fcac0e31cb895f6c2818a848fa427fca?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Copy"
                className={styles.copyIcon}
              />
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/8b084b98741b1bcbf0508dc3d7cc6f479229996bfc099075616208c0b3dd1ddb?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt="Call"
                className={styles.callIcon}
              />
            </p>
            <p className={styles.customerEmail}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/27a61305be2222bf3f6ea8d13b96d8b8b0a29032dfcc94bdb06fcee18112edae?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt=""
                className={styles.dataIcon}
              />
              minhmin99@gmail.com
            </p>
            <p className={styles.customerLocation}>
              <img
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/92cbc472be69a8067ab80d05f0dc50cd993fff7b61a5672a4fb3dce7a3fa7334?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                alt=""
                className={styles.dataIcon}
              />
              Đà Nẵng, Việt Nam
            </p>
          </div>
        </div>
      </section>
      <section className={styles.notes}>
        <header className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/2f484a34558a6a2d06ce76db94c70cf645271f57debb2e170ebbf2e0a50df95b?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.titleIcon}
            />
            Ghi chú (2)
          </h3>
          <button className={styles.addNoteButton} aria-label="Add note">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d3a49b4eb005064b0c26b8f024eed539c640d94cfaf382ec26d26e877788e95?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
            />
          </button>
        </header>
        <div className={styles.notesList}>
          <div className={styles.noteItem}>
            <div className={styles.noteHeader}>
              <span className={styles.noteAuthor}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/eccb0ee1c139d964568e5e5bd454a946a944eda2e08019090f8aff03fafed542?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                  alt=""
                  className={styles.authorIcon}
                />
                Sam Sam
              </span>
              <span className={styles.noteTime}>15:22</span>
            </div>
            <p className={styles.noteContent}>
              Địa chỉ thứ 2: Xã Cao Sơn, Huyện Bạch Thông, Bắc Kạn
            </p>
          </div>
          <div className={styles.noteItem}>
            <div className={styles.noteHeader}>
              <span className={styles.noteAuthor}>
                <img
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/b88f3f137d79c6901412e967c3101a11e7703743dbab68b60c6de8984f8744a0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
                  alt=""
                  className={styles.authorIcon}
                />
                Jasmin
              </span>
              <span className={styles.noteTime}>26/09</span>
            </div>
            <p className={styles.noteContent}>Khách cần chăm sóc kỹ!!!</p>
          </div>
        </div>
        <textarea
          className={styles.addNoteInput}
          placeholder="Nhập ghi chú (Enter để gửi)"
          aria-label="Add a new note"
        ></textarea>
      </section>
      <section className={styles.attachments}>
        <header className={styles.sectionHeader}>
          <h3 className={styles.sectionTitle}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/826de0fd491dc0e3ef1dc6a23a0f8af2dce68ed188b769dc28801ac3b62e71d2?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.titleIcon}
            />
            Ảnh và tập tin đính kèm
          </h3>
          <button className={styles.expandButton} aria-label="Expand">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cdd11a77e523781aac44ca80d78d548fcac0e31cb895f6c2818a848fa427fca?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
            />
          </button>
        </header>
        <nav className={styles.attachmentNav}>
          <button className={styles.attachmentNavButton} aria-current="page">
            Hình ảnh
          </button>
          <button className={styles.attachmentNavButton}>Tập tin</button>
        </nav>
        <div className={styles.attachmentGrid}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/23db701b0404dcd471df66d110d55a127d0e62bc228b67653dbf86b40ae4913c?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 1"
            className={styles.attachmentImage}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f9b27a81e86749fbb7a86f8a09ec69e657c011aa80a4b3bba1da1293814a6e55?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 2"
            className={styles.attachmentImage}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/f66edb685d49222636dbff9afcc414d978e6139d28a4f7bd856c53c2783eb315?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 3"
            className={styles.attachmentImage}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/3cf927de4c256770a9eee3c34459a55ee2bac5f6b0f73db1eb8e8f65adfc158c?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 4"
            className={styles.attachmentImage}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e4c809aaadd3a5357f62ae48089c588023a5c3271f400212195f89f7259aa361?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 5"
            className={styles.attachmentImage}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5133182dd6b66fa03c17daffaa8571870bf4d28a424bee4406e0c30a10ffd168?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 6"
            className={styles.attachmentImage}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/e87069478ae2fb55e274e569b8b665b6677ebea35711872933959daf573f0d2e?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 7"
            className={styles.attachmentImage}
          />
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/34d0ba11eda019c9982556d7c28fb7bd799f4dfa82c0ebcaacc365ed3e2153f4?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Attachment 8"
            className={styles.attachmentImage}
          />
        </div>
        <button className={styles.viewMoreButton}>Xem thêm</button>
      </section>
    </aside>
  )
}

export default ChatInformation
