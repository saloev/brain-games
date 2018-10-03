import readlineSync from 'readline-sync';

const gcd = (num1, num2) => {
  if (num2 === 0) return num1;

  return gcd(num2, num1 % num2);
}

const gcdGame = (player, countOfCorrectAnswers) => {
  for (let counter = 1; counter <= countOfCorrectAnswers; counter += 1) {
    const randomNumOneForGcd = Math.ceil(Math.random() * 50);
    const randomNumTwoForGcd = Math.ceil(Math.random() * 50);
    const question = `${randomNumOneForGcd} ${randomNumTwoForGcd}`;

    console.log(`Question: ${question}`);

    const correctAnswer = gcd(randomNumOneForGcd, randomNumTwoForGcd);
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

export default gcdGame;