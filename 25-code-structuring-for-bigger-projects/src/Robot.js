class Robot {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
    console.log(`I am ${this.name}. Thank you creator`);
    this.sayHi();
  }

  sayHi() {
    console.log(`Hello! I am ${this.name}`);
  }
}

export default Robot;
