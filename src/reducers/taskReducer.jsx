
export const initialState = [
    {id:1, text: 'Learn React Hooks', completed: false},
    {id:2, text: 'Learn React Hooks', completed: false},
]

export function taskReducer(state, action){
    switch(action.type){
        case 'ADD_TASK':
            return [...state, {id: Date.now(), text: action.payload, completed: false} ];
        
        case 'TOGGLE_TASK':
            return state.map(
                task => task.id === action.id ? {...task, completed: !task.completed} : task);

        case 'DELETE_TASK':
            return state.filter(task=> task.id !== action.id);

        default:
            return state;
    }
}