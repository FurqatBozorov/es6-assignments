
function reverseJsonArray(params) {
    let stringToReturn
    try {
    let raw=JSON.parse(params);
    raw.reverse()
    stringToReturn= JSON.stringify(raw)
    console.log(stringToReturn);
    } 
    catch (err) {
     if(err){
         console.log('false');
     } else{
        console.log(stringToReturn);
     }  
    }
    }

 reverseJsonArray();
 reverseJsonArray(true);
 reverseJsonArray(['F','u','r','k','a','t']);
 reverseJsonArray('Furkat');
 reverseJsonArray('["F"]');
 reverseJsonArray('[]');
 reverseJsonArray('["F","u","r","k","a","t"]');
 reverseJsonArray('["B","o","z","o","r","o","v"]');
 reverseJsonArray(123);
 reverseJsonArray({name: "Furkat", lastName: "Bozorov"});
 reverseJsonArray('{name: "Furkat", lastName: "Bozorov"}');