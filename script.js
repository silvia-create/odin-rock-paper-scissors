// plan:
// We don't need a GUI.
// We hava one of 'rock-paper-scissors' as inputs and we get it from user.
// Each round we keep track of the scores and declare the winner.

//pseudocode:
//Declare a function named 'getComputerChoice' that randomly returns "rock","paper",or "scissors"
//Declare a variable named computerChoice
//Declare a variable named randomNumber and get the value from Math.random()
//If randomNumber >= 0 && randomNumber < 0.3, assign 'rock' to computerChoice
//If randomNumber >= 0.3 && randomNumber < 0.6, assign 'paper' to computerChoice
//Else if, assign 'scissors' to computerChoice
//return computerChoice
function getComputerChoice(){
    let computerChoice = 0;
    let randomNumber = Math.random();
    if(randomNumber >= 0 && randomNumber < 0.3){
        computerChoice = 'rock';
    } else if(randomNumber >= 0.3 && randomNumber < 0.6){
        computerChoice = 'paper';
    } else {
        computerChoice = 'scissors';
    }
    return computerChoice;
}

//Declare a function named getHumanChoice
//Declare a variable named humanChoice
//Use prompt() to get the user's input, assign it to humanChoice
//return humanChoice
function getHumanChoice(){
    let humanChoice = prompt("What's your choice?");
    return humanChoice;
}

//Initialize humanScore and computerScore in the global scope with value of 0.

//Create a function named playRound and take humanChoice and computerChoice as parameters
//Use toLowerCase() to humanChoice to have the case-insensitive value
//If (humanChoice === 'rock')
    //If (computerChoice === 'rock'), log("Tied.")
    //If (computerChoice === 'paper'), computerScore= computerScore+1, log("You lose! Paper beats Rock.")
    //If (computerChoice === 'scissors'), humanScore= humanScore+1, log("You win! Rock beats Scissors.")
//If (humanChoice === 'paper')
    //If (computerChoice === 'paper'), log("Tied.")
    //If (computerChoice === 'rock'), humanScore= humanScore+1, log("You win! Paper beats Rock.")
    //If (computerChoice === 'scissors'), computerScore= computerScore+1, log("You lose! Scissors beat Paper.")
//If (humanChoice === 'scissors')
    //If (computerChoice === 'scissors'), log("Tied.")
    //If (computerChoice === 'rock'), computerScore= computerScore+1, log("You lose! Rock beats Scissors.")
    //If (computerChoice === 'paper'), humanScore= humanScore+1, log("You win! Scissors beat Paper.")

//Create a function named playGame
//Move playRound function and score variables inside(?)
//call playRound 5 times
function playGame(){
    let humanScore = 0;
    let computerScore  = 0;

    function playRound(humanChoice,computerChoice){
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == 'rock'){
            if(computerChoice == 'rock'){
                alert("Tied.")
            } else if(computerChoice == 'paper'){
                computerScore++;
                alert("You lose! Paper beats Rock.")
            } else if(computerChoice == 'scissors'){
                humanScore++;
                alert("You win! Rock beats Scissors.");
            }
        } else if (humanChoice == 'paper'){
            if(computerChoice == 'paper'){
                alert("Tied.")
            } else if(computerChoice == 'rock'){
                humanScore++;
                alert("You win! Paper beats Rock.");
            } else if(computerChoice == 'scissors'){
                computerScore++;
                alert("You lose! Scissors beat Paper.");
            }
        } else if (humanChoice == 'scissors'){
            if(computerChoice == 'scissors'){
                alert("Tied.")
            } else if(computerChoice == 'rock'){
                computerScore++;
                alert("You lose! Rock beats Scissors.");
            } else if(computerChoice == 'paper'){
                humanScore++;
                alert("You win! Scissors beat Paper.");
            }
        }
    }

    let humanSelection1 = getHumanChoice();
    let computerSelection1 = getComputerChoice();
    // console.log(humanSelection1);
    // console.log(computerSelection1); 
    playRound(humanSelection1, computerSelection1);
    // console.log("Score after Round 1: Human " + humanScore + " - Computer " + computerScore);

    let humanSelection2 = getHumanChoice();
    let computerSelection2 = getComputerChoice();
    // console.log(humanSelection2);
    // console.log(computerSelection2);
    playRound(humanSelection2,computerSelection2);
    // console.log("Score after Round 2: Human " + humanScore + " - Computer " + computerScore);

    let humanSelection3 = getHumanChoice();
    let computerSelection3 = getComputerChoice();
    // console.log(humanSelection3);
    // console.log(computerSelection3);
    playRound(humanSelection3,computerSelection3);
    // console.log("Score after Round 3: Human " + humanScore + " - Computer " + computerScore);

    let humanSelection4 = getHumanChoice();
    let computerSelection4 = getComputerChoice();
    // console.log(humanSelection4);
    // console.log(computerSelection4);
    playRound(humanSelection4,computerSelection4);
    // console.log("Score after Round 4: Human " + humanScore + " - Computer " + computerScore);

    let humanSelection5 = getHumanChoice();
    let computerSelection5 = getComputerChoice();
    // console.log(humanSelection5);
    // console.log(computerSelection5);
    playRound(humanSelection5,computerSelection5);
    // console.log("Score after Round 5: Human " + humanScore + " - Computer " + computerScore);
    
    if (humanScore > computerScore){
        alert("You're the winner!");
    } else if(humanScore < computerScore){
        alert("Computer wins the game.")
    } else{
        alert("It's a tie.")
    }
}
playGame();
