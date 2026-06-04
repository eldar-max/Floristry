import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; 
import styles from './Header.module.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userEmail, setUserEmail] = useState(null);

  useEffect(() => {
    const savedEmail = localStorage.getItem('userEmail');
    if (savedEmail) {
      setUserEmail(savedEmail);
    }
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    localStorage.removeItem('userEmail');
    setUserEmail(null);
    window.location.reload(); 
  };

  return (
    <header className={`${styles.heroContainer} ${menuOpen ? styles.heroMenuOpen : ''}`}>
      <div className={styles.overlay}></div>

      <div className={styles.navbar}>
        <Link to="/" className={styles.logoContainer} style={{ textDecoration: 'none', color: 'inherit' }}>
          <svg className={styles.logoIcon} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
            <path d="M12 22C12 22 17 17 17 13C17 9 12 2 12 2C12 2 7 9 7 13C7 17 12 22 12 22Z" />
            <path d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z" />
          </svg>
          <div className={styles.logoText}>ВЕСНА ВСЕГДА</div>
        </Link>

        <nav className={`${styles.navMenu} ${menuOpen ? styles.navMenuOpen : ''}`}>
          <Link to="/services" onClick={() => setMenuOpen(false)}>УСЛУГИ</Link>
          <Link to="/promo" onClick={() => setMenuOpen(false)}>АКЦИИ</Link>
          <Link to="/compositions" onClick={() => setMenuOpen(false)}>КОМПОЗИЦИИ</Link>
          <Link to="/gift-cards" onClick={() => setMenuOpen(false)}>ПОДАРОЧНЫЕ КАРТЫ</Link>
          <Link to="/partners" onClick={() => setMenuOpen(false)}>НАШИ ПАРТНЕРЫ</Link>
          
          
          <div className={styles.phoneInMenu} style={{ marginTop: '20px', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
            {userEmail ? (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', alignItems: 'center' }}>
                <span style={{ fontSize: '12px', color: '#ff8b94' }}>{userEmail}</span>
                <Link to="/admin" onClick={() => setMenuOpen(false)} style={{ color: '#ffc107', textDecoration: 'none', fontSize: '12px', fontWeight: 'bold' }}>AДМИНКА ⚙️</Link>
                <button onClick={handleLogout} style={{ background: 'none', border: '1px solid #ff6b6b', color: '#ff6b6b', padding: '6px 15px', cursor: 'pointer', fontSize: '10px', letterSpacing: '1px' }}>ВЫЙТИ</button>
              </div>
            ) : (
              <Link to="/login" onClick={() => setMenuOpen(false)} style={{ letterSpacing: '2px', color: '#ff8b94', textDecoration: 'none', fontSize: '14px', fontWeight: 'bold' }}>ВОЙТИ</Link>
            )}
          </div>

          <div className={styles.phoneInMenu}>
            <a href="tel:+79163921777">+7 (916) 392 17 77</a>
          </div>
        </nav>

        {/* Десктопная версия правого блока */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '30px', zIndex: 2 }}>
          <div className={styles.phone}>
            <a href="tel:+79163921777">+7 (916) 392 17 77</a>
          </div>
          
          <div className={styles.phone} style={{ display: 'flex', alignItems: 'center' }}>
            {userEmail ? (
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                <Link to="/admin" style={{ color: '#ffc107', textDecoration: 'none', fontSize: '11px', letterSpacing: '1px', fontWeight: 'bold', border: '1px solid #ffc107', padding: '5px 12px', borderRadius: '4px' }}>
                  АДМИНКА ⚙️
                </Link>
                <span style={{ fontSize: '11px', letterSpacing: '1px', color: 'rgba(255,255,255,0.7)' }} title={userEmail}>
                  {userEmail.split('@')[0].toUpperCase()}
                </span>
                <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#ff6b6b', cursor: 'pointer', fontSize: '10px', letterSpacing: '1px', padding: 0 }}>ВЫЙТИ</button>
              </div>
            ) : (
              <Link to="/login" style={{ color: '#ffffff', textDecoration: 'none', fontSize: '12px', letterSpacing: '1.5px', border: '1px solid rgba(255,255,255,0.3)', padding: '6px 18px', transition: 'all 0.3s' }}>ВОЙТИ</Link>
            )}
          </div>
        </div>

        <button 
          className={`${styles.burger} ${menuOpen ? styles.burgerActive : ''}`} 
          onClick={toggleMenu}
          aria-label="Открыть меню"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

     
      {!menuOpen && (
        <>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>
              ФЛОРИСТИКА <br /> С ДУШОЙ
            </h1>
            <Link to="/services" className={styles.ctaButton} style={{ textDecoration: 'none', display: 'inline-block' }}>
              СМОТРЕТЬ РАБОТЫ
            </Link>
          </div>

          <div className={styles.socials}>
            <a href="#instagram" aria-label="Instagram"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
            <a href="#facebook" aria-label="Facebook"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
            <a href="#whatsapp" aria-label="WhatsApp"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg></a>
            <a href="#vk" aria-label="VK"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.16 11.83c-.15.34-.5.66-.5.66s-.46.42-1.35.4c-.88-.02-1.87-.36-2.88-1.07-1.46-1.02-2.65-2.63-3.23-3.67-.1-.17-.18-.38-.08-.53.1-.15.42-.17.42-.17h1.34c.14 0 .27.05.35.15.22.28.53.77.78 1.15.41.63.67.92.86.82.26-.14.2-.95.2-.95s0-.43-.13-.62c-.1-.15-.3-.2-.39-.21h.7c.3 0 .54.12.63.36.14.39.14 1.28.14 1.28s.07.25.25.1c.15-.12.48-.56.68-.9.27-.47.38-.83.38-.83s.06-.13.16-.18c.1-.05.25 0 .25 0h1.4c.42 0 .53.18.44.42-.1.25-.75 1.5-1 1.9-.22.36-.2.53.03.74.22.2 1 .94 1.35 1.37.47.56.55.73.4 1-.15.25-.45.24-.45.24h-1.3c-.32 0-.5-.14-.6-.32a9.14 9.14 0 0 1-.77-.96c-.2-.23-.37-.32-.5-.24z"></path></svg></a>
          </div>

          <div className={styles.catalogLinkContainer}>
            <Link to="/services" className={styles.catalogLink}>
              смотреть каталог <span className={styles.arrow}>→</span>
            </Link>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;