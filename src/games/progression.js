import { gameEngin } from '../index.js';
import getRandomInteger from '../function.js';

const instructionsForGame = 'What number is missing in the progression?';

const getProgression = () => {
  const firstMember = getRandomInteger(0, 50);
  const stepOfProgression = getRandomInteger(0, 20);
  const progressionLength = 10;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    progression.push(firstMember + stepOfProgression * i);
  }
  return progression;
};


const getGameData = () => {
  const progression = getProgression();
  const randomIndex = getRandomInteger(0, 9);
  const trueAnswer = String(progression[randomIndex]);
  progression[randomIndex] = '..';
  const question = `"What number is missing in: ${progression}?"`;
  return [question, trueAnswer];
};

const brainProgression = () => gameEngin(instructionsForGame, getGameData);

export default brainProgression;