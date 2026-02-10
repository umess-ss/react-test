import { useContext } from "react";
import { ThemeContext } from "./components/ThemeContext";

export default function ThemeCard() {
    const {state, dispatch} = useContext(ThemeContext);
    const isDark = state.mode === 'dark';

    const style = {
        backgroundColor: isDark ? '#333' : '#fff',
    color: isDark ? '#fff' : '#000',
    padding: '50px',
    textAlign: 'center'
    }

    return (
        <div style={style}>
            <h1>{state.mode === 'light' ? 'Light Mode' : 'Dark Mode'}</h1>
            <button onClick={()=>dispatch({type:'TOGGLE_THEME'})}>
                Toggle Theme
            </button>
        </div>
    )
}