function dates() {
    var lastModified = new Date(document.lastModified);
    var currentYear = new Date();
    document.getElementById("last-modified").innerHTML = lastModified.toLocaleString();
    document.getElementById("current-year").innerHTML = currentYear.getFullYear();
}