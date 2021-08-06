
const city = document.querySelector('.city');
const temp = document.querySelector('.temp');
const description = document.querySelector('.description');
const humidity = document.querySelector('.humidity');
const wind = document.querySelector('.wind');
const weatherSection = document.querySelector(".weather-data");

//error handling

async function weatherData() {
  // removes the previous search history
  removeWeather();
  try {
    // define textInput
    const textInput = document.querySelector('.search-bar').value;
    // calling the api data for a particular city/region
    const apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=b351ed20610d69f0305baa374dd8c604&units=metric`;
    // the api response
    let response = await axios.get(apiUrl);
    // all the city data
    let weatherData = response.data;
    //calling the displayWeatherInfo function and passing the city data
    displayWeatherInfo(weatherData);
    return weatherData;
  } catch (error) {
    console.error(error);
  }
}

function displayWeatherInfo(data) {
//city name
  city.textContent = "Weather in " + data.name;
  weatherSection.append(city);

  // Temprature
  temp.textContent = data.main.temp + "°C";
  weatherSection.append(temp);

  //Weather icon
  const icon = data.weather[0].icon;
  const imgTag = document.createElement("img");
  imgTag.setAttribute("src", "https://openweathermap.org/img/wn/" + `${icon}` + ".png");
  weatherSection.append(imgTag);
  console.log(icon)

  //Description
  description.textContent = data.weather[0].description;
  weatherSection.append(description);

  //Humidity
  humidity.textContent = "Humidity: " + data.main.humidity + " %";
  weatherSection.append(humidity);

  //WindSpeed
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

