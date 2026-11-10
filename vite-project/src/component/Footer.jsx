import style from './style/Footer.module.css'; 
import { useContext } from 'react';
import {currentTheme} from "../Context"

function Footer() {
    const theme = useContext(currentTheme)
    return (
        <span>
            <img className={style.img} src="https://i.pinimg.com/originals/a7/4f/4f/a74f4ff67026be6c1abc5716542bd82a.jpg" alt="" />
        
        </span>
    )
}
export default Footer
