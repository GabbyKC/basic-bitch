var age = prompt("How old are you?");

if (age < 0) {
    console.log("ERROR!");
} else if (age === "21") {
    console.log("Happy 21st Birthday!")
} else if (age % 2 !== 0) {
    console.log("Your age is odd!")
} else if (age % Math.sqrt(age) === 0) {
    console.log("perfect square!");
}
