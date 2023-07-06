//Given a positive number n, you can find 
//the sum of all numbers greater than 1 
// n + (n - 1) + (n - 2) + ... + 1 using
//recursion

function sum(number) {
    // write your code here
    if(number === 1){
      return 1;
    }
    return number + sum(number - 1);
}

console.log(sum(4)) //10
console.log(sum(10)) //55

`The function recursively calls itself until 
the exit condition is met`