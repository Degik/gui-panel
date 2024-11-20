import Cookies from 'js-cookie';

// Costante per il nome del cookie
const LOG_COOKIE_NAME = 'dashboard_logs';

// Recupera i log dai cookie
export const getLogsFromCookies = (): any[] => {
    const logs = Cookies.get(LOG_COOKIE_NAME);
    return logs ? JSON.parse(logs) : [];
};

// Aggiunge un nuovo log ai cookie
export const addLogToCookies = (log: any): void => {
    const logs = getLogsFromCookies();
    logs.push(log);
    Cookies.set(LOG_COOKIE_NAME, JSON.stringify(logs), { expires: 7 });
};

// Pulisce i log dai cookie
export const clearLogsInCookies = (): void => {
    Cookies.remove(LOG_COOKIE_NAME);
};