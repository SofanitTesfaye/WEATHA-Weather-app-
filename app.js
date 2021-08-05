
const city = document.getElementById('city');
const temp = document.getElementById('temp');
const description = document.getElementById('description');
const humidity = document.getElementById('humidity');
const wind = document.getElementById('wind');
const weatherSection = document.querySelector(".weather-data");



async function weatherData() {
  removeWeather();
  try {
    const textInput = document.querySelector('.search-bar').value;
    console.log(textInput)
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=b351ed20610d69f0305baa374dd8c604&units=metric`;
    let response = await axios.get(apiUrl);
    let weatherData = response.data;
    displayWeatherInfo(weatherData);
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}
  // console.log(weatherData)
function displayWeatherInfo(data) {
  const Div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");

  weatherSection.append(h2);
  city.textContent = "Weather in " + data.name;
  weatherSection.append(city);

  weatherSection.append(h1);
  temp.textContent = data.main.temp + "°C";
  weatherSection.append(temp);

  const icon = data.weather[0].icon;
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", "https://openweathermap.org/img/wn/" + `${icon}` + ".png");
  weatherSection.append(imgTag);
  //weatherDiv.append(imgTag);

  weatherSection.append(Div);
  description.textContent = data.weather[0].description;
  weatherSection.append(description);

  weatherSection.append(Div);
  humidity.textContent = "Humidity: " + data.main.humidity + " %";
  weatherSection.append(humidity);

  weatherSection.append(Div);
  wind.textContent = "Wind speed: " + data.wind.speed + " km/h";
  weatherSection.append(wind);

}

document
  .querySelector(".searchButton")
  .addEventListener("click", function (e) {
    weatherData()
  })
function removeWeather() {
  const removeElement = document.querySelector('.search-bar')
  while (removeElement.lastChild) {
    removeElement.removeChild(removeElement.lastChild)
  }
}

