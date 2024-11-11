import React from 'react';
import styles from './ReportBuilderKpi.module.css';

interface SelectComponentProps {
  label: string;
  description: string;
  value: string;
  iconSrc: string;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ label, description, value, iconSrc }) => {
  return (
    <div className={styles.selectKpi}>
      <label className={styles.visuallyHidden} htmlFor={`${label.toLowerCase()}Select`}>{label}</label>
      <div>{label}</div>
      <div className={styles.description}>{description}</div>
      <div className={styles.select}>
        <div className={styles.value}>{value}</div>
        <img loading="lazy" src={iconSrc} alt="" className={styles.icon} />
      </div>
    </div>
  );
};

export default SelectComponent;