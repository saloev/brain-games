import { cons } from 'hexlet-pairs';
import getRndInteger from '../utils';
import gameProcess from '..';

const gameTitle = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  const iter = (counter) => {
    if (counter > (num / 2)) return true;
    if (num % counter === 0) return false;

    return iter(counter + 1);
  };

  return iter(2);
};

const dataGenerator = () => {
  const question = getRndInteger(2, 50);
  const correctAnswer = isPrime(question) ? 'yes' : 'no';

  return cons(question, correctAnswer);
};

export default () => gameProcess(gameTitle, dataGenerator);
