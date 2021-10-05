function dates() {
    let lastModified = new Date(document.lastModified);
    let currentYear = new Date();
    document.getElementById("last-modified").innerHTML = lastModified.toLocaleString();
    document.getElementById("current-year").innerHTML = currentYear.getFullYear();
}

dates();