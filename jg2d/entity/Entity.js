class Entity {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  addSprite(src) {
    this.sprite = src;
  }
}

export default Entity;