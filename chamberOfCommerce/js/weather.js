const weatherAPI = "https://api.openweathermap.org/data/2.5/onecall?lat=40.3141&lon=112.0069&units=imperial&appid=3d14e82cac088b47e97b083c06681a11";
fetch(weatherAPI)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    document.getElementById('currentTemp').textContent = jsObject.current.temp + `\u00B0F`;
    document.getElementById('description').textContent = jsObject.current.weather[0].description;
    document.getElementById('humidity').textContent = jsObject.current.humidity;    
});