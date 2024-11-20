import React, { createContext, useState, useContext, ReactNode } from 'react';
import { useCookies } from 'react-cookie';
import styles from './styles/Notification.module.css';

interface Notification {
    id: number;
    type: string;
    message: string;
    isRead: boolean;
}

interface NotificationContextType {
    notifications: Notification[];
    addNotification: (notification: Notification) => void;
    markAllAsRead: () => void;
}

const NotificationContext = createContext<NotificationContextType | undefined>(undefined);

export const useNotification = () => {
    const context = useContext(NotificationContext);
    if (!context) {
        throw new Error('useNotification must be used within a NotificationProvider');
    }
    return context;
};

export const NotificationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
    const [notifications, setNotifications] = useState<Notification[]>([]);
    const [cookies, setCookie] = useCookies(['notifications']);

    // Restore notifications from cookies on load
    React.useEffect(() => {
        if (cookies.notifications) {
            setNotifications(cookies.notifications);
        }
    }, [cookies.notifications]);

    const addNotification = (notification: Notification) => {
        const newNotifications = [...notifications, notification];
        setNotifications(newNotifications);
        setCookie('notifications', newNotifications, { path: '/' });
    };

    const markAllAsRead = () => {
        const updatedNotifications = notifications.map((n) => ({ ...n, isRead: true }));
        setNotifications(updatedNotifications);
        setCookie('notifications', updatedNotifications, { path: '/' });
    };

    return (
        <NotificationContext.Provider value={{ notifications, addNotification, markAllAsRead }}>
            {children}
            <div className={styles.notificationContainer}>
                {notifications
                    .filter((n) => !n.isRead)
                    .map((n) => (
                        <div key={n.id} className={`${styles.notification} ${styles[n.type.toLowerCase()]}`}>
                            {n.message}
                        </div>
                    ))}
            </div>
        </NotificationContext.Provider>
    );
};