import React from 'react'
import { useState } from 'react'

function Counter() {

    let [counter, setCounter] = useState(0)

    const increaseCounter = () => {
        setCounter(counter + 1)
    }

    const decreaseCounter = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <h2>Counter</h2>
            <h3>{counter}</h3>
            <button onClick={() => increaseCounter()}>Increase</button>
            <button onClick={() => decreaseCounter()}>Decrease</button>
        </div>
    )
}

export default Counter