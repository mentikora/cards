import { IUnit } from '../models';

class Unit implements IUnit {
  readonly model: string;

  constructor(
    public name: string,
    public description: string,
    public rarity: 'common' | 'rare' | 'epic' | 'legendary',
    public image: string,
    public stats: number[],
    public type: string,
  ) {
      this.model = 'UNIT';
  }
}

export { Unit };
