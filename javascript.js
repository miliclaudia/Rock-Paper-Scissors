//START FORM
const score = document.querySelector(".score");
const startForm =document.querySelector(".start-form");
const buttons = document.querySelector(".buttons");
const paperBtn = document.querySelector("#paper-bt");
const rockBtn = document.querySelector("#rock-bt");
const scissorsBtn = document.querySelector("#scissors-bt");
const picks = document.querySelector(".picks")
const humanScore = document.querySelector("#human");
const computerScore = document.querySelector("#computer");
const winner = document.querySelector(".winner");
const resetBtn = document.querySelector("#reset-btn");

//Score
humanScore.innerHTML=0;
computerScore.innerHTML=0;

const numInput = document.querySelector('#numInput');
numInput.addEventListener('input', function() {
    let value = parseInt(numInput.value);
    if (isNaN(value)){
        startBtn.disabled = true;
        return;
    } 

    if (numInput.value.trim() === "") {
        startBtn.disabled = true;
        return;
    } else {
        startBtn.disabled = false;
    }
    
    if (value < 0) {
      numInput.value = 0;
    }

    else if (value > 50) {
      numInput.value = 50;
    }
});

numInput.addEventListener('keydown', function(e) {
    if (e.key === "Enter") {
      e.preventDefault(); 
      if (numInput.value.trim() !== "") {
        startBtn.click();
      }
    }
});


let rounds = 0;
const gameResults = document.querySelector("#game-results");

function resetGame(){
   if(rounds === parseInt(numInput.value)-1){
        console.log("game stop");
        paperBtn.classList.add("btn-disabled");
        rockBtn.classList.add("btn-disabled");
        scissorsBtn.classList.add("btn-disabled");

        paperBtn.disabled = true;
        rockBtn.disabled = true;
        scissorsBtn.disabled = true;

        winner.style.display = "flex";

        if(parseInt(humanScore.innerHTML) > parseInt(computerScore.innerHTML)){
            gameResults.innerHTML = "You won!"
        }
        else if(parseInt(humanScore.innerHTML) < parseInt(computerScore.innerHTML)){
            gameResults.innerHTML = "You lose!"
        }
        else if(parseInt(humanScore.innerHTML) === parseInt(computerScore.innerHTML)){
            gameResults.innerHTML = "It's a draw!"
        }
        console.log(humanScore,computerScore);
    }
}

const startBtn = document.querySelector("#start-btn");
startBtn.onclick = function(){
    if (numInput.value.trim() === "") return;

    score.style.display = "flex";
    startForm.style.display = "none";
    buttons.style.display = "flex";
}

resetBtn.addEventListener("click", function() {
    window.location.reload();
});


//Human choice
const humanPaper = document.querySelector("#human-paper");
const humanRock = document.querySelector("#human-rock");
const humanScissors = document.querySelector("#human-scissors");

const computerPaper = document.querySelector("#computer-paper");
const computerRock = document.querySelector("#computer-rock");
const computerScissors = document.querySelector("#computer-scissors");

paperBtn.onclick = function(){
    picks.style.display = "flex"

    humanPaper.style.display = "flex";
    humanRock.style.display = "none";
    humanScissors.style.display = "none";

    computerPaper.style.display = "none";
    computerRock.style.display = "none";
    computerScissors.style.display = "none";

    const computerPick = getComputerChoice();
    document.querySelector(`#computer-${computerPick}`).style.display = "flex";


    playRound("paper",computerPick);
}

rockBtn.onclick = function(){
    picks.style.display = "flex"

    humanRock.style.display = "flex";
    humanPaper.style.display = "none";
    humanScissors.style.display = "none";

    computerPaper.style.display = "none";
    computerRock.style.display = "none";
    computerScissors.style.display = "none";

    const computerPick = getComputerChoice();
    document.querySelector(`#computer-${computerPick}`).style.display = "flex";

    playRound("rock",computerPick);
}

scissorsBtn.onclick = function(){
    picks.style.display = "flex"

    humanRock.style.display = "none";
    humanPaper.style.display = "none";
    humanScissors.style.display = "flex";

    computerPaper.style.display = "none";
    computerRock.style.display = "none";
    computerScissors.style.display = "none";

    const computerPick = getComputerChoice();
    document.querySelector(`#computer-${computerPick}`).style.display = "flex";

    playRound("scissors",computerPick);
}


//Expected output: 0, 1 or 2
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

//Computer
function getComputerChoice(){
    let strategy = getRandomInt(3);
    // console.log(strategy);
    if( strategy === 0){
        strategy = "rock";
        return strategy;
    }
    else if (strategy === 1){
        strategy = "paper";
        return strategy;
    }
    else {
        strategy = "scissors";
        return strategy;
    };
}


//Round
function playRound(humanChoice, computerChoice) {

    if( humanChoice=== "rock" && computerChoice === "scissors" ){
        console.log("You won! Rock beats Scissors");
        humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
    }
    else if(humanChoice=== "rock" && computerChoice === "paper"){
        console.log("You lose! Paper beats Rock");
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    }
    else if(humanChoice=== "paper" && computerChoice === "scissors"){
        console.log("You lose! Scissors beats Paper");
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
    }
    else if(humanChoice=== "paper" && computerChoice === "rock"){
        console.log("You won! Paper beats Rock");
        humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
    }
    else if(humanChoice=== "scissors" && computerChoice === "rock"){
        console.log("You lose! Rock beats Scissoers");
        computerScore.innerHTML = parseInt(computerScore.innerHTML) + 1;
        gameResults.innerHTML="You lose!";
    }
    else if(humanChoice=== "scissors" && computerChoice === "paper"){
        console.log("You won! Scissors beats Paper");
        humanScore.innerHTML = parseInt(humanScore.innerHTML) + 1;
    }
    else if(humanChoice === computerChoice){
        console.log("It's a draw!");
    }
    
    resetGame();
    rounds++;
}









// //Human
// function getHumanChoice(){
//     let choice = prompt("Ce alegi frt?");
//     let lowerCaseChoice = choice.toLowerCase();
    
//     if(choice === null){
//         console.log("N ai scris nimic");
//     }
//     else if(lowerCaseChoice === "rock" || lowerCaseChoice === "piatra" ){
//         return "rock";
//     }
//     else if(lowerCaseChoice === "paper" || lowerCaseChoice === "hartie"){
//         return "paper";
//     }
//     else if(lowerCaseChoice === "scissors" || lowerCaseChoice === "foarfeca"){
//         return "scissors";
//     }
//     else console.log("n ai scris ce trb");
// }

// function playGame(roundNumber){
//     console.log("||||||||||||||||| FIRST ROUND ||||||||||||||||||||||")
//     for(i=0;i<roundNumber;i++){
//         const humanSelection = getHumanChoice();
//         const computerSelection = getComputerChoice();
//         console.log("Human: " + humanSelection);
//         console.log("Computer: " + computerSelection);
//         playRound(humanSelection,computerSelection);
//         console.log("||||||||||||||||| NEXT ROUND ||||||||||||||||||||||")
//     }
//     console.log("||||||||||||||||| SCORE ||||||||||||||||||||||")
// }



// playGame(3);
// console.log("Human score: " + humanScore);
// console.log("Computer score: " + computerScore);

  