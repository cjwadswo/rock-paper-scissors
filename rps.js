const roundResults = document.querySelector('.results');
const playerScore = document.querySelector('.playerScore');
const computerScore = document.querySelector('.computerScore');
const playButtons = document.querySelector('.playButtons')
const rockBtn = document.querySelector('.rock');
const paperBtn = document.querySelector('.paper');
const scissorsBtn = document.querySelector('.scissors');
const endResults = document.querySelector('.endResults');
let playerChoice = 0;
let playerRoundsWon = 0;
let computerRoundsWon = 0;


rockBtn.addEventListener('click', () => play(1));
paperBtn.addEventListener('click', () => play(2));
scissorsBtn.addEventListener('click', () => play(3));


//Get computer's choice
function getComputerChoice(){
    let choice = Math.floor((Math.random()*3)) + 1;
    return choice;
}

/* 1 is Rock
   2 is Paper
   3 is Scissors*/
function computerWinner(playerChoice, computerChoice){
    //If player chose Rock
    if(playerChoice == 1){

        //Check to see if the computer also chose Rock and console.log that it was tie
        if(computerChoice == 1){

            return 0;
        }
        //Check to see if the computer chose Paper and console.log that the computer won. 
        else if( computerChoice == 2){
            return -1;
        }
        //Check is the computer chose Scissors and console.log that the user has won.
        else{
            return 1;
        }
    } 
    //If player chose Paper
    else if (playerChoice == 2) {
        //Check to see if the computer chose Rock the player won
        if(computerChoice == 1){

            return 1;
        }
        //Check to see if the computer chose Paper and console.log that it was a tie
        else if( computerChoice == 2){
            return 0;
        }
        //Check is the computer chose Scissors and console.log that the user has won.
        else{
            return -1;
        }
    }
    //Else the player had choosen scissors
    else {
        //Check to see if the computer has Rock and console.log that the computer has won
        if(computerChoice == 1){

            return -1;1
        }
        //Check to see if the computer chose Paper and console.log that the user has won.
        else if( computerChoice == 2){
            return 1;
        }
        //Check is the computer chose Scissors and console.log that it was a tie.
        else{
            return 0;
        }
    }

}

function play(playersChoice){
    if(playerRoundsWon == 4 || computerRoundsWon == 4){
        hidePlayButtons();
        if(playerRoundsWon == 4){
            //Display player won
            endResults.textContent = "Congrats! You won!"
        }
        else
        {
            //display computer won
            endResults.textContent = "You Lost! :("
        }
    }
    else {
        let winner;
        winner = computerWinner(playersChoice, getComputerChoice());
        console.log(winner);
        if ( winner == 1 ) {
            playerRoundsWon++;
            playerScore.textContent = playerRoundsWon; 
            roundResults.textContent = 'The Player Won!';
        }
        else if (winner == -1) {
            computerRoundsWon++;
            computerScore.textContent = computerRoundsWon;
            roundResults.textContent = 'The Computer Won!';
        }
        else {
            //tie
            roundResults.textContent = 'Tie!';
        }
        console.log("Player: "+ playerRoundsWon + " Computer: " +computerRoundsWon);
    }
    
}

function hidePlayButtons(){
    console.log("HIDE!");
    playButtons.style.display = "none";
}


