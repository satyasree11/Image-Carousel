
import './App.css'
import Carousal from './Components/Carousal'
import {slides } from "./data/CarousalData.json"

function App() {
  

  return (
    <div className='App'>
      <Carousal data={slides}/>
    </div>
  )
}

export default App
