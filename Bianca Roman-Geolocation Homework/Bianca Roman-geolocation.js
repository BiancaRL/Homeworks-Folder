function getLocation() {
    console.log("Getting location...");
    if ("geolocation" in navigator) {
        navigator.geolocation.getCurrentPosition(function(position) {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;
            console.log("Location obtained. Latitude:", latitude, "Longitude:", longitude);
            fetchWeather(latitude, longitude);
        });
    } else {
        console.error("Geolocation is not supported by your browser.");
        alert("Geolocation is not supported by your browser.");
    }
}

function fetchWeather(latitude, longitude) {
    console.log("Fetching weather data...");
    const apiKey = '40548cc5b12a46ee9418e263dd707583';
    const apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            console.log("Weather data fetched successfully:", data);
            displayWeather(data);
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function celsiusToFahrenheit(celsius) {
    return Math.round(celsius * 9/5 + 32); 
}

function displayWeather(weatherData) {
    console.log("Displaying weather data:", weatherData);
    const currentWeather = weatherData.current;
    const hourlyForecast = weatherData.hourly;
    const dailyForecast = weatherData.daily;

    const weatherDiv = document.getElementById('weather');

    weatherDiv.innerHTML = `
        <h2>Current Weather</h2>
        <p>Temperature: ${Math.round(currentWeather.temp)}°C (${celsiusToFahrenheit(currentWeather.temp)}°F)</p>
        <p>Condition: ${currentWeather.weather[0].description}</p>
        <img class="weather-icon" src="https://openweathermap.org/img/wn/${currentWeather.weather[0].icon}.png" alt="Weather Icon">
    `;

    const today = new Date();
    const currentDay = today.getDate();
    const hourlyForecastToday = hourlyForecast.filter(hour => {
        const hourDate = new Date(hour.dt * 1000);
        return hourDate.getDate() === currentDay;
    });
    weatherDiv.innerHTML += `<h2>Hourly Forecast for Today</h2>`;
    weatherDiv.innerHTML += `<ul>`;
    hourlyForecastToday.forEach(hour => {
        weatherDiv.innerHTML += `<li>${new Date(hour.dt * 1000).toLocaleTimeString()}: ${Math.round(hour.temp)}°C (${celsiusToFahrenheit(hour.temp)}°F), ${hour.weather[0].description}</li>`;
    });
    weatherDiv.innerHTML += `</ul>`;

    weatherDiv.innerHTML += `<h2>Daily Forecast for the Next Days</h2>`;
    weatherDiv.innerHTML += `<ul>`;
    dailyForecast.slice(1).forEach(day => {
        weatherDiv.innerHTML += `<li>Date: ${new Date(day.dt * 1000).toDateString()}, Temperature: ${Math.round(day.temp.day)}°C (${celsiusToFahrenheit(day.temp.day)}°F), ${day.weather[0].description}</li>`;
    });
    weatherDiv.innerHTML += `</ul>`;
}

document.getElementById('getWeatherButton').addEventListener('click', getLocation);