// create a secret number:
var secretNumber = 24;

// ask user for guess:
var guess = prompt("Guess a number between 0 and 30");

// check if guess is right:
// using Number(guess) to convert the guess from a string to a number
// consider / look up option of using parseInt instead; Number tries to convert the
// entire string to a number and parseInt parses up to the first non-digit
if (Number(guess) === secretNumber) {
    alert("You got it baby!")
}

// option a, which just says you're wrong:
// otherise you got it wrong:
// else {
//     alert("BOOOO! WRONG!")
// }

// option b:
//check if higher
else if (Number(guess) > secretNumber) {
    alert("Meeep.. too high.. guess again")
}

// otherwise, check if lower
else {
    alert("Meep.. too low.. guess again")
}
