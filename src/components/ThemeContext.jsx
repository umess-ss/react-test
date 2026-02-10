import { createContext, useReducer } from "react";
import { initialTheme, themeReducer } from "../reducers/themeReducer";

export const ThemeContext = createContext();

export const ThemeProvider = ({children}) => {
    const [state, dispatch] = useReducer(themeReducer, initialTheme);

    return(
        <ThemeContext.Provider value={{state, dispatch}}>
            {children}
        </ThemeContext.Provider>
    )
}