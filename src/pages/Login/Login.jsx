import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './Login.module.css';

const Login = () => {
  const [email, setEmail] = useState('');
  const navigate = useNavigate();

  const handleGoogleLogin = (e) => {
    e.preventDefault();
    
    if (!email.includes('@gmail.com')) {
      alert('Пожалуйста, введите корректный адрес @gmail.com для входа через Google');
      return;
    }
    localStorage.setItem('userEmail', email);
    navigate('/');
  };

  return (
    <div className={styles.loginPageContainer}>
      <div className={styles.overlay}></div>
      
      <div className={styles.loginBox}>
        <Link to="/" className={styles.backHome}>← На главную</Link>
        
        <div className={styles.googleIconWrapper}>
          <svg width="40" height="40" viewBox="0 0 24 24">
            <path fill="#4285F4" d="M23.745 12.27c0-.7-.06-1.4-.19-2.07H12v3.92h6.61c-.29 1.53-1.14 2.82-2.4 3.68v3.05h3.88c2.27-2.09 3.65-5.17 3.65-8.58z"/>
            <path fill="#34A853" d="M12 24c3.24 0 5.95-1.08 7.93-2.91l-3.88-3.05c-1.08.72-2.45 1.16-4.05 1.16-3.11 0-5.74-2.11-6.68-4.96H1.21v3.15C3.18 21.88 7.31 24 12 24z"/>
            <path fill="#FBBC05" d="M5.32 14.24A7.16 7.16 0 0 1 4.93 12c0-.79.13-1.57.39-2.34V6.51H1.21A11.94 11.94 0 0 0 0 12c0 1.92.45 3.74 1.21 5.39l4.11-3.15z"/>
            <path fill="#EA4335" d="M12 4.75c1.77 0 3.35.61 4.6 1.8l3.42-3.42C17.95 1.19 15.24 0 12 0 7.31 0 3.18 2.12 1.21 5.39l4.11 3.15c.94-2.85 3.57-4.96 6.68-4.96z"/>
          </svg>
        </div>

        <h2>Вход в систему</h2>
        <p>Авторизуйтесь с помощью личной почты Gmail</p>

        <form onSubmit={handleGoogleLogin} className={styles.loginForm}>
          <input 
            type="email" 
            placeholder="example@gmail.com" 
            required 
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={styles.loginInput}
          />
          <button type="submit" className={styles.loginSubmitBtn}>
            Войти через Google
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;