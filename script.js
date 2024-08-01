function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById('datetime').innerText = dateTimeString;
}

// Update the date and time every second
setInterval(updateDateTime, 1000);

// Initial call to display the date and time immediately
updateDateTime();
