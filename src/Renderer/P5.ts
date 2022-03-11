// P5 singleton - this stuff is tricky to figure out, but we want to be able to import a single instance of the P5 engine anywhere in our project (rather than creating new instances all over the shop). Also using a promise to make certain it was created before other stuff kicks in
import p5Engine from "p5";
let p5;
export const createEngine = new Promise((resolve) => {
  p5 = new p5Engine((_p5) => {
    _p5.setup = () => {
      _p5.createCanvas(window.innerWidth, window.innerHeight);
      _p5.noLoop(); // we'll handle this ourselves
      console.log("::Engine created", _p5);
      window.onresize = () => {
        _p5.resizeCanvas(window.innerWidth, window.innerHeight);
      };
      resolve(_p5);
    };
  }, document.body);
});
export default p5;
