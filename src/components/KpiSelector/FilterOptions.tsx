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
    <div className="filterOptions">
      <div className="filterOptionsWrapper">
        <div className="filterOptionsContent">
          <div className="moreOptionsWrapper">
            <div className="moreOptionsText">More options</div>
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/6c33b492660f47ebadbd4ddc262746d4b9184c091300184241c32c88890005c5?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130"
              alt=""
              className="moreOptionsIcon"
            />
          </div>
          <div className="filterByText">Filter by:</div>
        </div>
        <div className="filterRow">
          <div className="filterLabel">Site</div>
          <select
            value={filters.site}
            onChange={(e) => updateFilter('site', e.target.value)}
          >
            <option value="All">All</option>
            <option value="Site 1">Site 1</option>
            <option value="Site 2">Site 2</option>
          </select>
        </div>
        <div className="filterRow">
          <div className="filterLabel">Production Line</div>
          <select
            value={filters.productionLine}
            onChange={(e) => updateFilter('productionLine', e.target.value)}
          >
            <option value="All">All</option>
            <option value="Line 1">Line 1</option>
            <option value="Line 2">Line 2</option>
          </select>
        </div>
        <div className="filterRow">
          <div className="filterLabel">Machines</div>
          <select
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
