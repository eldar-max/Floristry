import React from 'react';

const Promotion = ({ promoOffers = [], onSelectService }) => {
  return (
    <div style={{ padding: '60px 20px', backgroundColor: '#1c1215', minHeight: '100vh', fontFamily: 'sans-serif' }}>
      
      <h1 style={{ 
        color: '#fff', 
        textAlign: 'center', 
        fontSize: '2.2rem', 
        letterSpacing: '2px', 
        marginBottom: '40px',
        textTransform: 'uppercase'
      }}>
        НАШИ АКЦИИ И СПЕЦПРЕДЛОЖЕНИЯ
      </h1>

      {promoOffers.length === 0 ? (
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '40px' }}>
          В админ-панели пока нет активных акций.
        </p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          
          {promoOffers.map((promo) => (
            <div 
              key={promo.id} 
              style={{ 
                backgroundColor: '#25181c', 
                borderRadius: '12px', 
                overflow: 'hidden', 
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                boxShadow: '0 4px 15px rgba(0,0,0,0.2)'
              }}
            >
             
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', backgroundColor: '#120a0c' }}>
                <img 
                  src={promo.image} 
                  alt={promo.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  /* Защитный фон на случай, если картинка из админки пропадет */
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=800";
                  }}
                />
              </div>

            
              <div style={{ padding: '25px', color: '#fff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ flexGrow: 1 }}>
                  <div style={{ display: 'inline-block', backgroundColor: '#ff8b94', color: '#1c1215', padding: '4px 10px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold', marginBottom: '12px', textTransform: 'uppercase' }}>
                    {promo.price || 'Акция'}
                  </div>
                  <h3 style={{ fontSize: '1.2rem', margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold', lineHeight: '1.4' }}>
                    {promo.title}
                  </h3>
                  <p style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                    {promo.desc}
                  </p>
                </div>
                
                <button 
                  onClick={() => onSelectService && onSelectService(promo)}
                  style={{
                    width: '100%',
                    backgroundColor: 'transparent',
                    border: '1px solid #ff8b94',
                    color: '#ff8b94',
                    padding: '10px',
                    borderRadius: '6px',
                    cursor: 'pointer',
                    fontSize: '0.9rem',
                    fontWeight: 'bold',
                    transition: 'all 0.2s',
                    marginTop: 'auto'
                  }}
                >
                  Участвовать в акции
                </button>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default Promotion;