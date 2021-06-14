// I did not use the alert, because when alert() the message when 
// a player win, it does not display last 'X' or 'O'. The rest is
// all right I hope


let playerOnePushes = []
let playerTwoPushes = []
let winConbinations = [
 ['one','two', 'three'],
 ['four', 'five', 'six'],
 ['seven','eight','nine'],
 ['one','four','seven'],
 ['two','five','eight'],
 ['three','six','nine'],
 ['one', 'five','nine'],
 ['three', 'five','seven']]

 const boxIds=['one','two', 'three','four', 'five', 'six','seven','eight','nine']

function changeStatus() {
 let  isPlayerOneActive = document.getElementById('playerOne').classList.contains('active')
   if(isPlayerOneActive){
    document.getElementById('playerOne').classList.remove('active');
    document.getElementById('playerOne').classList.add('passive')
    document.getElementById('playerTwo').classList.remove('passive')
    document.getElementById('playerTwo').classList.add('active')
    document.getElementById('active-player').innerText="It is 2-player's turn!"
   } else{
    document.getElementById('playerOne').classList.remove('passive');
    document.getElementById('playerOne').classList.add('active')
    document.getElementById('playerTwo').classList.remove('active')
    document.getElementById('playerTwo').classList.add('passive')
    document.getElementById('active-player').innerText="It is 1-player's turn!"
   }
}

function clickBox(e) {
    isPlayerOneActive = document.getElementById('playerOne').classList.contains('active')   
       let clickedBoxId = e.target.id 
    if(isPlayerOneActive){
        if(document.getElementById(clickedBoxId).innerText===''){
            document.getElementById(clickedBoxId).innerText= 'X';
        changeStatus();
        playerOnePushes.push(clickedBoxId)
        checkResults(playerOnePushes,'1-palyer')
        }else{
            alert('Do not press full box!!!')
        }
        
     } else {
         if(document.getElementById(clickedBoxId).innerText==''){
            document.getElementById(clickedBoxId).innerText= 'O';
            changeStatus();
            playerTwoPushes.push(clickedBoxId);
            checkResults(playerTwoPushes, '2-player')
            }else{
            alert('Do not press full box!!!')
        }
        
    }
    
}

function checkResults(data, player) {
    let conbinationMatch = 0
    for(let conbination of winConbinations){
        let matches = 0;
        for(let item of conbination){
            
            for(let prop of data){
                if(item === prop){
                    matches++
                }
                if(matches === 3){
                    document.getElementById('active-player').innerText= player+ ' win the game!!!'                
                    }
            }
        }
    }
}

function gameRefresh() {
    let  isPlayerOneActive = document.getElementById('playerOne').classList.contains('active')
 
    for(let id of boxIds ){
     document.getElementById(id).innerText=''
 }
 let playerOnePushes = []
 let playerTwoPushes = []
 document.getElementById('active-player').innerText="It is 1-player's turn!"
 if(!isPlayerOneActive){
    document.getElementById('playerOne').classList.remove('passive');
    document.getElementById('playerOne').classList.add('active')
    document.getElementById('playerTwo').classList.remove('active')
    document.getElementById('playerTwo').classList.add('passive')
     }
}