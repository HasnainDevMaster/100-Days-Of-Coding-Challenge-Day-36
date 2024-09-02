// 100 Days Of Coding Challenge!

/** Question 109: Start your day with a greeting based on the current time.
Write an if statement that logs `Good Morning` if the current time is before 12 PM.*/

//------------------------------------------------------------------------------------

// Get the current hour
const currentHour = new Date().getHours();

// Check if the current hour is before 12 PM
if (currentHour < 12) {
  // Log "Good Morning"
  console.log("Good Morning");
}