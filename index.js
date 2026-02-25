// //1. Ways to print in javascript 
// //console.log("Hello World");
// //alert("me")
// // document.write("This is document write");

// //2. Javascript console API
// // console.log("Hello World", 4+6 , "Another log");
// // console.warn("This is warning");
// // console.error("This is an error");

// //3. Javascript Variables
// // what are variables? - Containers to store data values
// var number1 = 34;
// var number2 = 56;
// //console.log(number1 + number2);


// // 4. Data types in Javascript
// // Numbers
// var num1 = 455;
// var num2 = 56.76;
// // Strings
// var str1 = "This is a string";
// var str2 = "This is also a string";
// // Objects 
// var marks = {
//     ravi: 34,
//     shubham: 78,
//     harry: 99.977
// }
// //console.log(marks)

// // bolleans 
// var a = true;
// var b = false;
// //console.log(a, b);

// var und = undefined;
// //console.log(und);

// var n = null;
//console.log(n);

/*At a very high level, there are two data types of data types in javascript 
1. Primitive data types : undefined, null , number , string, boolean , symbol
2. Reference data types : Arrays and Objects 
*/

//var arr = [1, 2, "bablu", 4, 5];
// console.log(arr);

// Operators in Javascript
// Arithmetic Operators  

// var arr = [1, 2, 3, 4, 5, 6, 7];
// // console.log(arr);
// for(var i = 0; i < arr.length; i++){
//     if (i == 2){
//        // break;
//         continue;
//     }
//     console.log(arr[i])
// }
// arr.forEach(function (element) {
//     console.log(element)
// })

// let j = 0;
// while(j<arr.length){
//     console.log(arr[j]);
//     j++;
// }


// let myArr = ["Fan", "Camera", 34, null, true];
// // Array Methods
// console.log(myArr.length);
// // myArr.pop();
// // myArr.push("harry")
// // myArr.shift()
// const newlan = myArr.unshift("Harry");
// console.log(newlan);
// console.log(myArr);


// String Methods in Javascript
// let myLovelystring = "Dishu is a good good good boy";
// console.log(myLovelystring.length)
// console.log(myLovelystring.lastIndexOf("good"))
//  console.log(myLovelystring.slice(1,4));
//  d = myLovelystring.replace("Dishu", "Rohan");
//  d = d.replace("good", "bad"); 
//  console.log(d, myLovelystring);

//  let myDate = new Date();
// //  console.log(myDate);
// //  console.log(myDate.getTime());
// //  console.log(myDate.getFullYear());
// //  console.log(myDate.getDay());
// //  console.log(myDate.getMinutes());

//  // DOM Manipulation 
//  let elem = document.getElementById('click');
// // console.log(elem);

// let elemClass = document.getElementsByClassName("container");
// // console.log(elemClass);
// elemClass[0].style.background = "yellow";
// elemClass[0].classList.add("bg-primary")
// elemClass[0].classList.add("text-success")

// // console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemClass[0].innerText);
// console.log(elemClass[0].innerHTML);

// tn = document.getElementsByTagName('div');
// console.log(tn);
// createdElement = document.createElement('p');
// createdElement.innerText = "This is a created para "
// tn[0].appendChild(createdElement);
// createdElement2 = document.createElement('b');
// createdElement2.innerText = "This is a created bold "
// tn[0].replaceChild(createdElement2, createdElement );

// function clicked(){
//     console.log('The button was clicked');
// }

// window.onload = function(){
//     console.log('The document was loaded');

// }
// firstContainer.addEventListener('click',function(){
//     document.querySelectorAll('.container')[1].innerHTML ="<b> We have Clicked <b>"
//     console.log("clicked on container")
// } )
// firstContainer.addEventListener('mouseover',function(){
//     console.log("mouse on container")
// } )
// firstContainer.addEventListener('mouseout',function(){
//     console.log("mouse out of container")
// } )
// let prevHTML = document.querySelectorAll('.container')[1].innerHTML;
// firstContainer.addEventListener('mouseup',function(){
//     document.querySelectorAll('.container')[1].innerHTML = prevHTML;
//     console.log("mouse up when clicked on container")
// } )
// firstContainer.addEventListener('mousedown',function(){
//  document.querySelectorAll('.container')[1].innerHTML ="<b> We have Clicked <b>"

