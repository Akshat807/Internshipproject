// Mobile warning dismiss
document.getElementById('dismissWarning').addEventListener('click', function() {
    document.querySelector('.mobile-warning').style.display = 'none';
});

// Progress ring animation
const circle = document.querySelector('.progress-ring-circle');
const radius = circle.r.baseVal.value;
const circumference = radius * 2 * Math.PI;

circle.style.strokeDasharray = `${circumference} ${circumference}`;

function setProgress(percent) {
    const offset = circumference - percent / 100 * circumference;
    circle.style.strokeDashoffset = offset;
}

// Set initial progress
setProgress(41);

// Timer functionality
let isPaused = true;
let hours = 1;
let minutes = 24;
let seconds = 8;
let timerInterval;

function updateTimerDisplay() {
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

function startTimer() {
    if (isPaused) {
        isPaused = false;
        timerInterval = setInterval(function() {
            seconds++;
            if (seconds >= 60) {
                seconds = 0;
                minutes++;
                if (minutes >= 60) {
                    minutes = 0;
                    hours++;
                }
            }
            updateTimerDisplay();
        }, 1000);
        
        document.querySelector('.fa-play').parentElement.classList.add('bg-gray-700');
        document.querySelector('.fa-play').parentElement.classList.remove('bg-red-600');
        document.querySelector('.fa-pause').parentElement.classList.add('bg-gray-700');
        document.querySelector('.fa-pause').parentElement.classList.remove('bg-gray-600');
    }
}

function pauseTimer() {
    if (!isPaused) {
        isPaused = true;
        clearInterval(timerInterval);
        
        document.querySelector('.fa-pause').parentElement.classList.remove('bg-gray-700');
        document.querySelector('.fa-pause').parentElement.classList.add('bg-gray-600');
        document.querySelector('.fa-play').parentElement.classList.remove('bg-gray-700');
        document.querySelector('.fa-play').parentElement.classList.add('bg-red-600');
    }
}

document.querySelector('.fa-play').parentElement.addEventListener('click', startTimer);
document.querySelector('.fa-pause').parentElement.addEventListener('click', pauseTimer);

// Make sure timer is in paused state initially
pauseTimer();