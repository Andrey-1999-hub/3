import { useState, useContext } from "react"
import style from "./style/Card.module.css"
import { currentTheme } from "../Context"

function Card({ img }) {
  const [liked, setLiked] = useState(false)
  const theme = useContext(currentTheme)

  return (
    <div className={style.card}>
      <img className={style.img} src={img} alt="" />
      <button className={style.likeBtn} onClick={() => setLiked(p => !p)}>
        <img
          className={style.icon}
          src={liked
            ? "https://i.pinimg.com/originals/75/1f/96/751f9650119762d94f58b8e43e051183.jpg"
            : "https://avatars.mds.yandex.net/i?id=c966e4d4186d6f60c5bf7562da58bdc5_l-5171139-images-thumbs&n=13"}
          alt="like"
        />
      </button>
    </div>
  )
}

export default Card