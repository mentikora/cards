export interface ICard {
  name: string,
  description: string,
  rarity: 'common' | 'rare' | 'epic' | 'legendary',
  image: string,
}

export type IUnit = {
  stats: [number, number],
  type: string,
}