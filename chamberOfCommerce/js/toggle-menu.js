let hamburger = document.querySelector(".icon");
hamburger.addEventListener("click", toggleMenu);

let list = document.querySelector(".menu");
function toggleMenu() {
    console.log(log);
    list.classList.toggle("openMenu");
}

window.onresize = () => {
    if (window.innerWidth > 760) {
        list.classList.remove("openMenu");
    }
}