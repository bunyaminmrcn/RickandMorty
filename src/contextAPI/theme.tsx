import React, { createContext, useContext, useEffect, useState } from 'react';
import { ColorsDark, ColorsLight } from '../utils/colors';

interface Theme {
    screenHead: string,
    primary: string,
    focused: string,
    inActive: string,
    label: string,
    primaryBackground: string,
    secondaryBackground: string,
    separator: string,
}

let theme_: Theme = {
    screenHead: 'red',
    primary: 'green',
    focused: 'blue',
    inActive: 'yellow',
    label: 'orange',
    primaryBackground: 'pink',
    secondaryBackground: 'indigo',
    separator: 'black'
};


const ThemeContext = createContext({
    darkTheme: false,
    theme: theme_,
    setThemeF: (isDark: boolean) => { },
});

function ThemeProvider({ children }: any) {
    const [theme, setTheme] = useState(false);
    const [themeValue, setValues] = useState(theme_);

    useEffect(() => {
        setValues(theme ? ColorsLight : ColorsDark)
    }, [theme])
    return (
        <ThemeContext.Provider
            value={{
                darkTheme: theme,
                theme: themeValue,
                setThemeF: (isDark: boolean) => {
                    setTheme(isDark);
                }
            }}>
            {children}
        </ThemeContext.Provider>
    );
}

const useTheme = () => useContext(ThemeContext);

export { ThemeProvider, useTheme };
