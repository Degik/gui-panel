import React from 'react';
import styles from './ReportBuilderKpi.module.css';
import SelectComponent from './SelectComponent';
import GraphTypeComponent from './GraphTypeComponent';

const ReportBuilderKpi: React.FC = () => {
  const graphIcons = [
    "https://cdn.builder.io/api/v1/image/assets/TEMP/928b12fbc6b711d2f11a29a4b756cd33715d2247d559e2a85a95fa56e9e53916?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/32c9dc5d1d60110fd61ccf1a9e7e60874482e999e5afc43bdcec6864936b725a?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/913f54a30226d0b0591ac071b2ba5473b2cd5788e28cb1b4395c149ab2970e32?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130",
    "https://cdn.builder.io/api/v1/image/assets/TEMP/1b170e9c36b9de604012112c86a34eb910170349f46b59826076909e8276cc64?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
  ];

  return (
    <section className={styles.reportBuilderKpi}>
      <div className={styles.kpiContainer}>
        <div className={styles.kpiSection}>
          <SelectComponent
            label="KPI"
            description="KPI to display in the report"
            value="Idle time"
            iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a819a5860a79b746c6f3cd6b829d5d29c2d8884cea526c376dfe491e7253a5b6?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
          />
          <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/43f4754e22d7d867348a91b28e8e2ccd99de9719df9c12a00a40f35c8b4e8a83?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="Info" className={styles.infoIcon} />
        </div>
        <div className={styles.timeFrameSection}>
          <div className={styles.timeFrameContainer}>
            <div className={styles.column}>
              <SelectComponent
                label="Time Frame"
                description="Period of the data to display"
                value="Month"
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a819a5860a79b746c6f3cd6b829d5d29c2d8884cea526c376dfe491e7253a5b6?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
              />
            </div>
            <div className={styles.column}>
              <GraphTypeComponent icons={graphIcons} />
            </div>
          </div>
        </div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/2fb57594442ee04351174c1a527d60b534f1c4b5a9b7fce40766780616eb171d?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="Additional option" className={styles.bottomIcon} />
      </div>
      <div className={styles.optionsContainer}>
        <div className={styles.moreOptions}>More options</div>
        <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/a819a5860a79b746c6f3cd6b829d5d29c2d8884cea526c376dfe491e7253a5b6?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="" className={styles.optionsIcon} />
      </div>
      <img loading="lazy" src="https://cdn.builder.io/api/v1/image/assets/TEMP/88dc48c9056f525252cbbba76a00a792f69a478cb37c6244902a186669ea7d2f?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130" alt="Bottom decoration" className={styles.bottomIcon} />
    </section>
  );
};

export default ReportBuilderKpi;