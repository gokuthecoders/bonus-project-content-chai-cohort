const startButton = document.getElementById('startButton')
const stopButton = document.getElementById('stopButton')
const resumeButton = document.getElementById('resumeButton')
const countdownDisplay = document.getElementById('countdownDisplay')
const timeInput = document.getElementById('timeInput')

let timeId;
let newAllotTime;
let timerFlag ;
let startFlag = true;

function countDown (time){
    timeId = setInterval(()=>{
        newAllotTime = time--;
        
        countdownDisplay.innerHTML = `<b> Time remaining ${newAllotTime} s<b>`;
        
        if(time < 0){
            clearInterval(timeId)
            countdownDisplay.innerHTML = `<b> Time up</b>`;
        }
        
    }, 1000)
    
}

startButton.addEventListener('click', ()=>{
    if(startFlag == true){
        let time = Number(timeInput.value);
        timerFlag = true
        startFlag = false
        countDown(time)
    }
})

stopButton.addEventListener('click', function(){
    timerFlag = false
    clearInterval(timeId)
})

resumeButton.addEventListener('click', ()=>{
    timerFlag !== true ? countDown(newAllotTime) : ''

    timerFlag = true
})