class RangedWeapon {
  constructor(player, fireRate, shotSpeed) {
    this.fireRate = fireRate;
    this.shotSpeed = shotSpeed;
    this.firing = false;
    this.elapsed = -1;

    this.player = player;
    this.game = this.player.game;
  }
}

export default RangedWeapon;