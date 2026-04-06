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

function getHumanChoice(){
    let humanChoice = prompt("What's your choice?");
    return humanChoice;
}

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
    
    playRound(humanSelection1, computerSelection1);
    
    let humanSelection2 = getHumanChoice();
    let computerSelection2 = getComputerChoice();
    
    playRound(humanSelection2,computerSelection2);

    let humanSelection3 = getHumanChoice();
    let computerSelection3 = getComputerChoice();

    playRound(humanSelection3,computerSelection3);

    let humanSelection4 = getHumanChoice();
    let computerSelection4 = getComputerChoice();

    playRound(humanSelection4,computerSelection4);

    let humanSelection5 = getHumanChoice();
    let computerSelection5 = getComputerChoice();
   
    playRound(humanSelection5,computerSelection5);
    
    if (humanScore > computerScore){
        alert("You're the winner!");
    } else if(humanScore < computerScore){
        alert("Computer wins the game.")
    } else{
        alert("It's a tie.")
    }
}
playGame();
