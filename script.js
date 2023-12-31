function searchWeather() {
  var city = document.getElementById("cityInput").value;

  var apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?q=" +
    city +
    "&APPID=f2d2ef0703953b45c83e0ca0964001f7";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      displayForecast(data);
      getForecast(city);
    });
}
function displayForecast(data) {
  var forecastContainer = document.getElementById("forecastContainer");
  forecastContainer.innerHTML = "";

  var cityName = document.createElement("h2");
  cityName.textContent = data.name;
  forecastContainer.appendChild(cityName);

  var temperature = document.createElement("p");
  var temperatureConvert = ((data.main.temp - 273.15) * 9) / 5 + 32;
  temperature.textContent =
    "Temperature: " + temperatureConvert.toFixed(2) + " °F";
  forecastContainer.appendChild(temperature);

  var humidity = document.createElement("p");
  humidity.textContent = "Humidity: " + data.main.humidity + "%";
  forecastContainer.appendChild(humidity);

  var windSpeed = document.createElement("p");
  var windSpeedMph = data.wind.speed * 2.237;
  windSpeed.textContent = "Wind Speed: " + windSpeedMph.toFixed(2) + " MPH";
  forecastContainer.appendChild(windSpeed);
}
function getForecast(city) {
  var apiUrl =
    "https://api.openweathermap.org/data/2.5/forecast?q=" +
    city +
    "&APPID=f2d2ef0703953b45c83e0ca0964001f7";
  fetch(apiUrl)
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      var forecastData = data.list.slice(0, 5);

      var forecastHTML = "";
      for (var i = 0; i < forecastData.length; i++) {
        var forecastDate = new Date(forecastData[i].dt_txt).toLocaleDateString(
          "en-US",
          { weekday: "long", month: "long", day: "numeric" }
        );
        var temperature = Math.round(
          ((forecastData[i].main.temp - 273.15) * 9) / 5 + 32
        );
        var windSpeed = Math.round(forecastData[i].wind.speed * 2.237);
        var humidity = Math.round(forecastData[i].main.humidity);

        forecastHTML +=
          "<p>" +
          forecastDate +
          ": " +
          windSpeed +
          " MPH " +
          humidity +
          " % " +
          temperature +
          "°F</p>";
      }
      document.getElementById("forecastContainer").innerHTML = forecastHTML;
    });
}
