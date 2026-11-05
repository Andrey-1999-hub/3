import style from './style/footer.module.css'; 
import { useContext } from 'react';

function Footer({swithcTheme}) {
    return (
        <span>
            <img className={style.img} src="https://i.pinimg.com/originals/a7/4f/4f/a74f4ff67026be6c1abc5716542bd82a.jpg" alt="" />
            <button className={style.switchBtnTheme} onClick={swithcTheme}>
                {
                    theme == 'dark' ? <img src={light}></img> : <img src={dark}></img>
                }
            </button>
        </span>
    )
}
export default Footer
