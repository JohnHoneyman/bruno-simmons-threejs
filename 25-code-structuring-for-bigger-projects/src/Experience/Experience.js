import Sizes from "./Utils/Sizes";
import Time from "./Utils/Time";

export default class Experience {
  constructor(canvas) {
    // // Global access .//Not usually advisable. Can be messy
    window.experience = this;

    this.canvas = canvas;

    this.sizes = new Sizes();
    this.time = new time();
    this.sizes.on("resize", () => {
      this.resize();
    });
  }

  resize() {}
}
