import { useState } from 'react'
import StartPage from './components/StartPage'
import QuestionsPage from './components/QuestionsPage'
import './App.css'

function App() {
  const [gameStart, setGameStart] = useState(false)

  function startGame(){
    setGameStart(true)
  }

  function startOver(){
    setGameStart(false)
  }

  return (
    <div className="App">
      {!gameStart && <StartPage handleClick={startGame}/>}
      {gameStart && <QuestionsPage 
        startOver={startOver}
      />}
      <img src="./blob1.png" alt="" className='blob1'/>
      <img src="./blob2.png" alt="" className='blob2'/>
    </div>
  )
}

export default App
