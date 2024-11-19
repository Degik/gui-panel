import React, {useState} from 'react';
import KpiSelector from '../KpiSelector/KpiSelector';
import Chart from '../Chart/Chart';

const DataView: React.FC = () => {
    const [kpi, setKpi] = useState('Idle time'); // KPI selezionato
    const [timeFrame, setTimeFrame] = useState('Month'); // Intervallo di tempo selezionato
    const [graphType, setGraphType] = useState('Bar'); // Tipo di grafico selezionato
    const [filters, setFilters] = useState({site: 'All', productionLine: 'All', machines: 'All'}); // Filtri selezionati
    const [chartData, setChartData] = useState<any[]>([]); // Dati del grafico

    // Funzione per simulare una chiamata API
    const fetchChartData = async () => {
        console.log('Fetching data with:', { kpi, timeFrame, graphType, filters });

        const machines = ['Machine A', 'Machine B', 'Machine C', 'Machine D', 'Machine E'];

        if (graphType === 'Line' || graphType === 'Area') {
            // Create time-series data
            const timeSeriesData = Array.from({ length: 10 }, (_, index) => {
                const timestamp = new Date(Date.now() - index * 3600 * 1000).toISOString(); // Hourly data
                const entry: any = { timestamp }; // Initialize with timestamp
                machines.forEach((machine) => {
                    entry[machine] = Math.round(Math.random() * 100); // Random value for each machine
                });
                return entry;
            });

            setChartData(timeSeriesData);
        } else {
            // Create categorical data
            const categoricalData = machines.map((machine) => ({
                name: machine,
                value: Math.round(Math.random() * 100),
            }));

            setChartData(categoricalData);
        }
    };


    return (
        <div className="flex flex-col gap-5 p-5 bg-gray-100 rounded-lg shadow-lg">
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
            <section className="mt-5 bg-white p-5 rounded-lg shadow-lg">
                <Chart data={chartData} graphType={graphType}/>
            </section>
        </div>
    );
};

export default DataView;
