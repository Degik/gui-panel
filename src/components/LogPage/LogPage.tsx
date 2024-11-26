import React, { useState } from 'react';
import styles from './styles/LogPage.module.css';
import { fetchLogs, markAsRead } from '../../api/LogService';
import { FaInfoCircle, FaExclamationTriangle, FaTimesCircle } from 'react-icons/fa';

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
    const [filterType, setFilterType] = useState<string>('All'); // State for filter by type
    const [filterReadStatus, setFilterReadStatus] = useState<string>('All'); // State for filter by read/unread status

    // Handle the filter by type change
    const handleFilterTypeChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterType(e.target.value);
    };

    // Handle the filter by read/unread change
    const handleFilterReadStatusChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setFilterReadStatus(e.target.value);
    };

    // Filter the logs based on the selected filter type and read/unread status
    const filteredLogs = logs.filter(log => {
        const matchesType = filterType === 'All' || log.type === filterType;
        const matchesReadStatus = filterReadStatus === 'All'
            || (filterReadStatus === 'Read' && log.isRead)
            || (filterReadStatus === 'Unread' && !log.isRead);

        return matchesType && matchesReadStatus;
    });

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

    const getIcon = (type: string) => {
        switch (type) {
            case 'Info':
                return <FaInfoCircle className={styles.iconInfo} />;
            case 'Warning':
                return <FaExclamationTriangle className={styles.iconWarning} />;
            case 'Error':
                return <FaTimesCircle className={styles.iconError} />;
            default:
                return null;
        }
    };

    return (
        <div className={styles.logPage}>
            <h1 className={styles.title}>Log Notifications</h1>

            {/* Filter Selector for Type and Read/Unread Status */}
            <div className="mb-4 flex space-x-4">
                {/* Filter by Type */}
                <div>
                    <label htmlFor="logFilterType" className="text-sm font-medium text-gray-700">
                        Filter by Type:
                    </label>
                    <select
                        id="logFilterType"
                        value={filterType}
                        onChange={handleFilterTypeChange}
                        className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="All">All</option>
                        <option value="Info">Info</option>
                        <option value="Warning">Warning</option>
                        <option value="Error">Error</option>
                    </select>
                </div>

                {/* Filter by Read/Unread Status */}
                <div>
                    <label htmlFor="logFilterReadStatus" className="text-sm font-medium text-gray-700">
                        Filter by Status:
                    </label>
                    <select
                        id="logFilterReadStatus"
                        value={filterReadStatus}
                        onChange={handleFilterReadStatusChange}
                        className="ml-2 p-2 border border-gray-300 rounded-md shadow-sm"
                    >
                        <option value="All">All</option>
                        <option value="Read">Read</option>
                        <option value="Unread">Unread</option>
                    </select>
                </div>
            </div>

            {/* Filtered log list */}
            <ul className={styles.logList}>
                {filteredLogs.map((log) => (
                    <li
                        key={log.id}
                        className={`${styles.logItem} ${log.isRead ? styles.read : styles.unread}`}
                    >
                        <div className={styles.logHeader} onClick={() => handleExpand(log.id)}>
                            <div className={styles.iconContainer}>{getIcon(log.type)}</div>
                            <div className={styles.textContainer}>
                                <span className={styles.logHeaderText}>{log.header}</span>
                                <span className={styles.logType}>{log.type}</span>
                            </div>
                            <span className={styles.expandToggle}>
                                {expandedLog === log.id ? '-' : '+'}
                            </span>
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
