let city = "Paris";
let apiKey = "d1193959d2d841ec7555416d715716a6";
let apiUrl = `http://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;

function displayWeather(response) {
  console.log(response.data);
  let currentTemperature = document.querySelector("#temperature");
  let temperature = Math.round(response.data.list[0].main.temp);
  let city = response.data.city.name;
  let description = response.data.list[0].weather[0].description;
  currentTemperature.innerHTML = `The temperature in ${city} is ${temperature} °C, ${description}`;
}

axios.get(apiUrl).then(displayWeather);
