let userName = "",
  userAge = 0;

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
  constructor(model, color, isTrack) {
    this.model = model;
    this.color = color;
    this.track = isTrack;
  }
  getin() {
    console.log(`Я ${this.color} ${this.model}, в меня сел ${userName}!`);
  }
  drive() {
    console.log(`Я ${this.model}, я еду!`);
  }
  brake() {
    if (userAge >= 18) {
      if (this.track == false) {
        console.log(`Я АВТОМОБИЛЬ ${this.model}, я торможу БЫСТРО!`);
      } else {
        if (userAge >= 21) {
          console.log(`Я ГРУЗОВИК ${this.model}, я торможу МЕДЛЕННО!`);
        } else {
          console.log(`${userName} слишком молод, чтобы водить грузовик!`);
        }
      }
    } else {
      console.log(`${userName} слишком молод, чтобы управлять автомобилем или грузовиком!`);
    }
  }
  getout() {
    if (this.track == false) {
      console.log(`Я АВТОМОБИЛЬ ${this.model}, из меня вышел ${userName}!`);
    } else {
      console.log(`Я ГРУЗОВИК ${this.model}, из меня вышел ${userName}!`);
    }
  }
}

drives = (name, age, model, color, isTrack) => {
  let user = new Driver(name, age);
  user.sayHello();
  userName = user.name;
  userAge = user.age;

  let vehicle = new Vehicle(model, color, isTrack);
  vehicle.getin();
  vehicle.brake();
  vehicle.getout();
};
drives("Пётр", 25, "lada granta", "синий", false);
drives("Пётр", 25, "Газель", "серый", true);
