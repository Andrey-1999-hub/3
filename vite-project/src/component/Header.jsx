import style from './style/header.module.css'; 

function Header() {
    return (
        <>
        <span>
            <img className={style.img}  src="https://img.magnific.com/free-photo/anime-style-illustration-rose_23-2151548341.jpg?semt=ais_hybrid&w=740&q=80" alt="" />
        </span>
        </>
    )
}
export default Header