import dualIcon from '../../icon/dual.png';
import fastPlayIcon from '../../icon/fast-game.png';
import classicGameIcon from '../../icon/classic.png';

const typeRoom = {
  duel: {
    id: 0,
    text: 'Дуэль',
    iconFileNames: [dualIcon],
  },
  fastPlay: {
    id: 1,
    text: 'Быстрая игра',
    iconFileNames: [fastPlayIcon],
  },
  classicPlay: {
    id: 2,
    text: 'Классическая игра',
    iconFileNames: [classicGameIcon],
  },
};

export default typeRoom;
