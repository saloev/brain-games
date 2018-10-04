import { checkAnswer, getRndInteger } from '..';

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


const progressionGame = () => {
  const progStartWith = getRndInteger(1, 50);
  const progDiffBetweenElements = getRndInteger(1, 13);
  const choseRandomPosition = getRndInteger(1, 9);
  const progLength = getRndInteger(10, 16);
  const progression = makeProgression(progStartWith, progDiffBetweenElements, progLength);
  const gameTitle = 'What number is missing in this progression?';

  const question = hideElement(progression, choseRandomPosition);
  const correctAnswer = progression.split(' ')[choseRandomPosition];

  checkAnswer(progressionGame, gameTitle, question, correctAnswer);
};

export default progressionGame;
