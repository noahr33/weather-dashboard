var apiKey = "5603099f302abf2bb4151111b32bcd9c"
var input = document.createElement('input')
input.type = "text"
var inputBtn = document.createElement('button')
var searchDiv = document.getElementsByClassName('search')

function cityInput () {
    
}

function getCurrentWeather(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/weather?q=' + cityName + '&units=imperial&appid=' + apiKey)
        .then(function(response) {
            return response.json();
        })
        .then(function(weatherData) {
            currentWeather(cityName, weatherData)
            
        })
}

function currentWeather(cityName, weatherData) {
    var h2 = document.createElement('h2')
    h2.innerText = cityName
    console.log(cityName);
    var ul = document.createElement('ul')
    var li1 = document.createElement('li')
    var li2 = document.createElement('li')
    var li3 = document.createElement('li')
    li1.innerText = "Temp:" + weatherData.main.temp
    li2.innerText = "Humidity" + weatherData.main.humidity
    li3.innerText = "Wind Speed" + weatherData.wind.speed
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    var topSection = document.getElementsByClassName('today')
    topSection.appendChild(h2)
}



getCurrentWeather('Milwaukee')

// FIVE DAY!!!
// 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial&cnt=3'
