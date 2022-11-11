const Head = (
    <div style={{
        position: "absolute",
        top: "50px",
        width: "75px",
        height: "75px",
        borderRadius: "100%",
        border: "10px solid #000",
        transform: "translateX(130px)"
    }} />
)

const Torso = (
    <div style={{
        position: "absolute",
        top: "120px",
        width: "10px",
        height: "110px",
        backgroundColor: "#000",
        transform: "translateX(130px)"
    }} />
)

const Rightarm = (
    <div style={{
        position: "absolute",
        top: "130px",
        width: "90px",
        height: "10px",
        backgroundColor: "#000",
        transform: "translateX(162px) rotate(-45deg)"
    }}></div>
)

const Leftarm = (
    <div style={{
        position: "absolute",
        top: "130px",
        width: "90px",
        height: "10px",
        backgroundColor: "#000",
        transform: "translateX(96px) rotate(45deg)"
    }}></div>
)


const Rightleg = (
    <div style={{
        position: "absolute",
        top: "253px",
        width: "90px",
        height: "10px",
        backgroundColor: "#000",
        transform: "translateX(161px) rotate(45deg)"
    }}></div>
)


const Leftleg = (
    <div style={{
        position: "absolute",
        top: "253px",
        width: "90px",
        height: "10px",
        backgroundColor: "#000",
        transform: "translateX(96px) rotate(-45deg)"
    }}></div>
)


type wrongLetterProp = {
    wrongLetters: string[]
}

const Hangman = ({ wrongLetters }: wrongLetterProp) => {

    const bodyParts = [Head, Torso, Rightarm, Leftarm, Rightleg, Leftleg]

    return (
        <div style={{ position: "relative", display: "flex", height: "450px", justifyContent: "center" }}>
            {bodyParts.slice(0, wrongLetters.length)}
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