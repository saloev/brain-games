import { cons } from 'hexlet-pairs';
import { checkAnswer, getRndInteger } from '..';

const gameTitle = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const dataGenerator = () => {
  const question = getRndInteger(0, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

const evenGame = () => checkAnswer(gameTitle, dataGenerator);

export default evenGame;
