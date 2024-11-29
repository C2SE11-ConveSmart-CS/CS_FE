import React from 'react';
import styles from './SelectField.module.css';

const SelectField = ({ label, name, required = false, defaultValue }) => {
  return (
    <div className={styles.selectWrapper}>
      <label htmlFor={name} className={styles.label}>
        {label}
      </label>
      <select
        id={name}
        name={name}
        className={styles.select}
        required={required}
        defaultValue={defaultValue}
      >
        <option value="">{defaultValue || 'Select an option'}</option>
      </select>
    </div>
  );
};

export default SelectField;