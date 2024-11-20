import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import classNames from 'classnames'; // For conditional Tailwind classes
import ChatAssistant from './ChatAssistant/ChatAssistant';
import DashboardSidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import UserSettings from './UserSettings/UserSettings';
import DataView from './DataView/DataView';
import Home from './Home/Home';
import LogPage from "./LogPage/LogPage";

interface DashboardProps {
    username: string;
    role: string;
    userAvatar?: string;
}

const SmartFactoryDashboard: React.FC<DashboardProps> = ({ username, role, userAvatar }) => {
    const location = useLocation();
    const sectionMap: { [key: string]: string } = {
        home: 'Home',
        'user-settings': 'User Settings',
        'data-view': 'Data View',
        reports: 'Reports',
        log: 'Log',
        'production-lines': 'Production Lines',
        'dashboards/overview': 'Dashboards Overview',
        'dashboards/production-lines': 'Production Lines Dashboards',
        'dashboards/saved-folder': 'Saved Dashboard Folder',
    };

    const section = sectionMap[location.pathname.replace('/', '')] || 'Unknown Section';

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <main className="flex flex-col flex-grow">
                {/* Header */}
                <Header
                    section={section}
                    path={location.pathname}
                    userAvatar={userAvatar || '/default-avatar.png'}
                    userName={username}
                    role={role}
                />

                {/* Dynamic Routes */}
                <div className="flex-grow p-4">
                    <Routes>
                        <Route path="/" element={<Navigate to="home" replace />} />
                        <Route path="home" element={<Home />} />
                        <Route path="user-settings" element={<UserSettings />} />
                        <Route path="data-view" element={<DataView />} />
                        <Route path="log" element={<LogPage />} />
                    </Routes>
                </div>
            </main>

            {/* Chat Assistant */}
            <ChatAssistant />
        </div>
    );
};

export default SmartFactoryDashboard;
