// Define an object (person)
var person = {
    "first-name": "Maria",
    "last-name": "Popescu"
  };
  
  // Update values for properties in the person object
  person["first-name"] = "Gabriela";
  person["last-name"] = "Campean";

  console.log(person);
  
  // Define an array (list of persons)
  var listOfPersons = [
    { "first-name": "Alina", "last-name": "Baciu" },
    { "first-name": "Mihai", "last-name": "Damian" },
    { "first-name": "Dan", "last-name": "Ionescu" }
  ];
  
  // Find the 2nd person in the array and add a new property 'age' with value 25
  if (listOfPersons.length >= 2) {
    listOfPersons[1].age = 25;
  }
  
  // Display the array to verify the 2nd person's age
  console.log(listOfPersons);