
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

function displayWeatherInfo(data) {
  const Div = document.createElement("div");
  const h1 = document.createElement("h1");
  const h2 = document.createElement("h2");
  //weather + in + cityName

  weatherSection.append(h2);
  city.textContent = "Weather in " + data.name;
  weatherSection.append(city);
  // Temprature

  weatherSection.append(h1);
  temp.textContent = data.main.temp + "°C";
  weatherSection.append(temp);

  //Weather icon

  const icon = data.weather[0].icon;
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", "https://openweathermap.org/img/wn/" + `${icon}` + ".png");
  weatherSection.append(imgTag);
  console.log(icon)
  //Description

  weatherSection.append(Div);
  description.textContent = data.weather[0].description;
  weatherSection.append(description);

  //Humidity

  weatherSection.append(Div);
  humidity.textContent = "Humidity: " + data.main.humidity + " %";
  weatherSection.append(humidity);

  //WindSpeed
  weatherSection.append(Div);
  wind.textContent = "Wind speed: " + data.wind.speed + " km/h";
  weatherSection.append(wind);

}
//Event listener
document
  .querySelector(".searchButton")
  .addEventListener("click", function (e) {
    weatherData()
  })

//Remove the child element
function removeWeather() {
  while (weatherSection.lastChild) {
    weatherSection.removeChild(weatherSection.lastChild)
  }
}