//     console.log("mouse down when clicked on container")
// } )


// let name = "sharadha";

// let sum = function(a, b) {
//     return a+b;
// }
// let hello = function() {
//     console.log("hello");
// }

// function multipleGreet(func, count) {
//     for(let i = 1; i <= count; i++ )
//         func();
// }

// let greet = function() {
//     console.log("hello");
// }
// multipleGreet(greet, 10);

// let odd = function(n) {
//     console.log(!(n%2 == 0));
// }

// let even = function(n) {
//     console.log(n%2 == 0);
// }

// function odddOrEvenFactory(request) {
//     if (request == "odd") {
//         return function(n) {
//     console.log(!(n%2 == 0));
// }
// return odd;
//     } else 
//         if (request == "even") {
//             return function(n) {
//     console.log(n%2 == 0);
// }
// return even;
//         } else {
//             console.log("Wrong Request");
//         }
// }

// let request = "odd";

// const arrayAverage = (arr) => {
//     let total = 0;
//     for (let number of arr) {
//         total += number;
//     }
//     return total / arr.length;
// };

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// console.log(arrayAverage (arr));

// const isEven = (n) => {
//     if (n % 2 == 0)  
//         console.log("It is an even number");
//     else {
//         console.log("It is an odd number.");
//     }
// }
// let size = "XL";
// if (size === "XL") {
//     console.log("Price is 250 rupeees.")
// }
// else if (size === "L") {
//     console.log("Price is 200 rupees.")
// }
//     else if (size === "M") {
//         console.log("The price is 100 rupees.")
//     }
//         else if( size ===  "S") {
//             console.log("The price is 50 rupees only.")
//         }
// let str = "apple";
// if(str[0] === "a" && str.length > 3) {
//     console.log("good string");
// } else {
//     console.log("not a good string");
// }
// let num = 12;
// if((num%3 === 0) && ((num+1 === 15) || (num-1 === 11))) {
//     console.log("safe");
// } else {
//     console.log("unsafe");
// }
// let color = "green";
// switch(color) {
//     case "red" :
//     console.log("stop");
//     break;
//     case "yellow" :
//         console.log("slow down");
//         break;
//         case "green": 
//         console.log("go");
//         break;
//         default: 
//         console.log("Light is broken");
// }
 
// let day = 10;
// switch(day) {
//     case 1 : 
//     console.log("Monday")
//     break;
//     case 2 : 
//     console.log("Tuesday")
//     break;
//     case 3 : 
//     console.log("Wednesday")
//     break;
//     case 4 : 
//     console.log("Thursday")
//     break;
//     case 5 : 
//     console.log("Friday")
//     break;
//     case 6 : 
//     console.log("Saturday")
//     break;
//     case 7 : 
//     console.log("Sunday")
//     break;
//     default :
//     console.log("Not a day")
//     break;
// }

// let num = 30;
// if(num%10 === 0) {
//     console.log("good");
// } else {
//     console.log("bad");
// }

// let Name = prompt("Enter your name!");
// let Age = prompt("Enter your age!");
// alert(`${Name} is ${Age} years old.`);
 
// let Quarter = 4;
// switch(Quarter) {
//     case 1 :
//         console.log("January, February, March");
//         break;
//         case 2: 
//         console.log("April, May, March");
//         break;
//         case 3: 
//         console.log("July, August, September");
//         case 4: 
//         console.log("October, November, December");
// }

// let str = "apples";
// if(((str[0] === "A") || (str[0]=== "a")) && (str.length > 5)){
//     console.log("It is a golden String.");
// } else {
//     console.log(" This is not a good string.");
// }

// let a = 20;
// let b = 25;
// let c = 30;

// if((a >= b)&& (a >= c)) {
//     console.log(`${a} is the largest.`)
// } else if((b >= a) && (b >= c)) {
//     console.log(`${b} is the largest.`);
// } else {
//     console.log(`${c} is the largest.`);
// }

// let num1 = 36;
// let num2 = 45;
// if(num1 % 10 === num2 % 10 ) {
//     console.log("both the numbers have same last digit.");
// } else {
//     console.log("both numbers don't have same last digit.");
// }
//  let msg = "I Love Coding";
// // let msg ="help!";
// let car = ["audi","bmw", "xuv","maruti", "toyota", "ferrari" ]
