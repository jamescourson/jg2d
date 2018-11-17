import Projectile from './projectile.js';
import Gun from './weapon/gun.js';

class Player {
  constructor(game) {
    // angle - player's direction in deg
    this.angle = 0;

    // speed - player's speed in px
    this.speed = 1;

    // turnSpeed - player's speed while turning in deg
    this.turnSpeed = 4;

    // turning - if the player is turning
    this.turning = [false, false];

    // turnDir - the direction the player is turning
    this.turnDir = 0;

    // x, y - player's coordinates
    this.x = 300;
    this.y = 200;

    // dx, dy - player's x/y velocities
    this.dx = 0;
    this.dy = 0;

    // game - parent game
    this.game = game;

    // weapon - player's weapon
    this.weapon = new Gun(15, 60, 15);
  }

  fireProjectile(projectiles) {
    projectiles.push(new Projectile(this, this.game));
  }

  update() {
    if (this.turning.includes(true)) {
      this.angle += this.turnDir;

      if (this.angle > 360) {
        this.angle = 0;
      }
      else if (this.angle < 0) {
        this.angle = 360;
      }
    }

    this.dx = this.speed * Math.cos(toRadians(this.angle));
    this.dy = this.speed * Math.sin(toRadians(this.angle));

    this.x += this.dx;
    this.y += this.dy;
  }

  draw(ctx) {
    ctx.save();

    // Draw circle
    ctx.beginPath();
    ctx.arc(this.x, this.y, 10, 0, 2 * Math.PI);
    
    // Draw line
    ctx.moveTo(this.x, this.y);
    ctx.lineTo(this.x + this.dx * 15, this.y + this.dy * 15);    

    ctx.closePath();
    ctx.fill();
    ctx.stroke();

    ctx.restore();
  }
}

function toRadians(a) {
  return a * (Math.PI / 180);
}

export default Player;