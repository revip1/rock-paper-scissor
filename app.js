function getComputerChoice() {
  const choice = Math.floor(Math.random() * 3);

  if (choice === 0) {
    return "rock";
  } else if (choice === 1) {
    return "paper";
  } else {
    return "scissors";
  }
}

function getHumanChoice() {
  let choice = prompt(
    "Enter your choice: rock, paper, or scissors"
  ).toLowerCase();

  if (choice === "rock" || choice === "paper" || choice === "scissors") {
    return choice;
  }
  alert("Invalid choice! Please enter rock, paper, or scissors.");
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
  humanChoice = humanChoice.toLowerCase(); // Ensure case-insensitivity

  if (humanChoice === computerChoice) {
    console.log(`It's a tie! You both chose ${humanChoice}`);
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log(`You win! ${humanChoice} beats ${computerChoice}`);
    humanScore++;
  } else {
    console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
    computerScore++;
  }
  console.log(
    `Current Score - Human: ${humanScore}, Computer: ${computerScore}`
  );
}

function playGame(rounds = 5) {
  humanScore = 0;
  computerScore = 0;

  for (let i = 0; i < rounds; i++) {
    console.log(`\nRound ${i + 1}:`);
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
  }

  console.log("\nGame Over!");
  if (humanScore > computerScore) {
    console.log("Congratulations! You won the game!");
  } else if (computerScore > humanScore) {
    console.log("Sorry! Computer won the game!");
  } else {
    console.log("It's a tie game!");
  }
}

playGame();
