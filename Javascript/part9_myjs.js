alert("Testing that I am not a complete failure");

var fname = prompt("What is your first name?");

var sname = prompt("What is your last nane?");

var age = prompt("How old are you?");

var height = prompt("How tall are you in cm?");

var pet = prompt("What is your pets name?");

if (fname[0] === sname[0] &&
    age <=30 && age >=20 &&
    height >=170 &&
    pet[pet.length-1] === "y") {
    console.log("You are the spy!");
}
else {
    console.log("Nothing to see here. You are not the spy!!");
}
