const API = {
    KEY:"ca393fd3862a265aecf7673e7a6ee251",
    BASE_URL:"https://api.openweathermap.org/data/2.5/weather"
}

let searchElm = document.querySelector(".search-box");
searchElm.addEventListener("keypress",setCityName)

function setCityName(e)
{
    if(e.keyCode == 13){
        fetchWeatherData(e.target.value);
    }
    
}

function fetchWeatherData(city){
    fetch(`${API.BASE_URL}?q=${city}&appid=${API.KEY}&units=metric`)
    .then((res)=>res.json())
    .then(res=>displayResults(res))
}

function displayResults(weatherData){
    let city = document.querySelector(".city")
    city.innerText = `${weatherData.name},${weatherData.sys.country}`;

    let date = new Date();
    let days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
    let months = ["January","February","March","April","May","June","July","August","September","August","November","December"];
    let currDate = `${days[date.getDay()]} ${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`

    let dateElm = document.querySelector(".date")
    dateElm.innerText=currDate;

    let temp = document.querySelector(".temp")
    temp.innerHTML = Math.round(weatherData.main.temp) + "<span>°c</span>"

    let weather = document.querySelector(".weather")
    weather.innerText = weatherData.weather[0].main
    
    let minMaxTemp = document.querySelector(".hi-low")
    minMaxTemp.innerText = `${Math.round(weatherData.main.temp_min)}°c / ${Math.round(weatherData.main.temp_max)}°c`

    
}


