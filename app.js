//playerScore and computerScore
let pScore = 0;
let cScore = 0;

//return Computer choice: rock paper scissors
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
        cScore++;
        return "You Lose! Paper beats Rock";
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        cScore++;
        return "You lose! Scissors beats Paper"; 
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        cScore++;
        return "You lose! Rock beats Scissors";
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        pScore++;
        return "You Win! Paper beats Rock";
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        pScore++;
        return "You Win! Scissors beats Paper";
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        pScore++;
        return "You Win! Rock beats Scissors";
    } else if (playerSelection === "Rock" && computerSelection === "Rock" || (playerSelection === "Paper" && computerSelection === "Paper") || (playerSelection === "Scissors" && computerSelection === "Scissors")){
        return "Tie!";
    }
}

//case insensitive allows user to input rock ROCK rOcK
function playerCaseSensitive(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}


function game(){
    const playerSelection = prompt('Enter rock paper or scissors');
    const computerSelection = getComputerChoice();
    console.log(`Computer choice: ${computerSelection}`);
    console.log(`Player choice: ${playerCaseSensitive(playerSelection)}`);
    console.log(playRound(playerCaseSensitive(playerSelection), computerSelection));
}

//return winner or loser
function result(){
    if (pScore === cScore){
        console.log(`It's a tie! No one wins.`);
    } else if (pScore > cScore){
        console.log(`Player wins with score of ${pScore}`);
    } else {
        console.log(`Computer wins with score of ${cScore}`);
    }
}


function fiveRounds(){
    for (let round = 1; round <=5; round++){
        game();
    }
    result();
}

fiveRounds();
