import { useState } from "react";
import Header from "./component/Header"; 
import Footer from "./component/Footer"; 
import Button from "./component/Button";
import Card from "./component/Card";
import style from "./App.module.css"; 
import {currentTheme} from "./Context"

const items = [
  { id: 1, img: "https://i.pinimg.com/originals/01/c4/cc/01c4cc357ec505c2e8cbaf60a11395db.png" },
  { id: 2, img: "https://img.magnific.com/free-photo/portrait-anime-character-with-stars_23-2151556410.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 3, img: "https://img.magnific.com/free-photo/halloween-scene-illustration-anime-style_23-2151794289.jpg?semt=ais_hybrid&w=740&q=80" },
  { id: 4, img: "https://img.magnific.com/free-photo/anime-girl-with-pink-hair-flower_23-2152016661.jpg?semt=ais_hybrid&w=740&q=80"},
  { id: 5, img: "https://i.pinimg.com/736x/1d/ce/2b/1dce2bcbbd5a016555587ed1c138b114.jpg"},
  { id: 6, img: "https://img.magnific.com/free-photo/anime-character-winter_23-2151843491.jpg?semt=ais_hybrid&w=740&q=80"},
  {id: 7, img: "https://img.magnific.com/premium-psd/cute-anime-girl-with-pink-purple-hair-smiling-cut-out_1001131-4870.jpg?semt=ais_hybrid&w=740&q=80"},
  {id: 8, img: "https://i.pinimg.com/736x/98/04/d6/9804d6b2c26da3075c115e3ac487845d.jpg?nii=t"},
  {id: 9, img: "https://img.magnific.com/free-photo/anime-like-illustration-girl-portrait_23-2151835253.jpg?semt=ais_hybrid&w=740&q=80"},
  {id: 10, img: "https://img.magnific.com/free-photo/anime-like-illustration-school-girl_23-2151835188.jpg?semt=ais_hybrid&w=740&q=80"},
  {id: 11, img: "https://img.magnific.com/free-photo/anime-girl-kimono-amidst-cherry-blossoms_23-2152016665.jpg?semt=ais_hybrid&w=740&q=80"},
]

function App() {
  const [theme,setTheme] = useState("dark")
   function swithcTheme(){
    console.log(12345);
    
        if (theme == 'light'){
            setTheme('dark')
            return null
        }
        if (theme == 'dark'){
            setTheme('light')
            return null
        }
    }

  return (
    <currentTheme.Provider value={theme}>
      <div className = {style.main}>
        <Header swithcTheme={swithcTheme}></Header>
        
      <div className={style.titleContainer}>
        <h1  className={style.siteTitle}>MOE MOE GRAMM</h1>
      </div>

         <div className={style.container}>
      {items.map(item => (
        <Card key={item.id} img={item.img} />
      ))}
        </div>
        
      </div>
    </currentTheme.Provider>
  )
}

export default App
