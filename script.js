function getComputerChoice(){
    const random = Math.floor(Math.random() * 3) + 1;

    if(random === 1){
        return "rock";
    }
    else if(random === 2){
        return "paper";
    }
    else if(random === 3){
        return "scissors";
    }
    
}

function getHumanChoice(){
    const choice = window.prompt("rock, paper, scissors");

    if(choice === "rock"){
        return "rock";
    }
    else if(choice === "paper"){
        return "paper";
    }
    else if(choice === "scissors"){
        return "scissors";
    }
}



function playGame(){
    function playRound(humanChoice, computerChoice){
    humanChoice = humanChoice.toLowerCase();

    if(humanChoice === "rock" && computerChoice === "rock"){
        console.log("You Tie! Rock ties with Rock");
    }
    else if(humanChoice === "rock" && computerChoice === "paper"){
        console.log("You Lose! Paper beats Rock");
        computerScore++
    }
    else if(humanChoice === "rock" && computerChoice === "scissors"){
        console.log("You Win! Rock beats Scissors");
        humanScore++
    }
    else if(humanChoice === "paper" && computerChoice === "rock"){
        console.log("You Win! Paper beats Rock");
        humanScore++
    }
    else if(humanChoice === "paper" && computerChoice === "paper"){
        console.log("You Tie! Paper Ties with Paper");
    }
    else if(humanChoice === "paper" && computerChoice === "scissors"){
        console.log("You Lose! Scissors beats paper");
        computerScore++
    }
    else if(humanChoice === "scissors" && computerChoice === "rock"){
        console.log("You Lose! Rock beats Scissors");
        computerScore++
    }
    else if(humanChoice === "scissors" && computerChoice === "paper"){
        console.log("You Win! Scissors beats Paper");
        humanScore++
    }
    else if(humanChoice === "scissors" && computerChoice === "scissors"){
        console.log("You Tie! Scissors Ties Scissors");
    }
}

    let humanScore = 0;
    let computerScore = 0;

    
    for (let i = 0; i < 5; i++){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
    }
    
    if (humanScore > computerScore) {
        console.log("You won the game!");
    } else if (computerScore > humanScore) {
        console.log("The computer won the game.");
    } else {
        console.log(`The game is a tie! Final score was: Human score ${humanScore} & Computer score ${computerScore}`);
    }
   
}

playGame();
