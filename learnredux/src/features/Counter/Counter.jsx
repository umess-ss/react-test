import { useSelector, useDispatch } from "react-redux";
import {
    increment,
    decrement,
    reset,
    incrementByAmount,
    decrementByAmount
} from './counterSlice';
import { useState } from "react";

const Counter = () => {
    const count = useSelector((state) => state.counter.count);

    const dispatch = useDispatch();

    const [incrementDecAmount, setIncrementDecAmount] = useState(0);


    const addValue = Number(incrementDecAmount) || 0;

    const resetAll = () => {
        setIncrementDecAmount(0);
        dispatch(reset());
    }

    return (
        <section>
            <p>{count}</p>
            <div>
                <button onClick={() => dispatch(increment())}>+</button>
                <button onClick={() => dispatch(decrement())}>-</button>
            </div>

            <input
                type="text"
                value={incrementDecAmount}
                onChange={(e) => setIncrementDecAmount(e.target.value)}
                placeholder="Enter By Amount"
            />

    

            <div>
                <button onClick={() => dispatch(incrementByAmount(addValue))}>Add Amount</button>
                <button onClick={() => dispatch(decrementByAmount(addValue))}>Subtract Amount</button>
                <button onClick={resetAll}>Reset</button>
            </div>
        </section>
    )
}
export default Counter