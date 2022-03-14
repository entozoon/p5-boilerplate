import { Ball } from "./Objects/Ball";
import p5 from "./Engine/Renderer";
export class App {
  private ball = new Ball();
  constructor() {}
  private clearScreen() {
    p5.fill(p5.color(0, 0, 0));
    p5.rect(0, 0, p5.width, p5.height);
  }
  public update(dt: number) {
    this.clearScreen();
    this.ball.update(dt);
  }
  public render() {
    this.ball.render();
  }
}
