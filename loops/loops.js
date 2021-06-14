// Loops

for (let i=0; i<100; i++){
  if(i%3 === 0 && i%5 === 0){
    console.log('FizzBuzz');
  }else if (i%3 === 0) {
    console.log('Fizz');
  }else if (i%5 === 0) {
    console.log('Buzz');
  } else {
    let result = 'prime'
    for(let a=2; a<i; a++){
      if(i%a == 0){
        result=i
        break;
      }
    }
    console.log(result);
  }
}
