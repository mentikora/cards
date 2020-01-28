import { ICard } from './index';

interface IUnit extends ICard {
  stats: number[];
  type: string;
}

export { IUnit };
