/*
Write a function with two parameters. These parameters are arrays, holding numbers **stored as strings**.
Your function should return **one** array, where every element is the sum of the two matching arguments's elements (ie: the first element in the resulting array equals the first element of the first argument plus the first element from the second argument).
Note: If an element is empty, it should count as a 0.
Ex: 
sumArr( ["1", "2", "3"], ["2", "4", "1"] ) should return ["3", "6", "4"]
sumArr( ["2", "7", "3"], ["2", "4", "9"] ) should return ["4", "11", "12"]
sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ) should return ["4", "11", "12", "8", "2"]
*/

function sumArr(arrayA, arrayB) {
  // Your code here !

  //TRY 1
  // let sum = 0;

  // for(var i=0; i< arrayA.length; i++) {
  //   sum = parseInt(arrayA[i])+parseInt(arrayB[i]);
  // }
    
  // return sum

  //TRY 2 (DON'T WORKS PERFECTLY ON DIFFERENT LENGTHS)
  
  // var sum = arrayA.map(function (num, idx) {
    
  //   return (parseInt(num) + parseInt(arrayB[idx]));
  // })
  // return sum

  //TRY 3 (WORK!!!)
  var arrayC = [];
  for (var i = 0; i < Math.max(arrayA.length, arrayB.length); i++) {
    arrayC.push((parseInt(arrayA[i]) || 0) + (parseInt(arrayB[i]) || 0));
  }
  return arrayC
  
 }


console.log(sumArr( ["1", "2", "3"], ["2", "4", "1"] ))//["3", "6", "4"]
console.log(sumArr( ["2", "7", "3"], ["2", "4", "9"] ))//["4", "11", "12"]
console.log(sumArr( ["2", "7", "3", "8", "2"], ["2", "4", "9"] ))//["4", "11", "12", "8", "2"];

