import React, { useState } from "react";

const KpiViewer = () => {
    // Getter method for the list of elements
    const getKpiList = () => [
        { id: 1, type: "📈", title: "Revenue Growth", description: "Revenue increased by 20% this quarter." },
        { id: 2, type: "📊", title: "Customer Retention", description: "Retention rate is at 85% for this quarter." },
        { id: 3, type: "💼", title: "New Clients", description: "10 new clients onboarded this month." },
    ];

    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleAccordion = (id:number) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    const kpiList = getKpiList();

    return (
        <div className="KpiViewer max-w-6xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">KPI Viewer</h1>
            <div className="space-y-4">
                {kpiList.map((kpi) => (
                    <div
                        key={kpi.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer"
                            onClick={() => toggleAccordion(kpi.id)}
                        >
                            <div className="flex items-center space-x-3">
                                <span className="text-xl">{kpi.type}</span>
                                <span className="font-medium text-gray-700">{kpi.title}</span>
                            </div>
                            <span className="text-gray-500">{expanded === kpi.id ? "▲" : "▼"}</span>
                        </div>
                        {expanded === kpi.id && (
                            <div className="p-4 text-gray-600 border-t border-gray-200">
                                {kpi.description}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default KpiViewer;