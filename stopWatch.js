const secondsTag = document.getElementById('second');
const minutesTag = document.getElementById('minute');
const hoursTag = document.getElementById('hour');

let isPaused = false;

let time = setInterval(function(){
    if(isPaused){
        secondsTag.innerHTML = (parseInt(secondsTag.innerHTML)<9)?`0${parseInt(secondsTag.innerHTML)+1}`:parseInt(secondsTag.innerHTML)+1;
        
        
    
        if(parseInt(secondsTag.innerHTML)%60 === 0){
            minutesTag.innerHTML = (parseInt(minutesTag.innerHTML)<9)?`0${parseInt(minutesTag.innerHTML)+1}`:parseInt(minutesTag.innerHTML)+1;    
            
            if(parseInt(secondsTag.innerHTML)===60){
                secondsTag.innerHTML = '00';
            }
        }
    
        
        if(parseInt(minutesTag.innerHTML)%60 === 0 && parseInt(minutesTag.innerHTML)>=1){
            hoursTag.innerHTML = (parseInt(hoursTag.innerHTML)<9)?`0${parseInt(hoursTag.innerHTML)+1}`:parseInt(hoursTag.innerHTML)+1;
            if(parseInt(minutesTag.innerHTML)===60){
                minutesTag.innerHTML = '00';
            }
        }    
        
    }
},1000);




// button functions
// document.getElementById('pause').disabled = true;
// document.getElementById('stop').disabled = true;

// start button
document.getElementById('start').addEventListener('click',function(){
    isPaused = true;

    if(document.getElementById('start').disabled === true){
        document.getElementById('start').disabled = false;
    }else{
        document.getElementById('start').disabled = true;
    }

    if(document.getElementById('stop').disabled === true){
        document.getElementById('pause').disabled = false;
        document.getElementById('stop').disabled = false;
    }else{
        document.getElementById('pause').disabled = true;
        document.getElementById('stop').disabled = true;
    }
        // else{
        //     document.getElementById('pause').disabled = true;
        //     document.getElementById('stop').disabled = true;
        // }
})

// pause button
document.getElementById('pause').addEventListener('click',function(){
    if(!isPaused){
        isPaused = true;
        document.getElementById('pause').classList.replace('btn-outline-success','btn-outline-warning');
        document.getElementById('pause').innerHTML = 'pause';   
        

    }else{
        isPaused = false;
        document.getElementById('pause').classList.replace('btn-outline-warning','btn-outline-success');
        document.getElementById('pause').innerHTML = 'continue';
    }

})

// stop button
document.getElementById('stop').addEventListener('click',function(){
    isPaused = false;
    if(document.getElementById('start').disabled === true){
        document.getElementById('start').disabled = false;
    }else{
        document.getElementById('start').disabled = true;
    }

    if(document.getElementById('stop').disabled === true){
        document.getElementById('pause').disabled = false;
        document.getElementById('stop').disabled = false;
    }else{
        document.getElementById('pause').disabled = true;
        document.getElementById('stop').disabled = true;
    }

    secondsTag.innerHTML = '00';
    minutesTag.innerHTML = '00';
    hoursTag.innerHTML = '00';
})

