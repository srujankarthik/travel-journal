import React from 'react';
import './App.css';
import data from './data';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  console.log(data);
  return (
    <div className="App">
      <Navbar />
      <h1>init setup</h1>
      <Card />
    </div>
  );
}

export default App;
