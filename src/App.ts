import p5 from "./Renderer/p5";
export class App {
  constructor() {}
  public update(dt) {
    let r = 20;
    let c = p5.color(r, 0, 0);
    p5.fill(c);
    p5.noStroke();
    p5.ellipse(0, 0, p5.width, p5.height);
  }
}