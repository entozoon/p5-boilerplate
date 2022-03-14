import p5 from "../Engine/Renderer";
export class Ball {
  private direction = 1;
  private pos = {
    x: p5.width / 2,
    y: p5.height / 2,
  };
  public update(dt: number) {
    // Trace a sine wave, or something similar
    this.pos.x += 200 * dt * this.direction;
    this.pos.y =
      (Math.sin((this.pos.x / p5.width) * 10) * p5.height + p5.height) / 2;
    if (this.pos.x >= p5.width || this.pos.x <= 0) this.direction *= -1;
  }
  public render() {
    p5.fill(p5.color(100, 0, 200));
    p5.noStroke();
    p5.ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
