const clock = document.getElementById("clock");

const getCurrentTime = () => {
    const date = new Date();
    const time = date.toLocaleTimeString();
    return time;
}

setInterval(() => {
    clock.textContent = getCurrentTime();
}, 1000);