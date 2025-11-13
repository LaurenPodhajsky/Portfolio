"use client"

import React, { createContext, useContext, useEffect } from "react";
import { useState } from "react";

type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    toggleTheme: () => void; /* No return so it's void */
    setTheme : (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const ThemeProvider = ({children} : {children : React.ReactNode}) => {
    const [theme, setThemeState] = useState<Theme>("light");
    const [mounted, setMounted] = useState(false);

    //Update the theme
    const setTheme = (newTheme: Theme) => {
        setThemeState(newTheme);
        localStorage.setItem("theme", newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
    }

    //Toggle the theme
    const toggleTheme = () => {
        setTheme(theme === "light" ? "dark" : "light");
    }

    // initalize theme
    useEffect(() => {
        const savedTheme = localStorage.getItem("theme") as Theme | null;
        const systemTheme = window.matchMedia("(perfers-color-scheme: dark)").matches ? "dark" : "light";
        const initialTheme = savedTheme || systemTheme;

        setThemeState(initialTheme);
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
        setMounted(true);
    }, [])

    // prevent flash of wrong theme
    if(!mounted) {
        return null;
    }

    return (
        <ThemeContext.Provider value={{theme, setTheme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}

//use custom hook to use the ThemeContext 
export function useTheme() {
    const context = useContext(ThemeContext);

    if(context === undefined) {
        throw new Error("useTheme must be used within a Theme Provider");
    }

    return context;
}