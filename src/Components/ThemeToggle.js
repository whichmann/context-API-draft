import React, {useContext} from 'react'
import {ThemeContext} from "../Contexts/ThemeContext"

const ThemeToggle = () => {
    const context = useContext(ThemeContext);
    const {setIsLightTheme, isLightTheme} =  context;
    console.log(isLightTheme);
    return ( <div id="bell" onClick={() => {setIsLightTheme(!isLightTheme)}}></div> );
}
 
export default ThemeToggle;