let men = ['man1' , 'man2' , 'man3' , 'Socrates'];

const isMoral = (name)=>{
  if(men.includes(name)){
    console.log(name + ' is mortal!');
  } else{
    console.log(name + ' is not mortal!');
  };
}
isMoral('Socrates ');

let allCakes =[{name: "A", isChocolate: true }, {name: "B", isChocolate: false },{name: "C", isChocolate: true },{name: "D", isChocolate: false }]
let isChocolate = true

let cakeFlavour =(cakesArray, isChocolate)=>{
  allCakes.map((cake)=>{
    if (cake.isChocolate === isChocolate ){
      console.log(cake.name + ' is chocolate flavour');
    } else {
      console.log(cake.name + ' is vanilla flavour')
    }
  })

}

cakeFlavour(allCakes, isChocolate)
