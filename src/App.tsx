import React, { useState } from 'react';
import Home from './components/Home';
import LoginForm from './components/LoginForm';

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
                <Home username={username} role="Floor Factory Menager" />
            ) : (
                <LoginForm onLogin={handleLogin} />
            )}
        </div>
    );
};

export default App;
