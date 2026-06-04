import React from 'react';
import { useNavigate } from 'react-router-dom';

const PromoSection = ({ onSelectService, promoOffers = [] }) => {
  const navigate = useNavigate();

  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#25181c', color: '#fff', fontFamily: 'sans-serif', borderTop: '1px solid rgba(255,255,255,0.02)', borderBottom: '1px solid rgba(255,255,255,0.02)' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', letterSpacing: '2px', marginBottom: '40px', textTransform: 'uppercase', color: '#ff8b94' }}>
        АКЦИИ И СКИДКИ
      </h2>

      {promoOffers.length === 0 ? (
        <p style={{ textAlign: 'center', opacity: 0.5 }}>Сейчас нет действующих акций</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(290px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {promoOffers.map((promo) => (
            <div 
              key={promo.id} 
              style={{ 
                backgroundColor: '#1c1215', 
                borderRadius: '8px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.05)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between'
              }}
            >
              <div style={{ width: '100%', height: '200px', backgroundColor: '#120a0c' }}>
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800";
                  }}
                />
              </div>
              
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <span style={{ fontSize: '0.75rem', color: '#ff8b94', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '1px' }}>
                    {promo.price || 'Спецпредложение'}
                  </span>
                  <h3 style={{ margin: '5px 0 10px 0', fontSize: '1.1rem', color: '#fff' }}>{promo.title}</h3>
                  <p style={{ margin: '0 0 15px 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.4' }}>{promo.desc}</p>
                </div>
                
                <button 
                  onClick={() => onSelectService(promo)}
                  style={{ backgroundColor: '#ff8b94', border: 'none', color: '#1c1215', padding: '10px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem', fontWeight: 'bold', width: '100%' }}
                >
                  Узнать подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button 
          onClick={() => navigate('/promo')}
          style={{ backgroundColor: 'transparent', color: '#ff8b94', border: '2px solid #ff8b94', padding: '12px 28px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '1px' }}
        >
          ВСЕ ПРЕДЛОЖЕНИЯ СТУДИИ
        </button>
      </div>
    </div>
  );
};

export default PromoSection;