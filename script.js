var time = document.getElementById('clock').textContent = fullTime;

setInterval(showTime, 1000);

function showTime() {
    let currentTime = new Date();
    let hour = String(currentTime.getHours()).padStart(2,'0');
    let minute = String(currentTime.getMinutes()).padStart(2,'0');
    let second = String(currentTime.getSeconds()).padStart(2,'0');

    let fullTime = '${hour}:${minute}:${second}';

    
    showTime();
}