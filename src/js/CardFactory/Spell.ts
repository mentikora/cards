import CardFactory from './Unit';

let SpellFactory = function() {
  CardFactory.call(this);
}

SpellFactory.prototype = Object.create(CardFactory.prototype);
SpellFactory.prototype.constructor = SpellFactory;

SpellFactory.prototype.setEffect = function(effectName){
  console.log(`${effectName} was set`);
}

export default SpellFactory;