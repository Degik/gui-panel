import { useState, useEffect } from 'react';

const useFactoryData = () => {
    const [data, setData] = useState(null);

    useEffect(() => {
        // Placeholder per la chiamata API
        // Quando le API saranno pronte, sostituisci con fetch
        const fetchData = async () => {
            // Simula dati fino a quando non sarà disponibile l'API
            const fakeData = {
                overview: "Overview data",
                productionLines: ["Line 1", "Line 2"],
                reports: ["Report 1", "Report 2"]
            };
            setData(fakeData);
        };

        fetchData();
    }, []);

    return data;
};

export default useFactoryData;
