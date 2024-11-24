// this class loads a json file with the data for the KPIs
import React, {useState} from "react";

// Define the type for the KPI data
type Kpi = {
    id: number;
    name: string;
    description: string;
    metric: string;
    category: string;
};

// Define the type for the KPI list
type KpiList = Kpi[];

// Load the KPI list from the JSON file
const KpiListLoader: React.FC<{ children: (kpiList: KpiList) => React.ReactNode }> = ({children}) => {
        const [kpiList, setKpiList] = useState<KpiList | null>(null);

        // Load the KPI list from the JSON file
        if (!kpiList) {

            fetch("/data/kpis.json")
                .then((response) => response.json())
                .then((data) => {
                    setKpiList(data);
                });

        }

        return <>{kpiList ? children(kpiList) : <p>Loading...</p>}</>;
    }
;


export default KpiListLoader;