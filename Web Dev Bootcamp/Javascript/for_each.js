// forEach:

var numbers = [1,2,3,4,5,6,7,8,9,10];

numbers.forEach(function(number){
    if (number % 3 === 0) {
        console.log(number);
    }
});

// the exact same argument but using For loop:

var numbers = [1,2,3,4,5,6,7,8,9,10];

for (var i = 0; i < numbers.length; i++) {
    console.log('Current index is ', i);
    var currentNumberFromList = numbers[i];
    console.log('Current number is ', currentNumberFromList)
    if (currentNumberFromList % 3 === 0) {
        console.log('This is divisible by 3 without remainder', currentNumberFromList);
    }
    console.log('Moving on to next index.. '+ i + ' + 1 = ' + (i+1));
}

//first iteration i = 0
//currentNumber = numbers[0]

//second iteration i = 1
//currentNumber = numbers[1]
