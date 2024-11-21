import React, { useState } from "react";

const ReportArchive = () => {
    // Getter method for the list of reports
    const getReportList = () => [
        { id: 1, title: "Quarterly Report Q1", description: "Summary and details of Q1 performance." },
        { id: 2, title: "Quarterly Report Q2", description: "Summary and details of Q2 performance." },
        { id: 3, title: "Annual Report 2023", description: "Comprehensive analysis of the year 2023." },
    ];

    const [expanded, setExpanded] = useState<number | null>(null);

    const toggleAccordion = (id:number) => {
        setExpanded((prev) => (prev === id ? null : id));
    };

    const reportList = getReportList();

    return (
        <div className="ReportArchive max-w-3xl mx-auto p-6 bg-gray-100 rounded-lg shadow-lg">
            <h1 className="text-2xl font-bold mb-4 text-gray-800">Report Archive</h1>
            <div className="space-y-4">
                {reportList.map((report) => (
                    <div
                        key={report.id}
                        className="bg-white border border-gray-200 rounded-lg shadow-sm"
                    >
                        <div
                            className="flex items-center justify-between p-4 cursor-pointer"
                            onClick={() => toggleAccordion(report.id)}
                        >
                            <span className="font-medium text-gray-700">{report.title}</span>
                            <span className="text-gray-500">{expanded === report.id ? "▲" : "▼"}</span>
                        </div>
                        {expanded === report.id && (
                            <div className="p-4 border-t border-gray-200">
                                <p className="text-gray-600 mb-4">{report.description}</p>
                                <div className="flex space-x-4">
                                    <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600">
                                        View
                                    </button>
                                    <button className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
                                        Download
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ReportArchive;
