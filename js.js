function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 3) + 1;
    if(randomInt == 1){
        return "Rock";
    }
    else if (randomInt == 2){
        return "Scissors";
    }
    else{
        return "Paper"; 
    }
}

function winChecker(playerChoice, computerChoice){
    if (playerChoice == 1 && computerChoice != 3 && computerChoice != 1){
        return 1;
    }
    else if (playerChoice == 1 && computerChoice == 3){
        return 2; 
    }
    else if (playerChoice < computerChoice){
        return 1; 
    }
    else if (playerChoice == computerChoice){
        return 3;
    }
    else {
        return 2; 
    }
}

function playRound(playerSelection){
    let computerSelection = getComputerChoice(); 
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase()); 
    computerSelection = computerSelection.replace(computerSelection.charAt(0), computerSelection.charAt(0).toUpperCase());

    let playerNumber;
    let computerNumber;
    let winner; 

    if(playerSelection == "Rock"){
        playerNumber = 1; 
    }
    else if (playerSelection == "Scissors"){
        playerNumber = 2; 
    }
    else{
        playerNumber = 3; 
    }

    if(computerSelection == "Rock"){
        computerNumber = 1; 
    }
    else if(computerSelection == "Scissors"){
        computerNumber = 2; 
    }
    else{
        computerNumber = 3; 
    }
    console.log(`this is the player number ${playerNumber}`);
    console.log(`this is the computer number ${computerNumber}`);

    winner = winChecker(playerNumber, computerNumber);

    if (winner == 1){
        return (`You win! ${playerSelection} beats ${computerSelection}!`);
    }
    else if (winner == 3){
        return (`It's a tie! ${computerSelection} ties with ${playerSelection}!`);
    }
    else {
        return (`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

const rpsButtons = document.querySelectorAll('div.rps-button-container button');
rpsButtons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.className));
});