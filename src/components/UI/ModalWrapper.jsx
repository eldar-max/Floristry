import React from 'react';

const ModalWrapper = ({ children, isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div 
      onClick={onClose}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundColor: 'rgba(0, 0, 0, 0.75)',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 1000,
        backdropFilter: 'blur(4px)'
      }}
    >
      <div 
        onClick={(e) => e.stopPropagation()} // чтобы модалка не закрывалась при клике внутри неё
        style={{
          backgroundColor: '#25181c',
          borderRadius: '12px',
          padding: '30px',
          maxWidth: '500px',
          width: '90%',
          border: '1px solid rgba(255,255,255,0.05)',
          position: 'relative'
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default ModalWrapper;