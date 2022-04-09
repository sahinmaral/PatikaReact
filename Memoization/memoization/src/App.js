import React, { useState, useMemo, useCallback } from 'react';
import './App.css';
import Header from './components/Header'

function App() {

  const [number, setNumber] = useState(0)

  const data = useMemo(() => {
    return { name: 'Sahin' }
  }, [])

  const increment = useCallback(() => {
    setNumber((prevState)=>prevState+1)
  }, [])

  return (
    <div className="App">
      <Header increment={increment} />

      <hr />



      <h1>{number}</h1>
      <button onClick={() => setNumber(number + 1)}>Increase</button>
    </div>
  );
}

export default App;
