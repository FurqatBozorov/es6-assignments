// rest and spread look the same once you use in functions
// but does totally opposite things
// for example:

const myArr = [1,2,3,4,5,6]

function mySpreadFunc(params) {
    console.log(...params);    
}
mySpreadFunc(myArr)
//Resul will be
//1 2 3 4 5 6 // spread iterates the array


function myRestFunc(...params) {
    console.log(params);    
}
myRestFunc(5,6,7,8,9,10)
//Resul will be
//[ 5, 6, 7, 8, 9, 10 ]  //So, rest collects the arrguments to an array


// we can also use spread instead of push() or concat() methods.
// for example:

  let arr1 = [1,2,3,4,5]
  let arr2 = [6,7,8,9,10]
  let arr3 = [...arr1, ...arr2]
  console.log(arr3);
//result will be:
[1, 2, 3, 4,  5,6, 7, 8, 9, 10 ]