const typedTextContainer = document.querySelector(".typed-text");
const text = typedTextContainer.getAttribute("text");
const speed = parseInt(typedTextContainer.getAttribute("speed"));
let index = 0;

// function to write text like type writer 
function typist(){
    let word = text.slice(0,index);
    typedTextContainer.textContent = word;
    index++;

    // for infinte loop
    if(index > text.length){
        index = 0;
    }

    // recusive function inside setTimeout
    setTimeout(() => {
        typist();
    }, speed);
}

// calling typist function after dom loaded
document.addEventListener("DOMContentLoaded", typist);

