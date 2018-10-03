import { greetingUser, isRightAnswer, getRndInteger } from '..';

const player = greetingUser('Answer "yes" if number even otherwise answer "no".');

const isEven = num => num % 2 === 0;

const evenGame = () => {
  const question = getRndInteger(0, 50);

  const correctAnswer = isEven(question) ? 'yes' : 'no';

  if (isRightAnswer(player, question, correctAnswer)) {
    evenGame();
  }
};

export default evenGame;
