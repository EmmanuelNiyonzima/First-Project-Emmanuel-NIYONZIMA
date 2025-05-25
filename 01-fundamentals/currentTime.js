// Display Current Day and Time

function displayCurrentDayAndTime() {
  const now = new Date();

  // Array of days to convert day index to name
  const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
  const day = days[now.getDay()];

  // Get current time components
  let hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  // Determine AM or PM
  const ampm = hours >= 12 ? 'PM' : 'AM';

  // Convert to 12-hour format
  hours = hours % 12;
  hours = hours ? hours : 12; // the hour '0' should be '12'

  // Handle special cases
  const isNoon = hours === 12 && minutes === 0 && seconds === 0 && ampm === "PM";
  const isMidnight = hours === 12 && minutes === 0 && seconds === 0 && ampm === "AM";

  // Display the results
  console.log("Today is : " + day + ".");
  
  if (isNoon) {
    console.log("Current time is : Noon");
  } else if (isMidnight) {
    console.log("Current time is : Midnight");
  } else {
    console.log(
      `Current time is : ${hours} ${ampm} : ${minutes} : ${seconds}`
    );
  }
}

// Run the function
displayCurrentDayAndTime();
