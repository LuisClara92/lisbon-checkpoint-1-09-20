/*
Our soccer team plays a tournament in which it played 10 matches.
Match results are noted "3:0": first number is **our** team's goals count ; the second is the other team's.
To know our team's score, we follow these rules:
- Victory: 3pts
- Draw: 1pt
- Defeat: 0pt
Given an array with our match's results, write a function which will return our score.
To test your function, if you "feed" your function the array under this text, you should get 12 points.
*/

const scores = [
  "1:0",
  "2:0",
  "3:0",
  "4:4",
  "2:2",
  "3:3",
  "1:4",
  "2:3",
  "2:4",
  "3:4"
];
// console.log(scores, typeof scores);
function getPoints(array) {
  // Your code here !
  // order scores for easly comparison 
  // create loop to check if my team score is higher than other team
  for(let i = 0; i <array.length; i++){
    var array = array.sort((a,b)=>{
  // stablish connection between score and points 
      //a > b = 3pts
    if (a > b){
      return 3
      //a = b = 1pts
    }else if (a == b){
      return 1
      //a < b = 0pt
    }else{
      return 0
    }})
  }
console.log(array);


// create accumulator for points conquered




}

console.log(getPoints(scores));