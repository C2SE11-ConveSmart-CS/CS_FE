import React, { useContext } from 'react';
import styles from './AttachedFiles.module.css';
import { ChatContext } from '../../contexts/ChatsContext'; // Import context

const images = [
  // Dữ liệu ảnh giữ nguyên
];

function AttachedFiles() {
  const { selectedCustomer } = useContext(ChatContext); // Lấy thông tin khách hàng

  // Nếu không có khách hàng được chọn, không hiển thị
  if (!selectedCustomer) return null;

  return (
    <section className={styles.attachedFiles}>
      <header className={styles.filesHeader}>
        <h3 className={styles.filesTitle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/826de0fd491dc0e3ef1dc6a23a0f8af2dce68ed188b769dc28801ac3b62e71d2?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt=""
            className={styles.filesIcon}
          />
          Ảnh và tập tin đính kèm
        </h3>
        <button className={styles.expandButton}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/5cdd11a77e523781aac44ca80d78d548fcac0e31cb895f6c2818a848fa427fca?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt="Expand"
            className={styles.expandIcon}
          />
        </button>
      </header>
      <nav className={styles.filesNav}>
        <button className={`${styles.navButton} ${styles.active}`}>Hình ảnh</button>
        <button className={styles.navButton}>Tập tin</button>
      </nav>
      <div className={styles.imageGrid}>
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Attached file ${index + 1}`}
            className={styles.attachedImage}
          />
        ))}
      </div>
      <button className={styles.viewMoreButton}>Xem thêm</button>
    </section>
  );
}

export default AttachedFiles;
