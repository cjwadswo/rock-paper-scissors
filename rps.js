//Get input from player to select Rock, paper, or scissors.
function getPlayerChoice(){
    let choice = parseInt(prompt("Press 1 for Rock\nPress 2 for paper\nPress 3 for Scissors"));
    if( !(choice > 0 && choice < 4) ){
      //  console.log(choice);
        alert("You entered an invalid choice. Click okay to try again");
        getPlayerChoice();
    }
    //console.log("You have choosen "+ choice);
    return choice;
}

//Get computer's choice
function getComputerChoice(){
    let choice = Math.floor((Math.random()*3)) + 1;
    //console.log("The computer has choosen " + choice);
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

            return -1;
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

function play(){
    //Best of 7
    let playerRoundsWon = 0;
    let computerRoundsWon = 0;
    let winner;
    while(playerRoundsWon < 5 && computerRoundsWon < 5){
        winner = computerWinner(getPlayerChoice(), getComputerChoice());
        console.log(winner);
        if ( winner == 1 ) {
            playerRoundsWon++;
        }
        else if (winner == -1) {
            computerRoundsWon++;
        }
        else {
            //tie
        }
        
        console.log("Player: "+ playerRoundsWon + " Computer: " +computerRoundsWon);
    }

    
}

play();



