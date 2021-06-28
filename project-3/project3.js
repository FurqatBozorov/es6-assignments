 let reqArr = [];
for (let i=1; i<100; i++){
    
    reqObj={
        when: Math.floor(Math.random()*181),
        whereHeIs: Math.floor(Math.random()*12)-1,
        destination: Math.floor(Math.random()*12)-1        
    }
    reqArr.push(reqObj);
}

console.log(reqArr);



class Elevator{
    constructor(lastPosition=0, reachDestinationTime=0){
        this.lastPosition=lastPosition;
        this.reachDestinationTime= reachDestinationTime;
        }
}
// elavatorA goes up to 10th floor
let elevatorA = new Elevator(0);
// elavatorB goes down to -1th floor
let elevatorB = new Elevator(0);


function pressButton(data){
    let elevatorAComesAt =elevatorA.reachDestinationTime+Math.abs(elevatorA.lastPosition-data.whereHeIs)
    let elevatorBComesAt =elevatorB.reachDestinationTime+Math.abs(elevatorB.lastPosition-data.whereHeIs)
    let distanceOfA=Math.abs(data.whereHeIs-elevatorA.lastPosition)
    let distanceOfB=Math.abs(data.whereHeIs-elevatorB.lastPosition)
    
    //this is for passengers traveling from 10 floor to -1 floor
    if(data.whereHeIs==10 && data.destination==-1){
        console.log(`Elevator A moves to ${data.destination}`);
        console.log("A open doors")
        console.log("A close doors")
        elevatorA.lastPosition = data.destination;
        elevatorA.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)

    //this is for passengers traveling from -1 floor to 10 floor  
    }else if(data.whereHeIs==-1 && data.destination==10){
        console.log(`Elevator B moves to ${data.destination}`);
        console.log("B open doors")
        console.log("B close doors")
        elevatorB.lastPosition = data.destination;
        elevatorB.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)

        //this is for passengers traveling from or to 10th floor
    }else if(data.whereHeIs==10 || data.destination==10){
            console.log(`Elevator A moves to ${data.destination}`);
            console.log("A open doors")
            console.log("A close doors")
            elevatorA.lastPosition = data.destination;
            elevatorA.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)
    //this is for passengers traveling from or to -1th floor
      }else if(data.whereHeIs==-1 || data.destination==-1){
            console.log(`Elevator B moves to ${data.destination}`);
            console.log("B open doors")
            console.log("B close doors")
            elevatorB.lastPosition = data.destination;
            elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
    }else{
        //this is to check if elevators both are busy  at the time of pressing button
    if (elevatorA.reachDestinationTime>data.when && elevatorB.reachDestinationTime>data.when) {
       //this is to find if elevatorA get free earlier
        if(elevatorAComesAt<elevatorBComesAt){
            console.log(`Elevator A moves to ${data.destination}`);
            console.log("A open doors")
            console.log("A close doors")
            elevatorA.lastPosition = data.destination;
            elevatorA.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)
       //this is to find if elevatorB get free earlier
            } else if(elevatorAComesAt>elevatorBComesAt){
            console.log(`Elevator B moves to ${data.destination}`);
            console.log("B open doors")
            console.log("B close doors")
            elevatorB.lastPosition = data.destination;
            elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
        }else{
           // this is to find nearest elevator when both gets free at the same time 
           // if passenger goes down, ElevatorB will serv 
           if(data.whereHeIs-data.destination>0){
            console.log(`Elevator B moves to ${data.destination}`);
            console.log("B open doors")
            console.log("B close doors")
            elevatorB.lastPosition = data.destination;
            elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
        // if passenger goes up , ElevatorA will serv    
        } else if(data.whereHeIs-data.destination<0){
            console.log(`Elevator A moves to ${data.destination}`);
            console.log("A open doors")
            console.log("A close doors")
            elevatorA.lastPosition = data.destination;
            elevatorA.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)
             }
        }   
        //this is for the option, when elevator A is busy, ElevatorB is free 
        // if one elevator is busy, we will immediately call anothere one
    }else if(elevatorA.reachDestinationTime>data.when && elevatorB.reachDestinationTime<=data.when){
        console.log(`Elevator B moves to ${data.destination}`);
        console.log("B open doors")
        console.log("B close doors")
        elevatorB.lastPosition = data.destination;
        elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
    //this is for the option, when elevatorB is busy, ElevatorA is free 
    // if one elevator is busy, we will immediately call anothere one
} else if(elevatorA.reachDestinationTime<=data.when && elevatorB.reachDestinationTime>data.when){
            console.log(`Elevator A moves to ${data.destination}`);
            console.log("A open doors")
            console.log("A close doors")
            elevatorA.lastPosition = data.destination;
            elevatorA.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)
   // this is to check if both elevators are free
        }else if(elevatorA.reachDestinationTime<data.when && elevatorB.reachDestinationTime<data.when){
            //this is to find nearest one    
            if(distanceOfA>distanceOfB){
                console.log(`Elevator B moves to ${data.destination}`);
                console.log("B open doors")
                console.log("B close doors")
        elevatorB.lastPosition = data.destination;
        elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
    //this is to find nearest one    
    }else if(distanceOfA<distanceOfB){
        console.log(`Elevator B moves to ${data.destination}`);
        console.log("B open doors")
        console.log("B close doors")
        elevatorB.lastPosition = data.destination;
        elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
    //this is to check when both elevators are in a same distance    
    }else if(distanceOfA==distanceOfB){
        //this is to determine the direction up or down. if up elevatorA
        // if down elevatorB will serv    
        if(data.whereHeIs-data.destination>0){
            console.log(`Elevator B moves to ${data.destination}`);
            console.log("B open doors")
            console.log("B close doors")
            elevatorB.lastPosition = data.destination;
            elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
        //this is to determine the direction up or down. if up elevatorA
        // if down elevatorB will serv    
        } else if(data.whereHeIs-data.destination<0){
            console.log(`Elevator A moves to ${data.destination}`);
            console.log("A open doors")
            console.log("A close doors")            
            elevatorA.lastPosition = data.destination;
            elevatorA.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)
             }
        } 
    // this is when both elevators gets free at the time of pressing
    }else if (elevatorA.reachDestinationTime==data.when && elevatorB.reachDestinationTime==data.when){
        if(data.whereHeIs-data.destination>0){
        console.log(`Elevator B moves to ${data.destination}`);
        console.log("B open doors")
        console.log("B close doors")
        elevatorB.lastPosition = data.destination;
        elevatorB.reachDestinationTime = elevatorBComesAt + Math.abs(data.whereHeIs-data.destination)
        } else if(data.whereHeIs-data.destination<0){
        console.log(`Elevator A moves to ${data.destination}`);
        console.log("A open doors")
        console.log("A close doors")        
        elevatorA.lastPosition = data.destination;
        elevatorA.reachDestinationTime = elevatorAComesAt + Math.abs(data.whereHeIs-data.destination)
         }
        }}}

// this is for execution of pressButton()
        for( let i=0; i<180; i++){
    reqArr.map((item)=>{
       
       if(i==item.when){
           pressButton(item)
       }
    })
}
