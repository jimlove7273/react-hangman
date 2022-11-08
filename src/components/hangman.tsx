import React from 'react'

const Head = () => {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "50px",
                width: "75px",
                height: "75px",
                borderRadius: "100%",
                border: "10px solid #000",
                transform: "translateX(130px)"
            }}></div>
        </>
    )
}

const Torso = () => {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "120px",
                width: "10px",
                height: "110px",
                backgroundColor: "#000",
                transform: "translateX(130px)"
            }}></div>
        </>
    )
}

const Rightarm = () => {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "130px",
                width: "90px",
                height: "10px",
                backgroundColor: "#000",
                transform: "translateX(162px) rotate(-45deg)"
            }}></div>
        </>
    )
}

const Leftarm = () => {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "130px",
                width: "90px",
                height: "10px",
                backgroundColor: "#000",
                transform: "translateX(96px) rotate(45deg)"
            }}></div>
        </>
    )
}

const Rightleg = () => {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "250px",
                width: "90px",
                height: "10px",
                backgroundColor: "#000",
                transform: "translateX(163px) rotate(45deg)"
            }}></div>
        </>
    )
}

const Leftleg = () => {
    return (
        <>
            <div style={{
                position: "absolute",
                top: "250px",
                width: "90px",
                height: "10px",
                backgroundColor: "#000",
                transform: "translateX(96px) rotate(-45deg)"
            }}></div>
        </>
    )
}

type wrongLetterProp = {
    wrongLetters: string[]
}

const Hangman = ({ wrongLetters }: wrongLetterProp) => {

    // let hangmanParts = ["Head", "Torso", "Rightarm", "Leftarm", "Rightleg", "Leftleg"]
    // let DynamicComponent = hangmanParts[0];

    return (
        <div style={{ position: "relative", display: "flex", height: "450px", justifyContent: "center" }}>


            {wrongLetters.length == 1 && <Head />}
            {wrongLetters.length == 2 && <><Head /><Torso /></>}
            {wrongLetters.length == 3 && <><Head /><Torso /><Rightarm /></>}
            {wrongLetters.length == 4 && <><Head /><Torso /><Rightarm /><Leftarm /></>}
            {wrongLetters.length == 5 && <><Head /><Torso /><Rightarm /><Leftarm /><Rightleg /></>}
            {wrongLetters.length == 6 && <><Head /><Torso /><Rightarm /><Leftarm /><Rightleg /><Leftleg /></>}


            <div style={{
                position: "absolute",
                top: "10px",
                width: "10px",
                height: "50px",
                backgroundColor: "#000",
                transform: "translateX(130px)"
            }}></div>
            <div style={{
                position: "absolute",
                top: "10px",
                width: "130px",
                height: "10px",
                backgroundColor: "#000",
                transform: "translateX(60px)"
            }}></div>
            <div style={{
                position: "absolute",
                top: "10px",
                width: "10px",
                height: "400px",
                backgroundColor: "#000"
            }}></div>
            <div style={{
                position: "absolute",
                top: "400px",
                width: "300px",
                height: "10px",
                backgroundColor: "#000"
            }}></div>

        </div>
    )
}

export default Hangman