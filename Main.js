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

humanScore = 0;
computerScore = 0;

let humanDecision = getHumanChoice().toLowerCase();
let computerDecision = getComputerChoice().toLowerCase();

if(humanDecision === "rock" && computerDecision === "paper"){
    computerScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
else if(humanDecision === "paper" && computerDecision === "scissor"){
    computerScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
else if(humanDecision === "scissor" && computerDecision === "rock"){
    computerScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
else if(humanDecision === computerDecision){
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
else{
    humanScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
