import React, { useContext } from 'react';
import styles from './CustomerInfo.module.css';
import { ChatContext } from '../../contexts/ChatsContext';

function CustomerInfo() {
  const { selectedCustomer } = useContext(ChatContext); // Lấy dữ liệu từ context

  if (!selectedCustomer) {
    return <p className={styles.noCustomer}>Chưa chọn khách hàng</p>; // Hiển thị nếu chưa chọn
  }

  const { avatar, name } = selectedCustomer;

  return (
    <section className={styles.customerInfo}>
      <header className={styles.infoHeader}>
        <h3 className={styles.infoTitle}>
          <img
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/6b815139061ad3373a577f70b73280f686d520e0813dc4e7ab1a56959afc022b?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            alt=""
            className={styles.infoIcon}
          />
          Thông tin khách hàng
        </h3>
        <button className={styles.detailsButton}>Xem chi tiết</button>
      </header>
      <div className={styles.infoContent}>
        <img
          src={avatar}
          alt="Customer avatar"
          className={styles.customerAvatar}
        />
        <div className={styles.customerDetails}>
          <p className={styles.customerName}><img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/8585cb82ee342153e8304b769f50275fd345c5dc751f0dc47ec614d4908f5b04?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.detailIcon}
            />{name}</p>
          <p className={styles.customerPhone}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/0f0ded2fe83fd978b1dba2fdd292e914743eef16d8a0c2c1c852aa41b8dffdd6?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.detailIcon}
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
              className={styles.detailIcon}
            />
            minhmin99@gmail.com
          </p>
          <p className={styles.customerLocation}>
            <img
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/92cbc472be69a8067ab80d05f0dc50cd993fff7b61a5672a4fb3dce7a3fa7334?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
              alt=""
              className={styles.detailIcon}
            />
            Đà Nẵng, Việt Nam
          </p>
        </div>
      </div>
    </section>
  )
}

export default CustomerInfo
