export const mockLogData = [
    {
        id: 1,
        type: 'Info',
        header: 'System Update',
        body: 'The system has been updated successfully. All services are now operational.',
        isRead: false,
    },
    {
        id: 2,
        type: 'Warning',
        header: 'High CPU Usage',
        body: 'The CPU usage has exceeded 80% for 10 minutes. Consider investigating the workload.',
        isRead: false,
    },
    {
        id: 3,
        type: 'Error',
        header: 'Database Connection Failed',
        body: 'Unable to connect to the database. Please check the configuration and restart the service.',
        isRead: true,
    },
    {
        id: 4,
        type: 'Info',
        header: 'New User Registered',
        body: 'A new user has been successfully registered on the platform.',
        isRead: false,
    },
    {
        id: 5,
        type: 'Warning',
        header: 'Memory Usage Warning',
        body: 'Memory usage is above the threshold. Optimize your processes or add more resources.',
        isRead: true,
    },
];