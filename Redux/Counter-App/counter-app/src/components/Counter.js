import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  incrementByAmount,
} from "../redux/counter/counterSlice";

function Counter() {
  const [amount, setAmount] = useState(1);

  const counterValue = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h1>{counterValue}</h1>

      <button onClick={() => dispatch(decrement())}>Decrement</button>
      <button onClick={() => dispatch(increment())}>Increment</button>

      <br />
      <br />

      <input type="number" placeholder="Enter number" 
      onChange={(e)=>{setAmount(Number(e.target.value))}}
      defaultValue={amount} />
      <button onClick={() => dispatch(incrementByAmount(amount))}>
        Assign Number
      </button>
    </div>
  );
}

export default Counter;
