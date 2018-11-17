import Weapon from './weapon.js';

class Gun extends Weapon {
  constructor(damage, fireRate, shotSpeed) {
    super(damage);

    // fireRate - shots per second
    this.fireRate = fireRate;
    
    // shotSpeed - speed in px
    this.shotSpeed = shotSpeed;

    // firing - if the weapon is firing
    this.firing = false;

    // elapsed - frames since firing
    this.elapsed = -1;
  }
}

export default Gun;