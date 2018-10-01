import readlineSync from 'readline-sync';

const greetingUser = () => readlineSync.question('May I have your name? ');

export default greetingUser;
