import React from 'react';
import ClickHandler from './components/ClickHandler';
import InputChangeHandler from './components/InputChangeHandler';

function App() {
  return (
    <div>
      <h1>Actividad 3 Parcial 2</h1>
      <h2>Nombre: Adrian Simbaña</h2>
      <h2>NRC: 14363</h2><br></br>
      <b><p>Evento con click</p></b>
      <ClickHandler />
      <b><p>Listener con input</p></b>
      <InputChangeHandler />
    </div>
  );
}

export default App;