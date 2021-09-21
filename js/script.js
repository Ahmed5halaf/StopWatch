let  display_main= document.getElementById('display');
let  display= document.querySelector('span');
let  display_1= document.getElementById('show1');
let  display_2= document.getElementById('show2');
let  display_3= document.getElementById('show3');
let start = document.getElementById('start');
let reset = document.getElementById('reset');

let sec = 0;
let min = 0;
let hour = 0;


let displaySecond = 0;
let displayMint = 0;
let displayHour = 0;

let interval = null;

let btn = 'stopped'


function stopWatch(){
    sec++;

    if(sec === 60){
       sec = 0;

       min++;

      
    }


    if(min === 60){
        min = 0;
        hour++;
    }

    if(sec < 2){
        displaySecond = '0' + sec.toString()
    }else{
        displaySecond = sec;
    }
    
    
    
    if(min < 2){
        displayMint = '0' + min.toString()
    }else{
        displayMint = min;
    }
    
    
    
    if(hour < 2){
        displayHour = '0' + hour.toString()
    } else{
        displayHour = hour;
    }
    


// الزرار لو هوا استوبيد 
//اكتب على الزرار اوقف 
//وحالته غير ال ستوب
//---------------------------
//غير كده خليه يبدا 
//وحالته زى المتغير اللى فوق سقف

display_1.innerHTML = `${displayHour} :`
display_2.innerHTML = `${displayMint} :`
display_3.innerHTML = `${displaySecond}`
}


start.onclick = function stert_stop(){

    if(btn === 'stopped'){
        interval =  window.setInterval(stopWatch, 100);
        start.innerHTML = ' stop';
        btn = 'started'; 

    }else{
        window.clearInterval(interval)
        start.innerHTML = 'Start';
        btn = 'stopped'
    }
}

reset.onclick = function(){
    window.clearInterval(interval);
    sec = 0;
    min = 0;
    hour = 0;
    display_1.innerHTML = '00 :'
    display_2.innerHTML = '00 :'
    display_3.innerHTML = '00'
    start.innerHTML = 'Start';
    btn = 'stopped'
}