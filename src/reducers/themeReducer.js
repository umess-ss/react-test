export const initialTheme = {mode: 'light'};


export function themeReducer(state, action){
    switch(action.type){
        case 'TOGGLE_THEME':
            return {
                mode: state.mode === 'light' ? 'dark' : 'light'
            };
        default:
            return state;
    }
}
