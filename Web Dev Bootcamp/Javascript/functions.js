// Function which takes a single numberic argument and returns true if the number is even; otherwise false.
function isEven(num) {
    if (num % 2 === 0) {
        return true;
    }
    return false;
}
// Simplified version
function isEven(num) {
    return num % 2 === 0;
}

// Function which takes a single numeric argument and returns the factorial of that number
function factorial(n) {
    var result =  1;
    for (var i = 2; i <= n; i++) {
        result *= i;
// the above is the same as saying 'result = result * i'
    }
    return result;
}

// Function which takes a single kebab-cased string argument and returns the snake-cased version
function kebabToSnake(str) {
    var myString = str.replace(/-/g, "_");
    return myString;
}



// Higher Order Functions
function sing() {
    console.log("twinkle twinkle little star...")
    console.log("how i wonder what you are...")
}

setInterval(sing, 5000);
// the above function is calling my function 'sing' and telling it to be executed every 5 seconds
// Use clearInterval(x) to stop the function. X being the number the console gives you once first executing the setInterval function
