import React from 'react';
import styles from './styles/KpiSelector.module.css';

interface SelectProps {
  label: string;
  description: string;
  value: string;
  options: string[]; // Options
  iconSrc: string;
  onChange: (value: string) => void; // Callback function
}

const Select: React.FC<SelectProps> = ({ label, description, value, options, iconSrc, onChange }) => {
  return (
    <div className={styles.selectWrapper}>
      <div>{label}</div>
      <div className={styles.selectorDescription}>{description}</div>
      <div className={styles.selectBox}>
        <select
          className={styles.selectInput}
          value={value}
          onChange={(e) => onChange(e.target.value)} // Invia il valore selezionato al genitore
        >
          {options.map((option, index) => (
            <option key={index} value={option}>
              {option}
            </option>
          ))}
        </select>
        <img loading="lazy" src={iconSrc} alt="" className={styles.selectIcon} />
      </div>
    </div>
  );
};

export default Select;
