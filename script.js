// Last time you met: 8 December 2025 at 2:55
const lastSeen = new Date(2025, 11, 8, 14, 55, 0);


function updateTimer() {
    const now = new Date();
    let diff = Math.floor((now - lastSeen) / 1000);

    const days = Math.floor(diff / 86400);
    diff %= 86400;
    const hours = Math.floor(diff / 3600);
    diff %= 3600;
    const minutes = Math.floor(diff / 60);
    const seconds = diff % 60;

    document.getElementById("days").textContent = days;
    document.getElementById("hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("minutes").textContent = String(minutes).padStart(2, "0");
    document.getElementById("seconds").textContent = String(seconds).padStart(2, "0");
}

updateTimer();
setInterval(updateTimer, 1000);
