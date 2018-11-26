import Sprite from "../obj/Sprite.js";
import Rect from '../obj/Rect.js';

class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;

    this.dx = 0;
    this.dy = 0;
  }

  addSprite(width, height, src = false) {
    return new Sprite(this, width, height, src);
  }

  addRect(x, y, width, height) {
    return new Rect(x, y, width, height);
  }
}

export default Entity;