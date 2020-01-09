import './style.css';

import Unit from './js/CardFactory/Unit';

const _TimberWolf = new Unit(
  {
    name: 'Timber Wolf',
    description: 'Your other beasts have +1 attack',
    rarity: 'common',
    image: 'https://i.pinimg.com/originals/48/8d/2a/488d2ab1fa7a8177c35fa04b73c0337e.jpg',
  },
  [1,1],
  'rare'
);

const displayCard = (o: Unit) => {
  console.log(o);
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

displayCard(_TimberWolf);
// console.log(_TimberWolf);
