import { useState } from 'react';
import style from './style/Header.module.css'; 
import dark from './assets/dark.webp';
import light from './assets/light.jpg';
import {currentTheme} from "../Context"

function Header({swithcTheme}) {
    const theme = useContext(currentTheme)

    return (
        <span className={style.headerWrapper} data-theme = {theme}>
            <img className={style.img}  src="https://img.magnific.com/free-photo/anime-style-illustration-rose_23-2151548341.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
             <button className={style.switchBtnTheme} onClick={swithcTheme}>
            {
                theme == 'dark' ? <img src={light}></img> : <img src={dark}></img>
            }
        </button>
        </span>
    )
}
export default Header