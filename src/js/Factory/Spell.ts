import { Card } from './Card';
import { ICard, ISpell } from '../models';

class Spell extends Card {
  constructor(
    baseSettings: ICard,
    spellSettings: ISpell
  ) {
    const { name, description, rarity, image } = baseSettings;
    super(name, description, rarity, image);
    const { type, action } = spellSettings;
  }
}

export { Spell };
