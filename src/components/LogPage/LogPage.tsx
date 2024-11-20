import React, { useState } from 'react';
import styles from './styles/LogPage.module.css';
import { fetchLogs, markAsRead } from '../../api/LogService';

interface LogItem {
    id: number;
    type: string; // Tipologia
    header: string; // Header della notifica
    body: string; // Corpo interno
    isRead: boolean; // Stato della notifica
}

const LogPage: React.FC = () => {
    const [logs, setLogs] = useState<LogItem[]>(fetchLogs());
    const [expandedLog, setExpandedLog] = useState<number | null>(null);

    const handleExpand = (id: number) => {
        setExpandedLog(expandedLog === id ? null : id);
        if (!logs.find(log => log.id === id)?.isRead) {
            markAsRead(id);
            setLogs((prevLogs) =>
                prevLogs.map((log) =>
                    log.id === id ? { ...log, isRead: true } : log
                )
            );
        }
    };

    return (
        <div className={styles.logPage}>
            <h1 className={styles.title}>Log Notifications</h1>
            <ul className={styles.logList}>
                {logs.map((log) => (
                    <li
                        key={log.id}
                        className={`${styles.logItem} ${log.isRead ? styles.read : styles.unread}`}
                        onClick={() => handleExpand(log.id)}
                    >
                        <div className={styles.logHeader}>
                            <span className={styles.logType}>{log.type}</span>
                            <span className={styles.logHeaderText}>{log.header}</span>
                        </div>
                        {expandedLog === log.id && (
                            <div className={styles.logBody}>
                                <p>{log.body}</p>
                            </div>
                        )}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LogPage;