//Get input from player to select Rock, paper, or scissors.
function getPlayerChoice(){
    let choice = parseInt(prompt("Press 1 for Rock\nPress 2 for paper\nPress 3 for Scissors"));
    if( !(choice > 0 && choice < 4) ){
        console.log(choice);
        alert("You entered an invalid choice. Click okay to try again");
        getPlayerChoice();
    }
    console.log("You have choosen "+ choice);
    return choice;
}

//Get computer's choice
function getComputerChoice(){
    let choice = Math.floor((Math.random()*3)) + 1;
    console.log("The computer has choosen " + choice);
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

            console.log("Its a tie!");
        }
        //Check to see if the computer chose Paper and console.log that the computer won. 
        else if( computerChoice == 2){
            console.log("The computer won!");
        }
        //Check is the computer chose Scissors and console.log that the user has won.
        else{
            console.log("You have won!");
        }
    } 
    //If player chose Paper
    else if (playerChoice == 2) {
        //Check to see if the computer chose Rock the player won
        if(computerChoice == 1){

            console.log("You have won!");
        }
        //Check to see if the computer chose Paper and console.log that it was a tie
        else if( computerChoice == 2){
            console.log("Its a tie!");
        }
        //Check is the computer chose Scissors and console.log that the user has won.
        else{
            console.log("The computer won!");
        }
    }
    //Else the player had choosen scissors
    else {
        //Check to see if the computer has Rock and console.log that the computer has won
        if(computerChoice == 1){

            console.log("The computer won!");
        }
        //Check to see if the computer chose Paper and console.log that the user has won.
        else if( computerChoice == 2){
            console.log("You won!");
        }
        //Check is the computer chose Scissors and console.log that it was a tie.
        else{
            console.log("Its a tie!");
        }
    }

}

let playerChoice = getPlayerChoice();
let computerChoice = getComputerChoice();
computerWinner(playerChoice,computerChoice);



