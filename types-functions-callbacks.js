
// Example

// The purpose of this first exercise is just to show how 
// assertions work and how the homework should be carried out. 
// We'll do it together in class.

// Part EXAMPLE

// Write a function called addOne() that returns the input number, plus one. 

var addOne = function (number){
	return number +1
}
	
console.assert(addOne(1) === 2)

// Part 0

// Fix the following code so that the assertion passes. 

var doubleNum = function(num) {
	var newNum = num * 2
	return newNum
}

console.assert(doubleNum(5) === 10)


/**
 * PART 1
 *
 * Write a function called sum that takes two numbers as
 * inputs and computes the sum of those two numbers.
 */

var sum = function (num1,num2){
return num1 +num2

}


console.assert(sum(8, 11) === 19);
console.assert(sum(4, 100) === 104);

// PART 2

// Write a function called average that takes two numbers
// as inputs and returns the average of the two. To avoid
// repeating yourself, use your sum function inside 
// of your average function.


var average = function (num1,num2){
 var result = sum(num1,num2) 
 return result/2 }

console.assert(average(8,12) === 10)
console.assert(average(100,200) === 150)

/**
 * PART 3
 *
 * Modify your sum function so that if either of its 
 inputs is not a number, it will return "null."
 */

var sum = function (num1,num2){
	if (typeof num1 !== "number" || typeof num2 !== "number")
        {return null}
		
     
	return num1 + num2  

}

console.assert(sum(867, 5309) === 6176);
console.assert(sum('867', 5309) === null);
console.assert(sum(true, 5) === null);


// Part 4

// Write a function called isNegative that will tell 
// whether a number is negative or not. 



var isNegative = function (input){
    return input < 0 
}


console.assert(isNegative(10) === false)
console.assert(isNegative(0) === false)
console.assert(isNegative(-999) === true)


// Now, modify your sum function again, so that it 
// will return null if any of the inputs is negative.
// To avoid repeating yourself, use your isNegative 
// function inside your sum funciton ***

var sum = function (num1,num2){
    if (typeof num1 !== "number" || typeof num2 !== "number")
        {return null}
	
	if (isNegative(num1) || isNegative(num2)){
    	return null
        }
    return num1 + num2  

}

console.assert(sum(5,-5) === null)


// Part 5
// Make the following assertions pass. 

var X = 10

var increment = function (){
 	X = X + 1
}

console.assert(X === 10)
increment()
console.assert(X === 11)

// This exercise is meant to demonstrate the concept
// of scope. The variable X here must have global
// scope in order for the assertions to pass. 

// Important note: By convention, GLOBAL variables
// are written in ALL CAPS. I will do the same throughout
// your assignments and the class.

// Since global variables are rarely used and often 
// discouraged, why don't you fix the increment
// function below. Make the following assertions
// pass.



var x = 10
var increment= function (number){
    return number+1}

    
console.assert(x === 10)
var y = increment(x)
console.assert(x === 10)
console.assert(y === 11)


// Part 6

// Write a function that will find the minimum of four 
// input numbers. You can do it using nested if statements,
// boolean operators, or both (but not neither). 

var minimum = function (first,second,third,fourth){

    if ((first<second) && (first<third) && (first<fourth)) 		
    	{return first}
    if ((second<first) && (second<third) &&(second<fourth))
    	{return second}
    if ((third<first) && (third<second) && (third<fourth))		
    	{ return third}
    return fourth}

console.assert(minimum(1,2,4,0) === 0)
console.assert(minimum(1000,-2,-99,50) === -99)
console.assert(minimum(-1000,-2,-99,50) === -1000)
console.assert(minimum(1000,-2,99,50) === -2)


// Part 7

// Using boolean operators, write a function that will
// return true if either input is a string, but not 
// both or neither. 
var justOneString = function (num1,num2){
    if ((typeof num1 === "string") && (typeof num2 === "string"))
    {return false}
    if ((typeof num1 !== "string") && (typeof num2 !== "string")) {return false}
    if ((typeof num1 === "string") || (typeof num2 === "string")) {return true}
    }

console.assert(justOneString('a',5) === true)
console.assert(justOneString(6,'dotron') === true)
console.assert(justOneString('peanut','butter') === false)
console.assert(justOneString(8,null) === false)

// Part 8

// Write a function called doTwice that takes as input a 
// function and invokes that function twice. 

// For testing purposes, I've included some functions that
// modify global variables, although that's not a good
// pattern for production code.


var doTwice = function (input) {
var result = input ()
var result = input (result)
return result
}

var NUMBER = 10

var incrementGlobalNumber = function(){
	NUMBER = NUMBER + 1
}

var doubleGlobalNumber = function() {
	NUMBER = NUMBER * 2
}

doTwice(incrementGlobalNumber)
console.assert(NUMBER === 12)

doTwice(doubleGlobalNumber)
console.assert(NUMBER === 48)

// Part 9

// Write a function called conditionallyInvoke that takes a function
// as input. It should invoke that input function only if 
// the value of a certain global variable, called ORACLE, is 
// "YES." Otherwise, it will does nothing.

var conditionallyInvoke = function(input){
	if (ORACLE==="YES"){
		input() }
		
}

var ORACLE = 'NO'

conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 48)

ORACLE = 'YES'
conditionallyInvoke(doubleGlobalNumber)
console.assert(NUMBER === 96)

// Part 10

// Make the following assertion work:


var inFactory = function (){
 return "hello world"
}

var factory = function (){
return inFactory 
}

console.assert(factory()() === 'hello world')  // INCEPTION!


// Part 11

// Want more? 
var output = function (input){
    return input
}
var factory2 = function (){
        return output } 


console.assert(factory2()('you sly dog') === 'you sly dog')
console.assert(factory2()(999) === 999)

// Part 12

// This can't be healthy...



console.assert(factory3('i have reached function nirvana')() === 'i have reached function nirvana')
console.assert(factory3(100)() === 100)

