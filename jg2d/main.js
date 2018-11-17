// Import dependencies
import Game from './game.js';

// Initialize canvas
var canvas = document.querySelector('#canvas');
var ctx = canvas.getContext('2d');

ctx.strokeStyle = 'black';
ctx.fillStyle = 'grey';

// Initialize game
var game = new Game(window.innerWidth, window.innerHeight, canvas, ctx);
var player = game.addPlayer();

// Event handlers
document.addEventListener('keydown', (e) => {
  switch (e.key) {
    case 'a':
      player.turning[0] = true;
      player.turnDir = -player.turnSpeed;
      break;
    case 'd':
      player.turning[1] = true;
      player.turnDir = player.turnSpeed;
      break;
    case ' ':
      if (game.running) {
        player.weapon.firing = true;
      }
      else {
        game.running = true;
      }
      break;
    case 'Escape':
      game.running = !game.running;
      break;
  }
});

document.addEventListener('keyup', (e) => {
  switch (e.key) {
    case 'a':
      player.turning[0] = false;
      if (player.turning[1]) {
        player.turnDir = player.turnSpeed;
      }
      break;
    case 'd':
      player.turning[1] = false;
      if (player.turning[0]) {
        player.turnDir = -player.turnSpeed;
      }
      break;
    case ' ':
      player.weapon.firing = false;
      break;
  }
});

var interval = 1000 / game.fps;
var then = Date.now();
var now, delta;
  
function update() { 
  requestAnimationFrame(update);

  now = Date.now();
  delta = now - then;
    
  if (delta > interval) {
    then = now - (delta % interval);

    // Update if game is running
    if (game.running) {
      game.update();
    }
  }
}

update();