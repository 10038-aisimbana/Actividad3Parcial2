import React from 'react';

const ClickHandler = () => {
  const handleClick = () => {
    alert('¡Hola!, has dado click en el botón');
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <button
        style={{
          padding: '10px',
          fontSize: '16px',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        }}
        onClick={handleClick}
      >
        Dame click!
      </button>
    </div>
  );
};

export default ClickHandler;