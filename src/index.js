import readlineSync from 'readline-sync';
import evenGame from './games/even-game';

export const greetingUser = (gameTitle) => {
  console.log('Welcome to the Brain Games!');
  console.log(gameTitle);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const startEvenGame = () => {
  const userName = greetingUser('Answer "yes" if number even otherwise answer "no".');

  evenGame(userName);
};
