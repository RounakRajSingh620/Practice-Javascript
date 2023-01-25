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

var numbers1 = 34;
var numbers2 = 56;
// console.log(numbers1+numbers2);

// 4.Data types in Js
// Numbers
var num1 = 455;
var num1 = 56.78;
//Strings
var str1 = "This is a string";
var str2 = "This is also a string";
// objects
var marks = {
    ravi: 34,
    shumbham: 58,
    raj: 56
}
// console.log(marks);

//boolean
var a = true;
var b = false;
// console.log(a,b);

var und;
// console.log(und);

var n = null;
// console.log(n);

/* At a very high level there are two types of data types
in javascript
1. Primitive data types: undefined ,null,number , strimg,boolean ,symbol
2. Refrence data types : Arrays and Objects
*/

//Array 
var arr = [1, 2, 3, 4, 5]
// console.log(arr)

//OPerators in Javascript
// Arithmetic Operators

var a = 100;
var b = 10;
// console.log("The value of a+b is ", a + b);
// console.log("The value of a-b is ", a - b);
// console.log("The value of a*b is ", a * b);
// console.log("The value of a/b is ", a / b);

// Assignment Operators
var c = b;
//c+=2;
//c -=2; c=c-2;
// c*=2;
// c/=2;
//console.log(c);

// Comparison Operators
var x = 34;
var y = 56;
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
function avg(a, b) {
    c = (a + b) / 2;
    return c;
}
// DRY=Do not repeat yourself
c1 = avg(4, 6);
c2 = avg(14, 16);
// console.log(c1,c2);

// Conditional in Javascript
/*
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
age=25;
if(age>32){
    console.log("You are not a kid")
}
else if(age>26){
    console.log("No child ")
}
else if(age>22){
    console.log("Yes their is no child");
}
else if(age>18){
    console.log("18 children");
}
else{
    console.log("child is their");
}
console.log("End of ladder");
*/

// var arr = [1, 23, 4, 5, 6, 8];
// console.log(arr);
// for(var i=0;i<arr.length;i++){
//     if(i==2){
//         // break;
//         continue;
//     }
//     console.log(arr[i])
// }

// arr.forEach(function(element){
//     console.log(element)
// })

// const ac = 0;
// ac++;
// ac=ac+1;

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }

// do {
//     console.log(arr[j]);
//     j++;
// } while (j < arr.length);

let myArr = ["Fan", "Camera", 34, null, true];
// Array Methods
console.log(myArr.Length)
// myArr.pop();
// myArr.push("harry")
// myArr.shift()
// const newLen=myArr.unshift("Harry")
// console.log(newLen);
// console.log(myArr);

// Strings Methods
let myString = "Raunak is a good boy goood goood"
// console.log(myString.length)
// console.log(myString.indexOf("good"));
// console.log(myString.lastIndexOf("a"));
// console.log(myString.slice(1,5));
d = myString.replace("Raunak", "Raj");
// d=d.replace("good","bad");
// console.log(d,myString)

//Dates in Js
let myDate = new Date();
// console.log(myDate.getTime());
// console.log(myDate.getFullYear());
// console.log(myDate.getDay());
// console.log(myDate.getMinutes());
// console.log(myDate.getHours());

// DOM Manipulation
let elem = document.getElementById('click');
// console.log(elem);
let elemClass = document.getElementsByClassName("container")
// console.log(elemClass);
// elemClass[0].style.background="Yellow";
elemClass[0].classList.add("bg-primary")
elemClass[0].classList.add("text-success")
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0],innerHTML);
// console.log(elemClass[0],innerText) ;
tn = document.getElementsByTagName('div')
console.log(tn)
createdElement = document.createElement('p');
createdElement.innertext = "This is created paragraph";
tn[0].appendChild(createdElement);
createdElement2 = document.createElement('b');
createdElement2.innertext = "This is a created bold"
tn[0].replaceChild(createdElement2, createdElement);

//Selecting using query
sel = document.querySelector('.conatiner')
console.log(sel)
sel = document.querySelectorAll('.conatiner')
console.log(sel)

function clicked() {
    console.log('The button was clicked')
}
window.onload = function () {
    console.log('The document was loaded')
}

// Events in JavaScript

// firstContainer.addEventListener('click', function () {
//     document.querySelectorAll('.container')[1].innerHTML = "<b>We have clicked</b>"
//     console.log("Clickedd on Container")
// })

// firstContainer.addEventListener('mouseover', function () {
//     console.log("Mouse on Container")
// })

// firstContainer.addEventListener('mouseout', function () {
//     console.log("Mouse out of Container")
// })

let prevHTML = document.querySelectorAll('.container')[1].innerHTML
firstContainer.addEventListener('mouseup', function () {
    document.querySelectorAll('.container')[1].innerHTML = prevHTML;
    console.log("Mouse up when clicked on Container")
})

firstContainer.addEventListener('mousedown', function () {
    document.querySelectorAll('.container')[1].innerHTML = "<b>We have Clicked</b>"
    console.log("Mouse down when clicked on Container")
})


//Arrow Functions
// function summ(a,b){
    // return a+b;
// }
summ=(a,b)=>{
    return a+b;
}

logIn= ()=>{
    document.querySelectorAll('.container')[1].innerHTML="<b>Set timeout fired</b>"
    console.log("I am your log")
}

// SetTimeout and setinterval

// clr = setTimeout(logIn,3000);
// clr = setInterval(logIn,3000);

// use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout


// JavaScript localStorage
// localStorage.setItem('name','raunak')
// loaclStorage
// localStorage.getItem('name')
//localStorage.removeItem('name')
// localStorage.clear();

// JSON
obj = {name:"raunak",length:1,a:{this:'tha"t'}}
jso=JSON.stringify(obj);
console.log(typeof jso)
console.log(jso)
parsed=JSON.parse(`{"name":"raunak","length":1,"a":{"this":"that"}}`)
console.log(parsed);