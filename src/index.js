import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const correctAnswers = 3;

const greetingUser = (gameTitle) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${gameTitle}\n`);
  const userName = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${userName}\n`);
  return userName;
};

const generateDataAndCheckAnswer = (player, dataGenerator) => {
  const iter = (counter) => {
    const data = dataGenerator();
    const question = car(data);
    const correctAnswer = cdr(data);

    console.log(`Question: ${question}`);

    const playerGuess = readlineSync.question('Your answer : ');

    if (correctAnswer !== playerGuess) {
      console.log(`'${playerGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${player}`);
      return;
    }

    console.log('Correct!');

    if (counter === correctAnswers) {
      console.log(`Congragulation, ${player}`);
      return;
    }

    iter(counter + 1);
  };

  iter(1);
};

export default (gameTitle, dataGenerator) => {
  const player = greetingUser(gameTitle);
  generateDataAndCheckAnswer(player, dataGenerator);
};
