class Timer {
  constructor(game) {
    this.game = game;

    this.interval = 1000 / game.fps;
    this.then = Date.now();
    this.now, this.delta;
  }

  update() {
    this.now = Date.now();
    this.delta = this.now - this.then;
    
    if (this.delta > this.interval) {
      this.then = this.now - (this.delta % this.interval);
      
      if (this.game.running) {
        this.tick();
      }
    }
  }

  tick() {
    this.game.update();
  }
}

export default Timer;