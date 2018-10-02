import readlineSync from 'readline-sync';
import evenGame from './games/even-game';

export const greetingUser = () => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}`);
  return userName;
};

export const startEvenGame = () => {
  const userName = greetingUser();

  evenGame(userName);
};
