import { startConfetti, stopConfetti, removeConfetti } from "./confetti.js";
const playerScoreEl = document.getElementById("playerScore");
const playerChoiceEl = document.getElementById("playerChoice");
const computerScoreEl = document.getElementById("computerScore");
const computerChoiceEl = document.getElementById("computerChoice");
const resultText = document.getElementById("resultText");

const playerRock = document.getElementById("playerRock");
const playerPaper = document.getElementById("playerPaper");
const playerScissors = document.getElementById("playerScissors");
const playerLizard = document.getElementById("playerLizard");
const playerSpock = document.getElementById("playerSpock");

const computerRock = document.getElementById("computerRock");
const computerPaper = document.getElementById("computerPaper");
const computerScissors = document.getElementById("computerScissors");
const computerLizard = document.getElementById("computerLizard");
const computerSpock = document.getElementById("computerSpock");

const gameIcons = document.querySelectorAll(".far");

const choices = {
  rock: { name: "Rock", defeats: ["scissors", "lizard"] },
  paper: { name: "Paper", defeats: ["rock", "spock"] },
  scissors: { name: "Scissors", defeats: ["paper", "lizard"] },
  lizard: { name: "Lizard", defeats: ["paper", "spock"] },
  spock: { name: "Spock", defeats: ["scissors", "rock"] },
};
let computerChoice = "";
let playerScoreNo = 0;
let computerScoreNo = 0;

//
function updateResult(playerChoice) {
  if (playerSpock === computerChoice) {
    resultText.textContent = "it's a tie";
  } else {
    const choice = choices[playerChoice];
    if (choice.defeats.indexOf(computerChoice) > -1) {
      startConfetti();
      resultText.textContent = "You Won !";
      playerScoreNo++;
      playerScoreEl.textContent = playerScoreNo;
    } else {
      resultText.textContent = "You Lost !";
      computerScoreNo++;
      computerScoreEl.textContent = computerScoreNo;
    }
  }
}
function checkResult(playerChoice) {
  resetSelected();
  computerRendomChoice();
  updateResult(playerChoice);
}

//Reset all selected icon
function resetSelected() {
  stopConfetti();
  removeConfetti();
  gameIcons.forEach((icon) => {
    icon.classList.remove("selected");
  });
}
//Reset the Game ...
function resetAll() {
  resetSelected();
  computerScoreNo = 0;
  playerScoreNo = 0;
  computerScoreEl.textContent = computerScoreNo;
  playerScoreEl.textContent = playerScoreNo;
  computerChoiceEl.textContent = "";
  playerChoiceEl.textContent = "";
  resultText.textContent = "";
}
window.resetAll = resetAll;
// random computer choice
function computerRendomChoice() {
  const computerChoiceNumber = Math.random();
  if (computerChoiceNumber < 0.2) {
    computerChoice = "rock";
  } else if (computerChoiceNumber <= 0.4) {
    computerChoice = "paper";
  } else if (computerChoiceNumber <= 0.6) {
    computerChoice = "scissors";
  } else if (computerChoiceNumber <= 0.8) {
    computerChoice = "lizard";
  } else {
    computerChoice = "spock";
  }
  Computerselect(computerChoice);
}

//player selected style & choice text
function select(playerChoice) {
  checkResult(playerChoice);
  switch (playerChoice) {
    case "rock":
      playerRock.classList.add("selected");
      playerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      playerPaper.classList.add("selected");
      playerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      playerScissors.classList.add("selected");
      playerChoiceEl.textContent = " ---Scissors";
      break;
    case "lizard":
      playerLizard.classList.add("selected");
      playerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      playerSpock.classList.add("selected");
      playerChoiceEl.textContent = " --- Spock";
      break;

    default:
      break;
  }
}
window.select = select;

//computer selected style & choice text
function Computerselect(computerChoice) {
  switch (computerChoice) {
    case "rock":
      computerRock.classList.add("selected");
      computerChoiceEl.textContent = " --- Rock";
      break;
    case "paper":
      computerPaper.classList.add("selected");
      computerChoiceEl.textContent = " --- Paper";
      break;
    case "scissors":
      computerScissors.classList.add("selected");
      computerChoiceEl.textContent = " ---Scissors";
      break;
    case "lizard":
      computerLizard.classList.add("selected");
      computerChoiceEl.textContent = " --- Lizard";
      break;
    case "spock":
      computerSpock.classList.add("selected");
      computerChoiceEl.textContent = " --- Spock";
      break;

    default:
      break;
  }
}

//on StartUp
resetAll();
