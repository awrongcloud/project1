//playerScore and computerScore to keep track of score
let pScore = 0;
let cScore = 0;

//DOM Variables
let rock = document.querySelector("#rock");
let paper = document.querySelector("#paper");
let scissors = document.querySelector("#scissors");

let score = document.querySelector('#score');
let pmessage = document.querySelector('#p-message');
let cmessage = document.querySelector('#c-message');

let winner = document.querySelector('#winner-result');
let scoreMessage = document.querySelector('#score-message');

let restart_btn = document.querySelector('#restart-btn');

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
let result = function(){
    if (pScore === 5){
        winner.textContent = (`Player wins with score of ${pScore}`);
      
        rock.setAttribute('disabled',1);
        paper.setAttribute('disabled',1);
        scissors.setAttribute('disabled',1);
        
        document.querySelector('#restart-btn').style.display = "block";
      
    } else if (cScore === 5) {
        winner.textContent = (`Computer wins with score of ${cScore}`);
    
        rock.setAttribute('disabled',1);
        paper.setAttribute('disabled',1);
        scissors.setAttribute('disabled',1);
      
        document.querySelector('#restart-btn').style.display = "block";
    }   
}

//resets entire game
let restart = () => {
    pScore = 0;
    cScore = 0;
    score.textContent = `${pScore} : ${cScore}`;
    pmessage.textContent = " ";
    cmessage.textContent = " ";
    scoreMessage.textContent = " ";
    winner.textContent = " ";
    document.querySelector('#restart-btn').style.display = "none";
    document.querySelector("#rock").disabled=false;
    document.querySelector("#paper").disabled=false;
    document.querySelector("#scissors").disabled=false;
}

let game = (choice) => {
  let playerSelection = choice;
  let computerSelection = getComputerChoice();

    let ptask = document.createElement('div');
    let ctask = document.createElement('div');

    ptask.innerText = `${playerSelection}`;
    ctask.innerText = `${computerSelection}`;
    
    pmessage.appendChild(ptask);
    cmessage.appendChild(ctask);
    
    playRound(playerSelection,computerSelection);
    score.textContent = `${pScore} : ${cScore}`;
    result();
}

//EventListeners
restart_btn.addEventListener("click", reset_fx);

rock.addEventListener("click", () => {game("Rock")});

paper.addEventListener("click", () => {game("Paper")});

scissors.addEventListener("click", () => {game("Scissors")});
   






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