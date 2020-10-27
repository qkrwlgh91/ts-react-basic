import React from 'react';
import './App.css';
import Greetings from './Greetings';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
    
  };
  return (
    <Greetings name="JHP" onClick={onClick}/>
  );
}

export default App;
