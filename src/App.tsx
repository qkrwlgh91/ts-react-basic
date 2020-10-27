import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
    
  };
  return (
    <div>
      <Greetings name="JHP" onClick={onClick}/>
      <Counter />
    </div>
    
  );
}

export default App;
