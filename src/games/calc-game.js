import { cons, car, cdr } from 'hexlet-pairs';
import { greetingUser, isRightAnswer, getRndInteger } from '..';

const player = greetingUser('What is the result of the expression?');

const addPair = pair => car(pair) + cdr(pair);
const diffPair = pair => car(pair) - cdr(pair);
const multPair = pair => car(pair) * cdr(pair);

const calcGame = () => {
  const randomNumOneForExpression = getRndInteger(0, 50);
  const randomNumTwoForExpression = getRndInteger(0, 50);
  const randomNumForSign = getRndInteger(1, 4);

  let randomSignForExpression;
  let correctAnswer;

  const pair = cons(randomNumOneForExpression, randomNumTwoForExpression);

  switch (randomNumForSign) {
    case 1:
      randomSignForExpression = '+';
      correctAnswer = addPair(pair);
      break;
    case 2:
      randomSignForExpression = '-';
      correctAnswer = diffPair(pair);
      break;
    default:
      randomSignForExpression = '*';
      correctAnswer = multPair(pair);
      break;
  }

  const question = `${car(pair)} ${randomSignForExpression} ${cdr(pair)}`;

  if (isRightAnswer(player, question, correctAnswer)) {
    calcGame();
  }
};

export default calcGame;
