import React from 'react';
import CounterButton from './CounterButton';

function App() {
  return (
      <div>
        <h1>Click Counter App</h1>
        <CounterButton label="Button 1" />
        <CounterButton label="Button 2" />
        <CounterButton label="Button 3" />
      </div>
  );
}

export default App;
