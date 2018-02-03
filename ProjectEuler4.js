let largestPal = 0;               //saves the largest palindrome
let finalI;                       //saves the first 3 digits number that multiplied amounts to the largest palindrome
let finalJ;                       //saves the last 3 digits number that multiplied amounts to the largest palindrome
for(let i = 100; i <= 999; i++){  //run every 3 digit integer
  for(let j = 100;j <= 999; j++){ //same as above
    let actualNum = i * j;        //current product, to validate if it's palindrome
    //convert actualNum to string in order to reverse it and compare actualNum with the reversed version of it
    //if it amounts to a palindrome and it's value is bigger than the last palindrome stored...
    if(actualNum + "" === (actualNum + "").split("").reverse().join("") && largestPal < actualNum){
      largestPal = actualNum;     //replace largestPal for the new biggest palindrome (actualNum)
      finalI = i;                 //read comment in line 2
      finalJ = j;                 //read comment in line 3
    }
  }
}

console.log(largestPal);
console.log("i = " + finalI +"\nj = " + finalJ);