import React from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import classNames from 'classnames'; // For conditional Tailwind classes
import { NotificationProvider, useNotification } from './Notification/Notification';
import ChatAssistant from './ChatAssistant/ChatAssistant';
import DashboardSidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import UserSettings from './UserSettings/UserSettings';
import DataView from './DataView/DataView';
import Home from './Home/Home';
import LogPage from './LogPage/LogPage';

interface DashboardProps {
    username: string;
    role: string;
    userAvatar?: string;
}

const SmartFactory: React.FC<DashboardProps> = ({ username, role, userAvatar }) => {
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

    // TEST NOTIFICATION
    const { addNotification } = useNotification();
    const handleNewNotification = () => {
        addNotification({
            id: Date.now(),
            type: 'Info',
            message: 'This is a test notification!',
            isRead: false,
        });
    };

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

                <div className="flex-grow p-4">
                    {/* Dynamic Routes */}
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

            {/* TEST NOTIFICATION */}
            <div>
                <h1>Dashboard</h1>
                <button onClick={handleNewNotification}>Add Test Notification</button>
            </div>
        </div>
    );
};

const SmartFactoryDashboard: React.FC<DashboardProps> = (props) => (
    <NotificationProvider>
        <SmartFactory {...props} />
    </NotificationProvider>
);

export default SmartFactoryDashboard;
