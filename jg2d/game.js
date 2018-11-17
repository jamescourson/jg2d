import Player from './obj/player/player.js';

class Game {
  constructor(width, height, canvas, ctx) {
    this.canvas = canvas;
    this.ctx = ctx;

    this.canvas.width = width;
    this.canvas.height = height;

    this.projectiles = [];
    this.structures = [];
    this.players = [];

    this.running = false;

    this.fps = 60;
  }

  addPlayer() {
    let newPlayer = new Player(this);
    this.players.push(newPlayer);
    return newPlayer;
  }

  handleProjectiles() {
    this.players.forEach(p => {
      let interval = this.fps / p.weapon.fireRate;

      // If not ready to fire, increase elapsed
      if (p.weapon.elapsed != -1) {
        p.weapon.elapsed++;
      }
  
      if (p.weapon.firing) {
        // Check elapsed and fire if ready
        if (p.weapon.elapsed >= interval || p.weapon.elapsed == -1) {
          p.fireProjectile(this.projectiles);
          // Reset elapsed
          p.weapon.elapsed = 0;
        }
      }
      else {
        // Reset elapsed if ready to fire
        if (p.weapon.elapsed >= interval) {
          p.weapon.elapsed = -1;
        }
      }
    });
  }

  update() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    this.handleProjectiles();

    this.getEntities().forEach(e => {
      e.forEach(e_ => {
        e_.update();
        e_.draw(this.ctx);
      });
    });
  }

  draw() {

  }

  getEntities() {
    return [
      this.players,
      this.projectiles,
      this.structures
    ]
  }
}

export default Game;