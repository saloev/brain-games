import { cons } from 'hexlet-pairs';
import { checkAnswer, getRndInteger } from '..';

const gameTitle = 'Find the greatest common divisor of given numbers.';

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;

  return gcd(num2, num1 % num2);
};

const dataGenerator = () => {
  const randomNumOneForGcd = getRndInteger(1, 50);
  const randomNumTwoForGcd = getRndInteger(1, 50);

  const question = `${randomNumOneForGcd} ${randomNumTwoForGcd}`;
  const correctAnswer = gcd(randomNumOneForGcd, randomNumTwoForGcd);

  return cons(question, correctAnswer);
};

const gcdGame = () => checkAnswer(gameTitle, dataGenerator);

export default gcdGame;
