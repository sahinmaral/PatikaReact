import React from 'react'
import Button from './Button'
import Header from './Header'
import {useTheme} from '../context/ThemeContext'
import Profile from './Profile'

function Container() {
    const {theme} = useTheme()
    

    return (
        <div className={`app ${theme === "dark" ? "dark" : "light"}`}>
            <Header />
            <hr />
            <Button />
            <hr />
            <Profile/>
        </div>
    )
}

export default Container