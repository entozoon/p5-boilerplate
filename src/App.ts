import { Ship } from "./Objects/Ship";
import p5 from "./Renderer/p5";
export class App {
  private ship = new Ship();
  constructor() {}
  private clearScreen() {
    p5.fill(p5.color(0, 0, 0));
    p5.rect(0, 0, p5.width, p5.height);
  }
  public update(dt: number) {
    this.clearScreen();
    this.ship.update(dt);
  }
  public render() {
    this.ship.render();
  }
}
