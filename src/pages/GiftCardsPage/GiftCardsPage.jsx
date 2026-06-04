import React from 'react';

const GiftCardsPage = ({ cardOffers = [], onSelectService }) => {
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
        ПОДАРОЧНЫЕ СЕРТИФИКАТЫ
      </h1>

      {cardOffers.length === 0 ? (
        <p style={{ color: 'rgba(255,255,255,0.5)', textAlign: 'center', marginTop: '40px' }}>
          В админ-панели пока нет добавленных сертификатов.
        </p>
      ) : (
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
          gap: '30px', 
          maxWidth: '1200px', 
          margin: '0 auto' 
        }}>
          
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
              {/* Изображение сертификата */}
              <div style={{ width: '100%', height: '240px', overflow: 'hidden', backgroundColor: '#120a0c' }}>
                <img 
                  src={card.image} 
                  alt={card.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                  /* Дефолтная картинка, если загруженная в админке ссылка сломается */
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1574634534894-89d7576c8259?q=80&w=800";
                  }}
                />
              </div>

              {/* Информация */}
              <div style={{ padding: '20px', color: '#fff', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div style={{ flexGrow: 1 }}>
                  <h3 style={{ fontSize: '1.15rem', margin: '0 0 10px 0', color: '#fff', fontWeight: 'bold' }}>
                    {card.title}
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.5', margin: '0 0 20px 0' }}>
                    {card.desc}
                  </p>
                </div>
                
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
                  <span style={{ color: '#ff8b94', fontWeight: 'bold', fontSize: '1.1rem' }}>
                    {card.price}
                  </span>
                  
                  <button 
                    onClick={() => onSelectService && onSelectService(card)}
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
                    Купить карту
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

export default GiftCardsPage;