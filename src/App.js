import React from 'react';
import './App.css';


function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <div style={{ display: 'flex', flexDirection: "row", gap: '20px' }}>
        <button className='inc' onClick={() => setCount(count + 1)}> Increment</button>
        <button className='dec' onClick={() => setCount(count + 1)}>Decrement</button>
      </div>
    </div>
  );
}

export default App;
