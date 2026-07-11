const apiKey = "bdcf5e07ee1b7bf68d85acfe1c19295a";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const cardVideo = document.querySelector(".card video");

async function checkWeather(city) {
  const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
  let data = await response.json();

  console.log(data);

  document.querySelector(".city").innerHTML = data.name;
  document.querySelector(".temp").innerHTML =
    Math.round(data.main.temp) + "<span>°C│°F</span>";
  document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
  document.querySelector(".wind").innerHTML =
    Math.round(data.wind.speed) + " km/h";
  document.querySelector(".condition").innerHTML = data.weather[0].main;

  if (data.weather[0].main == "Cloudy") {
    cardVideo.src = "./Assets/clouds.mp4";
  } else if (data.weather[0].main == "Clear") {
    cardVideo.src = "./Assets/sunny.mp4";
  } else if (data.weather[0].main == "Drizzle") {
    cardVideo.src = "./Assets/drizzle.mp4";
  } else if(data.weather[0].main == "Thunderstorm") {
    cardVideo.src = "./Assets/thunderstorm.mp4"
  } else if(data.weather[0].main == "Rain") {
    cardVideo.src = "./Assets/rainy2.mp4"
  } else if(data.weather[0].main == "Moist") {
    cardVideo.src = "./Assets/misty.mp4"
  } else if(data.weather[0].main == "Snow") {
    cardVideo.src = "./Assets/snow.mp4"
  }
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
  0;
});
