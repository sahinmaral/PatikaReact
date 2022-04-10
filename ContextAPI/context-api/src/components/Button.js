import React from 'react'
import {useTheme} from '../context/ThemeContext'

function Button() {
    const {theme,setTheme} = useTheme()

    return (
        <div>
            <p>Active Theme : {theme}</p>
            <button onClick={()=>setTheme(theme === "dark" ? "light" : "dark")}>Change Theme</button>
        </div>
    )
}

export default Button