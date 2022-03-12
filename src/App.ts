import p5 from "./Renderer/p5";
export class App {
  private posBall;
  constructor() {
    this.posBall = {
      x: p5.width / 2,
      y: p5.height / 2,
    };
    console.log("reconstructing", this.posBall.x);
  }
  public update(dt: number) {
    p5.fill(p5.color(0, 0, 0));
    p5.rect(0, 0, p5.width, p5.height);
    this.posBall.x += 10 * dt;
    // if (Math.random() > 0.9) {
    //   console.log("dt", dt.toFixed(4), this.posBall.x.toFixed(0));
    // }
    p5.fill(p5.color(100, 0, 0));
    p5.noStroke();
    p5.ellipse(this.posBall.x, this.posBall.y, 10, 10);
  }
}
