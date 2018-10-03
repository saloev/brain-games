import readlineSync from 'readline-sync';
import { cons, car, cdr } from 'hexlet-pairs';

const addPair = pair => car(pair) + cdr(pair);
const diffPair = pair => car(pair) - cdr(pair);
const multPair = pair => car(pair) * cdr(pair);

const calcGame = (player, countOfCorrectAnswers) => {
  for (let counter = 1; counter <= countOfCorrectAnswers; counter += 1) {
    const randomNumOneForExpression = Math.ceil(Math.random() * 50);
    const randomNumTwoForExpression = Math.ceil(Math.random() * 50);
    const randomNumForSign = Math.ceil(Math.random() * 3);

    let randomSignForExpression;
    let correctAnswer;

    const pair = cons(randomNumOneForExpression, randomNumTwoForExpression);

    if (randomNumForSign === 1) {
      randomSignForExpression = '+';
      correctAnswer = addPair(pair);
    } else if (randomNumForSign === 2) {
      randomSignForExpression = '-';
      correctAnswer = diffPair(pair);
    } else {
      randomSignForExpression = '*';
      correctAnswer = multPair(pair);
    }

    const question = `${car(pair)} ${randomSignForExpression} ${cdr(pair)}`;


    console.log(`Question: ${question}`);

    const userGuess = Number(readlineSync.question('Your answer : '));

    if (correctAnswer !== userGuess) {
      console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${player}`);
      return;
    }

    console.log('Correct!');

    if (counter === countOfCorrectAnswers) {
      console.log(`Congragulation, ${player}`);
      return;
    }
  }
};

export default calcGame;
