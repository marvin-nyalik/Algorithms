//given a number n, we can find its fibonacci value recursively

const fibonacci = (n) => {
  if(n === 0){
    return (`INVALID ENTRY ERROR: The fibonacci sequence starts as 1`)
  }
  if (n === 1 || n === 2){
    return 1
  }
  return fibonacci(n - 1) + fibonacci (n - 2);
};

console.log(fibonacci(0));
console.log(fibonacci(2)) // 1
console.log(fibonacci(3)); // 2
console.log(fibonacci(4)); // fib(3) + fib(2) = 3
console.log(fibonacci(5)); // 5
console.log(fibonacci(6)); // 8

//As you can see all numbers are the sum 
//of the previous 2 outputs, effectively the
//fibonacci series 

