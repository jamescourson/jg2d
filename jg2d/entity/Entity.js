import Sprite from "../sprite/Sprite.js";

class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  addSprite(width, height, src = false) {
    this.sprite = new Sprite(this, width, height, src);
  }
}

export default Entity;