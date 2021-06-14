/*  Hoisting is a JavaScript mechanism where variables and function declarations
are moved to the top of their scope before code execution. Inevitably, this
means that no matter where functions and variables are declared, they are moved
 to the top of their scope regardless of whether their scope is global or local.*/

 // var is used to declare a variable. For Example:

 var myName = 'Furkat';

 // And this variable can be change

 myName = 'James';

 // Let is also the same in this case

 let yourName = 'Chris';

 yourName = 'B0b';

 // So why do we need let while we have var? It is about scoping. For Example:

 function mySong(){
   var randomNum = Math.random();
   if(randomNum){
    var  myFavoriteSong = 'Hero';
   }
   console.log(myFavoriteSong);
 }

 mySong();

// Once you invoke the function you wil have the result Hero on console.
// But what if you use let instead of var?

function mySong(){
  var randomNum = Math.random();
  if(randomNum){
    let  myFavoriteSong = 'Hero';
  }
  console.log(myFavoriteSong);
}

mySong();

// this time you will get an error concerning with scope, which means let is much more strict than variable
// in tems of scope.

// const is also used to declare a variable. Yet, there are some differences.
// First of all, once you declare a variable with const , you can not change it later on.

const myCity= 'Prague';

// This will not work
myCity = 'Berlin';

 // Secondly, you can not  declare without assigning a value:

const myCountry; // this will not work

// but you can do it with var and Let

var yourCountry;
let hisCountry;

// Const hass the same character with let  about scoping

// You can push value on an array declared with const.

const myArray= [1,2,3];
myArray.push(4); // It will work, you will have an array of [1,2,3,4]

// You can also change the value of object declared with const. But can not change the type.

const myObject={
  name: 'Furkat'
};

myObject.name: "Chris" // will work 
