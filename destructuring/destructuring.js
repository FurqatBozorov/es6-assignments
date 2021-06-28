//Destructuring an array is one the ways of accessing  values of the array 
//For example:
const myArray = [1,2,3,4,5,6,7,8]
let [one, two,three] = myArray;
console.log(one, two, three);
// result will be 
// 1 2 3 
[one,two,three,,,six]=myArray
console.log(six);
// result will be 
// 6
[one,two, ...others]=myArray;
console.log(others);
//result will be:
//{[3,4,5,6,7,8]

// Destructuring an object is also the same.
const obj ={name : 'Furkat', lastName : 'Bozorov', age: 35 , country : "UZB"}
let {name, lastName, age, country} = obj
console.log(lastName);
// result is
// Bozorov


const touristDetails={
    nameOfTurist: 'Furkar',
    cityToVisit: ['Madrid','Barselona','London', 'New York']
}

const {nameOfTurist, cityToVisit : [firstCity, secondCity]}= touristDetails

console.log(secondCity);
//the tesult will be:
// Barselona

function capitalCity({Uzbekistan: c}){
    console.log(c);
}
 
const myCapitals={
    Uzbekistan: "Tashkent",
    Russia: "Moscow",
    CzechRepublic: "Prague",
    England: "London"
}

capitalCity(myCapitals);

capitalCity()
// result will be
// Tashkent
