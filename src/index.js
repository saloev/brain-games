import readlineSync from 'readline-sync';

let correctAnswersForWin = 3;
let player;

export const greetingUser = (gameTitle) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTitle}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

export const checkAnswer = (gameFunc, gameTitle, question, correctAnswer) => {
  if (correctAnswersForWin === 3) {
    player = greetingUser(gameTitle);
  }

  console.log(`Question: ${question}`);

  let playerGuess = readlineSync.question('Your answer : ');


  if (typeof correctAnswer === 'number') {
    playerGuess = +playerGuess;
  }

  if (correctAnswer !== playerGuess) {
    console.log(`'${playerGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${player}`);
    return;
  }

  console.log('Correct!');

  correctAnswersForWin -= 1;

  if (correctAnswersForWin === 0) {
    console.log(`Congragulation, ${player}`);
    return;
  }

  gameFunc();
};

export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);
