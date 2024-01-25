const inputField = document.getElementById("input-field");
const outputField = document.getElementById("output-field");
const btnUpper = document.querySelector(".uppercase");
const btnLower = document.querySelector(".lowercase");
const btnCapital = document.querySelector(".capitalize");
const btnBold = document.querySelector(".bold");
const btnItalic = document.querySelector(".italic");
const btnLine = document.querySelector(".underline");

// converting input value into uppercase
btnUpper.addEventListener("click", () => {
    outputField.textContent =  inputField.value.toUpperCase();
}, false);

// converting input value into lowercase
btnLower.addEventListener("click", () => {
    outputField.textContent = inputField.value.toLowerCase();
}, false);

// converting input value into capitalize form
btnCapital.addEventListener("click", () => {
    const text = inputField.value;
    const firstLetter = text.charAt(0).toUpperCase();
    outputField.textContent = firstLetter + text.slice(1);
}, false);

// converting input value into bold form
btnBold.addEventListener("click", () => {
    outputField.innerHTML = inputField.value.bold();
}, false);

// converting input value into italic form
btnItalic.addEventListener("click", () => {
    outputField.innerHTML = inputField.value.italics();
}, false);

// converting input value into underline form
btnLine.addEventListener("click", () => {
    outputField.innerHTML = `<u>${inputField.value}</u>`;
}, false);