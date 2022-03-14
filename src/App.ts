import p5 from "./Engine/Renderer";
import { Ball } from "./Objects/Ball";
export class App {
  // Create a Ball instance
  private ball = new Ball();
  constructor() {}
  private clearScreen() {
    p5.fill(p5.color(0, 0, 0));
    p5.rect(0, 0, p5.width, p5.height);
  }
  public update(dt: number) {
    // Update ball for this frame (changing position and whatnot)
    this.ball.update(dt);
  }
  public render() {
    // Clear screen and re-render the ball
    this.clearScreen();
    this.ball.render();
  }
}
