class Card {
  public name: string;
  public description: string;
  public rarity: 'common' | 'rare' | 'epic' | 'legendary';
  public image: string;

  constructor (
    name: string,
    description: string,
    rarity: 'common' | 'rare' | 'epic' | 'legendary',
    image: string,
  ) {
    this.name = name;
    this.description = description;
    this.rarity = rarity;
    this.image = image;
  }
}

export default Card;
