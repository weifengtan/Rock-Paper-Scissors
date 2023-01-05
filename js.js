let globalVar = 0; 
let player_winnings = 0; 
let computer_winnings = 0; 
let winner_display = 'VS';  

const right_side_number = document.querySelector('div.right-side-number'); 
const left_side_number = document.querySelector('div.left-side-number'); 
const middle_content = document.querySelector('div.middle-content'); 

function getComputerChoice() {
    randomInt = Math.floor(Math.random() * 3) + 1;
    if(randomInt == 1){
        return "Rock-button";
    }
    else if (randomInt == 2){
        return "Scissor-button";
    }
    else{
        return "Paper"; 
    }
}

function winChecker(playerChoice, computerChoice){
    if (playerChoice == 'rock' && computerChoice == 'scissor'){
        return 1; 
    }
    else if (playerChoice == 'rock' && computerChoice == 'paper'){
        return 2; 
    }
    else if (playerChoice == 'rock' && computerChoice == 'rock'){
        return 3; 
    }
    else if (playerChoice == 'paper' && computerChoice == 'rock'){
        return 1; 
    }
    else if (playerChoice == 'paper' && computerChoice == 'scissor'){
        return 2;
    }
    else if (playerChoice == 'paper' && computerChoice == 'paper'){
        return 3; 
    }
    else if (playerChoice == 'scissor' && computerChoice == 'rock'){
        return 2;
    }
    else if (playerChoice == 'scissor' && computerChoice == 'paper'){
        return 1; 
    }
    else if (playerChoice == 'scissor' && computerChoice == 'scissor'){
        return 3; 
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

    if(playerSelection == "Rock-button"){
        playerNumber = 'rock'; 
    }
    else if (playerSelection == "Scissor-button"){
        playerNumber = 'scissor'; 
    }
    else{
        playerNumber = 'paper'; 
    }

    if(computerSelection == "Rock-button"){
        computerNumber = 'rock'; 
    }
    else if(computerSelection == "Scissor-button"){
        computerNumber = 'scissor'; 
    }
    else{
        computerNumber = 'paper'; 
    }
    console.log(`this is the player number ${playerNumber}`);
    console.log(`this is the computer number ${computerNumber}`);

    winner = winChecker(playerNumber, computerNumber); 

    if (winner == 1){
        console.log (`You win! ${playerSelection} beats ${computerSelection}!`)
        globalVar = (`player`); 
    }
    else if (winner == 3){
        console.log (`It's a tie! ${computerSelection} ties with ${playerSelection}!`);
        globalVar = ('tie'); 
    }
    else {
        console.log (`You lose! ${computerSelection} beats ${playerSelection}!`);
        globalVar = ('computer'); 
    }   

    if (computer_winnings == 5){
    winner_display = "COMPUTER WINS"
    middle_content.innerHTML = `${winner_display}`
    computer_winnings = 0; 
    player_winnings = 0; 
    right_side_number.innerHTML = `${computer_winnings}`
    left_side_number.innerHTML = `${player_winnings}`
    return; 
    }
    else if (player_winnings == 5){
    winner_display = "PLAYER WINS"
    middle_content.innerHTML = `${winner_display}`
    computer_winnings = 0; 
    player_winnings = 0; 
    right_side_number.innerHTML = `${computer_winnings}`
    left_side_number.innerHTML = `${player_winnings}`
    return; 
    }

    if (globalVar == 'player') {
        player_winnings++; 
        right_side_number.innerHTML = `${player_winnings}`;
        winner_display = `PLAYER POINT`; 
        middle_content.innerHTML = `${winner_display}`;
        return;
    }
    else if (globalVar == 'computer') {
        computer_winnings++;
        left_side_number.innerHTML = `${computer_winnings}`; 
        winner_display = `COMPUTER POINT`; 
        middle_content.innerHTML = `${winner_display}`; 
        return;
    }
    else {
        winner_display = `TIE`; 
        middle_content.innerHTML = `${winner_display}`; 
        return;
    }
}

// This is when the program actually starts
const rpsButtons = document.querySelectorAll('div.buttons button');
rpsButtons.forEach((button) => {
button.addEventListener('click', () => playRound(button.className));
});





