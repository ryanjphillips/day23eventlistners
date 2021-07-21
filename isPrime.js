//Function determines if a argument is a prime number

function isPrime(testNumb){
    if (testNumb === 1 || testNumb === 2){

        return true;
    }
    else if (testNumb % 2 === 0){

        return false;
    }
    
    //If the number is divisible by any number under it.
    for (let i = 3; i < testNumb; i += 2) {
        if (testNumb % i === 0){
            return false;
        }
    }
    return testNumb > 1;
  }