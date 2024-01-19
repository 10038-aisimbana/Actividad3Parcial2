
import React, { useState } from 'react';

const InputChangeHandler = () => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        style={{
          padding: '10px',
          fontSize: '16px',
          border: '1px solid #ccc',
          borderRadius: '5px',
        }}
      />
      <b><p style={{ fontSize: '14px', marginTop: '5px' }}> Tu texto: {inputValue}</p></b>
    </div>
  );
};

export default InputChangeHandler;
