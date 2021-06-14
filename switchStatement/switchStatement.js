// I did my best.

function timeAdder(value1, label1,value2,label2){
  if(value1<0 || value2<0){
    console.log('Times can not be negative');
    return
  }else{
    if(!Number.isInteger(value1) || !Number.isInteger(value2)){
      console.log('Please enter Integer number!');
      }else{
        if (typeof(label1)  !== "string" || typeof(label2)!== "string" ) {
          console.log('Please enter valid label');
        } else {
          let firstTest=tester(value1, label1)
          let secondTest=tester(value2,label2)
          if(firstTest==='true' && secondTest==="true"){
            resultInSeconds=Conventer(value1,label1) + Conventer(value2,label2);
            lastProcedure(resultInSeconds);
          }
        }
      }
  }
}

const tester = (a,b) =>{
  if(a===1){
    if(b[b.length -1]!=="s"){
      return 'true'
    }else if(b[b.length -1]==="s"){
        console.log('singular noun can not end with "s"');
        return 'false'
    }
  } else{
    if(b[b.length -1]==="s"){
     return 'true'
   } else{
     console.log('Plurals should end with "s"');
     return 'false'
   }
  }
}

const Conventer = (a,b) =>{
 let turnedInSeconds
  switch (b) {
    case 'days':
      turnedInSeconds= a*24*60*60
      break;
    case 'day':
        turnedInSeconds= a*24*60*60
        break;
    case 'hours':
        turnedInSeconds=a*60*60
      break;
    case 'hour':
          turnedInSeconds=a*60*60
        break;
    case 'minutes':
          turnedInSeconds=a*60
          break;
    case 'minute':
          turnedInSeconds=a*60
            break;
    case 'seconds':
          turnedInSeconds=a*1
                  break;
    case 'second':
                  turnedInSeconds=a*1
                    break;

    default:
    }
  return turnedInSeconds
}

const lastProcedure=(a)=>{
   let finalResul=[]
   let seconds=a%60
   let minutes=((a-(a%60))%3600)/60
  let hours=((a-seconds-minutes*60)%(60*60*24))/3600
  let days=(a-seconds-minutes*60-hours*60*60)/(60*60*24)

  const conditionalAppending=(a, label)=>{
    if(a !== 0){
      finalResul.push({value: a, label: (a===1)? label : (label+"s")});
    }
  }
  conditionalAppending(days,'day');
  conditionalAppending(hours,'hour');
  conditionalAppending(minutes,'minute');
  conditionalAppending(seconds,'second');

  console.log(days + " days" + " " + hours + " hours" + " " + minutes+ " minutes" + " " + seconds + " seconds!")
   console.log(finalResul);
}




timeAdder(16, 'hours', 125, "seconds");
