import { useState } from 'react';
import './style.css';
import Grid from './components/Grid'
import Footer from './components/Footer';

function App() {
  const [numberArray, setNumberArray] = useState([]);

  function add() {
    setNumberArray(prevArray => {
      const lastValue = prevArray.length === 0 ? 0 : prevArray[prevArray.length - 1];

      return [...prevArray, lastValue + 1];
    })
  }

  function minus() {
    setNumberArray(prevArray => {
      const lastValue = prevArray.length === 0 ? 0 : prevArray[prevArray.length - 1];
      return prevArray.filter(item => item !== lastValue)
    })
  }

  function handleClick(id) {
    setNumberArray(prevArray => {
      return prevArray.filter(item => item !== id)
    })
  }

  return (
    <div className="app">
      <Grid array={numberArray} handleClick={handleClick}/>
      <Footer handleAddClick={add} handleMinusClick={minus}/>
    </div>
  );
}

export default App;
