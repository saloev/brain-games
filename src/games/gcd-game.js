import { cons } from 'hexlet-pairs';
import getRndInteger from '../utils';
import gameProcess from '..';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;

  return gcd(num2, num1 % num2);
};

const dataGenerator = () => {
  const firsArg = getRndInteger(1, 50);
  const secondArg = getRndInteger(1, 50);

  const question = `${firsArg} ${secondArg}`;
  const correctAnswer = gcd(firsArg, secondArg);

  return cons(question, correctAnswer);
};

export default () => gameProcess(gameTitle, dataGenerator);
