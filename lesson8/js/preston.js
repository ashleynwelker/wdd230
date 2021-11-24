function dates() {
    let currentYear = new Date();
    let lastModified = new Date(document.lastModified);
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }; 
    document.getElementById("last-modified").innerHTML = lastModified.toLocaleDateString("en", options);
    document.getElementById("current-year").innerHTML = currentYear.getFullYear();
}

dates();

if (new Date().getDay() == 5) {
    document.getElementById("banner").style.display = "block";
}

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