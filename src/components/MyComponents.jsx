import { useState } from 'react';

export function MyComponents() {
    // 1. Define state (click) and the updater function (setClick)
    const [click, setClick] = useState(false);

    return (
        <>
            {/* 2. Use the updater function to change the state */}
            <button onClick={() => setClick(!click)}>
                Click Me
            </button>
            
            {click ? <h1>My Components</h1> : <h1>The components</h1>}
        </>
    );
}