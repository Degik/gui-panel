import React, { useState } from "react";
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

type Kpi = {
    id: number;
    name: string;
};

type ForecastData = {
    date: string;
    value: number;
};

const ForecastingPage: React.FC = () => {
    // Simulate the list of KPIs
    const getKpis = (): Kpi[] => [
        { id: 1, name: "Revenue Growth" },
        { id: 2, name: "Customer Retention" },
        { id: 3, name: "New Clients" },
    ];

    // Simulate an API response for KPI forecasts
    const simulateApiResponse = (kpiId: number): ForecastData[] => {
        const now = new Date();
        return Array.from({ length: 12 }, (_, i) => {
            const month = new Date(now.getFullYear(), now.getMonth() - i);
            return {
                date: month.toLocaleDateString("en-US", { month: "short", year: "numeric" }),
                value: parseFloat((Math.random() * 100).toFixed(2)), // Simulate random data points
            };
        }).reverse();
    };

    const [selectedKpi, setSelectedKpi] = useState<number | null>(null);
    const [forecastData, setForecastData] = useState<ForecastData[]>([]);

    const handleKpiChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const kpiId = parseInt(e.target.value, 10);
        if (!isNaN(kpiId)) {
            const data = simulateApiResponse(kpiId);
            setSelectedKpi(kpiId);
            setForecastData(data);
        } else {
            setSelectedKpi(null);
            setForecastData([]);
        }
    };

    const kpis = getKpis();

    return (
        <div className="ForecastingPage max-w-4xl mx-auto p-6 bg-gray-100 ">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">KPI Forecasting</h1>
            <div className="mb-6">
                <label className="block text-gray-700 font-medium mb-2" htmlFor="kpi-select">
                    Select a KPI
                </label>
                <select
                    id="kpi-select"
                    className="w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    onChange={handleKpiChange}
                >
                    <option value="">-- Select KPI --</option>
                    {kpis.map((kpi) => (
                        <option key={kpi.id} value={kpi.id}>
                            {kpi.name}
                        </option>
                    ))}
                </select>
            </div>

            {forecastData.length > 0 ? (
                <div className="bg-white p-6 rounded-lg shadow-md">
                    <h2 className="text-lg font-semibold mb-4">
                        Forecast for: {kpis.find((kpi) => kpi.id === selectedKpi)?.name}
                    </h2>
                    <ResponsiveContainer width="100%" height={400}>
                        <LineChart data={forecastData}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip formatter={(value: number) => value.toFixed(2)} />
                            <Line
                                type="monotone"
                                dataKey="value"
                                stroke="#8884d8"
                                strokeWidth={2}
                                dot={{ r: 4 }}
                                activeDot={{ r: 6 }}
                            />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            ) : (
                <p className="text-gray-600 text-center">Select a KPI to view its forecast.</p>
            )}
        </div>
    );
};

export default ForecastingPage;
