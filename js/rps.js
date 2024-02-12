function getComputerChoice() {
    randomNumber = Math.floor(Math.random() * 3)

    if (randomNumber === 0) {
        return "paper";
    }
    else if (randomNumber === 1) {
        return "rock";
    }
    else {
        return "scissor";
    }
};

function playRound(playerSelection, computerSelection) {
    lowerplayer = playerSelection.toLowerCase()
    // Player Wins
    if (lowerplayer === "rock" && computerSelection === "scissor") {
        return "You win! Rock beats Scissor!";
    }
    else if (lowerplayer === "paper" && computerSelection === "rock") {
        return "You win! Paper beats Rock!";
    }
    else if (lowerplayer === "scissor" && computerSelection === "paper") {
        return "You win! Scissor beats Paper!";
    }
    // Computer Wins
    else if (computerSelection === "rock" && lowerplayer === "scissor") {
        return "You Lose.... Rock beats Scissor.";
    }
    else if (computerSelection === "paper" && lowerplayer === "rock") {
        return "You Lose.... Paper beats Rock!";
    }
    else if (computerSelection === "scissor" && lowerplayer === "paper") {
        return "You Lose.... Scissor beats Paper!";
    }
    // Tie
    else if (computerSelection === lowerplayer) {
        return `It is a tie! You both pick ${computerSelection}!`
    }
    // Invalid Input
    else {
        return "Invalid Input..."
    }
};


let computerSelection = getComputerChoice();
let playerSelection = "paper";
// let playerSelection = prompt("rock, paper, or scissor?")

console.log(playRound(playerSelection, computerSelection))