// 100 Days Of Coding Challenge!

/** Question 111: Identify age groups with a simple function
Use an if-else-if chain to categorize a persons age group (child, teenager, adult).*/

//------------------------------------------------------------------------------------

/**
 * Categorizes a person's age group.
 * @param age - The person's age.
 * @returns The age group (child, teenager, adult).
 */

// Function "categorizeAgeGroup()" to categorize a person's age group
function categorizeAgeGroup(age: number): string {
  if (age < 13) {
    return "child";
  } else if (age < 20) {
    return "teenager";
  } else {
    return "adult";
  }
}

// Example 1: Age 10 (child)
const age1 = 10;
console.log(`Age ${age1}: ${categorizeAgeGroup(age1)}`); // Output: Age 10: child

// Example 2: Age 15 (teenager)
const age2 = 15;
console.log(`Age ${age2}: ${categorizeAgeGroup(age2)}`); // Output: Age 15: teenager

// Example 3: Age 25 (adult)
const age3 = 25;
console.log(`Age ${age3}: ${categorizeAgeGroup(age3)}`); // Output: Age 25: adult
