import Weapon from '../Weapon.js';

class RangedWeapon extends Weapon {
  constructor(player, fireRate, shotSpeed, accuracy) {
    super(player, 10, 10);

    this.fireRate = fireRate;
    this.shotSpeed = shotSpeed;
    this.accuracy = accuracy;

    this.firing = false;
    this.elapsed = -1;

    this.game = this.player.game;
  }
}

export default RangedWeapon;