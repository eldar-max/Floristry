import React from 'react';
import { useNavigate } from 'react-router-dom';

const Compositions = ({ onSelectService, compOffers = [] }) => {
  const navigate = useNavigate();

  // Показываем на главной только первые 4 композиции из админки
  const previewOffers = compOffers.slice(0, 4);

  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#1c1215', color: '#fff', fontFamily: 'sans-serif' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2rem', letterSpacing: '2px', marginBottom: '40px', textTransform: 'uppercase' }}>
        НАШИ КОМПОЗИЦИИ
      </h2>

      {previewOffers.length === 0 ? (
        <p style={{ textAlign: 'center', opacity: 0.5 }}>Нет доступных композиций</p>
      ) : (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px', maxWidth: '1200px', margin: '0 auto' }}>
          {previewOffers.map((item) => (
            <div 
              key={item.id} 
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
              <div style={{ width: '100%', height: '240px', backgroundColor: '#120a0c' }}>
                <img 
                  src={item.image} 
                  alt={item.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800";
                  }}
                />
              </div>
              
              <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                  <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#fff' }}>{item.title}</h3>
                  <p style={{ margin: '0 0 15px 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.4' }}>{item.desc}</p>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ color: '#ff8b94', fontWeight: 'bold' }}>{item.price}</span>
                  <button 
                    onClick={() => onSelectService(item)}
                    style={{ backgroundColor: 'transparent', border: '1px solid #ff8b94', color: '#ff8b94', padding: '6px 14px', borderRadius: '4px', cursor: 'pointer', fontSize: '0.85rem' }}
                  >
                    Заказать
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <button 
          onClick={() => navigate('/compositions')}
          style={{ backgroundColor: '#ff8b94', color: '#1c1215', border: 'none', padding: '12px 28px', borderRadius: '6px', fontWeight: 'bold', cursor: 'pointer', letterSpacing: '1px' }}
        >
          СМОТРЕТЬ ВСЕ КОМПОЗИЦИИ
        </button>
      </div>
    </div>
  );
};

export default Compositions;