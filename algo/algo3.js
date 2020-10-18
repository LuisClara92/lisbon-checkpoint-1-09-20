/*
A theater employee wants to display every seat in the main room.
In said room, seats are arranged like this:
- There are 26 columns of seats, labelled from "1" to "26"
- Every column contains 100 seats, labelled from "1" to "100"
Your final theater array should like this:
  1-1
  1-2
  1-3
  .
  .
  .
  26-98
  26-99
  26-100
*/

// HINT: Think about the following:
//  nested loops
// storing the operation from the nested loops in the theaterArray
// logging or returning the whole theaterArray
// Use the columns and seats variables used as parameters

function theaterSieges(columns, seats) {
  const theaterArray = [];
  // Your code here !
  //  nested loops
  //check columns
  for (let i = 1; i <= columns; i++) {
  // check seats
    for (let j =1; j <= seats ; j++){
      // put everything in same array
      theaterArray.push(`${i}-${j}`);
    } 
  } 
  //result
  return theaterArray
}

console.log(theaterSieges(26, 100));