import React, { useState } from 'react';
import styles from '../styles/LoginForm.module.css';

interface LoginFormProps {
    onLogin: (username: string) => void;
}

const LoginForm: React.FC<LoginFormProps> = ({ onLogin }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    interface HandleSubmitEvent extends React.FormEvent<HTMLFormElement> {}

    const handleSubmit = (e: HandleSubmitEvent): void => {
      e.preventDefault();
      // Simulazione login
      if (username === "test" && password === "password") {
        onLogin(username);
      } else {
        alert("Invalid credentials!");
      }
    };

    return (
        <div className={styles.loginContainer}>
            <form onSubmit={handleSubmit} className={styles.loginForm}>
                <h2 className={styles.title}>Login</h2>
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
