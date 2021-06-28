class Vehicle{
    constructor(make,model,year,weight){
        this.make=make;
        this.model=model;
        this.year=year;
        this.weight=weight;
        this.needsMaintenance=false;
        this.tripsSinceMaintenance=0;
    }
    
    Repair(){
        this.needsMaintenance=false;
        this.tripsSinceMaintenance=0;
    }
}

class Cars extends Vehicle{
    constructor(make,model,year,weight){
        super(make,model,year,weight)
        this.isDriving = null;
    }

        
    drive(){
            this.isDriving = true;
        }

    stop(){
            this.isDriving=false;
            this.tripsSinceMaintenance++
            if(this.tripsSinceMaintenance == 100){
                this.needsMaintenance=true;
    }}}

    const captiva = new Cars('GM','Captiva',2008, 1800);
    const malibu =  new Cars('GM','Malibu',2015, 1700);
    const lasetti = new Cars('GM','Lasetti',2000, 1300);
    lasetti.drive();
    console.log(lasetti.isDriving);
    lasetti.stop();
    console.log(lasetti.isDriving);
    function testDrive(obj) {
        for(let i=1; i<101; i++){
            obj.drive();
            obj.stop();
            if(obj.tripsSinceMaintenance == 100){
            console.log(`${obj.model} was made by ${obj.make} in ${obj.year}. Its weight is ${obj.weight}`);
            console.log(`Trips since maintenance is ${obj.tripsSinceMaintenance}`);
            console.log(`Does the car needs maintenance: ${obj.needsMaintenance}`);
            obj.Repair();
            console.log(`${obj.model} is repaired!!!`);
            console.log(`Trips since maintenance is ${obj.tripsSinceMaintenance}`);
            console.log(`Does the car needs maintenance: ${obj.needsMaintenance}`);
        }}}
    testDrive(captiva);
    testDrive(malibu);
    testDrive(lasetti)



    class Planes extends Vehicle{
        constructor(make,model,year,weight){
            super(make,model,year,weight)
            this.isFlying = null;
        }
        flying(){
            if(this.needsMaintenance==true){
                throw 'Plain needs to be repaired and no flights until it gats repaired!!!'
            }else{
                this.isFlying = true;
                        }
                    }
        landing(){
            if(this.isFlying==true){
                this.isFlying= false;
            this.tripsSinceMaintenance++;
            if(this.tripsSinceMaintenance==100){
                this.needsMaintenance=true;
            }
            }else{
                throw 'Plain is flying at the moment to land it!!!'
            }
             }
    }

    const airbus = new Planes('Airbus S.A.S', 'Airbus320', 1986 , 70);

    function testFlight(obj) {
        for(let i=1; i<102; i++){
            obj.flying();
            obj.landing();
            if(obj.tripsSinceMaintenance == 100){
            console.log(`${obj.model} was made by ${obj.make} in ${obj.year}. Its weight is ${obj.weight}`);
            console.log(`Trips since maintenance is ${obj.tripsSinceMaintenance}`);
            console.log(`Does the plain needs maintenance: ${obj.needsMaintenance}`);
             }}   
     }
     testFlight(airbus);