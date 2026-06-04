import React from 'react';
import { useLocation } from 'react-router-dom';

const UniversalCategoryPage = ({ 
  onSelectService, 
  weddingOffers, 
  compOffers, 
  cardOffers, 
  promoOffers, 
  partnerOffers 
}) => {
  const location = useLocation();
  let currentOffers = [];
  let pageTitle = '';

  switch (location.pathname) {
    case '/wedding':
      currentOffers = weddingOffers;
      pageTitle = 'СВАДЕБНОЕ ОФОРМЛЕНИЕ';
      break;
    case '/compositions':
      currentOffers = compOffers;
      pageTitle = 'НАШИ КОМПОЗИЦИИ';
      break;
    case '/gift-cards':
      currentOffers = cardOffers;
      pageTitle = 'ПОДАРОЧНЫЕ КАРТЫ';
      break;
    case '/promo':
      currentOffers = promoOffers;
      pageTitle = 'АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ';
      break;
    case '/partners':
      currentOffers = partnerOffers;
      pageTitle = 'НАШИ ПАРТНЕРЫ';
      break;
    default:
      currentOffers = [];
      pageTitle = 'КАТАЛОГ';
  }

  return (
    <div style={{ padding: '60px 15px', backgroundColor: '#1c1215', color: '#fff', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      <h1 style={{ textAlign: 'center', fontSize: '2rem', marginBottom: '40px', color: '#ff8b94', letterSpacing: '1px' }}>
        {pageTitle}
      </h1>
      
      {currentOffers.length === 0 ? (
        <p style={{ textAlign: 'center', opacity: 0.5 }}>В этой категории пока нет товаров...</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '25px', maxWidth: '1200px', margin: '0 auto' }}>
          {currentOffers.map(item => (
            <div 
              key={item.id} 
              style={{ backgroundColor: '#25181c', borderRadius: '8px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.05)', display: 'flex', flexDirection: 'column' }}
            >
              <img src={item.image} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />
              <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', flexGrow: 1, justifyContent: 'between' }}>
                <h3 style={{ margin: '0 0 10px 0', fontSize: '1.15rem', color: '#fff' }}>{item.title}</h3>
                <p style={{ margin: '0 0 20px 0', fontSize: '0.9rem', opacity: 0.6, lineHeight: '1.4', flexGrow: 1 }}>{item.desc}</p>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ fontWeight: 'bold', color: '#ff8b94', fontSize: '1.1rem' }}>{item.price}</span>
                  {/* Кнопка "Купить" не показывается для партнеров */}
                  {location.pathname !== '/partners' && (
                    <button 
                      onClick={() => onSelectService(item)}
                      style={{ padding: '10px 18px', backgroundColor: '#fff', color: '#1c1215', border: 'none', borderRadius: '4px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.85rem' }}
                    >
                      КУПИТЬ
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default UniversalCategoryPage;