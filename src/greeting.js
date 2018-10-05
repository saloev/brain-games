import readlineSync from 'readline-sync';

export default (gameTitle) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTitle}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
};
