import readlineSync from 'readline-sync';
import evenGame from './games/even-game';

export const greetingUser = () => {
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const startEvenGame = () => {
  const userName = greetingUser();
  const getResult = evenGame();

  console.log(`${getResult}${userName}`);
};
