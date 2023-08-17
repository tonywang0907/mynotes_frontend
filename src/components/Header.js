import React from 'react'
import { ReactComponent as ToggleOn} from '../assets/toggle-on-solid.svg'
import { ReactComponent as ToggleOff} from '../assets/toggle-off-solid.svg'


const Header = ({ darkMode, toggleDarkMode }) => {
    return (
        <div id="header">
            <h1 className='app-header'>Note List </h1>
            {darkMode ? (
                <ToggleOn id='toggle-btn' onClick={toggleDarkMode}></ToggleOn>
            ) : (
                <ToggleOff id='toggle-btn' onClick={toggleDarkMode}></ToggleOff>
            )}
        </div>
    )
}

export default Header
