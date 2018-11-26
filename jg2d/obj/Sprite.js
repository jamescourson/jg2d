class Sprite {
  constructor(parentEntity, width, height, src = false) {
    this.parentEntity = parentEntity;

    this.width = width;
    this.height = height;
    
    if (src) {
      this.src = new Image(this.width, this.height);
      this.src.src = this.src;
    }
    else {
      this.color = 'black';
    }
  }

  draw(ctx) {
    if (this.src) {
      ctx.drawImage(this.src, this.width, this.height);
    }
    else {
      ctx.save();

      ctx.fillStyle = this.color;
      ctx.fillRect(this.parentEntity.x, this.parentEntity.y, this.width, this.height);

      ctx.restore();
    }
  }
}

export default Sprite;