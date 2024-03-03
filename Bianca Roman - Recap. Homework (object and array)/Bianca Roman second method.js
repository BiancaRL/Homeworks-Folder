// Define an object (person) using first-name and last-name properties
var person = {
  'first-name': "Maria",
  'last-name': "Popescu"
};

// Accessing the values of first-name and last-name
console.log("Original first name:", person['first-name']);
console.log("Original last name:", person['last-name']);

// Updating values
person['first-name'] = "Ioana";
person['last-name'] = "Miron";

// Accessing and printing the updated values
console.log("Updated first name:", person['first-name']);
console.log("Updated last name:", person['last-name']);

  // Array (List of Persons)
var peopleList = [
    {
      firstName: "Maria",
      lastName: "Popescu",
    },
    {
      firstName: "Dan",
      lastName: "Suciu",
    },
    {
      firstName: "Mihai",
      lastName: "Ionescu",
    }
  ];
  
  // Find the 2nd person in the array
  var secondPerson = peopleList[1];
  
  // Add a new property 'age' with value 25 to the 2nd person
  secondPerson.age = 25;
  
  // Display the array to verify the 2nd person's age
  console.log("Updated people list:", peopleList);