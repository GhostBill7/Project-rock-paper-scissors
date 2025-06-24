function getComputerChoice(){
    const random = Math.floor(Math.random() * 3) + 1;

    if(random === 1){
        return "Rock";
    }
    else if(random === 2){
        return "Paper";
    }
    else if(random === 3){
        return "Scissors";
    }
    
}

function getHumanChoice(){
    const choice = window.prompt("Rock, Paper, Scissors");

    if(choice === "Rock"){
        return "Rock";
    }
    else if(choice === "Paper"){
        return "Paper";
    }
    else if(choice === "Scissors"){
        return "Scissors";
    }
}