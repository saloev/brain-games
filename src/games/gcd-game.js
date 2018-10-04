import { checkAnswer, getRndInteger } from '..';

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;

  return gcd(num2, num1 % num2);
};

const gcdGame = () => {
  const randomNumOneForGcd = getRndInteger(1, 50);
  const randomNumTwoForGcd = getRndInteger(1, 50);
  const gameTitle ='Find the greatest common divisor of given numbers.';

  const question = `${randomNumOneForGcd} ${randomNumTwoForGcd}`;
  const correctAnswer = gcd(randomNumOneForGcd, randomNumTwoForGcd);

  checkAnswer(gcdGame, gameTitle, question, correctAnswer)
};

export default gcdGame;
