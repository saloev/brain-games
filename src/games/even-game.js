import readlineSync from 'readline-sync';

const countOfCorrectAnswers = 3;

const isEven = num => num % 2 === 0;

const evenGame = (player) => {
  let counter = 0;

  while (counter < countOfCorrectAnswers) {
    counter += 1;

    const question = Math.ceil(Math.random() * 50);

    console.log(`Question: ${question}`);

    const userGuess = readlineSync.question('Your answer : ');
    const correctAnswer = isEven(question) ? 'yes' : 'no';

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

export default evenGame;
