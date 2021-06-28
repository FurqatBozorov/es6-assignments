
function fetchData() {
    fetch('https://v2.jokeapi.dev/joke/Any')
    .then((data)=>data.json())
    .then(data=>{
            let jokeDiv= document.createElement('div')
            let formattedJoke=`
            <h2>${data.category}</h2>
            <p>-${data.setup ? data.setup : data.joke}</p>
            <p>${data.delivery ? `-${data.delivery}` : ''  }</p>
            `
            jokeDiv.innerHTML=formattedJoke
            document.getElementById('dashboard').innerHTML=''
            document.getElementById('dashboard').appendChild(jokeDiv)
    })
    
    
}
let button= document.getElementById('fetch-data')
button.addEventListener('click', fetchData);
let refreshbutton= document.getElementById('refresh')
refreshbutton.addEventListener('click', fetchData);

