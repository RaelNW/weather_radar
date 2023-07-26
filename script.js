
function searchWeather(){
  var city = getElementById("cityInput").value;

  var apiUrl = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&APPID=f2d2ef0703953b45c83e0ca0964001f7";
}
fetch(),
  .then(function (response) {
    return response.json();
  })
  .then(function (data) {
    displayForecast(data);
  });
