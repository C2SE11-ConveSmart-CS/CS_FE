import React, { useState } from 'react';
import styles from './TopBar.module.css';
import ProfileCard from '../ProfileComponents/ProfileCard';
const TopBar = () => {
  const [isProfileOpen, setIsProfileOpen] = useState(false);

  const toggleProfilePopup = () => {
    setIsProfileOpen(!isProfileOpen);
  };

  return (
    <header className={styles.topbar}>
      <form className={styles.searchBar}>
        <div className={styles.search}>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/00520198f4bb9cb82a30bd1aa138c4fb6d6049920bed277bf9378c87130a4b49?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
            className={styles.searchIcon}
            alt=""
          />
          <input
            type="search"
            className={styles.searchInput}
            placeholder="Tìm kiếm"
            aria-label="Tìm kiếm"
          />
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c3e3b5906bc827eb9dc7f46e4e73b6e3970b3b3fc4623d8a99420793c3643cc2?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
          className={styles.searchIcon}
          alt=""
        />
      </form>
      <nav className={styles.profile}>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/5b8eba8ebce809d5124f4b7b76bde63c5513c6f699a960172785f0862b921673?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
          className={styles.profileIcon}
          alt="Notification"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/c85a5cd47e21f5153b43645a6e60e4481da80abae130d41188822c34bc122375?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
          className={styles.profileIcon}
          alt="Messages"
        />
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/9d78884bb6062c55d4447c98b36e7422d424bf1f5c4bb5279370ecb84578017d?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
          className={styles.profileIcon}
          alt="Settings"
        />
        <div className={styles.divider}></div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/a81cf6ca74dc86d12bec88b4b1699db685f56cc64648ef73d415dcfa18bb2492?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
          className={styles.profileIcon}
          alt="User menu"
        />
        <img
          onClick={toggleProfilePopup} // Kích hoạt popup khi click vào avatar
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/2c0b8a246958f3b61edd06037956331bb8164c59eae631abeb539d35b8dc43d0?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
          className={styles.avatar}
          alt="User avatar"
        />
      </nav>

      {isProfileOpen && (
        <div className={styles.profilePopup}>
          <ProfileCard /> {/* Hiển thị popup ProfileAccount */}
          <button className={styles.closePopup} onClick={toggleProfilePopup}>
            Đóng
          </button>
        </div>
      )}
    </header>
  );
};

export default TopBar;
