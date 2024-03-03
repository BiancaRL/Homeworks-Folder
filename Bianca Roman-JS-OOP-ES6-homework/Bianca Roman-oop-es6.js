class Reservation {
  constructor(name, date, time, guestCount) {
    this.name = name;
    this.date = date;
    this.time = time;
    this.guestCount = guestCount;
  }

  isSamePerson(name) {
    return this.name === name;
  }
}

class Guest extends Reservation {
  constructor(name, date, time, guestCount, specialRequests) {
    super(name, date, time, guestCount);
    this.specialRequests = specialRequests;
  }
}

class MenuItem {
  constructor(name, price) {
    this.name = name;
    this.price = price;
  }
}

class Order {
  constructor(tableNumber) {
    this.tableNumber = tableNumber;
    this.items = [];
    this.menuItemNames = [];
    this.totalPrice = 0;
  }

  addMenuItem(item) {
    if (this.menuItemNames.includes(item.name)) {
      console.log(`Item "${item.name}" is already in the order.`);
    } else {
      this.items.push(item);
      this.menuItemNames.push(item.name);
      console.log(
        `Menu item "${item.name}" added to order for table ${this.tableNumber}.`
      );
    }
  }

  removeMenuItem(itemName) {
    const index = this.menuItemNames.indexOf(itemName);
    if (index !== -1) {
      this.menuItemNames.splice(index, 1);
      console.log(
        `Menu item "${itemName}" removed from order for table ${this.tableNumber}.`
      );
    } else {
      console.log(
        `Menu item "${itemName}" not found in order for table ${this.tableNumber}.`
      );
    }

    this.items = this.menuItemNames.map((itemName) =>
      restaurant.menu.find((item) => item.name === itemName)
    );
  }

  calculateTotalPrice() {
    this.totalPrice = this.items.reduce((total, item) => total + item.price, 0);
    return this.totalPrice;
  }

  getGuestCount() {
    return this.items.reduce((total, item) => {
      if (item instanceof Reservation || item instanceof Guest) {
        return total + item.guestCount;
      } else {
        return total;
      }
    }, 0);
  }
}

class OnlineOrder extends Order {
  constructor(deliveryAddress) {
    super(null);
    this.deliveryAddress = deliveryAddress;
    this.deliveryFee = 5.0;
  }

  getGuestCount() {
    return 0;
  }

  calculateTotalPrice() {
    super.calculateTotalPrice();
    this.totalPrice += this.deliveryFee;
    return this.totalPrice;
  }
}

class Restaurant {
  constructor(name, capacity) {
    this.name = name;
    this.capacity = capacity;
    this.reservations = [];
    this.menu = [];
    this.orders = [];
  }

  addReservation(reservation) {
    if (!this.isFullyBooked(reservation.guestCount)) {
      this.reservations.push(reservation);
      console.log(`Reservation for ${reservation.name} added to ${this.name}.`);
    } else {
      console.log(
        `Sorry, ${this.name} is fully booked for the given date and time.`
      );
    }
  }

  isReservationAvailable(reservationName) {
    const reservationExists = this.reservations.some(
      (reservation) => reservation.name === reservationName
    );
    console.log(
      reservationExists
        ? `Reservation with name "${reservationName}" already exists in the reservation list.`
        : `Reservation with name "${reservationName}" does NOT exist in the reservation list.`
    );
    return !reservationExists;
  }

  removeReservation(reservationName) {
    const initialCount = this.reservations.length;
    this.reservations = this.reservations.filter(
      (reservation) => reservation.name !== reservationName
    );
    const removedCount = initialCount - this.reservations.length;

    if (removedCount > 0) {
      console.log(
        `Reservation with name "${reservationName}" removed from ${this.name}.`
      );
    } else {
      console.log(
        `No reservation found with name "${reservationName}" in ${this.name}.`
      );
    }
  }

  removePersonFromReservation(personName) {
    this.reservations.forEach((reservation, index) => {
      if (
        reservation instanceof Guest &&
        reservation.isSamePerson(personName)
      ) {
        this.removeReservation(reservation.name);
        console.log(`Person "${personName}" removed from reservation.`);
      }
    });
  }

  checkAvailability() {
    return this.capacity - this.getGuestCount();
  }

  listReservations() {
    return this.reservations.map((reservation) => reservation.name);
  }

  isFullyBooked() {
    return this.getGuestCount() >= this.capacity;
  }

  getGuestCount() {
    return this.reservations.reduce(
      (total, reservation) => total + reservation.guestCount,
      0
    );
  }

  sortReservationsAlphabetically() {
    return this.reservations.map((reservation) => reservation.name).sort();
  }

  addOrder(order) {
    const unavailableItems = order.menuItemNames.filter(
      (itemName) => !this.menu.some((menuItem) => menuItem.name === itemName)
    );

    if (unavailableItems.length === 0 && !this.isFullyBooked()) {
      this.orders.push(order);
      console.log(
        `Order for table ${order.tableNumber} added to ${this.name}.`
      );
    } else {
      console.log(
        `Sorry, ${this.name} is fully booked or some items are not available. Unable to add the order.`
      );
    }
  }

  removeOrder(tableNumber) {
    const index = this.orders.findIndex(
      (order) => order.tableNumber === tableNumber
    );
    if (index !== -1) {
      this.orders.splice(index, 1);
      console.log(`Order for table ${tableNumber} removed from ${this.name}.`);
    } else {
      console.log(`No order found for table ${tableNumber} in ${this.name}.`);
    }
  }

  listOrders() {
    return this.orders;
  }

