let city = "Perth";
let apiKey = "25ba4b8ct7fc123o0c3d6fccfc118bbd";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;

function displayTemperature(response) {
  console.log(response.data);
  let currentTemperature = document.querySelector("#temperature");
  let temperature = Math.round(response.data.temperature.current);
  let city = response.data.city;
  let description = response.data.condition.description;

  currentTemperature.innerHTML = `The temperature in ${city} is ${temperature}°C, ${description}`;
}

axios.get(apiUrl).then(displayTemperature);
