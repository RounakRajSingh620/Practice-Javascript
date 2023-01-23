// 1.Ways to print in JS
 
//console.log("Hello world");
// alert("me")
// document.write("this is document write")

// 2. Js console API

// console.log("Hello World");
// console.warn("this is warning");
// console.error("This is error");

// 3. Js Variables
// What are Variables? -  Containers to store data values

var numbers1= 34;
var numbers2=56;
// console.log(numbers1+numbers2);

// 4.Data types in Js
// Numbers
var num1=455;
var num1=56.78;
//Strings
var str1= "This is a string";
var str2= "This is also a string";
// objects
var marks={
    ravi:34,
    shumbham:58,
    raj:56
}
console.log(marks);

//boolean
var a=true;
var b=false;
// console.log(a,b);

var und;
// console.log(und);

var n=null;
// console.log(n);

/* At a very high level there are two types of data types
in javascript
1. Primitive data types: undefined ,null,number , strimg,boolean ,symbol
2. Refrence data types : Arrays and Objects
*/

//Array 
var arr=[1,2,3,4,5]
// console.log(arr)

//OPerators in Javascript
// Arithmetic Operators

var a=100;
var b=10;
console.log("The value of a+b is ",a+b);
console.log("The value of a-b is ",a-b);
console.log("The value of a*b is ",a*b);
console.log("The value of a/b is ",a/b);

// Assignment Operators
var c=b;
//c+=2;
//c -=2; c=c-2;
// c*=2;
// c/=2;
//console.log(c);

// Comparison Operators
var x=34;
var y=56;
// console.log(x==y);
// console.log(x>=y);
// console.log(x<=y);
// console.log(x<y);
// console.log(x>y);

//Logical Operator

// Logical And
// console.log(true&&true)
// console.log(true&&false)
// console.log(false&&true)
// console.log(false&&false)

//Logical OR
// console.log(true||true)
// console.log(true||false)
// console.log(false||true)
// console.log(false||false)

// Logical NOT
// console.log(!false)
//console.log(!true)

// Function in Javascript
function avg(a,b){
    c=(a+b)/2;
    return c;
}
// DRY=Do not repeat yourself
c1=avg (4,6);
c2=avg(14,16);
// console.log(c1,c2);

// Conditional in Javascript
var age =4;
//Single if statement
if(age >18){
    console.log('You can drink  rasna water');
}
// if -else statement
if(age >18){
    console.log('You can drink  rasna water');
}
else{
    console.log("You cannot drink rasna water");
}
// if-else ladder
if(age>32){
    console.log("You are not a kid")
}
else if(age>26){
    console.log("No child ")
}
