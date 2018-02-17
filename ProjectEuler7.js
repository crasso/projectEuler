var primeNum = 2;                 //first prime number
var count = 1;                    //counts the prime numbers found
var isPrime = 1;                  //boolean to check if it's prime or not
//start a cyle at the next given prime. Will run 'til it finds the 10001th prime
for (var i = 3; count < 10002; i++){
  //cycle to run every number while j is lesser than half the value of i
    for(var j = 2; j < Math.floor(i / 2); j++){
      if(i % j === 0){           //check if i is divisible by j, if it is...
        isPrime = 0;             //it's not prime
        break;
      }
    }
    if(isPrime === 1){          //if isPrime remains at 1, it found no dividers
      primeNum = i;             //wich means it's prime
      count++;                  //increment the primes counter
    }else{
      isPrime = 1;              //restart the boolean to restart the cycle
    }
}
console.log(primeNum);