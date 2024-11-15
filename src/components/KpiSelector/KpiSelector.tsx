import React from 'react';
import styles from './styles/KpiSelector.module.css';
import Select from './Select';
import GraphTypeSelector from './GraphTypeSelector';
import FilterOptions from './FilterOptions';

const KpiSelector: React.FC<{
  kpi: string;
  setKpi: (value: string) => void;
  timeFrame: string;
  setTimeFrame: (value: string) => void;
  graphType: string;
  setGraphType: (value: string) => void;
  filters: { site: string; productionLine: string; machines: string };
  setFilters: (filters: { site: string; productionLine: string; machines: string }) => void;
  onGenerate: () => void;
}> = ({ kpi, setKpi, timeFrame, setTimeFrame, graphType, setGraphType, filters, setFilters, onGenerate }) => {
  return (
    <section className={styles.kpiSelectorContainer}>
      <div className={styles.kpiSelectorWrapper}>
        <div className={styles.selectorRow}>
          <div className={styles.selectorColumn}>
            <div className={styles.selectorContent}>
              <Select
                label="KPI"
                description="KPI to display in the report"
                value={kpi}
                options={['Idle time', 'Efficiency', 'Output']}
                onChange={setKpi}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ee28ffec5ddc59d7906d5950c4861da7e441f40e4f9a912ad0c4390bc360c6bf?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
              />
            </div>
          </div>
          <div className={styles.selectorColumn}>
            <div className={styles.selectorContent}>
              <Select
                label="Time Frame"
                description="Period of the data to display"
                value={timeFrame}
                options={['Day', 'Week', 'Month', 'Year']}
                onChange={setTimeFrame}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a12f953c8d7c08ea7ca4c1596e4951f443f7d15290e7a565bbdc4fe81127a6?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
              />
            </div>
          </div>
          <div className={styles.selectorColumn}>
            <div className={styles.graphTypeWrapper}>
              <GraphTypeSelector value={graphType} onChange={setGraphType} />
            </div>
          </div>
        </div>
      </div>
      <FilterOptions filters={filters} onChange={setFilters} />
      <button className={styles.fetchButton} onClick={onGenerate}>
        Generate Chart
      </button>
    </section>
  );
};

export default KpiSelector;
