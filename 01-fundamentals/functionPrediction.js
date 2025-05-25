function predictLuckyNumber() {
  // Generate a random number between 1 and 10
  const luckyNumber = Math.floor(Math.random() * 10) + 1;

  // Output the result
  console.log(" Your lucky number is: " + luckyNumber);
}

// Call the function
predictLuckyNumber();
