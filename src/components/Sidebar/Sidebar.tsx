import React, {useEffect, useState} from 'react';
import SidebarSection from './SidebarSection';
import {mockDashboards} from "../Home";

export const pointIcon = 'https://cdn.builder.io/api/v1/image/assets/TEMP/e4f31bc08d7f9cce9aa4820b2adc97643d3b0c001526273b80178ee6bf890b69?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130';
export const folderIcon = 'https://cdn.builder.io/api/v1/image/assets/TEMP/eaf772e37067af09780cab33ecbf00699526f2539b536d7e2dac43b2122526b2?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130';
export const pieIcon = 'https://cdn.builder.io/api/v1/image/assets/TEMP/0949995bd2a21ce720d84c11dc64463261305492e6cd6409f1dd6840a7747be9?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130';
const DashboardSidebar: React.FC = () => {

    require('./icons/kpi.svg');
    require('./icons/forecast.svg');
    const sectionsItems = [
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a2d40f2dc06da50836fbfaf464c0a55962656ee10fce9369f212feb80de42c46?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'User Settings',
            path: '/user-settings'
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'Reports',
            path: '/reports'
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/a71c21e7b5dfbcb7b600377b94bb0ba6e150f444fca7a9c978d6d84a0e3b8cea?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'Data View',
            path: '/data-view'
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/cb7c1de2b136e197f1651cffbbbacb0281af7137538dad2c0ab0fee4449f1b93?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'Log',
            path: '/log'
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/0d48c9f5dfc5a5a35e09f99f937cac2777cbffd55ad9387fca9e140c2b0bc70f?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'Production Lines',
            path: '/production-lines'
        },
        {icon: './icons/kpi.svg', text: 'KPIs', path: '/kpis'},
        {icon: './icons/forecast.svg', text: 'Forecasting', path: '/forecasts'},
    ];


    useEffect(() => {
        const fetchDashboards = async () => {
            try {
                // Simulate fetching dashboards from an API
                //const response = await fetch('/api/dashboards');
                //const data = await response.json();

                // Transform the data into the required format for the SidebarSection
                const formattedDashboards = [
                    {
                        text: 'Overview',
                        path: '/dashboards/overview',
                        icon: pieIcon, // The specific icon for Overview
                    },
                    ...mockDashboards.map(dashboard => ({
                        text: dashboard.name,
                        path: `/dashboards/${dashboard.id}`,
                        icon: dashboard.type === 'folder' ? folderIcon : pointIcon,
                    })),
                ];


                setDashboards(formattedDashboards);
            } catch (error) {
                console.error('Failed to fetch dashboards:', error);
            }
        };

        fetchDashboards();
    }, []);

    const [dashboardsItems, setDashboards] = useState<
        { text: string; path: string; icon: string }[]
    >([]);

    const dashboards = [
        {icon: pieIcon, text: 'Overview', path: '/dashboards/overview'},
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/eaf772e37067af09780cab33ecbf00699526f2539b536d7e2dac43b2122526b2?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'Production Lines Dashboards',
            path: '/dashboards/production-lines'
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e4f31bc08d7f9cce9aa4820b2adc97643d3b0c001526273b80178ee6bf890b69?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'Production Line #1',
            path: '/dashboards/line-1'
        },
        {
            icon: 'https://cdn.builder.io/api/v1/image/assets/TEMP/e3b90cb81ae2d13b7f436f0b1eb6c2f6bc7f9ccd539fab9a05bf5ea532afb99f?placeholderIfAbsent=true&apiKey=346cd8710f5247b5a829262d8409a130',
            text: 'Saved Dashboard Folder Name',
            path: '/dashboards/saved-folder'
        },
    ];

    return (
        <aside className="bg-white border-r border-gray-200 flex flex-col items-center w-fit h-screen p-3">
            {/* Company Logo */}
            <div className="flex justify-center items-center mb-4">
                <img
                    src={require('./icons/logo.svg').default}
                    alt="Company Logo"
                    className="w-36 h-auto"
                />
            </div>

            {/* Sidebar Sections */}
            {/* <SidebarSection title="Favorites" items={favoritesItems}/> */}
            <SidebarSection title="Sections" items={sectionsItems}/>
            <SidebarSection title="Dashboards" items={dashboardsItems}/>
        </aside>

    );
};

export default DashboardSidebar;
