// Problem 1: Print Reverse

function printReverse(numbers){
    for (var i = numbers.length -1; i >= 0; i--) {
        console.log(numbers[i]);
    }
}
printReverse([1,2,3,4,5]);

// Problem 2: Is Uniform

function isUniform(words){
    var first = words[0];
    for (var i = 1; i < words.length; i++) {
        if (words[i] !== first) {
            return false;
        }
    }
    return true;
}
isUniform([1,1,2,1]);


// Problem 3: Sum Array

function sumArray(arr) {
    var total = 0;
    arr.forEach(function(num){
        total = total + num;
    });
    return total;
}
sumArray([1,2,3]);

// Problem 4: Max:

function max(arr) {
    var max = arr[0];
    for (var i = 1; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return max;
}
max([1,2,3]);
