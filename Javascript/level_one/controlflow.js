alert("testing")

var temp = 12

if (temp>80) {
    console.log("hot hot hot")
} else if (temp <=80 && temp >=50) {
    console.log("average temp")
} else if (temp < 50 && temp >=32) {
    console.log("its kinda cold")
} else {
    console.log("its cold bitch")
}


var ham = 10
var cheese = 10

var report = "blank"

if (ham >=10 && cheese >=10) {
    report = "strong sales for both"
} else if (ham ===0 && cheese ===0) {
    report = "no sales!"
} else {
    report = "we had some sales of some items"
}
console.log(report)
