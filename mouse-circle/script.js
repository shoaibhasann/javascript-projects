const cursor = document.querySelector(".cursor");

window.onmousemove = function (event){
    const { x: posX, y: posY } = event;
    
    // changing position of cursor element according to mouse position
    cursor.style.left = posX + "px";
    cursor.style.top = posY + "px";
}