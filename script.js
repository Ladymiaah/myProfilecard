function updateUTCtime() {
    const utcTimeElement = document.getElementById("utcTime");

    if (utcTimeElement) {
        const now = new Date();  

        const year = now.getUTCFullYear();
        const month = now.getUTCMonth(); 
        const day = now.getUTCDate();
        const hour = now.getUTCHours();
        const minute = now.getUTCMinutes();
        const second = now.getUTCSeconds();
        const weekday = now.getUTCDay(); 

        const weekdays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const formattedWeekday = weekdays[weekday];
        const formattedTime = `${formattedWeekday}, ${getMonthName(month)} ${day}, ${year}, ${padZero(hour)}:${padZero(minute)}:${padZero(second)} UTC`;
        utcTimeElement.textContent = `UTC Time: ${formattedTime}`;
    }
}

function padZero(num) {
    return num < 10 ? `0${num}` : num;
}

function getMonthName(monthIndex) {
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    return months[monthIndex];
}


updateUTCtime();
setInterval(updateUTCtime, 1000);
