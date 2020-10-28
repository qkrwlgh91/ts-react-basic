import React from 'react';
import './App.css';
import Greetings from './Greetings';
import Counter from './Counter';
import MyForm from './MyForm';
import CounterReducer from './CounterReducer';
import ReducerSample from './ReducerSample';

function App() {
  const onClick = (name: string) => {
    console.log(`${name} says hello`);
    
  };

  const onSubmit = (form: { name: string; description: string }) => {
    console.log(form);
    
  }
  return (
    <div>
      <Greetings name="JHP" onClick={onClick}/>
      <Counter />
      <MyForm onSubmit={onSubmit} />
      <CounterReducer />
      <ReducerSample />
    </div>
    
  );
}

export default App;
