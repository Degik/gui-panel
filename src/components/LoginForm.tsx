import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

interface LoginFormProps {
    onLogin: (username: string, token: string) => void; // Aggiornato per includere il token
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState<string | null>(null); // Per gestire errori dal server

    interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

    const handleSubmit = async (e: HandleSubmitEvent): Promise<void> => {
        e.preventDefault();

        try {
            // Chiamata API per il login
            const response = await fetch('/api/auth/login', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ username, password }),
            });

            if (!response.ok) {
                throw new Error('Invalid credentials!');
            }

            const data = await response.json();
            onLogin(username, data.token); // Passa il token alla funzione onLogin
        } catch (error: any) {
            setError(error.message || 'An error occurred during login.');
        }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h2 className={styles.title}>Login</h2>
                {error && <div className={styles.error}>{error}</div>}
                <div className={styles.inputGroup}>
                    <label>Username:</label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className={styles.input}
                    />
                </div>
                <button type="submit" className={styles.loginButton}>Login</button>
            </form>
        </div>
    );
};

export default LoginForm;
