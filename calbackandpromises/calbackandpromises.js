let startTime = new Date();
function CallBackFunction(num, cb) {
    if(Number.isInteger(num) && num>0 && num<1001){
     let squaredNum = num*num;
     console.log(squaredNum);
     setTimeout(()=>{
        let calculatedRootSquare = Math.sqrt(num)
       console.log(calculatedRootSquare);    
       cb(num, startTime)
        }
     , num)
 }else{
     console.log('It should be integer between 1 and 1000!!!');
     let endTime = new Date();
     let timeDiff = endTime-startTime;
     console.log(`Elapsed time is ${timeDiff}`);
 }
    
}

function nearestPrimeTimeFinder(num, startTime) {
    
    for(let i=num-1; i>1; i--){
        let isPrimeNum = "true"    
        for(let k=2; k<i; k++){
            if(i%k==0){              
            isPrimeNum="false";}}
        if (isPrimeNum == "true")   {
            console.log(`${i} is nearest Prime Number!`);
            let endTime = new Date();
            let timeDiff = endTime-startTime;
            console.log(`Elapsed time is ${timeDiff}`);

            break;
        }
    }};

CallBackFunction(900, nearestPrimeTimeFinder);

function promiseFunction(num) {
     
    return new Promise((resolve,reject)=>{ 
        let squaredNum = num*num;
        console.log(squaredNum);
        setTimeout(()=>{
            resolve(num);
        }, num);
    })    
}
promiseFunction(100)
.then(data=>{
    let calculatedRootSquare = Math.sqrt(data)
    console.log(calculatedRootSquare);
    console.log(data);
    return data  
})
.then(data=>{
nearestPrimeTimeFinder(data, startTime)
})
