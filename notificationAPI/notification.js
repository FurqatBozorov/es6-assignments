let futureNotif = [];
let pastNotif = [];

listNotifs(futureNotif);
// listPastNotifs(pastNotif)
function addNotification(e) {
    e.preventDefault();
    
    let notifObj={
        title: e.target.title.value,
        hour: e.target.hours.value,
        date: e.target.date.value
    }
    
    futureNotif.push(notifObj)
    localStorage.setItem("notifs", JSON.stringify(futureNotif))
    listNotifs(futureNotif);
    e.target.title.value='';
    e.target.hours.value='';
    e.target.date.value='';
             
}

   function listNotifs(params) {
    document.getElementById('future').innerHTML='';
    let header= document.createElement('h2')
    header.innerHTML='Future notifications'
    document.getElementById('future').appendChild(header)
    let raw = localStorage.getItem('notifs')
    let notifList=JSON.parse(raw)
    
    if(params.length === 0){
        params=notifList
    }
    for(let prop of params){
        let newNotif=`<p name='notif'>${prop.title}  ${prop.hour} ${prop.date}</p>`
        let notifParag= document.createElement('p')
        notifParag.innerHTML=newNotif
        let newNotifForm= document.createElement('form')
        newNotifForm.onsubmit=deleteNotif
        newNotifForm.appendChild(notifParag)
        let deleteButton= document.createElement('button')
        deleteButton.innerText='X'
        newNotifForm.appendChild(deleteButton)
        document.getElementById('future').appendChild(newNotifForm)

       }
  
   }
   
   function listPastNotifs(params) {
    document.getElementById('past').innerHTML='';
    let header= document.createElement('h2')
    header.innerHTML='Past notifications'
    document.getElementById('past').appendChild(header)
    let raw = localStorage.getItem('pastNotifs')
    let pastNotifList=JSON.parse(raw)
    
    if(params.length === 0){
        params=pastNotifList
    }
    for(let prop of params){
        let newNotif=`<p onclick="editNotif(event)" name='notif'>${prop.title}  ${prop.hour} ${prop.date}</p>`
        let notifParag= document.createElement('p')
        notifParag.innerHTML=newNotif
        let newNotifForm= document.createElement('form')
        newNotifForm.onsubmit=deleteNotif
        newNotifForm.appendChild(notifParag)
        let deleteButton= document.createElement('button')
        deleteButton.innerText='X'
        newNotifForm.appendChild(deleteButton)
        document.getElementById('past').appendChild(newNotifForm)

       }
  
   }
   
   function deleteNotif(e) {
       e.preventDefault()
       let raw =e.target.outerText
       let newStr= raw.slice(0,raw.length-3)
       let raw1 = localStorage.getItem('notifs')
       let notifList=JSON.parse(raw1)
       deleteTask(newStr,notifList)      
   }



function deleteTask(notif,arr) {
        
    for(let prop of arr){
        let format = prop.title+' '+ prop.hour+' ' + prop.date
        if(format==notif){
            let id=arr.indexOf(prop)
            arr.splice(id, 1)
            futureNotif=arr;
            localStorage.setItem('notifs', JSON.stringify(futureNotif))
            listNotifs(futureNotif);         
        }
    }
    
}



Notification.requestPermission().then(function(result) {
    
    if(result =="granted"){
        setInterval( alarmNotif, 3000)        
    }
  });

 
 function alarmNotif() {
    let raw = localStorage.getItem("notifs")
    let notifList=JSON.parse(raw)
    let d= new Date();
    let h= d.getHours()
    let m= d.getMinutes()
    if(m>=0 && m<10){
        m="0"+m;
           }
    let hm = h + ":" + m
    let dt = d.getDate()
    let mn= d.getMonth()+1;
    if(mn>=0 && mn<10){
        mn="0"+mn;
           }
    let y = d.getFullYear()
    let formattedDate = y+'-'+mn+'-'+dt
   
    for(let prop of notifList){
       if(prop.hour== hm && prop.date == formattedDate){
           alert(prop.title)
           deleteTask(prop.title, futureNotif)
           pastNotif.push(prop)
           localStorage.setItem("pastNotifs",JSON.stringify(pastNotif))
           listPastNotifs(pastNotif)
        }
    }     
 }
 