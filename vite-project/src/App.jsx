import { useState } from "react";
import Header from "./component/Header"; 
import Footer from "./component/Footer"; 
import Button from "./component/Button";
import Card from "./component/Card";
import style from "./App.module.css"; 
import {currentTheme} from "./Context"


function App() {
  const {theme,setTheme} = useState("dark")
   function swithcTheme(){
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
        <Header></Header>
        <Card></Card>
        <Footer></Footer>
      </div>
    </currentTheme.Provider>
  )
}

export default App
