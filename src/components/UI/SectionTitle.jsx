import React from 'react';

const SectionTitle = ({ children, color = '#fff' }) => {
  return (
    <h2 style={{ 
      textAlign: 'center', 
      fontSize: '2rem', 
      letterSpacing: '2px', 
      marginBottom: '40px', 
      textTransform: 'uppercase',
      color: color,
      fontFamily: 'sans-serif'
    }}>
      {children}
    </h2>
  );
};

export default SectionTitle;