import React from 'react';
import './App.css';


function App() {
  const [count, setCount] = React.useState(0);
  return (
    <div className="App">
      <h1>Counter: {count}</h1>
      <button onClick={() => setCount(count + 1)}> Increment</button>
      <button onClick={() => setCount(count + 1)}>Decrement</button>
    </div>
  );
}

export default App;
