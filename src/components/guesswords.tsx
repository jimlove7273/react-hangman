import React, { useEffect } from 'react'

type wordProp = {
    rightLetters: string[];
    word: string | undefined;
    gameover: boolean;
    setGameover: (value: boolean) => void;
}

const Guesswords = ({ rightLetters, word, gameover, setGameover }: wordProp) => {

    let splitWord = word?.split('')

    function Unique(str?: string) {
        return String.prototype.concat(...new Set(str))
    }

    useEffect(() => {
        if (rightLetters.length === Unique(word).length) {
            setGameover(true)
        }
    }, [rightLetters])

    return (
        <div className="letters">
            {splitWord?.map((letter, i) => (
                <div className="borderBottom" key={i}>
                    <div
                        className={`
                            letterMap
                            ${rightLetters?.includes(letter)
                                ? ''
                                : gameover && !rightLetters?.includes(letter)
                                    ? 'red'
                                    : 'hidden'
                            }
                        `}
                    >
                        {letter}
                    </div>
                </div>
            ))}
        </div>
    )
}

export default Guesswords