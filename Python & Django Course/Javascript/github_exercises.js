/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */
 function numberToString(n){
     return "" + n;
 }

/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */
 function increase(n){
     return n+1;
 }

/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */
 function decrease(n){
     return n -1;
 }

/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */
 function add(x,y){
     return x +y;
 }

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */
 function subtract(x,y){
     return x-y;
 }

/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */
function multiply(x,y){
    return x*y;
}

/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */
 function divide(x,y){
     return x/y;
 }

/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */
 function square(x){
     return x*x;
 }

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

 // eg. of calling function: calculate('multiply', 3, 4)
 // result needs to be the last line in the statement as nothing on the same level after it will be executed
 function calculate(operation,x,y){
     if (operation == "multiply") {
         var result = x * y;
         console.log(`${x} * ${y} = ${result}`)
         return result;
     } else if (operation == "add") {
         var result = x + y;
         console.log(`${x} + ${y} = ${result}`)
         return result;
     } else if (operation == "divide") {
         var result = x / y;
         console.log(`${x} / ${y} = ${result}`)
         return result;
     } else if (operation == "subtract") {
         var result = x - y;
         console.log(`${x} - ${y} = ${result}`)
         return result;
    }
 }

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */
function isGreaterThan(x,y){
    if (x>y) {
        return true;
    }else {
        return false;
    }
}
/**
 * Returns true if `a` is less than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is smaller than `b`
 */
 function isLessThan(x,y){
     if (x<y) {
         return true;
     }else {
         return false;
     }
 }

/**
 * Returns true if `a` and `b` are equal.
 * @param {number} a
 * @param {number} b
 * @return {boolean} the numbers are equal
 */
 function areEqual(x,y){
     if (x === y) {
         return true;
     }else {
         return false;
     }
 }

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */
function minimum(x,y){
    if (x < y) {
        return x;
    }
    return y;
}

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */
 function maximum(x,y){
     if (x > y) {
         return x;
     }
     return y;
 }

/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */
 function isEven(n){
     if(n % 2 == 0) {
         return true;
     }
 }

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */
 function isOdd(n){
     if(n % 2 !== 0) {
         return true;
     }
 }

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */
function letterGrade(score, total){
    var result = (score/total)*100;

    if (result <=100 && result >=90) {
        return "A";
    }
    if (result <90 && result >=80) {
        return "B";
    }
    if (result <80 && result >=70) {
        return "C";
    }
    if (result <70 && result >=60) {
        return "D";
    }
    if (result <60 && result >=0) {
        return "F";
    }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */
function incrementReviews(restaurant){
    if (restaurant.reviews) {
        restaurant.reviews++;
        return restaurant;
    } else {
        restaurant.reviews=1;
        return restaurant;
    }
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */
 function combine(word1,word2){
     var result = word1 + " " + word2;
     return result;
 }
