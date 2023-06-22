// Creating a Context component to change the darkMode across the entire website
// The toggleMode function is implemented in Header.js
// ThemeProvider is consummed in App.js

// Hooks
import {createContext, useState} from 'react';

// Creating a context called ThemeContext
const ThemeContext = createContext()

export function ThemeProvider({children}){

    const [darkMode, setDarkMode] = useState(true);

    const toggleMode = () => {
        setDarkMode(!darkMode);
        console.log(darkMode);
    };
    
    return (
        // Provide context including darkMode variable and toggleMode function
        <ThemeContext.Provider value={{darkMode, toggleMode}}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;