import React from 'react';

const Button = ({ children, onClick, variant = 'primary', type = 'button', style = {} }) => {
  const isPrimary = variant === 'primary';
  
  const baseStyle = {
    padding: '10px 20px',
    borderRadius: '6px',
    fontWeight: 'bold',
    cursor: 'pointer',
    fontSize: '0.9rem',
    letterSpacing: '0.5px',
    transition: 'all 0.2s ease-in-out',
    border: isPrimary ? 'none' : '1px solid #ff8b94',
    backgroundColor: isPrimary ? '#ff8b94' : 'transparent',
    color: isPrimary ? '#1c1215' : '#ff8b94',
    ...style
  };

  return (
    <button type={type} onClick={onClick} style={baseStyle}>
      {children}
    </button>
  );
};

export default Button;