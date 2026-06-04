import React from 'react';

const CompositionsPage = ({ compOffers = [], onSelectService }) => {
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
        НАШИ КОМПОЗИЦИИ
      </h1>

      {compOffers.length === 0 ? (
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '40px' }}>
          В админ-панели пока нет добавленных композиций.
        </p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          
          {compOffers.map((comp) => (
            <div 
              key={comp.id} 
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
              {/* Картинка */}
              <div style={{ width: '100%', height: '280px', overflow: 'hidden', backgroundColor: '#120a0c' }}>
                <img 
                  src={comp.image} 
                  alt={comp.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  /* Защита от битых или удаленных ссылок */
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800";
                  }}
                />
              </div>

              {/* Контент */}
              <div style={{ padding: '20px', color: '#fff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyBetween: 'space-between' }}>
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold' }}>
                    {comp.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                    {comp.desc}
                  </p>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ color: '#ff8b94', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {comp.price}
                  </span>
                  
                  <button 
                    onClick={() => onSelectService && onSelectService(comp)}
                    style={{
                      backgroundColor: 'transparent',
                      border: '1px solid #ff8b94',
                      color: '#ff8b94',
                      padding: '8px 16px',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      fontSize: '0.85rem',
                      fontWeight: 'bold'
                    }}
                  >
                    Заказать
                  </button>
                </div>
              </div>

            </div>
          ))}

        </div>
      )}
    </div>
  );
};

export default CompositionsPage;