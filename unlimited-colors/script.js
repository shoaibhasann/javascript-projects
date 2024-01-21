const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");

function generateColors(){
    const char = "0123456789ABCDEF";
    let color = "#";

    for(let i = 0; i < 6; i++){
       let randomNum = Math.floor(Math.random() * (15 - 0 + 1)) + 0;
       color += char[randomNum];
    }
    return color;
}

let timerId;

startBtn.addEventListener("click", () => {
    timerId = setInterval(() => {
        const color = generateColors();
        document.body.style.backgroundColor = color;
    }, 1000);
});

stopBtn.addEventListener("click", () => {
    clearInterval(timerId);
});