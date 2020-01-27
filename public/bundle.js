'use strict';

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _possibleConstructorReturn(self, call) {
  if (call && (typeof call === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

var Card = function Card(name, description, rarity, image) {
  _classCallCheck(this, Card);

  this.name = name;
  this.description = description;
  this.rarity = rarity;
  this.image = image;
};

var Unit =
/*#__PURE__*/
function (_Card) {
  _inherits(Unit, _Card);

  function Unit(baseSettings, unitSettings) {
    var _this;

    _classCallCheck(this, Unit);

    var name = baseSettings.name,
        description = baseSettings.description,
        rarity = baseSettings.rarity,
        image = baseSettings.image;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Unit).call(this, name, description, rarity, image));
    var stats = unitSettings.stats,
        type = unitSettings.type;
    _this.model = 'UNIT';
    return _this;
  }

  return Unit;
}(Card);

var Spell =
/*#__PURE__*/
function (_Card) {
  _inherits(Spell, _Card);

  function Spell(baseSettings, spellSettings) {
    var _this;

    _classCallCheck(this, Spell);

    var name = baseSettings.name,
        description = baseSettings.description,
        rarity = baseSettings.rarity,
        image = baseSettings.image;
    _this = _possibleConstructorReturn(this, _getPrototypeOf(Spell).call(this, name, description, rarity, image));
    var type = spellSettings.type,
        action = spellSettings.action;
    return _this;
  }

  return Spell;
}(Card);

var _TimberWolf = new Unit({
  name: 'Timber Wolf',
  description: 'Your other beasts have +1 attack',
  rarity: 'common',
  image: 'https://i.pinimg.com/originals/48/8d/2a/488d2ab1fa7a8177c35fa04b73c0337e.jpg'
}, {
  stats: [1, 1],
  type: 'rare'
});

var _Fireball = new Spell({
  name: 'Fireball',
  description: 'Hits hard as fuck',
  rarity: 'rare',
  image: ''
}, {
  type: 'magic',
  action: function action(x) {
    return console.log("deals ".concat(x, " damage"));
  }
});

var displayCard = function displayCard(o) {
  // console.log(o);
  var content = document.getElementById('display-card');
  return content.innerHTML = "\n    <div class=\"card card--".concat(o.rarity, "\">\n    <div class=\"card__image\">\n      <img src=\"").concat(o.image, "\" alt=\"").concat(o.name, "\">\n    </div>\n    <div class=\"card__name\">").concat(o.name, "</div>\n    <div class=\"card__desctiption\">").concat(o.description, "</div>\n    <div class=\"card__attack\">atk: </div>\n    <div class=\"card__defence\">def: </div>\n    </div>\n  ");
}; // displayCard(_TimberWolf);


displayCard(_Fireball); // console.log(_TimberWolf);
//# sourceMappingURL=bundle.js.map
