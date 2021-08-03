// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
// const apiKey = "b351ed20610d69f0305baa374dd8c604"
let weather = {
  apiKey: "b351ed20610d69f0305baa374dd8c604",
  fetchWeather: function (city) {
    fetch(
      "http://api.openweathermap.org/data/2.5/weather?q="
      + city
      + "&units=metric&APPID="
      + this.apiKey
    )
      .then((response) => response.json())
      .then((data) => this.displayWeather(data));
  },
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    console.log(name, icon, description, temp, humidity, speed)
    document.querySelector(".city").innerText = "weather in" + name
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector(".description").innerText = description
    document.querySelector(".temp").innerText = temp + "°C"
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
    document.querySelector(".speed").innerText = "Wind speed: " + speed + "km/h"
  },
  search: function () {
    this.fetchWeather(document.querySelector(".searchForm").value)
   }
};

document
  .querySelector(".search button")
  .addEventListener("click", function () {
    weather.search()
  })
   
  