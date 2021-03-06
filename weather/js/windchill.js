
// Windchill temperature is officially defined for temperatures
// at or below 10 °C (50 °F) and wind speeds above 4.8 kilometers 
// per hour (3.0 mph).
// f= 35.74 + (0.6215*t) - (35.75*(s**0.16)) + (0.4275(t)*(s**0.16))

const WIND_CHILL = (t,s) =>  {return (35.74 + (0.6215*t) - (35.75*(s**0.16)) + (0.4275*(t)*(s**0.16))).toFixed(1)}

let forecast = []

let weather = {}

function output_windchill () {
    console.log(weather);
    let temp = document.querySelector("#temp");
    temp.textContent = weather.temp_f;
    let c = document.querySelector("#weather-description");
    c.textContent = weather.condition.text;
    let windchill = document.querySelector("#wind-chill");
    windchill.textContent = WIND_CHILL(weather.temp_f, weather.wind_mph)
    let temp_high = document.querySelector("#temp_high");
    temp_high.textContent = forecast[0].day.maxtemp_f;
    let humidity = document.querySelector("#humidity");
    humidity.textContent = weather.humidity;
    let wind_speed = document.querySelector("#wind-speed");
    wind_speed.textContent = weather.wind_mph;
    


    // console.log(list)
    for (let i = 0; i < forecast.length ; i++){
    }
}

async function FetchWeather(){

    
    let url = "https://api.weatherapi.com/v1/forecast.json?key=103ea9f0eebe4be1825213412221103&q=83263&days=5&aqi=no&alerts=no"
    if(page == "Soda Springs"){
        url = "http://api.weatherapi.com/v1/forecast.json?key=103ea9f0eebe4be1825213412221103&q=Soda Springs&days=1&aqi=no&alerts=no"
    }
    else if (page == "Fish Haven"){
        url = "http://api.weatherapi.com/v1/forecast.json?key=103ea9f0eebe4be1825213412221103&q=Fish Haven&days=1&aqi=no&alerts=no"
    }
    await fetch(url)
    .then((response) => {
        return response.json();
    })
    .then((weatherJSON) => {
    weather = weatherJSON.current
    forecast = weatherJSON.forecast.forecastday
    // console.log(forecast)
    //     wdata = weatherJSON.data.results;
    });
    output_windchill();
}
FetchWeather();