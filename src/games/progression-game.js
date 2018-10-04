import { cons } from 'hexlet-pairs';
import { checkAnswer, getRndInteger } from '..';

const gameTitle = 'What number is missing in this progression?';

const makeProgression = (beginWith, diffBetweenElements, countOfElements) => {
  if (countOfElements === 1) return beginWith;

  return `${beginWith} ${makeProgression(beginWith + diffBetweenElements, diffBetweenElements, countOfElements - 1)}`;
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
  const progStartWith = getRndInteger(1, 50);
  const progDiffBetweenElements = getRndInteger(1, 13);
  const choseRandomPosition = getRndInteger(1, 9);
  const progLength = getRndInteger(10, 16);
  const progression = makeProgression(progStartWith, progDiffBetweenElements, progLength);

  const question = hideElement(progression, choseRandomPosition);
  const correctAnswer = progression.split(' ')[choseRandomPosition];

  return cons(question, correctAnswer);
};

const progressionGame = () => checkAnswer(gameTitle, dataGenerator);

export default progressionGame;