  getTotalRevenue() {
    return this.orders.reduce((total, order) => total + order.totalPrice, 0);
  }

  addMenuItem(item) {
    this.menu.push(item);
    console.log(`Menu item "${item.name}" added to ${this.name}'s menu.`);
  }

  removeMenuItem(itemName) {
    const index = this.menu.findIndex((item) => item.name === itemName);
    if (index !== -1) {
      this.menu.splice(index, 1);
      console.log(`Menu item "${itemName}" removed from ${this.name}'s menu.`);
      this.orders.forEach((order) => order.removeMenuItem(itemName));
      this.updateOrdersAfterMenuChange();
    } else {
      console.log(
        `No menu item found with name "${itemName}" in ${this.name}'s menu.`
      );
    }
  }

  updateOrdersAfterMenuChange() {
    this.orders.forEach((order) => {
      order.menuItemNames = order.menuItemNames.filter((itemName) =>
        this.menu.some((menuItem) => menuItem.name === itemName)
      );
      order.items = order.menuItemNames.map((itemName) =>
        this.menu.find((menuItem) => menuItem.name === itemName)
      );
      order.calculateTotalPrice();
    });
    this.reservations = this.reservations.filter(
      (reservation) => reservation.guestCount <= this.capacity
    );
  }

  listMenuItems() {
    return [...this.menu];
  }
}

const restaurant = new Restaurant("Marty Restaurant", 50);

const reservation1 = new Reservation("Popescu Ion", "2024-02-10", "17:00", 5);
const reservation2 = new Guest(
  "Miron Mihaela",
  "2024-02-10",
  "18:00",
  3,
  "Vegetarian"
);
const reservation3 = new Guest(
  "Vasilescu Andrei",
  "2024-02-10",
  "19:00",
  2,
  "No allergies"
);
const reservation4 = new Reservation("Ionescu Maria", "2024-02-10", "20:00", 5);

const existingReservationName = "Popescu Ion";
const nonExistingReservationName = "Iulian Miron";

const menuItem1 = new MenuItem("Potatoes with bacon", 15.5);
const menuItem2 = new MenuItem("Soup", 7.5);
const menuItem3 = new MenuItem("Grilled Chicken", 18.0);
const menuItem4 = new MenuItem("Cheesecake", 9.0);

const order1 = new Order(1);
const order2 = new Order(2);
const onlineOrder = new OnlineOrder("29 Summer Street");

restaurant.addReservation(reservation1);
restaurant.addReservation(reservation2);
restaurant.addReservation(reservation3);
restaurant.addReservation(reservation4);

restaurant.addMenuItem(menuItem1);
restaurant.addMenuItem(menuItem2);
restaurant.addMenuItem(menuItem3);
restaurant.addMenuItem(menuItem4);

order1.addMenuItem(menuItem1);
order1.addMenuItem(menuItem2);
order1.calculateTotalPrice();

order2.addMenuItem(menuItem3);
order2.addMenuItem(menuItem4);
order2.calculateTotalPrice();

onlineOrder.addMenuItem(menuItem1);
onlineOrder.addMenuItem(menuItem2);
onlineOrder.calculateTotalPrice();

restaurant.addOrder(order1);
restaurant.addOrder(order2);
restaurant.addOrder(onlineOrder);

console.log("List of Reservations:");
console.log(restaurant.listReservations());

console.log(
  `Is reservation "${existingReservationName}" available: ${restaurant.isReservationAvailable(
    existingReservationName
  )}`
);
console.log(
  `Is reservation "${nonExistingReservationName}" available: ${restaurant.isReservationAvailable(
    nonExistingReservationName
  )}`
);

console.log("\nList of Menu Items:");
console.log(restaurant.listMenuItems());

console.log("\nAdd and Remove Menu Items:");

const newItem = new MenuItem("Salad", 8.5);
restaurant.addMenuItem(newItem);
console.log("\nList of Menu Items after Adding New Item:");
console.log(restaurant.listMenuItems());

const itemToRemove = "Soup";
restaurant.removeMenuItem(itemToRemove);
console.log("\nList of Menu Items after Removing Item:");
console.log(restaurant.listMenuItems());

console.log("\nList of Orders:");
console.log(restaurant.listOrders());

console.log("\nTotal Revenue:");
console.log(restaurant.getTotalRevenue());

console.log("\nCheck Availability:");
console.log(`Number of available seats: ${restaurant.checkAvailability()}`);

console.log("\nIs Fully Booked:");
console.log(restaurant.isFullyBooked());

console.log("\nGet Guest Count:");
console.log(`Number of guests: ${restaurant.getGuestCount()}`);

console.log("\nSort Reservations Alphabetically:");
console.log(restaurant.sortReservationsAlphabetically());

const personToRemove = "Miron Mihaela";
restaurant.removePersonFromReservation(personToRemove);

console.log("\nList of Reservations after removing a person:");
console.log(restaurant.listReservations());

/*
  In the given problem, I started with the Reservation class, then created a Guest class that inherits from Reservation, 
  then proceeded to MenuItem, Order, and OnlineOrder.
  
  Finally, I defined the Restaurant class, which uses and interacts with the other classes.
  
  In general, it's a good practice to start with the base classes and progress to the specialized or derived ones. 
  Therefore, I began with the base Reservation class and built upon it by adding additional functionalities in the derived or related classes.
  
  For online orders, I also added a delivery fee, and the Table Number is displayed as null because it is not a table within the restaurant.
  
  Additionally, I designed the code so that when, for example, soup is removed from the restaurant's menu but has already been ordered, 
  it is also removed from the customers' orders.
  */
