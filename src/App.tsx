import { useState } from 'react'

import './App.css'
import Guesswords from './components/guesswords'
import Hangman from './components/hangman'
import Keyboard from './components/keyboard'
import { words } from './components/words'

function App() {

  const [word, setWord] = useState(words[Math.floor(Math.random() * words.length)].toUpperCase())
  const [rightLetters, setRightLetters] = useState<string[]>([])
  const [wrongLetters, setWrongLetters] = useState<string[]>([])
  const [gameover, setGameover] = useState(false)

  return (
    <div className="container">
      {gameover &&
        <div className="gamemessage">
          ** Game Over **
        </div>
      }
      <Hangman
        wrongLetters={wrongLetters}
      />
      <Guesswords
        rightLetters={rightLetters}
        word={word}
        gameover={gameover}
        setGameover={setGameover}
      />
      <Keyboard
        word={word}
        gameover={gameover}
        setGameover={setGameover}
        rightLetters={rightLetters}
        setRightLetters={setRightLetters}
        wrongLetters={wrongLetters}
        setWrongLetters={setWrongLetters}
      />
    </div>
  )
}

export default App
