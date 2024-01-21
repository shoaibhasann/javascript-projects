const showKey = document.querySelector(".key");

window.addEventListener("keydown", (e) => {
    showKey.textContent = `You pressed ${e.key}`;
});