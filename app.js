// api.openweathermap.org/data/2.5/weather?q={city name}&appid={API key}
// api.openweathermap.org/data/2.5/weather?q=London&appid={API key}
// const apiKey = "b351ed20610d69f0305baa374dd8c604"

let weather = {
  getWeather: async function fetchWeather(city) {
    try {
      removeWeather();
      const apiKey = "b351ed20610d69f0305baa374dd8c604";
      await axios.get(
        `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
      )
        .then((response) => response.data)
        .then((data) => this.displayWeather(data))
    }
    catch (error) {
      console.error(error);
    }
  }
  ,
  displayWeather: function (data) {
    const { name } = data;
    const { icon, description } = data.weather[0];
    const { temp, humidity } = data.main;
    const { speed } = data.wind;
    const { timezone } = data.timezone;
    console.log(name, icon, description, temp, humidity, speed, timezone)
    document.querySelector(".city").innerText = "weather in " + name;
    document.querySelector(".icon").src = "https://openweathermap.org/img/wn/" + icon + ".png"
    document.querySelector(".description").innerText = description
    document.querySelector(".temp").innerText = temp + "°C"
    document.querySelector(".humidity").innerText = "Humidity: " + humidity + "%"
    document.querySelector(".speed").innerText = "Wind speed: " + speed + "km/h"
    document.querySelector(".weather").classList.remove("loading")
    document.querySelector(".localTime").innerText = "Local Time: " + timezone + "sec"
  },
  search: function () {
    this.getWeather(document.querySelector(".search-bar").value)
  }
};

function removeWeather() {
  const removeElement = document.querySelector('.search-bar')
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}

document
  .querySelector(".searchButton")
  .addEventListener("click", function () {
    weather.search()
  })

