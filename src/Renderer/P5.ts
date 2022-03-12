// P5 singleton - this stuff is tricky to figure out, but we want to be able to import a single instance of the P5 engine anywhere in our project (rather than creating new instances all over the shop). Also using a promise to make certain it was created before other stuff kicks in
import P5Engine from "p5";
let p5: P5Engine;
export const createEngine = new Promise((resolve) => {
  p5 = new P5Engine((p5Engine: P5Engine) => {
    p5Engine.setup = () => {
      p5Engine.createCanvas(window.innerWidth, window.innerHeight);
      p5Engine.noLoop(); // we'll handle this ourselves
      window.onresize = () => {
        p5Engine.resizeCanvas(window.innerWidth, window.innerHeight);
      };
      console.log("::Engine created", p5Engine);
      // p5 = p5Engine;
      resolve(p5Engine);
    };
  }, document.body);
});
// How the fuck do I export stuff only after it's created?
// Shouldn't have to but.. initialised at least ?
// export let p5 = p5;
export default p5;
