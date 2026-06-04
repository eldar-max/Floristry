import React from 'react';

const Input = ({ type = 'text', placeholder, value, onChange, required = false, style = {} }) => {
  const inputStyle = {
    width: '100%',
    padding: '12px',
    backgroundColor: '#120a0c',
    border: '1px solid rgba(255, 255, 255, 0.1)',
    borderRadius: '6px',
    color: '#fff',
    fontSize: '0.95rem',
    outline: 'none',
    boxSizing: 'border-box',
    marginBottom: '15px',
    ...style
  };

  return (
    <input 
      type={type} 
      placeholder={placeholder} 
      value={value} 
      onChange={onChange} 
      required={required} 
      style={inputStyle} 
    />
  );
};

export default Input;