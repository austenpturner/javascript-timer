const timer = document.getElementById('timer');
const btnStart = document.getElementById('start-btn');
const btnPause = document.getElementById('pause-btn');
const btnReset = document.getElementById('reset-btn');

let seconds = 55;
let minutes = 59;
let hours = 11;
let interval;

btnStart.addEventListener('click', function() {
    interval = setInterval( function() {
        btnStart.disabled = true;
        seconds++;
        if (hours >= 12) {
            hours = 0;
            minutes = 0;
            seconds = 0;
            timer.textContent = '00:0' + minutes + ':0' + seconds;
        } else if (hours >= 10 && minutes >= 59 && seconds >= 60) {
            hours += 1; 
            minutes = 0;
            seconds = 0;
            timer.textContent = hours + ':0' + minutes + ':0' + seconds;
        } else if (hours >= 10 && minutes >= 10 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = hours + ':' + minutes + ':0' + seconds;
        } else if (hours >= 10 && minutes === 9 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = hours + ':' + minutes + ':0' + seconds;
        } else if (hours >= 10 && minutes < 10 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = hours + ':0' + minutes + ':0' + seconds;
        } else if (hours >= 10 && minutes >= 10 && seconds >= 10) {
            timer.textContent = hours + ':' + minutes + ':' + seconds;
        } else if (hours >= 10 && minutes >= 10 && seconds < 10) {
            timer.textContent = hours + ':' + minutes + ':0' + seconds;
        } else if (hours >= 10 && minutes < 10 && seconds >= 10) {
            timer.textContent = hours + ':0' + minutes + ':' + seconds;
        } else if (hours >= 10 && minutes < 10 && seconds < 10) {
            timer.textContent = hours + ':0' + minutes + ':0' + seconds;
        } else if (hours < 10 && minutes >= 59 && seconds >= 60) {
            hours += 1; 
            minutes = 0;
            seconds = 0;
            timer.textContent = hours + ':0' + minutes + ':0' + seconds;
        } else if (hours < 10 && minutes >= 10 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = '0' + hours + ':' + minutes + ':0' + seconds;
        } else if (hours < 10 && minutes === 9 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = '0' + hours + ':' + minutes + ':0' + seconds;
        } else if (hours < 10 && minutes < 10 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = '0' + hours + ':0' + minutes + ':0' + seconds;
        } else if (hours < 10 && minutes >= 10 && seconds >= 10) {
            timer.textContent = '0' + hours + ':' + minutes + ':' + seconds;
        } else if (hours < 10 && minutes >= 10 && seconds < 10) { 
            timer.textContent = '0' + hours + ':' + minutes + ':0' + seconds;
        } else if (hours < 10 && minutes < 10 && seconds >= 10) { 
            timer.textContent = '0' + hours + ':0' + minutes + ':' + seconds;
        } else if (hours < 10 && minutes < 10 && seconds < 10) { 
            timer.textContent = '0' + hours + ':0' + minutes + ':0' + seconds;
        } else if (minutes >= 59 && seconds >= 60) {
            hours += 1;
            minutes = 0;
            seconds = 0;
            timer.textContent = '0:' + hours + ':0' + minutes + ':0' + seconds;
        } else if (minutes >= 10 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = '00:' + minutes + ':0' + seconds;
        } else if (minutes >= 10 && seconds < 10) {
            timer.textContent = '00:' + minutes + ':0' + seconds;
        } else if (minutes >= 10 && seconds >= 10) {
            timer.textContent = '00:' + minutes + ':' + seconds;
        } else if (minutes < 10 && seconds >= 60) {
            minutes += 1;
            seconds = 0;
            timer.textContent = '00:0' + minutes + ':0' + seconds;
        } else if (minutes < 10 && seconds >= 10) {
            timer.textContent = '00:0' + minutes + ':' + seconds;
        } else if (seconds >= 1 ) {
            timer.textContent = '00:0' + minutes + ':0' + seconds;
        } 
    }, 1000)
});

btnPause.addEventListener('click', function() {
    clearInterval(interval);
    btnStart.disabled = false;
});

btnReset.addEventListener('click', function() {
    clearInterval(interval);
    hours = 0;
    minutes = 0;
    seconds = 0;
    timer.textContent = minutes + ':0' + seconds;
});
