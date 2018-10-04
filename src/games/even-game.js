import { greetingUser, checkAnswer, getRndInteger } from '..';

const isEven = num => num % 2 === 0;

const evenGame = () => {
  const gameTitle = 'Answer "yes" if number even otherwise answer "no".';

  const question = getRndInteger(0, 50);
  const correctAnswer = isEven(question) ? 'yes' : 'no';

  checkAnswer(evenGame, gameTitle, question, correctAnswer)

};

export default evenGame;
