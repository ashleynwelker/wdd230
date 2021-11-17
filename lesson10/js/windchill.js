let temperature = parseInt(document.getElementById("temperature").innerHTML);
let windSpeed = parseInt(document.getElementById("windSpeed").innerHTML);

if (temperature <= 50 && windSpeed >= 3.0) {
    let windChill = 35.74 + 0.6215 * temperature - 35.75 * windSpeed **0.16 + 0.4275 * temperature * windSpeed **0.16;
    document.getElementById("windChill").innerHTML = Math.round(windChill);
} else {
    document.getElementById("windChill").innerHTML = "N/A";
} 