import React from 'react';
import './App.css';
import data from './data';
import Navbar from './components/Navbar';
import Card from './components/Card';

function App() {
  console.log(data);
  const cards = data.map((item) => {
    return <Card
      key={item.id}
      item={item}
    />
  })
  return (
    <div className="App">
      <Navbar />
      <h1>init setup</h1>
      {cards}
    </div>
  );
}

export default App;
