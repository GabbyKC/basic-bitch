// Questions
var firstName = prompt("First Name Please: ");
var lastName = prompt("Last Name Please: ");
var age = prompt("How old are you? ");
var height =prompt("What is your height? ");
var petName =prompt("what is your pets name? ");
alert("Thank you so much for the information!");

// Four conditions
var nameCond = null;
var ageCond = null;
var heightCond = null;
var petCond = null;


// Name Condition
if (firstName[0] === lastName[0]) {
    nameCond = true;
}else {
    nameCond = false;
}

// Age Condition
if (age > 20 && age < 30) {
    ageCond = true;
}else {
    ageCond = false;
}

// Height Condition
if (height >= 170) {
    heightCond = true;
}else {
    heighCond = false;
}

// Pet Name
if (petName[petName.lenght-1] === "y") {
    petCond = true;
}else {
    petCond = false;
}

// Check all conditions
if (nameCond && ageCond && heightCond && petCond) {
    console.log("Welcome Spy!");
}else {
    console.log("Nothing to see here!")
}
