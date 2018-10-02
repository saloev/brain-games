import readlineSync from 'readline-sync';

const isEven = num => num % 2 === 0;

const evenGame = (player) => {
  const countOfCorrectAnswers = 3;
  const iter = (counter) => {
    if (counter === countOfCorrectAnswers) {
      console.log(`Congragulation, ${player}`);
      return undefined;
    }

    const question = Math.ceil(Math.random() * 50);

    console.log(`Question: ${question}`);

    const userGuess = readlineSync.question('Your answer : ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';

    if (correctAnswer !== userGuess) {
      console.log(`'${userGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, ${player}`);
      return undefined;
    }

    console.log('Correct!');

    return iter(counter + 1);
  };

  return iter(0);
};

export default evenGame;
