// This file is the first port-of-call and just mainly starts firing App.ts' update and render functions
import { App } from "./App";
import p5, { createEngine } from "./Engine/Renderer";
let app;
const init = async () => {
  // Fire up the P5 engine then begin our loop in earnest
  await createEngine;
  app = new App();
  loop(0);
};
let elapsedPrev = 0;
const loop = (elapsed: number) => {
  // Run the update function within app then loop safely, providing delta time (dt) since last frame
  const dt = (elapsed - elapsedPrev) / 1000; // ms
  elapsedPrev = elapsed;
  app.update(dt);
  app.render();
  (window as any).raf = window.requestAnimationFrame(loop);
};
window.addEventListener("DOMContentLoaded", init);
// Hot Reloading - Detect refresh during dev and restart all the things
// https://parceljs.org/features/development/#hot-reloading
// @ts-ignore
module?.hot?.accept(() => {
  // if (!!p5.setup) {
  // window.cancelAnimationFrame((window as any).raf);
  // init();
  // // p5.setup();
  // p5.redraw();
  // }
  // Or, more brutally..
  // (So much slower but I'm fucking fed up with trying to figure out how to destroy app
  setTimeout(() => {
    window.location.reload();
  }, 100);
});
