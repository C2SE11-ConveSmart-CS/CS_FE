// MenuList.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ProfileCard.module.css';
import MenuItem from './MenuItem';

const menuItems = [
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/36e44f47ff41fa91e1d655e8009fe1522ecaaff83dd004e6ff90d17888465d27?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    label: 'Hồ sơ của bạn',
    path: '/profile', // Đường dẫn đến trang profile
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/bcf730a37e49305c4ca83c00ce37931a667d613b14674a29b5f91c8a48fc1939?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    label: 'Nâng cấp gói',
    path: '/upgrade',
  },
  {
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2d13f1e866157e802f06d54d746e9d40db46d43b0130420a8ab12f6326a113ac?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    label: 'Đăng xuất',
    path: '/logout',
  },
];

const MenuList = () => {
  const navigate = useNavigate(); // Sử dụng useNavigate

  const handleMenuItemClick = (path) => {
    navigate(path); // Điều hướng đến đường dẫn
  };

  return (
    <nav className={styles.menuList}>
      {menuItems.map((item, index) => (
        <MenuItem
          key={index}
          icon={item.icon}
          label={item.label}
          onClick={() => handleMenuItemClick(item.path)} // Gọi hàm điều hướng khi nhấn
        />
      ))}
    </nav>
  );
};

export default MenuList;
