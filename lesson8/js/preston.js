let currentDate = new Date();

    let lastModified = new Date(document.lastModified);
    let options = {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
    }; 
    document.getElementById("last-modified").innerHTML = lastModified.toLocaleDateString("en", options);
    document.getElementById("current-year").innerHTML = currentDate.getFullYear();

if (currentDate.getDay() == 5) {
    document.getElementById("banner").style.display = "block";
}

function toggleMenu() {
    var list = document.getElementById("menu");
    if (list.style.display === "block") {
        list.style.display = "none";
    } 
    else {
        list.style.display = "block";
    }
}