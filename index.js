let div = document.createElement("div")
let body = document.createElement("body")
let p  = document.createElement("p")


document.body.appendChild(div)
document.body.appendChild(p)

function getComputerChoice() {
  let randomNum = Math.random();
  if (randomNum <= 0.33) {
    return "paper";
  } else if (randomNum > 0.33 && randomNum <= 0.66) {
    return "rock";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  return humanChoice.toLowerCase();
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = getHumanChoice();
  computerChoice = getComputerChoice();
  //if human wins
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    div.textContent =  "You win! Paper beats Rock"
    return 
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    div.textContent = "You win! Rock beats Scissors"
    return 
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    div.textContent = "You win! Scissors beats Paper"
    return
  }
  // if computer wins
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    div.textContent = "You lose! Paper beats Rock"
    return 
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    div.textContent = "You lose! Rock beats Scissors"
    return 
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    div.textContent=  "You lose! Scissors beats Paper"
    return 
  } else {
    div.textContent = "no winner"
    return 
  }
}
// main game loop
function playGame() {
 
    playRound();
  
 p.textContent  = `your score is : ${humanScore} computer score is : ${computerScore}`

 if (humanScore == 5 ) {
   p.textContent = "you win!"
 }else if(computerScore == 5) {
  p.textContent = "computer win!"
 }

}


let rock = document.querySelector("#rock")
let paper = document.querySelector("#paper")
let Scissors = document.querySelector("#Scissors")

rock.addEventListener("click" , () => {
    humanChoice  = "rock" 
  playGame()
})
paper.addEventListener("click" , () => {
  humanChoice = "paper"
  playGame()
})
Scissors.addEventListener("click" , () => {
  humanChoice = "scissors"
  playGame()
})



