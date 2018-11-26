import Entity from "../Entity.js";

class Structure extends Entity {
  constructor(x, y, width, height) {
    super(x, y);

    this.width = width;
    this.height = height;

    this.rect = this.addRect(this.x, this.y, width, height);
  }

  draw(ctx) {
    ctx.fillRect(this.x, this.y, this.width, this.height);
  }
}

export default Structure;