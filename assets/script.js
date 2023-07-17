var apiKey = "5603099f302abf2bb4151111b32bcd9c"
var cityInput = document.getElementById('search-box')
var inputBtn = document.getElementById('search-btn')
var searchForm = document.getElementById('city-search')



function citySearch(event) {
    event.preventDefault()
    clearResults()
    var citySearch = cityInput.value
    getCurrentWeather(citySearch)
    getFiveDay(citySearch)


    
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

function getFiveDay(cityName) {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial&cnt=40')
        .then(function(response) {
            return response.json()
        })
        .then(function(fiveDayData) {
            var fiveSection = document.getElementById('five-day')
            var h2 = document.createElement('h2')
            h2.innerText = "5 Day Forecast:"
            fiveSection.appendChild(h2)

            var fiveDayForecast = fiveDayData.list
            var days = [4, 12, 20, 28, 36]
                days.forEach(function (i) {
                    var forecast = fiveDayForecast[i]
                    fiveDay(cityName, forecast)
                    console.log(forecast);
                    
                })
            
        
        })
}

function currentWeather(cityName, weatherData) {
    var h2 = document.createElement('h2')
    h2.innerText = cityName
    var ul = document.createElement('ul')
    var li1 = document.createElement('li')
    var li2 = document.createElement('li')
    var li3 = document.createElement('li')
    li1.innerText = "Temp: " + weatherData.main.temp
    li2.innerText = "Humidity: " + weatherData.main.humidity
    li3.innerText = "Wind Speed: " + weatherData.wind.speed
    ul.appendChild(li1)
    ul.appendChild(li2)
    ul.appendChild(li3)
    var topSection = document.getElementById('current')
    topSection.appendChild(h2)
    topSection.appendChild(ul)
}

function fiveDay(cityName, forecast) {
    
    
    
    for (var i = 0; i < forecast.length; i++) {
        var fiveSection = document.getElementById('five-day')
        var div = document.createElement('div')
        var ul = document.createElement('ul')
        var li1 = document.createElement('li')
        var li2 = document.createElement('li')
        var li3 = document.createElement('li')
        var li4 = document.createElement('li')

        li1.innerText = "Temp: " + forecast.dt_txt
        li2.innerText = "Temp: " + forecast.main[0]
        console.log(forecast.main);
 

        ul.appendChild(li1)
        ul.appendChild(li2)
        ul.appendChild(li3)
        ul.appendChild(li4)
        div.appendChild(ul)
        fiveSection.appendChild(div)
    }

    
}

function clearResults() {
    var clearCurrent = document.getElementById('current')
    clearCurrent.innerText = ""
    var clearFiveDay = document.getElementById('five-day')
    clearFiveDay.innerText = ""
}



// FIVE DAY!!!
// 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName + '&appid=' + apiKey + '&units=imperial&cnt=3'

searchForm.addEventListener('submit', citySearch)