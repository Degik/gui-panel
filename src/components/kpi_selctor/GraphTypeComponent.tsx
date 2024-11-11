import React from 'react';
import styles from './ReportBuilderKpi.module.css';

interface GraphTypeComponentProps {
  icons: string[];
}

const GraphTypeComponent: React.FC<GraphTypeComponentProps> = ({ icons }) => {
  return (
    <div className={styles.graphTypeContainer}>
      <div className={styles.graphType}>
        {icons.map((icon, index) => (
          <React.Fragment key={index}>
            {index > 0 && <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/95a44a171a5fab3fc5e87451a378e059a17ae8498072917dadc3b48efcff18d4?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.divider} />}
            <img loading="lazy" src={icon} alt={`Graph type ${index + 1}`} className={styles.graphIcon} />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default GraphTypeComponent;