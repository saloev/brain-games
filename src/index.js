import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log(`Hello, ${readlineSync.question('May I have your name? ')}`);
};

export default greetingUser;
