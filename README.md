# React Hangman
This is a classic hangman game created using React (vite).  It has the following three components:

**hangman.tsx** - This component draws the hangman itself.  It uses a combination of relative and absolute positioning to draw the picture, and with dynamic drawing of the hangman depending on how many letters you guess wrong.

**guesswords.tsx** - This renders the lettering of the word to be guessed.  Initially all the letters are hidden, as you guess each letter correctly the letter(s) will become visible here.

**keyboard.tsx** - This component draws the alphabet letters to be clicked and guessed.  Once you have either guessed all the letters correctly, or do not guess the word by the time hangman is drawn, the game is over and all the keys are grayed out.

**words.ts** - This is the file that contains all the words that can be used to play hangman.

## Checking it out
You are welcome to check it out and give me feedback.  I use yarn as its package manager.

    $ yarn
    $ yarn dev
