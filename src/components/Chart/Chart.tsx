import React from 'react';
import {
    BarChart,
    Bar,
    LineChart,
    Line,
    PieChart,
    Pie,
    Tooltip,
    Legend,
    CartesianGrid,
    XAxis,
    YAxis,
    Cell,
    ResponsiveContainer, Area, AreaChart,
} from 'recharts';

interface ChartProps {
    data: any[];
    graphType: string;
}

const COLORS = ['#8884d8', '#83a6ed', '#8dd1e1', '#82ca9d', '#a4de6c', '#d0ed57'];

const formatDate = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }); // Formats as HH:mm
};

const formatDateEx = (timestamp: string) => {
    const date = new Date(timestamp);
    return date.toLocaleString(); // Formats as MM/DD/YYYY, HH:mm:ss
};


const DrillDownTooltip = ({active, payload, label}: any) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <p style={{margin: 0, fontWeight: 'bold'}}>{label}</p>
                <p style={{margin: 0}}>{`${payload[0].name}: ${payload[0].value}`}</p>
            </div>
        );
    }
    return null;
};

const LineTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
        return (
            <div
                style={{
                    backgroundColor: '#fff',
                    border: '1px solid #ccc',
                    padding: '10px',
                    borderRadius: '4px',
                    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                }}
            >
                <p style={{ margin: 0, fontWeight: 'bold' }}>{formatDateEx(label)}</p>
                {payload.map((entry: any, index: number) => (
                    <p
                        key={`tooltip-${index}`}
                        style={{
                            margin: 0,
                            color: entry.stroke, // Match the line's color
                        }}
                    >
                        {`${entry.name}: ${entry.value}`}
                    </p>
                ))}
            </div>
        );
    }
    return null;
};

const Chart: React.FC<ChartProps> = ({data, graphType}) => {
    if (!data || data.length === 0) {
        return (
            <p style={{textAlign: 'center', marginTop: '20px', color: '#555'}}>
                No data available. Please select options and click "Generate Chart".
            </p>
        );
    }

    switch (graphType) {
        case 'BarV': // Vertical Bar Chart
            return (
                <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                        <XAxis dataKey="name" tick={{ fill: '#666' }}/>
                        <YAxis tick={{ fill: '#666' }}/>
                        <Tooltip content={<DrillDownTooltip/>}/>
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            );
        case 'BarH': // Horizontal Bar Chart
            return (
                <ResponsiveContainer width="100%" height={400} >
                    <BarChart data={data} layout='horizontal'>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
                        <XAxis type="number" tick={{ fill: '#666' }}/>
                        <YAxis dataKey="name" tick={{ fill: '#666' }}/>
                        <Tooltip content={<DrillDownTooltip />} />
                        <Legend />
                        <Bar dataKey="value" fill="#8884d8" radius={[10, 10, 0, 0]} />
                    </BarChart>
                </ResponsiveContainer>
            );

        case 'Line':
            return (
                <ResponsiveContainer width="100%" height={400}>
                    <LineChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis
                            dataKey="timestamp"
                            tick={{ fill: '#666' }}
                            tickFormatter={formatDate}  // Apply the custom formatting
                        />
                        <YAxis tick={{ fill: '#666' }} />
                        <Tooltip content={<LineTooltip />} trigger={"hover"} />
                        <Legend />
                        {Object.keys(data[0] || {})
                            .filter((key) => key !== 'timestamp') // Exclude the timestamp key
                            .map((machine, index) => (
                                <Line
                                    key={machine}
                                    type="monotone"
                                    dataKey={machine} // Use the machine's name as the key
                                    stroke={COLORS[index % COLORS.length]}
                                    strokeWidth={2}
                                    dot={{ r: 5 }}
                                    activeDot={{ r: 8 }}
                                    name={machine}
                                />
                            ))}
                    </LineChart>
                </ResponsiveContainer>
            );

        case 'Area':
            return (
                <ResponsiveContainer width="100%" height={400}>
                    <AreaChart data={data}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0" />
                        <XAxis
                            dataKey="timestamp"
                            tick={{ fill: '#666' }}
                            tickFormatter={formatDate}  // Apply the custom formatting
                        />
                        <YAxis tick={{ fill: '#666' }} />
                        <Tooltip content={<LineTooltip />} trigger={"hover"} />
                        <Legend />
                        {Object.keys(data[0] || {}).filter((key) => key !== 'timestamp').map((machine, index) => (
                            <Area
                                key={machine}
                                type="monotone"
                                dataKey={machine}
                                stroke={COLORS[index % COLORS.length]}
                                fill={COLORS[index % COLORS.length]}
                                fillOpacity={0.3}
                                name={machine}
                            />
                        ))}
                    </AreaChart>
                </ResponsiveContainer>
            );

        case 'Pie':
            return (
                <ResponsiveContainer width="100%" height={400}>
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            nameKey="name"
                            cx="50%"
                            cy="50%"
                            outerRadius={120}
                            fill="#8884d8"
                            label={(entry) => `${entry.name}`}
                        >
                            {data.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>
                            ))}
                        </Pie>
                        <Tooltip content={<DrillDownTooltip/>}/>
                    </PieChart>
                </ResponsiveContainer>
            );
        default:
            return (
                <p style={{textAlign: 'center', marginTop: '20px', color: '#555'}}>
                    Unsupported graph type.
                </p>
            );
    }
};

export default Chart;
