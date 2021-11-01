import React from 'react';
import './styles.css';

import Navbar from './components/Navbar/Navbar';
import Tasklist from './components/Tasklist/Tasklist';

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Tasklist title="Pendente" />
        <Tasklist title="Fazendo" />
        <Tasklist title="Completa"/>
      </div>
    </div>
  );
}


