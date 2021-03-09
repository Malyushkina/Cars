class Driver {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  sayHello(name) {
    console.log(`Привет, меня зовут ${this.name}!`);
  }
}
class Vehicle {
  getin(user) {
    console.log(`Я ${this.color} ${this.model}, в меня сел ${user.name}!`);
  }
  drive() {
    console.log(`Я ${this.model}, я еду!`);
  }
  brake() {
    console.log(`Я ${this.type} ${this.model}, я торможу ${this.speed}!`);
  }
  getout(user) {
    console.log(`Я ${this.type} ${this.model}, из меня вышел ${user.name}!`);
  }
}

class Car extends Vehicle {
  constructor(model, color) {
    super(model, color);
    this.model = model;
    this.color = color;
    this.type = "АВТОМОБИЛЬ";
    this.speed = "БЫСТРО";
  }
}
class Track extends Vehicle {
  constructor(model, color) {
    super(model, color);
    this.model = model;
    this.color = color;
    this.type = "ГРУЗОВИК";
    this.speed = "МЕДЛЕННО";
  }
}

let p1 = new Driver("Пётр", 36);
p1.sayHello();

let c1 = new Car("lada", "green");

c1.getin(p1);
c1.drive();
c1.brake();
c1.getout(p1);

let t1 = new Track("gazel", "grey");
t1.getin(p1);
t1.drive();
t1.brake();
t1.getout(p1);
