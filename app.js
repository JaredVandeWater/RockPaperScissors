let playerChoice = null
let compOptions = ["Rock", "Paper", "Scissors"]
let compChoice = compOptions[0]

function playerChooses(choice) {
    playerChoice = choice
    document.getElementById("player-chose-text").innerText = choice
    computerPlays()
}

function computerPlays() {
    compChoice = compOptions[Math.floor(Math.random() * (compOptions.length))]
    document.getElementById("comp-chose-text").innerText = `${compChoice}`

    // change player and then comp images
    document.getElementById("playerGlove").src = `./assets/${playerChoice.toLowerCase()}.png`
    document.getElementById("compGlove").src = `./assets/${compChoice.toLowerCase()}.png`

    if (playerChoice === compChoice) {
        document.getElementById("result").innerText = `Tie!`
    } else {

        switch (playerChoice + " vs " + compChoice) {

            case "Rock vs Scissors":
            case "Paper vs Rock":
            case "Scissors vs Paper":

                document.getElementById("result").innerText = `You Win!`
                break

            default: document.getElementById("result").innerText = `You Lose!`
        }
    }
}





