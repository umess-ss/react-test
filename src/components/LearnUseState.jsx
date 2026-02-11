import { useReducer, useState } from "react";

// 1. Define the starting point
const initialState = 0;


const LearnUseState = () => {
    // 3. Initialize the hook
    const [state,dispatch] = useState(initialState);

  return (
    <div>
      <h1>Count: {state}</h1>
      {/* 4. Trigger the change using dispatch */}
      
      <button onClick={() => dispatch((prevState)=>prevState+1)}>+++++</button>
      <button onClick={() => dispatch((prevState)=>prevState-1)}>-----</button>
    </div>
  );
};

export default LearnUseState;