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