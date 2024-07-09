import logo from './logo.svg';
import './App.css';
import {useState} from 'react';

function App() {
  const [count , setCount] = useState(500);
  const decrement = ()=> {
    if (count === 0){
      return
    }
    setCount(count -25);
  }
  const increment = ()=> {
    if (count === 700){
      return 
    }
    setCount(count +25);
  }
  
  return (
    <div className="App">
      <h1>COUNT</h1>
      <h4>{count}</h4>
      <button onClick={decrement}>Decrease</button>
      <button onClick={increment}>Increase</button>
    </div>
  );
}

export default App;

