import React from 'react';

interface SelectProps {
    label: string;
    description: string;
    value: string;
    options: string[]; // Options
    iconSrc: string;
    onChange: (value: string) => void; // Callback function
}

const Select: React.FC<SelectProps> = ({ label, description, value, options, iconSrc, onChange }) => {
    return (
        <div className="mb-6">
            <div className="text-lg font-medium mb-1">{label}</div>
            <div className="text-sm text-gray-500 mb-2">{description}</div>
            <div className="relative">
                <select
                    className="block w-full p-3 pl-10 pr-4 text-gray-700 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none"
                    value={value}
                    onChange={(e) => onChange(e.target.value)} // Send selected value to parent
                >
                    {options.map((option, index) => (
                        <option key={index} value={option}>
                            {option}
                        </option>
                    ))}
                </select>
                <img
                    loading="lazy"
                    src={iconSrc}
                    alt={label}
                    className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
                />
            </div>
        </div>
    );
};

export default Select;