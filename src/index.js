import readlineSync from 'readline-sync';

let correctAnswersForWin = 3;

export const greetingUser = (gameTitle) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTitle}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

export const isRightAnswer = (player, question, correctAnswer) => {
  console.log(`Question: ${question}`);

  let playerGuess = readlineSync.question('Your answer : ');


  if (typeof correctAnswer === 'number') {
    playerGuess = +playerGuess;
  }

  if (correctAnswer !== playerGuess) {
    console.log(`'${playerGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${player}`);
    return false;
  }

  console.log('Correct!');

  correctAnswersForWin -= 1;

  if (correctAnswersForWin === 0) {
    console.log(`Congragulation, ${player}`);
    return false;
  }

  return true;
};

export const getRndInteger = (min, max) => Math.floor(Math.random() * (max - min) + min);
