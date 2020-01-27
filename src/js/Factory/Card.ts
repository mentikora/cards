class Card {
  constructor (
    public name: string,
    public description: string,
    public rarity: 'common' | 'rare' | 'epic' | 'legendary',
    public image: string,
  ) {}
}

export { Card };
