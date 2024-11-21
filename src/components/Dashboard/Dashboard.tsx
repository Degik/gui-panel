import { useParams } from 'react-router-dom';
import {useEffect, useState} from "react";

const Dashboard = () => {
    // Use useParams to get the dynamic route parameter 'dashboardId'
    const { dashboardId } = useParams<{ dashboardId: string }>();
    const [dashboardData, setDashboardData] = useState<any>(null); // Replace 'any' with a proper type for your data

    useEffect(() => {
        // Fetch data based on dashboardId
        const fetchDashboardData = async () => {
            try {
                // Replace this with your data-fetching logic
                const response = await fetch(`/api/dashboard/${dashboardId}`);
                const data = await response.json();
                setDashboardData(data);
            } catch (error) {
                console.error('Error fetching dashboard data:', error);
            }
        };

        fetchDashboardData();
    }, [dashboardId]); // Re-fetch when dashboardId changes

    if (!dashboardData) {
        return <div>Loading...</div>; // Show loading state while data is being fetched
    }

    return (
        <div>
            <h1>Dashboard ID: {dashboardId}</h1>
            <div>
                {/* Render the dashboard data here */}
                <pre>{JSON.stringify(dashboardData, null, 2)}</pre> {/* For now, just display the raw data */}
            </div>
        </div>
    );
};

export default Dashboard;