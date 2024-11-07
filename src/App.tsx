import React, { useState } from 'react';
import UserList from './components/UserList';
import LoginForm from './components/LoginForm';

const App: React.FC = () => {
  const [token, setToken] = useState<string | null>(null);

  const handleLoginSuccess = (token: string) => {
    setToken(token);
    localStorage.setItem('authToken', token);
  };

  return (
    <div>
      <h1>Welcome</h1>
      {token ? (
        <UserList />
      ) : (
        <LoginForm onLoginSuccess={handleLoginSuccess} />
      )}
    </div>
  );
};

export default App;