import React from 'react';

interface GraphTypeSelectorProps {
  value: string; // Tipo di grafico selezionato
  onChange: (value: string) => void; // Funzione per notificare il genitore
}

const GraphTypeSelector: React.FC<GraphTypeSelectorProps> = ({ value, onChange }) => {
  const graphTypes = [
    { type: 'Bar', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/c4c1970484578b546624746d8daba4aa42142c6aab1ae95ef109c80298151027?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130' },
    { type: 'Line', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cc10e3abebe37695d85173fdfefb117298ad299b0e5f29e6e3821b1564a87f78?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130' },
    { type: 'Pie', icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/2207bcbb65a5ea0c966aae909ab2eac60428a0dfab62d51c225a3a4cf9e62124?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130' },
  ];

  return (
    <div className="graphTypeSelector">
      {graphTypes.map((graph) => (
        <img
          key={graph.type}
          src={graph.icon}
          alt={graph.type}
          className={`graphTypeIcon ${value === graph.type ? 'activeGraphType' : ''}`}
          onClick={() => onChange(graph.type)} // Cambia il tipo di grafico selezionato
        />
      ))}
    </div>
  );
};

export default GraphTypeSelector;
