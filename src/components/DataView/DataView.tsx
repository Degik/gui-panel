import React, { useState } from 'react';
import KpiSelector from '../KpiSelector/KpiSelector';
import Chart from '../Chart/Chart';
import styles from './styles/DataView.module.css';

const DataView: React.FC = () => {
  const [kpi, setKpi] = useState('Idle time'); // KPI selezionato
  const [timeFrame, setTimeFrame] = useState('Month'); // Intervallo di tempo selezionato
  const [graphType, setGraphType] = useState('Bar'); // Tipo di grafico selezionato
  const [filters, setFilters] = useState({ site: 'All', productionLine: 'All', machines: 'All' }); // Filtri selezionati
  const [chartData, setChartData] = useState<any[]>([]); // Dati del grafico

  // Funzione per simulare una chiamata API
  const fetchChartData = async () => {
    console.log('Fetching data with:', { kpi, timeFrame, graphType, filters });
    // Simulazione di dati del grafico
    const simulatedData = [
      { name: 'Machine 1', value: Math.random() * 100 },
      { name: 'Machine 2', value: Math.random() * 100 },
      { name: 'Machine 3', value: Math.random() * 100 },
    ];
    setChartData(simulatedData);
  };

  return (
    <div className={styles.dataViewContainer}>
      {/* Selettore KPI */}
      <KpiSelector
        kpi={kpi}
        setKpi={setKpi}
        timeFrame={timeFrame}
        setTimeFrame={setTimeFrame}
        graphType={graphType}
        setGraphType={setGraphType}
        filters={filters}
        setFilters={setFilters}
        onGenerate={fetchChartData} // Chiama l'API quando viene cliccato il pulsante "Generate Chart"
      />

      {/* Visualizzazione del Grafico */}
      <section className={styles.chartContainer}>
        <Chart data={chartData} graphType={graphType} />
      </section>
    </div>
  );
};

export default DataView;
