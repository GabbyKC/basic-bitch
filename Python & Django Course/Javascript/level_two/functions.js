// FUNCTIONS

alert(checking i is connected)

function helloYou(name){
    console.log("hello "+name);
}

function addNum(num1,num2) {
    console.log(num1+num2);
}

function helloSomeone(name="Frankie") {
    console.log("Hello "+name);
}

function formal(name="Sam", title="Sir") {
    return title+ " "+name
}

// Local Scope
function timesFive(numInput) {
    var result = numInput *5;
    return result
}
// Global Scope
var v = " GLOBAL V "
var stuff = "GLOBAL STUFF"

function fun(stuff) {
    console.log(v);
    stuff = "Reassing stuff inside func"
    console.log(stuff);
}
fun();
console.log(stuff);
