function getComputerChoice(){
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
        return "Rock";
    }
    else if(num === 1){
        return "Paper";
    }
    else{
        return "Scissor";
    }
}

function getHumanChoice(){
    return prompt("Choose Rock or Paper or Scissor: ");
}

humanScore = 0;
computerScore = 0;

if(getHumanChoice().toLowerCase() === getComputerChoice().toLowerCase()){
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}

if(getHumanChoice().toLowerCase() === "rock" && getComputerChoice().toLowerCase() === "paper"){
    computerScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
else if(getHumanChoice().toLowerCase() === "paper" && getComputerChoice().toLowerCase() === "scissor"){
    computerScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
else if(getHumanChoice().toLowerCase() === "scissor" && getComputerChoice().toLowerCase() === "rock"){
    computerScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
else{
    humanScore++;
    console.log(`Human: ${humanScore} and Computer: ${computerScore}`);
}
