function refreshWeather(response) {
  let displayTemperature = document.querySelector("#temperature");
  let temperature = response.data.main.temp;
  let searchCity = document.querySelector("#city");
  let searchDescription = document.querySelector("#description");
  let searchHumidity = document.querySelector("#humidity");
  let searchWind = document.querySelector("#wind");
  let searchTime = document.querySelector("#time");
  let dt = response.data.dt;
  let timezone = response.data.timezone;
  let iconImage = document.querySelector("#icon");
  let iconCode = response.data.weather[0].icon;
  let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@2x.png`;
  let date = new Date((dt + timezone) * 1000);

  iconImage.innerHTML = `<img src="${iconUrl}" class="weather-icon"/>`;
  searchCity.innerHTML = response.data.name;
  searchTime.innerHTML = formatDate(date);
  searchDescription.innerHTML = response.data.weather[0].description;
  searchHumidity.innerHTML = `${response.data.main.humidity}%`;
  searchWind.innerHTML = `${response.data.wind.speed}km/h`;
  displayTemperature.innerHTML = Math.round(temperature);
}

function formatDate(date) {
  let minutes = date.getUTCMinutes();
  let hours = date.getUTCHours();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getUTCDay()];

  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
  }

  return `${day} ${hours}:${minutes}`;
}

function displayCity(city) {
  let apiKey = "d1193959d2d841ec7555416d715716a6";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(refreshWeather);
}

function searchForCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");

  displayCity(searchInput.value);
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", searchForCity);

displayCity("Perth");
