import React, { useEffect, useState, useCallback } from 'react';

interface FilterOptionsProps {
    filters: { site: string; productionLine: string; machines: string };
    onChange: (filters: { site: string; productionLine: string; machines: string }) => void;
    mockData: { machine: string; site: string; productionLine: string }[]; // Pass in mockData
}

const FilterOptions: React.FC<FilterOptionsProps> = ({ filters, onChange, mockData }) => {
    const [isExpanded, setIsExpanded] = useState(false); // State to track whether the options are expanded

    // Helper function to get compatible production lines based on selected site
    const getCompatibleProductionLines = useCallback((site: string) => {
        // Filter mockData based on the site, if site is not 'All'
        const filterCondition = mockData.filter((data) => site === 'All' || data.site === site);

        // Return unique production lines from the filtered data
        return ['All', ...new Set(filterCondition.map((data) => data.productionLine))];
    },[mockData]);

    // Helper function to get compatible machines based on selected site and production line
    const getCompatibleMachines = useCallback((site: string, productionLine: string) => {
        // Build the filter condition based on 'site' and 'productionLine'
        const filterCondition = mockData.filter((data) => {
            return (
                (site === 'All' || data.site === site) &&
                (productionLine === 'All' || data.productionLine === productionLine)
            );
        });

        // Return unique machine names from the filtered data
        return ['All', ...new Set(filterCondition.map((data) => data.machine))];
    }, [mockData]);

    // Effect to update productionLine options when site changes
    useEffect(() => {
        if (filters.site !== 'All') {
            const compatibleLines = getCompatibleProductionLines(filters.site);
            if (!compatibleLines.includes(filters.productionLine)) {
                onChange({ ...filters, productionLine: 'All', machines: 'All' });
            }
        }
    }, [filters, getCompatibleProductionLines, onChange]);

    // Effect to update machines options when productionLine changes
    useEffect(() => {
        if (filters.site !== 'All' && filters.productionLine !== 'All') {
            const compatibleMachines = getCompatibleMachines(filters.site, filters.productionLine);
            if (!compatibleMachines.includes(filters.machines)) {
                onChange({ ...filters, machines: 'All' });
            }
        }
    }, [filters, getCompatibleMachines, onChange]);

    const updateFilter = (key: keyof typeof filters, value: string) => {
        onChange({ ...filters, [key]: value });
    };

    return (
        <div className="p-6 bg-gray-20 rounded-lg shadow-md">
            {/* Header with expand/collapse functionality */}
            <div className="flex justify-between items-center mb-4">
                <div className="text-sm font-semibold text-gray-700">More Options</div>
                <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c33b492660f47ebadbd4ddc262746d4b9184c091300184241c32c88890005c5?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
                    alt="Options Icon"
                    className={`w-5 h-5 cursor-pointer transform transition-transform ${(isExpanded ? '' : 'rotate-180')}`}
                    onClick={() => setIsExpanded(!isExpanded)} // Toggle the expansion
                />
            </div>

            {/* Only display filters if expanded */}
            {isExpanded && (
                <div>
                    {/* Filter by section */}
                    <div className="flex items-center mb-4 space-x-4">
                        <div className="text-gray-600 text-sm font-medium">Filter by:</div>

                        {/* Horizontal Filters Row */}
                        <div className="flex space-x-4">
                            {/* Site Filter */}
                            <div className="flex items-center space-x-4">
                                <label className="text-sm font-medium text-gray-700">Site:</label>
                                <select
                                    className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 sm:text-sm"
                                    value={filters.site}
                                    onChange={(e) => updateFilter('site', e.target.value)}
                                >
                                    <option value="All">All</option>
                                    <option value="Site 1">Site 1</option>
                                    <option value="Site 2">Site 2</option>
                                </select>
                            </div>

                            {/* Production Line Filter */}
                            <div className="flex items-center space-x-4">
                                <label className="text-sm font-medium text-gray-700 whitespace-nowrap">Production Line:</label>
                                <select
                                    className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 sm:text-sm"
                                    value={filters.productionLine}
                                    onChange={(e) => updateFilter('productionLine', e.target.value)}
                                >
                                    {getCompatibleProductionLines(filters.site).map((line) => (
                                        <option key={line} value={line}>
                                            {line}
                                        </option>
                                    ))}
                                </select>
                            </div>

                            {/* Machines Filter */}
                            <div className="flex items-center space-x-4">
                                <label className="text-sm font-medium text-gray-700">Machines:</label>
                                <select
                                    className="block w-full px-4 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 text-gray-700 sm:text-sm"
                                    value={filters.machines}
                                    onChange={(e) => updateFilter('machines', e.target.value)}
                                >
                                    {getCompatibleMachines(filters.site, filters.productionLine).map((machine) => (
                                        <option key={machine} value={machine}>
                                            {machine}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>
                    </div>
                </div>)}
        </div>
    );
};

export default FilterOptions;