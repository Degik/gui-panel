import React from 'react';

interface GraphTypeSelectorProps {
    value: string; // Selected graph type
    onChange: (value: string) => void; // Function to notify parent about the change
}

const GraphTypeSelector: React.FC<GraphTypeSelectorProps> = ({ value, onChange }) => {
    const graphTypes = [
        { type: 'Pie', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c4c1970484578b546624746d8daba4aa42142c6aab1ae95ef109c80298151027?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130' },
        { type: 'BarV', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc10e3abebe37695d85173fdfefb117298ad299b0e5f29e6e3821b1564a87f78?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130' },
        { type: 'BarH', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2207bcbb65a5ea0c966aae909ab2eac60428a0dfab62d51c225a3a4cf9e62124?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130' },
        { type: 'Line', icon: ''},
        { type: 'Area', icon: ''},
        // Add more graph types if needed
    ];

    return (
        <div className="flex flex-wrap justify-start gap-4 p-4 bg-gray-50 rounded-xl shadow-md">
            {graphTypes.map((graph) => (
                <div
                    key={graph.type}
                    className={`p-3 rounded-lg cursor-pointer transition-all hover:bg-blue-100 
                      ${value === graph.type ? 'bg-blue-500 text-white' : 'bg-white text-gray-700'}`}
                    onClick={() => onChange(graph.type)} // Change selected graph type
                >
                    <img
                        src={graph.icon}
                        alt={graph.type}
                        className={`w-10 h-10 mx-auto mb-2 transition-all ${value === graph.type ? 'opacity-100' : 'opacity-60'}`}
                    />
                    <div className="text-center text-sm font-medium">{graph.type}</div>
                </div>
            ))}
        </div>
    );
};

export default GraphTypeSelector;

