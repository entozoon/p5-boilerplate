// P5 singleton - this stuff is tricky to figure out, but we want to be able to import a single instance of the P5 engine anywhere in our project (rather than creating new instances all over the shop). Also using a promise to make certain it was created before other stuff kicks in
import p5Engine from "p5";
let p5: p5Engine;
export const createEngine = new Promise((resolve) => {
  new p5Engine((p5: p5Engine) => {
    p5.setup = () => {
      p5.createCanvas(window.innerWidth, window.innerHeight);
      p5.noLoop(); // we'll handle this ourselves
      console.log("::Engine created", p5);
      window.onresize = () => {
        p5.resizeCanvas(window.innerWidth, window.innerHeight);
      };
      resolve(p5 as p5Engine);
    };
  }, document.body);
});
export default p5;
