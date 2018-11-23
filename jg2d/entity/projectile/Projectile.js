class Projectile {
  constructor(player, game) {
    this.player = player;
    this.game = game;

    // x, y - projectile's coordinates
    this.x = player.x;
    this.y = player.y;

    // width, height - projectile's dimensions
    this.width = 15;
    this.height = 5;

    // angle - the projectile's direction
    this.angle = player.angle;

    // dx, dy - projectile's x/y velocities
    this.dx = 0;
    this.dy = 0;

    // speed - projectile's speed
    this.speed = player.weapon.shotSpeed;
  }

  update() {
    // Move
    this.dx = this.speed * Math.cos(toRadians(this.angle));
    this.dy = this.speed * Math.sin(toRadians(this.angle));
    
    this.x += this.dx;
    this.y += this.dy;

    // Collision + bounce
    if (this.x < 0 || this.x > this.game.width - this.width) {
      this.angle = 180 - this.angle;
    }

    if (this.y < 0 || this.y > this.game.height - this.height) {
      this.angle = 360 - this.angle;
    }
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