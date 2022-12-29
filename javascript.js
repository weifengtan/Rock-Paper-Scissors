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
    if (playerChoice == 1 && computerChoice != 3){
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

function playRound(playerSelection, computerSelection){
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    playerSelection = playerSelection.replace(playerSelection.charAt(0), playerSelection.charAt(0).toUpperCase()); 
    computerSelection = computerSelection.replace(computerSelection.charAt(0), computerSelection.charAt(0).toUpperCase());

    let playerNumber;
    let computerNumber; 

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
    console.log(playerNumber);
    console.log(computerNumber);

    if (playerNumber < computerNumber){
        return (`You win! ${playerSelection} beats ${computerSelection}!`);
    }
    else if (playerNumber == computerNumber){
        return (`It's a tie! ${computerSelection} ties with ${playerSelection}!`);
    }
    else {
        return (`You lose! ${computerSelection} beats ${playerSelection}!`);
    }
}

function game(){
    let result; 
    let playerWins = 0; 
    let computerWins = 0;  
    for (let i = 0; i < 5; i++){
        let playerSelect = prompt (`Choose Rock Paper or Scissors!`)
        let computerSelect = getComputerChoice(); 
        result = playRound(playerSelect, computerSelect);
        if (result.includes("win")){
            console.log(result);
            alert(result);
            playerWins++;
        }
        else if (result.includes("lose")){
            console.log(result);
            alert(result);
            computerWins++;
        }
        else {
            console.log(result);
            alert(result);
        }
    }

    alert (`You won ${playerWins} rounds, Computer won ${computerWins}rounds`);
    console.log(`You won ${playerWins} rounds, Computer won ${computerWins} rounds`);

    if (playerWins > computerWins){
        alert(`You win this game!`);
        return console.log(`You win this game!`);
    }
    else {
        alert(`The computer wins this game!`);
        return console.log(`The computer wins this game!`); 
    }
}

game(); 
