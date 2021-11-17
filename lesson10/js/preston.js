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

const weatherAPI = "http://api.openweathermap.org/data/2.5/weather?id=5604473&units=imperial&appid=3d14e82cac088b47e97b083c06681a11";
fetch(weatherAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentDescription').textContent = jsObject.weather[0].main;
    document.getElementById('temperature').textContent = jsObject.main.temp;
    document.getElementById('humidity').textContent = jsObject.main.humidity;
    document.getElementById('windSpeed').textContent = jsObject.wind.speed;
    
});


const forecastAPI = "http://api.openweathermap.org/data/2.5/forecast?id=5604473&units=imperial&appid=3d14e82cac088b47e97b083c06681a11";
fetch(forecastAPI)
  .then((response) => response.json())
  .then((forecastData) => {
    console.log(forecastData);
    let imgElements = document.getElementsByClassName('weather-icon');
    let spanTempElements = document.getElementsByClassName('forecast'); 
    let dayOfWeekElementList = document.getElementsByClassName('dayOfWeek');   
    for (let i = 0, j = 0; i < forecastData.list.length && j < imgElements.length && 
        j < dayOfWeekElementList.length && j < spanTempElements.length; i++ ) {
        let forecastItem = forecastData.list[i];
        if (forecastItem.dt_txt.includes("18:00:00")) {
            const imagesrc = 'https://openweathermap.org/img/w/' + forecastItem.weather[0].icon + '.png';
            imgElements[j].setAttribute('src', imagesrc);
            spanTempElements[j].textContent = forecastItem.main.temp + `\u00B0F`;
            let dayOfWeekElement = dayOfWeekElementList[j];
            j++;
            dayOfWeekElement.textContent = getDayOfWeek(j);
        }
    }
});

function getDayOfWeek(daysInTheFuture) {
    let date = new Date();
    date.setDate(date.getDate() + daysInTheFuture);
    let weekdayOption = {
        weekday: "long",
    }
    return date.toLocaleDateString("en", weekdayOption);
}