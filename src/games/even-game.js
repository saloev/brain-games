import readlineSync from 'readline-sync';

const evenGame = () => {
  const iter = (counter) => {
    const randomNum = Math.ceil(Math.random() * 50);

    console.log(`Question: ${randomNum}`);

    const userGuess = readlineSync.question('Your answer : ');
    const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';

    if (correctAnswer !== userGuess) return `'${userGuess}' is wrong answer ;(. Correct answer was '${correctAnswer}'.\nLet's try again, `;

    console.log('Correct!');

    if (counter === 2) return 'Congratulations, ';

    return iter(counter + 1);
  };

  return iter(0);
};

export default evenGame;
