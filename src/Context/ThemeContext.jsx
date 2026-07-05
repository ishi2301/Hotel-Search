import { createContext, useState } from "react";

export let ThemeContext = createContext();

export default function ThemeProvider({ children }) {

    let [theme, setTheme] = useState("dark");

    function changeTheme() {

        if (theme === "dark") {
            setTheme("light");
        }
        else {
            setTheme("dark");
        }

    }

    return (

        <ThemeContext.Provider
            value={{ theme, changeTheme }}
        >

            {children}

        </ThemeContext.Provider>

    );

}