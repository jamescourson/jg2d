import Entity from "../Entity.js";
import Rect from "../../obj/Rect.js";

class Projectile extends Entity {
  constructor(player, game) {
    super(player.x, player.y);

    this.player = player;
    this.game = game;

    this.width = 15;
    this.height = 5;

    this.rect = this.addRect(this.x, this.y, this.width, this.height);

    // angle - the projectile's direction
    this.angle = player.angle;

    // speed - projectile's speed
    this.speed = player.weapon.shotSpeed;
  }

  handleCollision(axis) {
    if (axis == 'x') {
      this.angle = 180 - this.angle;
    }
    else {
      this.angle = 360 - this.angle;
    }
  }

  update() {
    // Calculate displacement
    this.dx = this.speed * Math.cos(toRadians(this.angle));
    this.dy = this.speed * Math.sin(toRadians(this.angle));
    
    let oldX = this.x;
    let oldY = this.y;

    // Update position
    this.x += this.dx;
    this.y += this.dy;
    
    // Update rect position
    this.rect.x = this.x;
    this.rect.y = this.y;

    // Wall collision
    if (this.x < 0 || this.x > this.game.width) {
      this.angle = 180 - this.angle;
    }
    
    if (this.y < 0 || this.y > this.game.height) {
      this.angle = 360 - this.angle;
    }

    // Structure collision
    this.game.structures.forEach(s => {
      if (this.rect.collidesWith(s.rect)) {
        this.handleCollision(this.rect.getCollisionFace(s.rect, oldX, oldY));
      }
    });
  }

  draw(ctx) {
    ctx.save();

    ctx.translate(this.x, this.y);
    ctx.rotate(toRadians(this.angle));
    ctx.fillRect(-this.width / 2, -this.height / 2, this.width, this.height);

    ctx.restore();
  }
}

function toRadians(a) {
  return a * (Math.PI / 180);
}

function toDegrees (angle) {
  return angle * (180 / Math.PI);
}

export default Projectile;