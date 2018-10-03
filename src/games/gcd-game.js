import { greetingUser, isRightAnswer, getRndInteger } from '..';

const player = greetingUser('Find the greatest common divisor of given numbers.');

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;

  return gcd(num2, num1 % num2);
};

const gcdGame = () => {
  const randomNumOneForGcd = getRndInteger(0, 50);
  const randomNumTwoForGcd = getRndInteger(0, 50);
  const question = `${randomNumOneForGcd} ${randomNumTwoForGcd}`;


  const correctAnswer = gcd(randomNumOneForGcd, randomNumTwoForGcd);

  if (isRightAnswer(player, question, correctAnswer)) {
    gcdGame();
  }
};

export default gcdGame;
