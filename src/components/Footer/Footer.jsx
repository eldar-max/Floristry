import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footerSection}>
      <div className={styles.container}>
        
        
        <nav className={styles.footerNav}>
          <Link to="/wedding" className={styles.navLink}>Свадебная флористика</Link>
          <Link to="/services" className={styles.navLink}>Букеты на любые мероприятия</Link>
          <Link to="/wedding" className={styles.navLink}>Букеты невесты</Link>
          <Link to="/compositions" className={styles.navLink}>Композиции</Link>
          <Link to="/services" className={styles.navLink}>Оформление мероприятий</Link>
        </nav>

        
        <div className={styles.socialsContainer}>
          <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className={styles.socialIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
          
          <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook" className={styles.socialIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
            </svg>
          </a>
          
          <a href="https://wa.me/yournumber" target="_blank" rel="noreferrer" aria-label="WhatsApp" className={styles.socialIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path>
            </svg>
          </a>
          
          <a href="https://vk.com" target="_blank" rel="noreferrer" aria-label="VK" className={styles.socialIcon}>
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.16 11.83c-.15.34-.5.66-.5.66s-.46.42-1.35.4c-.88-.02-1.87-.36-2.88-1.07-1.46-1.02-2.65-2.63-3.23-3.67-.1-.17-.18-.38-.08-.53.1-.15.42-.17.42-.17h1.34c.14 0 .27.05.35.15.22.28.53.77.78 1.15.41.63.67.92.86.82.26-.14.2-.95.2-.95s0-.43-.13-.62c-.1-.15-.3-.2-.39-.21h.7c.3 0 .54.12.63.36.14.39.14 1.28.14 1.28s.07.25.25.1c.15-.12.48-.56.68-.9.27-.47.38-.83.38-.83s.06-.13.16-.18c.1-.05.25 0 .25 0h1.4c.42 0 .53.18.44.42-.1.25-.75 1.5-1 1.9-.22.36-.2.53.03.74.22.2 1 .94 1.35 1.37.47.56.55.73.4 1-.15.25-.45.24-.45.24h-1.3c-.32 0-.5-.14-.6-.32a9.14 9.14 0 0 1-.77-.96c-.2-.23-.37-.32-.5-.24z"></path>
            </svg>
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;