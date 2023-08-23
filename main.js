function updateClock() {
    const clockElement = document.getElementById('clock');
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');
    const timeString = `${hours}:${minutes}:${seconds}`;
    clockElement.textContent = timeString;
}
const currentDate = new Date();
const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const formattedDate = currentDate.toLocaleDateString(undefined, options);

const dateElement = document.getElementById("date");
dateElement.textContent = formattedDate;

// Update the clock every second
setInterval(updateClock, 1000);

// Initial update when the page loads
updateClock();