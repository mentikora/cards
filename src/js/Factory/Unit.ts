import { Card } from './Card';
import { ICard, IUnit } from '../models';

class Unit extends Card {
  readonly model:string;

  constructor(
    baseSettings: ICard,
    unitSettings: IUnit,
    ) {
      const { name, description, rarity, image } = baseSettings;
      super(name, description, rarity, image);
      const { stats, type } = unitSettings;
      this.model = 'UNIT';
  }
}

export { Unit };
