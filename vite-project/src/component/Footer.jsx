import style from './style/Footer.module.css'; 
import { useContext } from 'react';
import {currentTheme} from "../Context"

function Footer() {
    const theme = useContext(currentTheme)
    return (
        <span>
        </span>
    )
}
export default Footer
