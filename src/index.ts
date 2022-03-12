// Hot Reloading - Recompile JS instantly during dev without full page refresh
// https://parceljs.org/features/development/#hot-reloading
import { App } from "./App";
import p5, { createEngine } from "./Renderer/p5";
const app = new App();
const init = async () => {
  // Fire up the P5 engine then begin our loop
  // const p5 =
  const engine = await createEngine;
  setInterval(() => {
    console.log(p5);
  }, 1000);
  loop(0);
};
let elapsedPrev = 0;
const loop = (elapsed: number) => {
  // Run the update function within app then loop safely
  // console.log(foo);
  const dt = elapsed - elapsedPrev;
  elapsedPrev = elapsed;
  app.update(dt);
  (window as any).raf = window.requestAnimationFrame(loop);
};
window.addEventListener("DOMContentLoaded", init);
// Detect HMR refresh during dev and restart all the things
// @ts-ignore
module?.hot?.accept(() => {
  if (!!p5.setup) {
    // p5.setup();
    window.cancelAnimationFrame((window as any).raf);
    loop(0); // this elapsed will be wrong..
    p5.redraw();
  }
  // Or, more brutally..
  // window.location.reload();
});
