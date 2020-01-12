// DOM Elements
const clockSwitch = document.getElementById('clock-switch');
const clock = document.getElementById('clock');

const btnStart = document.getElementById('clock-start-btn');
const btnPause = document.getElementById('clock-pause-btn');
const btnReset = document.getElementById('clock-reset-btn');

const timerElements = document.getElementById('timer-elements');

const inputHours = document.getElementById('hours-input');
const inputMinutes = document.getElementById('minutes-input');
const inputSeconds = document.getElementById('seconds-input');

const btnSetTimer = document.getElementById('timer-set-btn');
const btnResetTimer = document.getElementById('timer-reset-btn');

// Variables
let seconds = 0;
let minutes = 0;
let hours = 0;
let timeUnits = [];

let interval;
let clockType;

// Event Listeners
window.onload = function() {
    checkClockType();
    clockSwitch.addEventListener('click', function() {
        checkClockType();
        if (clockType === 'timer') {
            btnSetTimer.addEventListener('click', function() {
                getTimeInput();
                setTimer();
            });
            btnResetTimer.addEventListener('click', function() {
                console.log('reset');
                inputHours.value = 0;
                inputMinutes.value = 0;
                inputSeconds.value = 0;
                seconds = 0;
                minutes = 0;
                hours = 0;
                clock.textContent = `0${hours}:0${minutes}:0${seconds}`;
            });
        } 
    })
    btnStart.addEventListener('click', function() {
        interval = setInterval( function() {
            btnStart.disabled = true;
            btnSetTimer.disabled = true;
            btnResetTimer.disabled = true;
            seconds++;
            printTime();
            console.log(seconds);
        }, 1000)
        console.log('start');
    });
    btnPause.addEventListener('click', function() {
        clearInterval(interval);
        btnStart.disabled = false;
        btnSetTimer.disabled = false;
        btnResetTimer.disabled = false;
        console.log('pause');
    });
    btnReset.addEventListener('click', function() {
        clearInterval(interval);
        btnStart.disabled = false;
        btnSetTimer.disabled = false;
        btnResetTimer.disabled = false;
        hours = 0;
        minutes = 0;
        seconds = 0;
        clock.textContent = `0${hours}:0${minutes}:0${seconds}`;
        console.log('reset');
    });
}

// Functions
function checkClockType() {
    if (clockSwitch.checked) {
        clockType = 'timer';
        timerElements.style.display = '';
    } else {
        clockType = 'stopwatch';
        timerElements.style.display = 'none';
    }
}

function getTimeInput() {
    timeUnits = [];
    hours = parseInt(inputHours.value);
    minutes = parseInt(inputMinutes.value);
    seconds = parseInt(inputSeconds.value);
    timeUnits.push(seconds, minutes, hours);
}

function setTimer() {
    clock.textContent = '';
    for (let i = timeUnits.length; i > -1; i--) {
        if (timeUnits[i] < 10) {
            timeUnits[i] = '0' + timeUnits[i];
            if (i < timeUnits.length - 1) {
                clock.textContent += ':' + timeUnits[i];
            } else {
                clock.textContent += timeUnits[i];
            }
        } else if (timeUnits[i] < 60) {
            if (i < timeUnits.length - 1) {
                clock.textContent += ':' + timeUnits[i];
            } else {
                clock.textContent += timeUnits[i];
            }
        }
    } 
}

function printTime() {
    if (hours >= 12) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        clock.textContent = '00:0' + minutes + ':0' + seconds;
    } else if (hours >= 10 && minutes >= 59 && seconds >= 60) {
        hours += 1; 
        minutes = 0;
        seconds = 0;
        clock.textContent = hours + ':0' + minutes + ':0' + seconds;
    } else if (hours >= 10 && minutes >= 10 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = hours + ':' + minutes + ':0' + seconds;
    } else if (hours >= 10 && minutes === 9 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = hours + ':' + minutes + ':0' + seconds;
    } else if (hours >= 10 && minutes < 10 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = hours + ':0' + minutes + ':0' + seconds;
    } else if (hours >= 10 && minutes >= 10 && seconds >= 10) {
        clock.textContent = hours + ':' + minutes + ':' + seconds;
    } else if (hours >= 10 && minutes >= 10 && seconds < 10) {
        clock.textContent = hours + ':' + minutes + ':0' + seconds;
    } else if (hours >= 10 && minutes < 10 && seconds >= 10) {
        clock.textContent = hours + ':0' + minutes + ':' + seconds;
    } else if (hours >= 10 && minutes < 10 && seconds < 10) {
        clock.textContent = hours + ':0' + minutes + ':0' + seconds;
    } else if (hours < 10 && minutes >= 59 && seconds >= 60) {
        hours += 1; 
        minutes = 0;
        seconds = 0;
        clock.textContent = hours + ':0' + minutes + ':0' + seconds;
    } else if (hours < 10 && minutes >= 10 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = '0' + hours + ':' + minutes + ':0' + seconds;
    } else if (hours < 10 && minutes === 9 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = '0' + hours + ':' + minutes + ':0' + seconds;
    } else if (hours < 10 && minutes < 10 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = '0' + hours + ':0' + minutes + ':0' + seconds;
    } else if (hours < 10 && minutes >= 10 && seconds >= 10) {
        clock.textContent = '0' + hours + ':' + minutes + ':' + seconds;
    } else if (hours < 10 && minutes >= 10 && seconds < 10) { 
        clock.textContent = '0' + hours + ':' + minutes + ':0' + seconds;
    } else if (hours < 10 && minutes < 10 && seconds >= 10) { 
        clock.textContent = '0' + hours + ':0' + minutes + ':' + seconds;
    } else if (hours < 10 && minutes < 10 && seconds < 10) { 
        clock.textContent = '0' + hours + ':0' + minutes + ':0' + seconds;
    } else if (minutes >= 59 && seconds >= 60) {
        hours += 1;
        minutes = 0;
        seconds = 0;
        clock.textContent = '0:' + hours + ':0' + minutes + ':0' + seconds;
    } else if (minutes >= 10 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = '00:' + minutes + ':0' + seconds;
    } else if (minutes >= 10 && seconds < 10) {
        clock.textContent = '00:' + minutes + ':0' + seconds;
    } else if (minutes >= 10 && seconds >= 10) {
        clock.textContent = '00:' + minutes + ':' + seconds;
    } else if (minutes < 10 && seconds >= 60) {
        minutes += 1;
        seconds = 0;
        clock.textContent = '00:0' + minutes + ':0' + seconds;
    } else if (minutes < 10 && seconds >= 10) {
        clock.textContent = '00:0' + minutes + ':' + seconds;
    } else if (seconds >= 1 ) {
        clock.textContent = '00:0' + minutes + ':0' + seconds;
    }
}


