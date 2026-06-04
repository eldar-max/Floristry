import React from 'react';
import Button from './Button';

const ProductCard = ({ image, title, desc, price, badge, onBtnClick, btnText = "Заказать" }) => {
  return (
    <div style={{ 
      backgroundColor: '#25181c', 
      borderRadius: '8px', 
      overflow: 'hidden', 
      border: '1px solid rgba(255,255,255,0.05)',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between'
    }}>
      <div style={{ width: '100%', height: '240px', backgroundColor: '#120a0c', position: 'relative' }}>
        <img 
          src={image} 
          alt={title} 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
          onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1526047932273-341f2a7631f9?q=80&w=800"; }}
        />
        {badge && (
          <span style={{ position: 'absolute', top: '10px', left: '10px', backgroundColor: '#ff8b94', color: '#1c1215', padding: '4px 8px', borderRadius: '4px', fontSize: '0.75rem', fontWeight: 'bold' }}>
            {badge}
          </span>
        )}
      </div>
      
      <div style={{ padding: '20px', flexGrow: 1, display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
        <div>
          <h3 style={{ margin: '0 0 10px 0', fontSize: '1.1rem', color: '#fff' }}>{title}</h3>
          <p style={{ margin: '0 0 15px 0', fontSize: '0.85rem', color: 'rgba(255,255,255,0.6)', lineHeight: '1.4' }}>{desc}</p>
        </div>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 'auto' }}>
          <span style={{ color: '#ff8b94', fontWeight: 'bold', fontSize: '1.1rem' }}>{price}</span>
          <Button variant="outline" onClick={onBtnClick}>{btnText}</Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;