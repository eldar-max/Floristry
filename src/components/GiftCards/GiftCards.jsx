import React from 'react';
import { useNavigate } from 'react-router-dom';

const GiftCards = ({ onSelectService, cardOffers = [] }) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#1c1215', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', letterSpacing: '2px', marginBottom: '40px', textTransform: 'uppercase' }}>
        ПОДАРОЧНЫЕ КАРТЫ
      </h2>

      {cardOffers.length === 0 ? (
        <p style={{ textAlign: 'center', opacity: 0.5 }}>Нет доступных подарочных карт</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {cardOffers.map((card) => (
            <div 
              key={card.id} 
              style={{ 
                backgroundColor: '#25181c', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ width: '100%', height: '220px', backgroundColor: '#120a0c' }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800";
                  }}
                />
              </div>
              
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#fff' }}>{card.title}</h3>
                  <p style={{ margin: '0 0 15px 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.4' }}>{card.desc}</p>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#ff8b94', fontWeight: 'bold' }}>{card.price}</span>
                  <button 
                    onClick={() => onSelectService(card)}
                    style={{ backgroundColor: 'transparent', border: '1px solid #ff8b94', color: '#ff8b94', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    Купить
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button 
          onClick={() => navigate('/gift-cards')}
          style={{ backgroundColor: '#ff8b94', color: '#1c1215', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '1px' }}
        >
          ПОСМОТРЕТЬ ВСЕ КАРТЫ
        </button>
      </div>
    </div>
  );
};

export default GiftCards;