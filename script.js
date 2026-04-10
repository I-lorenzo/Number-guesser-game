let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = (num) => {
  return Math.floor(Math.random() * 10);
};
// Write your code below:
const compareGuesses = (human, computer, target) => {
  const humanDif = Math.abs(target - human);
  const computerDif = Math.abs(target - computer);
  if (humanDif <= computerDif) {
    return true;
  } else return false;
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer");
  computerScore++;
};

const advanceRound = () => {
  currentRoundNumber++;
};

