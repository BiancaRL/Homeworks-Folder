function play() {
    // Array with all the possibilities
    var choices = ["Rock", "Paper", "Scissors"];
  
    // Pick a random option for Computer and User
    var computerIndex = Math.floor(Math.random() * choices.length);
    var userIndex = Math.floor(Math.random() * choices.length);
  
    // Set Computer and User choices based on the randomly generated indices
    var computerChoice = choices[computerIndex];
    var userChoice = choices[userIndex];
  
    // Display the choices in the console
    console.log("Computer choice:", computerChoice);
    console.log("User choice:", userChoice);
  
    // Apply game rules and display the result
    if (
      (computerChoice === "Rock" && userChoice === "Scissors") ||
      (computerChoice === "Paper" && userChoice === "Rock") ||
      (computerChoice === "Scissors" && userChoice === "Paper")
    ) {
      console.log("Computer wins!");
    } else if (
      (computerChoice === "Rock" && userChoice === "Paper") ||
      (computerChoice === "Paper" && userChoice === "Scissors") ||
      (computerChoice === "Scissors" && userChoice === "Rock")
    ) {
      console.log("User wins!");
    } else {
      console.log("It's a tie!");
    }
  }
  
  // Call the play function
  play();