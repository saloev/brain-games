import { cons } from 'hexlet-pairs';
import getRndInteger from '../utils';
import gameProcess from '..';

const gameTitle = 'What number is missing in this progression?';

const makeProgression = (beginWith, diff, count) => {
  if (count === 1) return beginWith;

  return `${beginWith} ${makeProgression(beginWith + diff, diff, count - 1)}`;
};

const hideElement = (str, position) => {
  const strToArr = str.split(' ');
  for (let count = 0; count <= strToArr.length; count += 1) {
    if (count === position) {
      strToArr[count] = '..';
    }
  }

  return strToArr.join(' ');
};

const dataGenerator = () => {
  const progStart = getRndInteger(1, 50);
  const progDiff = getRndInteger(1, 13);
  const position = getRndInteger(1, 9);
  const progLength = getRndInteger(10, 16);
  const progression = makeProgression(progStart, progDiff, progLength);

  const question = hideElement(progression, position);
  const correctAnswer = progression.split(' ')[position];

  return cons(question, correctAnswer);
};

export default () => gameProcess(gameTitle, dataGenerator);
