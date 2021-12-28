import React from 'react';
import lady from './images/lady.svg';
import Background from './components/Background';
import './App.css';

function App() {
  return (
    <main>
      <Background />
      <img src={lady} alt="lady" className="lady"/>
    </main>
  );
}

export default App;