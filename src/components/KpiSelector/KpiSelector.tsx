
import React from 'react';
import Select from './Select';
import GraphTypeSelector from './GraphTypeSelector';
import FilterOptions from './FilterOptions';

// Funzione per ottenere i data type
const getDataTypes = (): string[] => {
  return ['dashboard', 'data_view'];
};

const getKPIs = (): string[] => {
  return ['energy_consumption', 'energy_cost', 'energy_production', 'energy_saving', 'energy_efficiency'];
}

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
      <section className="p-6 bg-gray-50 rounded-lg shadow-md max-w-4xl mx-auto space-y-6">
        {/* Selectors Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* KPI Selector */}
          <div>
            <Select
                label="KPI"
                description="KPI to display in the report"
                value={kpi}
                options={getKPIs()}
                onChange={setKpi}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/ee28ffec5ddc59d7906d5950c4861da7e441f40e4f9a912ad0c4390bc360c6bf?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
            />
          </div>

          {/* Time Frame Selector */}
          <div>
            <Select
                label="Time Frame"
                description="Period of the data to display"
                value={timeFrame}
                options={['Day', 'Week', 'Month', 'Year']}
                onChange={setTimeFrame}
                iconSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/a3a12f953c8d7c08ea7ca4c1596e4951f443f7d15290e7a565bbdc4fe81127a6?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
            />
          </div>

          {/* Graph Type Selector */}
          <div className="flex items-center justify-center">
            <GraphTypeSelector value={graphType} onChange={setGraphType} />
          </div>
        </div>

        {/* Filters Section */}
        <FilterOptions filters={filters} onChange={setFilters} />

        {/* Generate Button */}
        <div className="text-center">
          <button
              onClick={onGenerate}
              className="bg-blue-500 text-white px-6 py-2 rounded shadow hover:bg-blue-600 transition"
          >
            Generate Chart
          </button>
        </div>
      </section>
  );
};

export default KpiSelector;