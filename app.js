//return rock paper scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0: 
            choice = "Rock";
            break;
        case 1: 
            choice = "Scissors";
            break;
        case 2:
            choice = "Paper";
            break;
    }
    return choice;
}

//returns winner
function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        return "You lose! Scissors beats Paper"; 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Rock" || (playerSelection === "Paper" && computerSelection === "Paper") || (playerSelection === "Scissors" && computerSelection === "Scissors")){
        return "Tie!";
    }
}


const playerSelection = prompt('Enter rock paper or scissors');
const computerSelection = getComputerChoice();
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));