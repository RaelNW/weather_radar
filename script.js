function searchWeather() {
  var city = document.getElementById("cityInput").value;

  var apiUrl =
    "http://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=f2d2ef0703953b45c83e0ca0964001f7";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayForecast(data);
    });
}
function displayForecast(data) {
  var forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.innerHTML = "";

  var cityName = document.createElement("h2");
  cityName.textContent = data.name;
  forecastContainer.appendChild(cityName);

  var temperature = document.createElement("p");
  temperature.textContent = "Temperature: " + data.main.temp + "ºF";
  forecastContainer.appendChild(temperature);

  var humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + data.main.humidity + "%";
  forecastContainer.appendChild(humidity);

  var windSpeed = document.createElement("p");
  windSpeed.textContent = "Wind Speed: " + data.wind.speed + " MPH";
  forecastContainer.appendChild(windSpeed);
}
