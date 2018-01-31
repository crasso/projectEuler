let num = 600851475143;                     //starting number. Will store the resulting division by prime factor
let currentFactor = 2;                      //smallest prime number, this variable will serve to store the prime factors

while(num != 1){                            //run every factor until num/currentFactor == 1 (until they're equal)
  currentFactor = lesserFactor(num);        //currentFactor will be the smallest factor of the value num is currently at
  num /= currentFactor;                     //num will become the new number to which lesserFactor() will find the factor
}

//the smallest factor bigger than 1 of any given integer bigger than 1 will always be prime so:

function lesserFactor(n){                   //find the smallest factor that's not 1, of any given integer
  for(let i = 2; i <= Math.sqrt(n); i++){   //run through every integer bigger than 1, up to the square root of n
    if(n % i === 0){                        //if i is a factor of n...
      return i;                             //return the factor
    }
  }
  return n;                                 //if it found no factor the smallest factor is the given number
}

console.log(currentFactor);                 //log the last factor found