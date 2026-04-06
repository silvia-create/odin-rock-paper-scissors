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

function playGame(){
    let humanScore = 0;
    let computerScore  = 0;

    function playRound(humanChoice,computerChoice){     
        humanChoice = humanChoice.toLowerCase();
        if (humanChoice == 'rock'){
            if(computerChoice == 'rock'){
                result.textContent = "Tied.";
            } else if(computerChoice == 'paper'){
                computerScore++;
                result.textContent = "You lose! Paper beats Rock.";
            } else if(computerChoice == 'scissors'){
                humanScore++;
                result.textContent ="You win! Rock beats Scissors.";
            }
        } else if (humanChoice == 'paper'){
            if(computerChoice == 'paper'){
                result.textContent ="Tied.";
            } else if(computerChoice == 'rock'){
                humanScore++;
                result.textContent ="You win! Paper beats Rock.";
            } else if(computerChoice == 'scissors'){
                computerScore++;
                result.textContent ="You lose! Scissors beat Paper.";
            }
        } else if (humanChoice == 'scissors'){
            if(computerChoice == 'scissors'){
                result.textContent ="Tied.";
            } else if(computerChoice == 'rock'){
                computerScore++;
                result.textContent ="You lose! Rock beats Scissors.";
            } else if(computerChoice == 'paper'){
                humanScore++;
                result.textContent ="You win! Scissors beat Paper.";
            }
        }
        score.textContent =("human's score is " + humanScore + " || " + "computer's score is " + computerScore);

        if (humanScore === 5 || computerScore === 5){
            if (humanScore > computerScore){
                winner.textContent ="You're the winner!";
            } else if(humanScore < computerScore){
                winner.textContent ="Computer wins the game.";
            } else{
                winner.textContent ="It's a tie.";
            } 
            rock.disabled = true;   
            paper.disabled = true;
            scissors.disabled = true;
        }
    }
    
    const rock = document.getElementById("rock");
    const paper = document.getElementById("paper");
    const scissors = document.getElementById("scissors");
    rock.addEventListener("click", () => playRound
    ("rock",getComputerChoice()));
    paper.addEventListener("click", () => playRound("paper", getComputerChoice()));
    scissors.addEventListener("click", () => playRound("scissors", getComputerChoice()));

    const container = document.querySelector("div");
    const result = document.createElement("p");
    const score = document.createElement("p");
    const winner = document.createElement("p");
    container.appendChild(result);
    container.appendChild(score);
    container.appendChild(winner);    
}
playGame();
