// plan:
// We don't need a GUI.
// We hava one of 'rock-paper-scissors' as inputs and we get it from user.
// Each round we keep track of the scores and declare the winner.

//pseudocode:
// FUNCTION getComputerChoice
//     DECLARE randomNumber = RANDOM value between 0 and 1
//     DECLARE computerChoice

//     IF randomNumber < 0.3 THEN 
//         SET computerChoice TO "rock"
//     ELSE IF randomNumber < 0.6 THEN
//         SET computerChoice TO "paper"
//     ELSE 
//         SET computerChoice TO "scissors"
//     END IF

//     RETURN computerChoice
// ENDFUNCTION
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

// FUNCTION getHumanChoice
//     DECLARE humanChoice
//     INPUT "What's your choice?" TO humanChoice
//     RETURN humanChoice
// ENDFUNCTION
function getHumanChoice(){
    let humanChoice = prompt("What's your choice?");
    return humanChoice;
}

// FUNCTION playGame
//     //Initialize scores
//     SET humanScore TO 0
//     SET computerScore TO 0

//     //Define the nested logic for a single round
//     FUNCTION playRound(humanChoice, computerChoice)
//         SET humanChoice TO lowercase version of humanChoice
        
//         IF humanChoice EQUALS computerChoice THEN
//             DISPLAY "Tied."
//         ELSE IF (humanChoice is "rock" AND computerChoice is "paper") OR (humanChoice is "paper" AND computerChoice is "scissors") OR (humanChoice is "scissors" AND computerChoice is "rock") THEN
//             SET computerScore TO computerScore+1
//             DISPLAY "You lose!"
//         ELSE
//             SET humanScore TO humanScore+1
//             DISPLAY "You win!"
//         END IF
//     ENDFUNCTION

//     //Use a LOOP construct to repeat the game 5 times
//     FOR round FROM 1 TO 5
//         DECLARE humanSelection = CALL getHumanChoice
//         DECLARE computerSelection = CALL getComputerChoice
//         CALL playRound(humanSelection,computerSelection)
//     END FOR

//     //Final result logic 
//     If humanScore > computerScore THEN
//         DISPLAY "You're the winner!"
//     ELSE if humanScore < computerScore THEN
//         DISPLAY "Computer wins the game."
//     ELSE 
//         DISPLAY "It's a tie."
//     ENDIF
// ENDFUNCTION

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
