let userScore = 0;
let computerScore = 0;
let computerChoice;
let userChoice;
let msg = document.querySelector("#msg")
let userSc = document.querySelector("#user-score");
let compSc = document.querySelector("#computer-score");

function comp(){
    let num = Math.floor(Math.random() * 3);
    if(num == 0){
        return "rock";
    }
    else if(num == 1){
        return "paper";
    }
    else if(num == 2){
        return "scissor"
    }
}

function ShowWinner(userWin){
    if(userWin){
        msg.innerText = `You win! ${userChoice} beats ${computerChoice}`;
        msg.style.backgroundColor = "green";
        userScore += 1
        userSc.innerText = `${userScore}`
    }
    else{
        msg.innerText = `You lose! ${computerChoice} beats ${userChoice}`;
        msg.style.backgroundColor = "red";
        computerScore += 1
        compSc.innerText = `${computerScore}`
    }
}

function playGame(computerChoice,userChoice){
    if(userChoice === computerChoice){
        msg.innerText = "Draw Game";
        msg.style.backgroundColor = "#081b31";
    }
    else{
        let userWin = true;
        if(userChoice === "rock"){
            userWin = computerChoice === "paper"? false: true;
        }
        else if(userChoice === "paper"){
            userWin = computerChoice === "scissors"? false:true;
        }
        else if(userChoice === "scissor"){
            userWin = computerChoice === "rock"? false:true;
        }
        ShowWinner(userWin);
    }
}

const choices = document.querySelectorAll(".choice");

choices.forEach((choice) => {
    choice.addEventListener("click",(e)=>{
        computerChoice = comp();
        userChoice = choice.id;
        playGame(computerChoice,userChoice);
    })
})