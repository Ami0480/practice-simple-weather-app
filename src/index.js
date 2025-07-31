function searchForCity(event) {
  event.preventDefault();

  let searchInput = document.querySelector("#search-form-input");
  let searchCity = document.querySelector("#city");
  searchCity.innerHTML = searchInput.value;
}

let searchElement = document.querySelector("#search-form");
searchElement.addEventListener("submit", searchForCity);
