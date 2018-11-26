class Rect {
  constructor(x, y, width, height) {
    this.x = x;
    this.y = y;

    this.width = width;
    this.height = height;

    this.left = () => { return this.x; }
    this.right = () => { return this.x + this.width; }
    this.top = () => { return this.y; }
    this.bottom = () => { return this.y + this.height; }

    this.sides = [
      this.left,
      this.right,
      this.top,
      this.bottom
    ]
  }

  collidesWith(a) {
    if (this.right() > a.left() && this.left() < a.right()) {
      if (this.bottom() > a.top() && this.top() < a.bottom()) {
        return true;
      }
    }
    
    return false;
  }

  getCollisionFace(a, x, y) {
    if (x > a.left() && x < a.right()) {
      return 'y';
    }
    else {
      return 'x';
    }
  }
}

export default Rect;