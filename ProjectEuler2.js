let previous = 0;                     //starting point that will save the previous fibonacci number in the sequence
let actual = 1;                       //current fibonacci number
let total = 0;                        //will save the sum of the even fibonacci numbers
while(actual <= 4000000){             //will only run fibonacci numbers up to 4 million to check for even fibonacci's
  previous = actual - previous;       //this line undoes line 9 in order to actualize the previous fibonacci 
  if(actual % 2 === 0){               //if it's even then...
    total += actual;                  //add the even fibonacci number to the sum of even fibonacci's
  }
  actual += previous;                 //get the next fibonacci by adding the previous one to the current. Actualize the loop
}
console.log(total);
