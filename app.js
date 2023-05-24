//function getComputerChoice return either rock paper scissors
function getComputerChoice() {
    let choice = Math.floor(Math.random()*3);
    switch (choice) {
        case 0: 
            choice = "rock";
            break;
        case 1: 
            choice = "scissors";
            break;
        case 2:
            choice = "paper";
            break;
    }
    return choice
}

console.log(getComputerChoice());
