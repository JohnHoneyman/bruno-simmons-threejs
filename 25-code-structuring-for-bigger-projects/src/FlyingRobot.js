import Robot from "./Robot";

export default class FlyingRobot extends Robot {
  constructor(name, legs) {
    super(name, legs);
  }

  sayHi() {
    console.log(`I'm ${this.name}, and I'm a flying robot.`);
  }

  land() {
    console.log("Landing");
  }

  takeOff() {
    console.log("Taking Off");
  }

  fly() {
    console.log("Flying");
  }
}
