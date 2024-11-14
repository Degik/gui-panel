import React, { useState } from 'react';
import DashboardLayout from './components/Dashboard';
import LoginForm from './components/LoginForm';
import { Dashboard } from '@mui/icons-material';

const App = () => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [username, setUsername] = useState('');

    const handleLogin = (username: string) => {
        setIsAuthenticated(true);
        setUsername(username);
    };

    return (
        <div>
            {isAuthenticated ? (
                <DashboardLayout username={username} path="/" section="Home" role="Floor Factory Menager" />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
