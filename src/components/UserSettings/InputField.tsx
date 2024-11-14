import React from 'react';
import styles from './styles/UserSettings.module.css';

interface InputFieldProps {
  label: string;
  value: string;
  type?: string;
  onChange?: (value: string) => void;
}

const InputField: React.FC<InputFieldProps> = ({ label, value, type = 'text', onChange }) => {
  return (
    <div className={styles.inputField}>
      <label htmlFor={label.toLowerCase().replace(/\s/g, '-')} className={styles.label}>
        {label}
      </label>
      <input
        type={type}
        id={label.toLowerCase().replace(/\s/g, '-')}
        className={styles.input}
        value={value}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  );
};

export default InputField;