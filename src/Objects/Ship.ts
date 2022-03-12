import p5 from "../Renderer/p5";
export class Ship {
  private pos = {
    x: p5.width / 2,
    y: p5.height / 2,
  };
  public update(dt: number) {
    this.pos.x += 10 * dt;
  }
  public render() {
    p5.fill(p5.color(100, 0, 0));
    p5.noStroke();
    p5.ellipse(this.pos.x, this.pos.y, 10, 10);
  }
}
