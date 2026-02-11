import { useReducer } from "react";

// 1. Define the starting point
const initialState = { count: 0 };

// 2. Define the "Teller" logic (The Reducer)
// It takes the current state and an "action", then returns the NEW state
const reducer = (state, action) => {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + 1 };
    case "DECREMENT":
      return { count: state.count - 1 };
    default:
      return state;
  }
};

const LearnUseReducer = () => {
  // 3. Initialize the hook
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div>
      <h1>Count: {state.count}</h1>
      {/* 4. Trigger the change using dispatch */}
      
      <button onClick={() => dispatch({ type: "INCREMENT" })}>+++++</button>
      <button onClick={() => dispatch({ type: "DECREMENT" })}>-----</button>
    </div>
  );
};

export default LearnUseReducer;