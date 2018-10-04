import { cons } from 'hexlet-pairs';
import { checkAnswer, getRndInteger } from '..';

const gameTitle = 'What is the result of the expression?';

const dataGenerator = () => {
  const randomNumOneForExpression = getRndInteger(0, 50);
  const randomNumTwoForExpression = getRndInteger(0, 50);
  const randomNumForSign = getRndInteger(1, 4);

  let randomSignForExpression;
  let correctAnswer;

  switch (randomNumForSign) {
    case 1:
      randomSignForExpression = '+';
      correctAnswer = randomNumOneForExpression + randomNumTwoForExpression;
      break;
    case 2:
      randomSignForExpression = '-';
      correctAnswer = randomNumOneForExpression - randomNumTwoForExpression;
      break;
    default:
      randomSignForExpression = '*';
      correctAnswer = randomNumOneForExpression * randomNumTwoForExpression;
      break;
  }

  const question = `${randomNumOneForExpression} ${randomSignForExpression} ${randomNumTwoForExpression}`;

  return cons(question, correctAnswer);
};

const calcGame = () => checkAnswer(gameTitle, dataGenerator);

export default calcGame;
