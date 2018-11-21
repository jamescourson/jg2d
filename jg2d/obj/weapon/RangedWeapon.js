class RangedWeapon {
  constructor(fireRate, shotSpeed) {
    this.fireRate = fireRate;
    this.shotSpeed = shotSpeed;
    this.firing = false;
    this.elapsed = -1;
  }
}

export default RangedWeapon;