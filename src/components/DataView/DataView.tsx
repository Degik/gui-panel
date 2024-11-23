import React, {useState} from 'react';
import KpiSelector from '../KpiSelector/KpiSelector';
import Chart from '../Chart/Chart';
import {KPI} from "../../api/DataStructures";
import {getKpiList, getMachineList} from "../../api/PersistentDataManager";

const smoothData = (data: number[], alpha: number = 0.3): number[] => {
    const ema = [];
    ema[0] = data[0]; // Start with the first data point
    for (let i = 1; i < data.length; i++) {
        ema[i] = alpha * data[i] + (1 - alpha) * ema[i - 1]; // Exponential smoothing
    }
    return ema;
};

const DataView: React.FC = () => {
    const [kpi, setKpi] = useState<KPI>(getKpiList()[0]);
    const [timeFrame, setTimeFrame] = useState('Month');
    const [graphType, setGraphType] = useState('Pie');
    const [filters, setFilters] = useState({ site: 'All', productionLine: 'All', machines: 'All' });
    const [chartData, setChartData] = useState<any[]>([]);
    // Function to fetch chart data with applied filters
    const fetchChartData = async () => {
        console.log('Fetching data with:', { kpi, timeFrame, graphType, filters });

        let filteredData = getMachineList();

        // Apply site filter
        if (filters.site !== 'All') {
            filteredData = filteredData.filter((data) => data.site === filters.site);
        }

        // Apply production line filter
        if (filters.productionLine !== 'All') {
            filteredData = filteredData.filter((data) => data.line === filters.productionLine);
        }

        // Apply machine filter
        if (filters.machines !== 'All') {
            filteredData = filteredData.filter((data) => data.machineId === filters.machines);
        }

        if (graphType === 'Line' || graphType === 'Area') {
            // Generate time-series data with applied filters
            const timeSeriesData = Array.from({ length: 20 }, (_, index) => {
                const timestamp = new Date(Date.now() - index * 3600 * 1000).toISOString();
                const entry: any = { timestamp };
                const rawData = filteredData.map(() => Math.random() * 50);

                // Apply smoothing to the randomly generated data
                const smoothedData = smoothData(rawData);

                filteredData.forEach((machine, idx) => {
                    entry[machine.machineId] = smoothedData[idx]; // Apply smoothed values
                });
                return entry;
            });

            // Sort the time series data by timestamp
            const sortedTimeSeriesData = timeSeriesData.sort((a, b) => new Date(a.timestamp).getTime() - new Date(b.timestamp).getTime());

            setChartData(sortedTimeSeriesData);
        } else {
            // Generate categorical data with applied filters
            const categoricalData = filteredData.map((data) => ({
                name: data.machineId,
                value: Math.round(Math.random() * 100),
            }));

            setChartData(categoricalData);
        }
    };

    return (
        <div className="flex-1 flex-col w-full h-full space-y-5 p-6 items-center">
            {/* KPI Selector and Generate Button */}
            <KpiSelector
                kpi={kpi}
                setKpi={setKpi}
                timeFrame={timeFrame}
                setTimeFrame={setTimeFrame}
                graphType={graphType}
                setGraphType={setGraphType}
                filters={filters}
                setFilters={setFilters}
                onGenerate={fetchChartData} // Fetch chart data when "Generate" button is clicked
            />

            {/* Chart Section */}
            <div className={` shadow-md p-5 rounded-lg bg-white flex-1 w-full`}>
                <Chart data={chartData} graphType={graphType} kpi = {kpi}/>
            </div>
        </div>
    );
};

export default DataView;