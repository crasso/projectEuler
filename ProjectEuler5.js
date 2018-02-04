var start = 20;                 //start at the last divisible number, just to save 20 numbers from the loop
var lastDivisibleNum = 1;       //in the coming code, is gonna save the last number that start is dividable for

while (lastDivisibleNum != 20){ //while start isn't dividable by all the nums up to 20

  for(var i = 2; i < 21; i++){  //run every number from 2 to 20 in order to...
  
    if(start % i !== 0){        //check if start can be evenly divided by all numbers up to 20
    
      break;                    //if it isn't evenly divisible by just one of the numbers, break the cycle
      
    }else{
      
       lastDivisibleNum = i;    //if it is, then the last divisible number is i
       
    }
    
  }
  
  if(lastDivisibleNum == 20){   //if, when the code reaches this point, the last divisible num is 20
  
    console.log(start);         // then start is the smallest positive number evenly divisible
                                //by all of the numbers from 1 to 20...
    break;                      //and we can finish the program right here
    
  }else{                        //if last divisible number found isn't 20...
    
    start+=20;                  //add 20 to start, because the number must be a multiple of 20, and keep looking
    
  }
  
}