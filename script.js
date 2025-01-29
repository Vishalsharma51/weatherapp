const inputbox = document.querySelector('.input-box');
const searchbtn = document.getElementById('searchbtn');
const weatherimg = document.querySelector('.weatherimg');
const temp = document.querySelector('.temp');
const desc = document.querySelector('.desc');
const humidity = document.getElementById('humidity');
const windspeed = document.getElementById('wind-speed');


const locnf = document.querySelector('.locnf');
const weather_body = document.querySelector('.weather-body');

async function checkWeather(city) {
    const api_key = "1c9ef76590e137d76e240d5a72125cab";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${api_key}`;

    const weatherdata = await fetch(`${url}`).then(response => response.json());


    if(weatherdata.cod === '404'){
        locnf.style.display = "flex";
        weather_body.style.display = "none";
        console.log("error");
        return;
    }
    locnf.style.display = "none";
        weather_body.style.display = "flex";
    temp.innerHTML = `${Math.round(weatherdata.main.temp - 273.15)}°C`;
    desc.innerHTML = `${weatherdata.weather[0].description}`;
    console.log(weatherdata);
    humidity.innerHTML = `${weatherdata.main.humidity}%`;
    windspeed.innerHTML = `${weatherdata.wind.speed}km/h`;

    switch (weatherdata.weather[0].main) {
        case 'Clouds':
            weatherimg.src = "/assests/cloud.png";
            break;
        case 'Clear':
            weatherimg.src = "/assests/clear.png";
            break;
        case 'Rain':
            weatherimg.src = "/assests/rain.png";
            break;
        case 'Mist':
            weatherimg.src = "/assests/mist.png";
            break;
        case 'Snow':
            weatherimg.src = "/assests/snow.png";
            break;
    }
}
searchbtn.addEventListener('click', () => {
    checkWeather(inputbox.value)
})