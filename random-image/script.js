const content = document.querySelector(".content");
const baseURL = 'https://source.unsplash.com/all/300x300';
const btn = document.querySelector("button");

const image = document.createElement("img");
image.setAttribute("src", baseURL);
content.appendChild(image);

btn.addEventListener("click", () => {
    window.location.href = 'https://redesigned-space-lamp-wr7p996qqqgh9vxv-5500.app.github.dev/random-image/';
}, false);
