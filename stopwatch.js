let [hours, minutes, seconds] = [0,0,0];
let displayTime = document.getElementById("display-time");
let timer = 0;
const stopwatch = () =>{
    seconds++;
    if(seconds === 60){
        seconds = 0;
        minutes++;
        if(minutes === 60){
            minutes = 0;
            hours++;
        }
    }

let hr = hours < 10 ? '0'+hours : hours;
let min = minutes < 10 ? '0'+minutes : minutes;
let sec = seconds < 10 ? '0'+seconds : seconds;

    displayTime.innerHTML = `${hr} : ${min} : ${sec}`
}


const stopWatchPause =()=>{
clearInterval(timer);
}

const stopWatchStart=()=>{
    if(timer !== 0){
        clearInterval(timer);
    }
    timer = setInterval(stopwatch,1000)
}
const stopWatchReset = () =>{
    clearInterval(timer);
    [hours, minutes, seconds] = [0,0,0];
    displayTime.innerHTML = `00 : 00 : 00`
}