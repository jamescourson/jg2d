import Weapon from './Weapon.js';

class MeleeWeapon extends Weapon {
  constructor(player, damage, speed, power, range) {
    super(damage, power);

    this.range = range;

    this.player = player;
    this.game = player.game;

    this.active = false;

    // speed - rate of use in s
    this.speed = speed;

    this.elapsed = -1
  }

  update() {
    if (this.active) {
      if (this.elapsed > this.shotSpeed)
    }
  }

  draw(ctx) {

  }
}

export default MeleeWeapon;