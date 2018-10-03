import readlineSync from 'readline-sync';
import evenGame from './games/even-game';
import calcGame from './games/calc-game';

const countOfCorrectAnswers = 3;

export const greetingUser = (gameTitle) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTitle}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

export const startEvenGame = () => {
  const userName = greetingUser('Answer "yes" if number even otherwise answer "no".');

  evenGame(userName, countOfCorrectAnswers);
};

export const startCalcGame = () => {
  const userName = greetingUser('What is the result of the expression?');

  calcGame(userName, countOfCorrectAnswers);
};
