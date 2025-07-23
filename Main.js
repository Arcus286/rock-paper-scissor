let humanScore = 0;
let computerScore = 0;

function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
        return "rock";
    }
    else if(num === 1){
        return "paper";
    }
    else{
        return "scissor";
    }
}

function getHumanChoice(){
    return prompt("Choose Rock or Paper or Scissor: ");
}

function playRound(humanDecision,computerDecision){
    if(humanDecision === "rock" && computerDecision === "paper"){
        computerScore++;
    }
    else if(humanDecision === "paper" && computerDecision === "scissor"){
        computerScore++;
    }
    else if(humanDecision === "scissor" && computerDecision === "rock"){
        computerScore++;
    }
    else if(humanDecision === computerDecision){
        //tie no score change
    }
    else{
        humanScore++;
    }
}

function playGame(){
    for(let i = 1;i<=5;i++){
        let humanDecision = getHumanChoice().toLowerCase();
        let computerDecision = getComputerChoice();
        playRound(humanDecision,computerDecision);
    }
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}

playGame();
if(humanScore > computerScore){
    console.log(`The user won with ${humanScore} points`);
}
else{
    console.log(`The computer won with ${computerScore} points`);
}