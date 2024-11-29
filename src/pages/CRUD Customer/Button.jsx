import React from 'react';
import styles from './Button.module.css';

const Button = ({ children, variant = 'default', type = 'button' }) => {
  return (
    <button className={`${styles.button} ${styles[variant]}`} type={type}>
      {children}
    </button>
  );
};

export default Button;