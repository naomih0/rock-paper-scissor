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
        // return "You win! Rock beats Scissor!";
        return "Win";
    }
    else if (lowerplayer === "paper" && computerSelection === "rock") {
        // return "You win! Paper beats Rock!";
        return "Win";
    }
    else if (lowerplayer === "scissor" && computerSelection === "paper") {
        // return "You win! Scissor beats Paper!";
        return "Win";
    }
    // Computer Wins
    else if (computerSelection === "rock" && lowerplayer === "scissor") {
        // return "You Lose.... Rock beats Scissor.";
        return "Lose";
    }
    else if (computerSelection === "paper" && lowerplayer === "rock") {
        // return "You Lose.... Paper beats Rock!";
        return "Lose";
    }
    else if (computerSelection === "scissor" && lowerplayer === "paper") {
        // return "You Lose.... Scissor beats Paper!";
        return "Lose";
    }
    // Tie
    else if (computerSelection === lowerplayer) {
        // return `It is a tie! You both pick ${computerSelection}!`
        return "Tie";
    }
    // Invalid Input
    else {
        return "Invalid Input..."
    }
};

function playGame() {
    playerWins = 0

    // For loop that plays 5 rounds
    for (let i = 0; i < 5; i++) {
        let computerSelection = getComputerChoice(); // Generates the computer choice
        let playerSelection = "paperr"; // Gets player choice
        const results = playRound(playerSelection, computerSelection) // Play a round w/ the selections

        // Increment by 1 if won
        if (results === "Win") {
            playerWins += 1;
        }

        // Breaks the loop if input is invalid
        else if (results === "Invalid Input...") {
            console.log("Invalid Input!")
            break; 
        } 

        // Wins if the player won at least 3 games
        if (playerWins >= 3) {
            console.log("Wins:", playerWins);
            return "You won the game!";
        }
    }
    // Loses if less then 3 wins
    console.log("Wins:", playerWins);
    return "You lost the game...."
}

// let playerSelection = prompt("rock, paper, or scissor?")

console.log(playGame())

