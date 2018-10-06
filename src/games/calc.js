import { cons } from 'hexlet-pairs';
import getRndInteger from '../utils';
import gameProcess from '..';

const gameTitle = 'What is the result of the expression?';

const dataGenerator = () => {
  const firstArg = getRndInteger(0, 50);
  const secondArg = getRndInteger(0, 50);
  const sign = '+-*'[getRndInteger(0, 3)];

  let correctAnswer;
  let question;

  switch (sign) {
    case '+':
      question = `${firstArg} + ${secondArg}`;
      correctAnswer = firstArg + secondArg;
      break;
    case '-':
      question = `${firstArg} - ${secondArg}`;
      correctAnswer = firstArg - secondArg;
      break;
    default:
      question = `${firstArg} * ${secondArg}`;
      correctAnswer = firstArg * secondArg;
      break;
  }

  return cons(question, `${correctAnswer}`);
};

export default () => gameProcess(gameTitle, dataGenerator);
