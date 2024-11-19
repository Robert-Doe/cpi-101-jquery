import React from 'react';
import GreetingCard from './GreetingCard';

function App() {
  const greetings = [
    { name: 'Famous', message: 'Have a wonderful day!' },
    { name: 'Ada', message: 'Keep up the great work!' },
    { name: 'John', message: 'You are amazing!' },
  ];

  return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        <h1>Greeting Card App</h1>
        {greetings.map((greeting, index) => (
            <GreetingCard
                key={index}
                name={greeting.name}
                message={greeting.message}
            />
        ))}
      </div>
  );
}

export default App;
