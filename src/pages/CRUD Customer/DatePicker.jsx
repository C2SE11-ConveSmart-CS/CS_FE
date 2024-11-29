import React from 'react';
import styles from './DatePicker.module.css';

const DatePicker = ({ label, name }) => {
  return (
    <div className={styles.datePickerWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <input
        type="date"
        id={name}
        name={name}
        className={styles.datePicker}
      />
    </div>
  );
};

export default DatePicker;