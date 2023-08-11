//if value is truthy, print true
//if value is falsy, print falsy statements below:
//"I am a string" - true
//false - "The boolean value false is falsy"
//null - "the null value is falsy"
//undefined - "undefined is falsy"
//0 - "The number 0 is falsy (the only falsy number"
//"" - "The empty tring is falsy(the only falsy string)"

const string = "I am a string"
if (string) {
    console.log(true);
}

let input1 = false
if (input1) {
    console.log("true")
} else {
    console.log("The boolean value false is falsy")
};

let input2 = null
if (input2) {
    console.log("true")
} else {
    console.log("The null value is false")
}

let input3 = undefined
if (input3) {
    console.log ("true")
} else {
    console.log("Undefined is falsy")
};

let input4 = 0
if (input4) {
    console.log("true")
} else {
    console.log("The number 0 is falsy(the only falsy number")
};

let input5 = ""
if (input5) {
    console.log("true")
} else {
    console.log("The empty string is falsy (the only falsy string")
};

//using if else statements, code a script tag that takes sum of two numbers and prings the corresponding result.
//sum + "is less than -10000"
//sum + "is a negative number"
//sum + "is greater than 100"
//sum + "is larger than 0"
//sum + "is greater than 100"

let num1 = 50;
let num2 = 51;
let sum1 = num1 + num2;
if (sum1 >100) {
    console.log(sum1 + " is greater than 100")
};

let num3 = 99;
let num4 = -2;
let sum2 = num3 + num4;
if (sum2 > 0) {
    console.log(sum2 + " is greater than 0")
};

let num5 = 0;
let num6 = 101;
let sum3 = num5 + num6;
if (sum3 > 100) {
    console.log(sum3 + " is greater than 100")
};

let num7 = 500;
let num8 = -500;
let sum4 = num7 + num8;
if (sum4 == 0) {
    console.log(sum4 + " is equal to 0")
};

let num9 = -1000;
let num10 = 0;
let sum5 = num9 + num10;
if (sum5 < 0) {
    console.log(sum5 + " is a negative number")
};

let num11 = -5;
let num12 = 0;
let sum6 = num11 + num12;
if (sum6 < 0) {
    console.log(sum6 + " is a negative number")
};