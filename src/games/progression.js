import { cons } from 'hexlet-pairs';
import getRndInteger from '../utils';
import gameProcess from '..';

const gameTitle = 'What number is missing in this progression?';

const arithmeticSeries = (start, step, count, hide) => {
  if (count === 1) return start;
  if (count === hide) {
    return `.. ${arithmeticSeries(start + step, step, count - 1, hide)}`;
  }

  return `${start} ${arithmeticSeries(start + step, step, count - 1, hide)}`;
};

const dataGenerator = () => {
  const start = getRndInteger(1, 50);
  const step = getRndInteger(1, 13);
  const count = getRndInteger(10, 16);
  const position = getRndInteger(2, 9);

  const question = arithmeticSeries(start, step, count, count - position);
  const correctAnswer = start + step * position;

  return cons(question, correctAnswer);
};

export default () => gameProcess(gameTitle, dataGenerator);
