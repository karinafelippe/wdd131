/*Author: Karina Felippe*/
const temperatureLabel = document.querySelector("#displayTemperature");
const conditionsLabel = document.querySelector("#displayConditions");
const windLabel = document.querySelector("#displayWind");
const windChillLabel = document.querySelector("#displayWindChill");

let temperature = 10;
let wind = 5;

function calculateWindChill(temperature, windSpeed) {
    return 13.12 + (0.6215 * temperature) - (11.37 * Math.pow(windSpeed, 0.16)) + (0.3965 * temperature * Math.pow(windSpeed, 0.16));    
}

conditionsLabel.textContent = "Partly Cloudy";
temperatureLabel.textContent = `${temperature} °C`;
windLabel.textContent = `${wind} km/h`;
if (temperature <= 10 && wind > 4.8){
    let windChill = calculateWindChill(temperature, wind);
    windChillLabel.textContent = `${windChill.toFixed(1)} °C`;
} else
    windChillLabel.textContent = "N/A";