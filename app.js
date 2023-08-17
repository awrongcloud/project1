//playerScore and computerScore to keep track of score
let pScore = 0;
let cScore = 0;

//Variables
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let score = document.querySelector('#score');
let pmessage = document.querySelector('#p-message');
let cmessage = document.querySelector('#c-message');

let winner = document.querySelector('#winner-result');
let scoreMessage = document.querySelector('#score-message');

//return Computer choice
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

//returns winner of round 
function playRound(playerSelection, computerSelection){
    if (playerSelection === "Rock" && computerSelection === "Paper"){
        cScore++;
        scoreMessage.innerText = ("You Lose! Paper beats Rock");
    } else if (playerSelection === "Paper" && computerSelection === "Scissors"){
        cScore++;
        scoreMessage.innerText = ("You lose! Scissors beats Paper");
    } else if (playerSelection === "Scissors" && computerSelection === "Rock"){
        cScore++;
        scoreMessage.innerText = ("You lose! Rock beats Scissors");
    } else if (playerSelection === "Paper" && computerSelection === "Rock"){
        pScore++;
        scoreMessage.innerText = ("You Win! Paper beats Rock");
    } else if (playerSelection === "Scissors" && computerSelection === "Paper"){
        pScore++;
        scoreMessage.innerText = ("You Win! Scissors beats Paper");
    } else if (playerSelection === "Rock" && computerSelection === "Scissors"){
        pScore++;
        scoreMessage.innerText = ("You Win! Rock beats Scissors");
    } else if (playerSelection === "Rock" && computerSelection === "Rock" || (playerSelection === "Paper" && computerSelection === "Paper") || (playerSelection === "Scissors" && computerSelection === "Scissors")){
        scoreMessage.innerText = ("Tie!");
    }
}

//return winner/loser stops game after player/computer wins 5 rounds
function result(){
    if (pScore === 5){
        winner.textContent = (`Player wins with score of ${pScore}`);
      
        rock.setAttribute('disabled',1);
        paper.setAttribute('disabled',1);
        scissors.setAttribute('disabled',1);
    } else if (cScore === 5) {
        winner.textContent = (`Computer wins with score of ${cScore}`);
    
        rock.setAttribute('disabled',1);
        paper.setAttribute('disabled',1);
        scissors.setAttribute('disabled',1);
    }
}


rock.addEventListener("click", () => {
    playerSelection = "Rock";
    let computerSelection = getComputerChoice();

    //display player and computer choice
    pmessage.textContent = `${playerSelection}`;
    cmessage.textContent = `${computerSelection}`;

    
    playRound(playerSelection,computerSelection);
    score.textContent = `${pScore} : ${cScore}`;
    result();
   
})

paper.addEventListener("click", () => {
    playerSelection = "Paper";
    let computerSelection = getComputerChoice();
    

    pmessage.textContent = `${playerSelection}`;
    cmessage.textContent = `${computerSelection}`;
    
    playRound(playerSelection,computerSelection);
    score.textContent = `${pScore} : ${cScore}`;
   result();
})

scissors.addEventListener("click", () => {
    playerSelection = "Scissors";
    let computerSelection = getComputerChoice();
    

    pmessage.textContent = `${playerSelection}`;
    cmessage.textContent = `${computerSelection}`;
   
    playRound(playerSelection,computerSelection);
    score.textContent = `${pScore} : ${cScore}`;
    result();
})



/*
//case insensitive allows user to input rock ROCK rOcK
function playerCaseSensitive(word) {
    return word.charAt(0).toUpperCase() + word.slice(1);
}
*/

/*
function game(){
    const playerSelection = prompt('Enter rock paper or scissors');
    const computerSelection = getComputerChoice();
    console.log(`Computer choice: ${computerSelection}`);
    console.log(`Player choice: ${playerCaseSensitive(playerSelection)}`);
    console.log(playRound(playerCaseSensitive(playerSelection), computerSelection));
}*/