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
        return "Win";
    }
    else if (lowerplayer === "paper" && computerSelection === "rock") {
        return "Win";
    }
    else if (lowerplayer === "scissor" && computerSelection === "paper") {
        return "Win";
    }
    // Computer Wins
    else if (computerSelection === "rock" && lowerplayer === "scissor") {
        return "Lose";
    }
    else if (computerSelection === "paper" && lowerplayer === "rock") {
        return "Lose";
    }
    else if (computerSelection === "scissor" && lowerplayer === "paper") {
        return "Lose";
    }
    // Tie
    else if (computerSelection === lowerplayer) {
        return "Tie";
    }
    // Invalid Input
    else {
        return "Invalid Input...";
    }
};


// Rock Button || plays a round when click
const rockButton = document.createElement('button');

rockButton.addEventListener('click', function() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'rock';

    const result = playRound(playerSelection, computerSelection);
    resultsPrint(result, 'rock');
});

rockButton.textContent = 'rock';
document.body.appendChild(rockButton);


// Paper Button || plays a round when click
const paperButton = document.createElement('button');

paperButton.addEventListener('click', function() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'paper';

    const result = playRound(playerSelection, computerSelection);
    resultsPrint(result, 'paper');
})

paperButton.textContent = 'paper';
document.body.appendChild(paperButton);


// Scissor Button || plays a round when click
const scissorButton = document.createElement('button');

scissorButton.addEventListener('click', function() {
    let computerSelection = getComputerChoice();
    let playerSelection = 'scissor';
    const result = playRound(playerSelection, computerSelection);
    resultsPrint(result, 'scissor');
})

scissorButton.textContent = 'scissor';
document.body.appendChild(scissorButton);


// Results Display
const divResults = document.createElement('div');
divResults.textContent = '';
document.body.appendChild(divResults);


function resultsPrint(result, type) {
    // resets to nothing when new game is played
    winnerText.textContent = '';

    if (type === 'scissor') {
        if (result === "Win") {
            divResults.textContent = 'Results: You win! Scissor beats Paper!';
        }
        else if (result === "Lose") {
            divResults.textContent = 'Results: You Lose.... Rock beats Scissor!';
        }
        else if (result === "Tie") {
            divResults.textContent = 'Results: It is a tie!';
        }
    }

    else if (type === 'paper') {
        if (result === "Win") {
            divResults.textContent = 'Results: You win! Paper beats Rock!';
        }
        else if (result === "Lose") {
            divResults.textContent = 'Results: You Lose.... Scissor beats Paper!';
        }
        else if (result === "Tie") {
            divResults.textContent = 'Results: It is a tie!';
        }
    }

    else if (type === 'rock') {
        if (result === "Win") {
            divResults.textContent = 'Results: You win! Rock beats Scissor!';
        }
        else if (result === "Lose") {
            divResults.textContent = 'Results: You Lose.... Paper beats Rock!';
        }
        else if (result === "Tie") {
            divResults.textContent = 'Results: It is a tie!';
        }
    }  

    // every round calls keepScore to add up points
    keepScore(result);
};


// Player Score
const pScore = document.createElement('p');
pScore.textContent = '';
document.body.appendChild(pScore);

// Computer Score
const cScore = document.createElement('p');
cScore.textContent = '';
document.body.appendChild(cScore);

// Winner Text Display
const winnerText = document.createElement('p');
winnerText.textContent = '';
document.body.appendChild(winnerText);


let playerWins = 0;
let computerWins = 0;
function keepScore(result) {

    if (result === "Win") {
        playerWins += 1;
    }
    else if (result === "Lose") {
        computerWins += 1;
    }

    pScore.textContent = 'Player Score:' + playerWins;
    cScore.textContent = 'Computer Score:' + computerWins;

    // whoever reaches 5 points first wins the game
    if (playerWins === 5) {
        winnerText.textContent = 'Player Wins! You reach 5 points!';
        playerWins = 0; // resets after every game
        computerWins = 0;
    }
    else if (computerWins === 5) {
        winnerText.textContent = 'You Lost... Computer reach 5 points.';
        playerWins = 0;
        computerWins = 0;
    }
} 


