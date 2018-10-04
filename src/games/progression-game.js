import { greetingUser, isRightAnswer, getRndInteger } from '..';

// const player = greetingUser('What number is missing in this progression?');

const makeProgression = (beginWith, diffBetweenElements, countOfElements) => {
  if (countOfElements === 1) return beginWith;

  return `${beginWith} ${makeProgression(beginWith + diffBetweenElements, diffBetweenElements, countOfElements - 1)}`;
};

const hideElement = (str, position) => {
  let newStr = '';
  for (let count = 0; count <= str.length; count += 1) {
    if (count === position) {
      newStr += '..';
    }

    newStr += str;
  }

  return newStr;
};


const progressionGame = () => {
  const progressionStartWith = getRndInteger(1, 50);
  const progressionDiffBetweenElements = getRndInteger(1, 13);
  const choseRandomPosition = getRndInteger(1, 15);
  const progressionLength = getRndInteger(10, 16);

  const progression = makeProgression(progressionStartWith, progressionDiffBetweenElements, progressionLength);
  console.log(choseRandomPosition);
  console.log(hideElement(progression, choseRandomPosition));
};


progressionGame();
