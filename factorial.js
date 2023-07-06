//given a number n, we can find the factorial of
//n recursively

const factorial = (n) => {
    if(n === 1) {
        return 1
    }
    return n * factorial(n - 1);
}

console.log(factorial(3)) // 3 x 2 x 1 = 6
console.log(factorial(4)) // 4 * factorial(3) = 24
console.log(factorial(5)) // 5 * factorial(4) = 120