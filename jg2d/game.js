import Player from './entity/player/Player.js';
import Timer from './utility/Timer.js';
import Structure from './entity/structure/Structure.js';

class Game {
  constructor(width, height) {
    this.canvas = document.querySelector('#canvas');
    this.ctx = this.canvas.getContext('2d');

    this.width = width;
    this.height = height;

    this.canvas.width = width;
    this.canvas.height = height;

    this.projectiles = [];
    this.structures = [];
    this.players = [];
    
    this.entities = [
      this.projectiles,
      this.structures,
      this.players
    ];

    this.running = false;
    
    this.fps = 60;
    
    this.timer = new Timer(this);
  }

  toggleRunState() {
    this.running = !this.running;
  }

  addPlayer(x, y) {
    let newPlayer = new Player(x, y, this);
    this.players.push(newPlayer);
    return newPlayer;
  }

  addStructure(x, y, width, height) {
    this.structures.push(new Structure(x, y, width, height));
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

  start() {
    requestAnimationFrame(this.start.bind(this));
    this.timer.update();
  }

  update() {
    // Clear canvas
    this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

    // Update projectiles
    this.handleProjectiles();

    // Update and draw entities
    this.entities.forEach(e => {
      e.forEach(e_ => {
        if (e_.update) {
          e_.update();
        }
        if (e_.draw) {
          e_.draw(this.ctx);
        }
      });
    });
  }
}

export default Game;