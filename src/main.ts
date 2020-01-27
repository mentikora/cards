import './style.css';
import { Unit, Spell } from './js/Factory';

const _TimberWolf = new Unit(
  {
    name: 'Timber Wolf',
    description: 'Your other beasts have +1 attack',
    rarity: 'common',
    image: 'https://i.pinimg.com/originals/48/8d/2a/488d2ab1fa7a8177c35fa04b73c0337e.jpg',
  },
  {
    stats: [1,1],
    type: 'rare'
  }
);

const _Fireball = new Spell(
  {
    name: 'Fireball',
    description: 'Hits hard as fuck',
    rarity: 'rare',
    image: '',
  },
  {
    type: 'magic',
    action: (x) => console.log(`deals ${x} damage`)
  }
);

const displayCard = (o: Unit | Spell) => {
  // console.log(o);
  const content = document.getElementById('display-card');
  return content.innerHTML = `
    <div class="card card--${o.rarity}">
    <div class="card__image">
      <img src="${o.image}" alt="${o.name}">
    </div>
    <div class="card__name">${o.name}</div>
    <div class="card__desctiption">${o.description}</div>
    <div class="card__attack">atk: </div>
    <div class="card__defence">def: </div>
    </div>
  `
}

// displayCard(_TimberWolf);
displayCard(_Fireball);
// console.log(_TimberWolf);
