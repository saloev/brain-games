import { cons } from 'hexlet-pairs';
import getRndInteger from '../utils';
import gameProcess from '..';

const gameTitle = 'Answer "yes" if number even otherwise answer "no".';

const isEven = num => num % 2 === 0;

const dataGenerator = () => {
  const question = getRndInteger(0, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameProcess(gameTitle, dataGenerator);
