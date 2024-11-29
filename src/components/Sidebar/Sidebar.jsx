import React from 'react';
import { Link } from 'react-router-dom'; // Import Link
import styles from './Sidebar.module.css';

const menuItems = [
  {
    label: 'Tổng quan',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/886101deab7e20e359e761740ebf52dcfd1db223a9856394124b42cfa79b02a1?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    route: '/dashboard', // Thêm route cho "Tổng quan"
  },
  {
    label: 'Khách hàng',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/23ee01b62a9efeb112d21166481d43f543bd0397970d8491aa8838216664d87e?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    route: '/customers', // Ví dụ thêm route cho "Khách hàng"
  },
  {
    label: 'Hội thoại đa kênh',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/fbdf920b70f9fb9c3910db6bac5be39ad4d7fd71ddfe67552801bba1ac2c440e?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    route: '/conversations', // Ví dụ thêm route cho "Hội thoại đa kênh"
  },
  {
    label: 'Quy trình tự động',
    icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/5f9b46c0ff4fba6636c5b995018f2a174cacbf0ac12286af82187fe8dcf8b876?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa',
    route: '/automation', // Ví dụ thêm route cho "Quy trình tự động"
  },
];

const Sidebar = () => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <img 
          src="CONVESMART.png" 
          alt="Logo ConveSmart" 
          className={styles.logoImage} 
          width="40"
        />
      </div>

      <nav className={styles.lists}>
        <div className={styles.mainMenu}>
          {menuItems.map((item, index) => (
            <Link to={item.route} key={index} className={styles.menuItem}> {/* Sử dụng Link để điều hướng */}
              <img loading="lazy" src={item.icon} className={styles.menuIcon} alt={item.label} />
              <div className={styles.menuLabel}>{item.label}</div>
            </Link>
          ))}
        </div>
        <img
          loading="lazy"
          src="https://cdn.builder.io/api/v1/image/assets/TEMP/7e386e5cedf05663a89cf94f11fddef2fd67100f7594d15058f6bfc04b749c48?placeholderIfAbsent=true&apiKey=96d3f0d387684778814e4c6d174285fa"
          className={styles.divider}
          alt=""
        />
      </nav>
    </aside>
  );
};

export default Sidebar;
