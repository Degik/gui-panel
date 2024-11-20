import React, { createContext, useContext, useState } from 'react';
import { getLogsFromCookies, addLogToCookies } from '../../utils/logs';

interface Notification {
    id: number;
    type: string;
    message: string;
    isRead: boolean;
}

interface NotificationContextProps {
    notifications: Notification[];
    addNotification: (notification: Notification) => void;
    logs: any[];
    addLog: (log: any) => void;
}

const NotificationContext = createContext<NotificationContextProps | undefined>(undefined);

export const NotificationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [logs, setLogs] = useState(getLogsFromCookies());

    // Aggiungi una nuova notifica
    const addNotification = (notification: Notification) => {
        setNotifications((prev) => [...prev, notification]);
        // Quando arriva una notifica, aggiungila anche ai log
        const log = {
            id: notification.id,
            type: notification.type,
            header: notification.message,
            body: `Dettagli per la notifica: ${notification.message}`,
            isRead: false,
        };
        addLog(log);
    };

    // Aggiungi un nuovo log
    const addLog = (log: any) => {
        setLogs((prev) => [...prev, log]);
        addLogToCookies(log);
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, logs, addLog }}>
            {children}
        </NotificationContext.Provider>
    );
};

export const useNotification = (): NotificationContextProps => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};