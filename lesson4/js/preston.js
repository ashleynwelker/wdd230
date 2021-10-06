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

function toggleMenu() {
    var list = document.getElementById("menu");
    if (list.style.display === "block") {
        list.style.display = "none";
    } 
    else {
        list.style.display = "block";
    }
}