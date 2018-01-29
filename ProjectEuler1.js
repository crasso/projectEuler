let sum = 0; 
for (let i = 3; i < 1000; i++){                 //run all numbers below 1000
  if ((i % 3 === 0) || (i % 5 === 0)) sum += i; //check if is multiple of 3 or 5 and add it to sum
}
console.log(sum);