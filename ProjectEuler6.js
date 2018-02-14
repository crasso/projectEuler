var sumOfSquare = 0;
var squareOfSum = 0;
for(var i = 1; i <= 100; i++){ //from 1 to 100...
  sumOfSquare += i * i;        //get the sum every number squared
  squareOfSum += i;            //get the sum of all numbers
}
squareOfSum *= squareOfSum;   //get the square of the sum of all numbers

console.log(squareOfSum - sumOfSquare);