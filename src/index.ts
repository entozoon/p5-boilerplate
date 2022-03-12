// Hot Reloading - Recompile JS instantly during dev without full page refresh
// https://parceljs.org/features/development/#hot-reloading
import { App } from "./App";
import p5, { createEngine } from "./Renderer/p5";
let app;
const init = async () => {
  // Fire up the P5 engine then begin our loop in earnest
  await createEngine;
  app = new App();
  loop(0);
};
let elapsedPrev = 0;
const loop = (elapsed: number) => {
  // Run the update function within app then loop safely
  const dt = (elapsed - elapsedPrev) / 1000; // ms
  elapsedPrev = elapsed;
  app.update(dt);
  app.render();
  (window as any).raf = window.requestAnimationFrame(loop);
};
window.addEventListener("DOMContentLoaded", init);
// Detect HMR refresh during dev and restart all the things
// @ts-ignore
module?.hot?.accept(() => {
  if (!!p5.setup) {
    // window.cancelAnimationFrame((window as any).raf);
    // init();
    // // p5.setup();
    // p5.redraw();
    // Or, more brutally..
    // (So much slower but I'm fucking fed up with trying to figure out how to destroy app
    window.location.reload();
  }
});
