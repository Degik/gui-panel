import React, { useEffect } from 'react';
import { useLocation, Routes, Route, Navigate } from 'react-router-dom';
import { NotificationProvider, useNotification } from './Notification/Notification';
import ChatAssistant from './ChatAssistant/ChatAssistant';
import DashboardSidebar from './Sidebar/Sidebar';
import Header from './Header/Header';
import UserSettings from './UserSettings/UserSettings';
import DataView from './DataView/DataView';
import Home from './Home/Home';
import LogPage from './LogPage/LogPage';
import KPIViewer from './KPIViewer/KPIViewer';
import Forecasting from './Forecast/Forecasting';
import ReportArchive from './Reports/ReportArchive';

// Importa i metodi dal file logUtils
import { addLogEntry, getLogsFromCookies, LogEntry } from '../utils/logs';

interface DashboardProps {
    username: string;
    role: string;
    userAvatar?: string;
}


const NotificationBanner: React.FC = () => {
    const { notifications } = useNotification();

    return (
        <div className="fixed top-4 right-4 z-50 space-y-2">
            {notifications.map((notification) => (
                <div
                    key={notification.id}
                    className="p-4 bg-blue-500 text-white rounded shadow hover:bg-blue-600 transition-all"
                >
                    {notification.message}
                </div>
            ))}
        </div>
    );
};

const SmartFactory: React.FC<DashboardProps> = ({ username, role, userAvatar }) => {
    const location = useLocation();
    const { addNotification } = useNotification();

    const sectionMap: { [key: string]: string } = {
        home: 'Home',
        'user-settings': 'User Settings',
        'data-view': 'Data View',
        log: 'Log',
    };

    const section = sectionMap[location.pathname.replace('/', '')] || 'Unknown Section';

    // Simulazione di un nuovo log
    const handleNewLog = () => {
        const newLog: LogEntry = {
            id: Date.now(),
            type: 'Error',
            header: 'Test Log',
            body: 'This is a test log entry.',
            isRead: false,
        };

        addLogEntry(username, newLog, (message) => {
            addNotification({
                id: newLog.id,
                type: 'Info',
                message,
                isRead: false,
            });
        });
    };

    useEffect(() => {
        // Recupera i log all'avvio
        const currentLogs = getLogsFromCookies(username);
        console.log('Current logs:', currentLogs);
    }, [username]);

    return (
        <div className="flex min-h-screen bg-gray-100">
            {/* Notifiche Temporanee */}
            {/*<NotificationBanner />*/}

            {/* Sidebar */}
            <DashboardSidebar />

            {/* Main Content */}
            <main className="w-full h-full flex flex-col flex-grow">
                {/* Header */}
                <Header
                    section={section}
                    path={location.pathname}
                    userAvatar={userAvatar || '/default-avatar.png'}
                    userName={username}
                    role={role}
                />

                {/* Main Routes */}
                <div className="flex-grow p-4">
                    {/* Pulsante per testare le notifiche */}
                    {/*
                    <div className="mb-4">
                        <button
                            onClick={handleNewLog}
                            className="px-4 py-2 bg-green-500 text-white rounded shadow hover:bg-green-600"
                        >
                            Add Test Log
                        </button>
                    </div> */}

                    <Routes>
                        <Route path="/" element={<Navigate to="home" replace />} />
                        <Route path="home" element={<Home />} />
                        <Route path="user-settings" element={<UserSettings />} />
                        <Route path="data-view" element={<DataView />} />
                        <Route path="log" element={<LogPage />} />
                        <Route path="kpis" element={<KPIViewer/>} />
                        <Route path="forecasts" element={<Forecasting/>} />
                        <Route path="reports" element={<ReportArchive/>} />
                        <Route path="*" element={<Navigate to="/home" replace />} />
                    </Routes>
                </div>
            </main>

            {/* Chat Assistant */}
            <ChatAssistant />
        </div>
    );
};

const SmartFactoryDashboard: React.FC<DashboardProps> = (props) => (
    <NotificationProvider>
        <SmartFactory {...props} />
    </NotificationProvider>
);
export default SmartFactoryDashboard;