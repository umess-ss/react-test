import {taskReducer, initialState} from '../reducers/taskReducer.jsx'
import { useState, useReducer } from "react";

export default function TaskApp(){
    const [state, dispatch] = useReducer(taskReducer, initialState);
    const [inputText, setInputText] = useState("");


    const handleAdd = () => {
        if(inputText.trim()){
            dispatch({type:'ADD_TASK', payload: inputText});
            setInputText('');
        }
    };

    return(
        <div style={{padding:'20px'}}>
            <h2>My Task</h2>
            <input
             value={inputText}
             onChange={(e)=>setInputText(e.target.value)}
             placeholder="New task..." />
             <button onClick={handleAdd}>Add Task</button>

        {state.map(task=> (
            <div key={task.id}>
                <span style={{textDecoration: task.completed ? 'line-through' : 'none'}}>
                    {task.text}
                </span>
                <button onClick={()=> dispatch({type:'TOGGLE_TASK', id: task.id})}>
                    {task.completed ? 'Undo' : 'Done'}
                </button>
                <button onClick={()=> dispatch({type:'DELETE_TASK', id: task.id})}>
                    Delete
                </button>
            </div>
        ))}
        </div>
    );
}