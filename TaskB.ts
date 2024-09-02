// 100 Days Of Coding Challenge!

/** Question 110: Grade students with a simple function
Create a function that assigns a grade (A, B, C, D, F) based on a students score.*/

//----------------------------------------------------------------------------------

/**
 * Assigns a grade based on the student's score.
 * @param score - The student's score (0-100).
 * @returns The grade (A, B, C, D, F).
 */

// Function "assignGrade()" that takes a number as an argument and returns a string
function assignGrade(score: number): string {
  if (score >= 90) {
    return "A";
  } else if (score >= 80) {
    return "B";
  } else if (score >= 70) {
    return "C";
  } else if (score >= 60) {
    return "D";
  } else {
    return "F";
  }
}

// Example 1: Score 95 (Grade A)
const score1 = 95;
console.log(`Score ${score1}: ${assignGrade(score1)}`); // Output: Score 95: A

// Example 2: Score 85 (Grade B)
const score2 = 85;
console.log(`Score ${score2}: ${assignGrade(score2)}`); // Output: Score 85: B

// Example 3: Score 75 (Grade C)
const score3 = 75;
console.log(`Score ${score3}: ${assignGrade(score3)}`); // Output: Score 75: C

// Example 4: Score 65 (Grade D)
const score4 = 65;
console.log(`Score ${score4}: ${assignGrade(score4)}`); // Output: Score 65: D

// Example 5: Score 55 (Grade F)
const score5 = 45;
console.log(`Score ${score5}: ${assignGrade(score5)}`); // Output: Score 45: F
