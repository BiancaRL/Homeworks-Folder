function Vehicle(type) {
  this.type = type;
}

Vehicle.prototype.accelerate = function () {
  console.log(`${this.type} is accelerating.`);
};

function Bus() {
  Vehicle.call(this, "Bus");
}

Bus.prototype = Object.create(Vehicle.prototype);
Bus.prototype.pickUpPassengers = function () {
  console.log("Bus is picking up passengers.");
};

function SUV() {
  Vehicle.call(this, "SUV");
}

SUV.prototype = Object.create(Vehicle.prototype);
SUV.prototype.offRoad = function () {
  console.log("SUV is going off-road.");
};

function Motorcycle() {
  Vehicle.call(this, "Motorcycle");
}

Motorcycle.prototype = Object.create(Vehicle.prototype);
Motorcycle.prototype.wheelie = function () {
  console.log("Motorcycle is doing a wheelie.");
};

function Truck() {
  Vehicle.call(this, "Truck");
}

Truck.prototype = Object.create(Vehicle.prototype);
Truck.prototype.deliverGoods = function () {
  console.log("Truck is delivering goods.");
};

function Car() {
  Vehicle.call(this, "Car");
}

Car.prototype = Object.create(Vehicle.prototype);
Car.prototype.drive = function () {
  console.log("Car is driving.");
};

function Van() {
  Vehicle.call(this, "Van");
}

Van.prototype = Object.create(Vehicle.prototype);
Van.prototype.transportGoods = function () {
  console.log("Van is transporting goods.");
};

function Highway() {
  const vehicles = [];

  function addVehicle(vehicle) {
    if (!vehicles.includes(vehicle)) {
      vehicles.push(vehicle);
      console.log(`${vehicle.type} added to the highway.`);
    } else {
      console.log(`${vehicle.type} is already on the highway.`);
    }
  }

  function allowVehiclesToRun() {
    console.log("Vehicles running on the highway:");
    vehicles.forEach((vehicle) => {
      vehicle.accelerate();
      if (vehicle instanceof Bus) {
        vehicle.pickUpPassengers();
      } else if (vehicle instanceof SUV) {
        vehicle.offRoad();
      } else if (vehicle instanceof Motorcycle) {
        vehicle.wheelie();
      } else if (vehicle instanceof Truck) {
        vehicle.deliverGoods();
      } else if (vehicle instanceof Car) {
        vehicle.drive();
      } else if (vehicle instanceof Van) {
        vehicle.transportGoods();
      }
    });
  }

  return {
    addVehicle,
    allowVehiclesToRun,
  };
}

const bus = new Bus();
const suv = new SUV();
const motorcycle = new Motorcycle();
const truck = new Truck();
const car = new Car();
const van = new Van();

const highway1 = new Highway();
const highway2 = new Highway();

highway1.addVehicle(bus);
highway1.addVehicle(suv);
highway1.addVehicle(motorcycle);
highway2.addVehicle(truck);
highway2.addVehicle(van);
highway2.addVehicle(car);

highway1.allowVehiclesToRun();
console.log("------------------------");
highway2.allowVehiclesToRun();
