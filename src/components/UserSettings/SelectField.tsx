import React from 'react';
import styles from './styles/UserSettings.module.css';

interface SelectFieldProps {
  label: string;
  value: string;
  options: string[];
  onChange?: (value: string) => void;
}

const SelectField: React.FC<SelectFieldProps> = ({ label, value, options, onChange }) => {
  return (
    <div className={styles.selectField}>
      <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className={styles.label}>
        {label}
      </label>
      <select
        id={label.toLowerCase().replace(/\s/g, '-')}
        className={styles.select}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;