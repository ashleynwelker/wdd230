function dates() {
    let lastModified = new Date(document.lastModified);
    let currentYear = new Date();
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

let hamburger = document.querySelector(".icon");
hamburger.addEventListener("click", toggleMenu);

let list = document.querySelector(".menu");
function toggleMenu() {    
    console.log(list);
    list.classList.toggle("openMenu");
}

window.onresize = () => {
    if (window.innerWidth > 760) {
        list.classList.remove("openMenu");
    }
}