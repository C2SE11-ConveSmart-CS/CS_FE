import React from 'react';
import styles from './InputField.module.css';

const InputField = ({ label, name, type = 'text', required = false }) => {
  return (
    <div className={styles.inputWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={name}
        name={name}
        className={styles.input}
        required={required}
      />
    </div>
  );
};

export default InputField;