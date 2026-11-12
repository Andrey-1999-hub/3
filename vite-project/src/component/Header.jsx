import { useContext } from 'react';
import style from './style/Header.module.css'; 
import dark from './assets/dark.webp';
import light from './assets/light.jpg';
import { currentTheme } from "../Context";

function Header({ switchTheme }) { // Исправил опечатку
    const theme = useContext(currentTheme);

    return (
        <span className={style.headerWrapper}>
            {/* <img className={style.img} src="..." alt="" /> */}
            <h1 className={style.siteTitle}>MOE MOE GRAMM</h1>
             <button className={style.switchBtnTheme} onClick={switchTheme}>
            {
                theme === "dark" ? <img src={light} alt="light" /> : <img src={dark} alt="dark" />
            }
        </button>
        </span>
    )
}
export default Header