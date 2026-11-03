import Header from "./component/Header"; 
import Footer from "./component/Footer"; 
import Button from "./component/Button";
import Card from "./component/Card";
import style from "./App.module.css"; 


function App() {

  return (
  <>
    <div className = {style.main}>
      <Header></Header>
      <Card></Card>
      <div>
        
      </div>
      <Footer></Footer>
    </div>
  </>
  )
}

export default App
