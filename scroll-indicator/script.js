const progressBar = document.querySelector(".progress");

window.onscroll = updateProgressBar;

function updateProgressBar() {
    const { scrollTop, scrollHeight } = document.documentElement;
    const totalHeight = scrollHeight - window.innerHeight;
    const scrolled = (scrollTop / totalHeight) * 100;
    progressBar.style.width = scrolled + "%";
}
