import { useState } from 'react'

type KeyboardPropos = {
    word?: string;
    gameover: boolean;
    setGameover: (value: boolean) => void;
    rightLetters: string[];
    setRightLetters: (value: string[]) => void;
    wrongLetters: string[];
    setWrongLetters: (value: string[]) => void;
}

const Keyboard = ({ word, gameover, setGameover, rightLetters, setRightLetters, wrongLetters, setWrongLetters }: KeyboardPropos) => {

    let alphabet = String.fromCharCode(...Array(123).keys()).slice(97).toUpperCase().split('');

    const checkLetter = (letter: string) => {
        word?.includes(letter)
            ? setRightLetters([...rightLetters, letter])
            : setWrongLetters([...wrongLetters, letter])

        if (wrongLetters.length >= 5) {
            setGameover(true)
        }
    }

    return (
        <>
            <div className="alphabetList">
                {
                    alphabet.map((letter, i) => (
                        <button
                            className="alphabetLetter" key={i}
                            onClick={() => checkLetter(letter)}
                            disabled={gameover || wrongLetters.includes(letter)}
                        >
                            {letter}
                        </button>
                    ))
                }
            </div>
        </>
    )
}

export default Keyboard