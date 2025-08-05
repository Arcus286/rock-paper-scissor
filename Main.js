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
    el1.innerHTML = `Computer: ${computerScore} Player: ${humanScore}`;
}

let el = document.querySelector("#result");
let el1 = document.querySelector("#score")
let body = document.querySelector("body");

let menu = document.querySelector("#buttons");
menu.addEventListener("click",(event)=>{
    let target = event.target;
    let humanDecision;
    let computerDecision = getComputerChoice();

    switch(target.id){
        case "rock":
            humanDecision = "rock";
            playRound(humanDecision,computerDecision);
            break;
        case "paper":
            humanDecision = "paper";
            playRound(humanDecision,computerDecision);
            break;
        case "scissor":
            humanDecision = "scissor";
            playRound(humanDecision,computerDecision);
            break;
    }
    if(computerScore == 5 ||  humanScore == 5){
        let btn = document.querySelectorAll("button");
        btn.forEach((button)=>{
            button.disabled = true;
        })
        if(computerScore > humanScore){
            // console.log("The computer wins");
            el.innerHTML = "<h3>The computer wins</h3>";
        }
        else{
            el.innerHTML = "<h3>The user wins</h3>";
        }  
    }
})