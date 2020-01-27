export interface ISpell {
  type: 'magic' | 'buff' | 'debuff';
  action: <T>(arg: T) => void;
}
