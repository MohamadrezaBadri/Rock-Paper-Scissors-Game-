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
  let humanChoice = prompt("please enter your choice "); // get number from user
  return humanChoice.toLowerCase();
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();
let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    //if human wins
  if (humanChoice === "paper" && computerChoice === "rock") {
    humanScore++;
    return console.log("You win! Paper beats Rock");
  } else if (humanChoice === "rock" && computerChoice === "scissors") {
    humanScore++;
    return console.log("You win! Rock beats Scissors");
  } else if (humanChoice === "scissors" && computerChoice === "paper") {
    humanScore++;
    return console.log("You win! Scissors beats Paper");
  }
  // if computer wins
  if (humanChoice === "rock" && computerChoice === "paper") {
    computerScore++;
    return console.log("You lose! Paper beats Rock");
  } else if (humanChoice === "scissors" && computerChoice === "rock") {
    computerScore++;
    return console.log("You lose! Rock beats Scissors");
  } else if (humanChoice === "paper" && computerChoice === "scissors") {
    computerScore++;
    return console.log("You lose! Scissors beats Paper");
  }
}
console.log(playRound(humanChoice, computerChoice))
console.log(humanScore , computerScore)