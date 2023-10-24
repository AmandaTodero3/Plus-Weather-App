
function current() {
  let days = ["Sun", "Mon", "Tue", "Wed", "Thurs", "Fri", "Sat"];
  let now = new Date();
  let day = days[now.getDay()];
  let hour = now.getHours();
  let minutes = now.getMinutes();

  let element = document.querySelector(".day");
  element.innerHTML = `${day}, ${hour}:${minutes}`;
}
function search(event) {
  event.preventDefault();
  let searchInput = document.querySelector('input[type="text"]');
  let city = document.querySelector(".city");
  city.innerHTML = `${searchInput.value}`;
  let apiKey="5f472b7acba333cd8a035ea85a0d4d4c";
  let units="imperial";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?q=${searchInput.value}&appid=${apiKey}&units=${units}`;
  axios.get(apiUrl).then(weather);
}
function weather(response) {
  let temperature = Math.round(response.data.main.temp);
  let h1 = document.querySelector("h1");
  h1.innerHTML = temperature + "°F";
}

let form = document.querySelector("form");
form.addEventListener("submit", search);
current();