import React from 'react';

interface FilterOptionsProps {
  filters: { site: string; productionLine: string; machines: string };
  onChange: (filters: { site: string; productionLine: string; machines: string }) => void;
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ filters, onChange }) => {
  const updateFilter = (key: keyof typeof filters, value: string) => {
    onChange({ ...filters, [key]: value });
  };

  return (
      <div className="p-6 bg-gray-100 rounded-lg shadow-md">
        {/* Header */}
        <div className="flex justify-between items-center mb-4">
          <div className="text-sm font-semibold text-gray-700">More Options</div>
          <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c33b492660f47ebadbd4ddc262746d4b9184c091300184241c32c88890005c5?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
              alt="Options Icon"
              className="w-5 h-5"
          />
        </div>
        <div className="text-gray-600 text-sm mb-4">Filter by:</div>

        {/* Horizontal Filters Row */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {/* Site Filter */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Site</label>
            <select
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.site}
                onChange={(e) => updateFilter('site', e.target.value)}
            >
              <option value="All">All</option>
              <option value="Site 1">Site 1</option>
              <option value="Site 2">Site 2</option>
            </select>
          </div>

          {/* Production Line Filter */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Production Line</label>
            <select
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.productionLine}
                onChange={(e) => updateFilter('productionLine', e.target.value)}
            >
              <option value="All">All</option>
              <option value="Line 1">Line 1</option>
              <option value="Line 2">Line 2</option>
            </select>
          </div>

          {/* Machines Filter */}
          <div className="flex flex-col">
            <label className="text-sm font-medium text-gray-700 mb-1">Machines</label>
            <select
                className="block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                value={filters.machines}
                onChange={(e) => updateFilter('machines', e.target.value)}
            >
              <option value="All">All</option>
              <option value="Machine 1">Machine 1</option>
              <option value="Machine 2">Machine 2</option>
            </select>
          </div>
        </div>
      </div>
  );
};

export default FilterOptions;
