import './App.css';
import ComponentUnmount from './components/ComponentUnmount'
import { useState } from 'react'

function App() {

  const [isVisible, setIsVisible] = useState(true)

  return (
    <div>
      {/* <Lifecycle/> */}
      {isVisible && <ComponentUnmount />}

      <br />

      <button onClick={() => setIsVisible(!isVisible)}>Toggle Counter</button>
    </div>
  )
}

export default App;
