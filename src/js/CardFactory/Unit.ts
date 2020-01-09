import Card from './Card';
import { ICard } from '../models';

class Unit extends Card {
  public stats: [number, number];
  public type: string;

  constructor(baseSettings: ICard, stats: [number, number], type: string, ) {
    const { name, description, rarity, image } = baseSettings;
    super(name, description, rarity, image);
    this.stats = stats;
    this.type = type;
  }
}

export default Unit;
