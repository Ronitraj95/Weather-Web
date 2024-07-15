// const apiKey = "978aa5d46935f18b75f5a85a1d77ef91";
// const apiUrl =
//   "http://api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=978aa5d46935f18b75f5a85a1d77ef91";

// const searchBox = document.querySelector(".search input");
// const searchBtn = document.querySelector(".search button");
// const weatherIcon = document.querySelector(".weather-icon");

// async function checkWeather(city) {
//   const response = await fetch(apiUrl + city + "&appid=${apiKey}");

//   if (response.status == 404) {
//     document.querySelector(".error").style.display = "block";
//     document.querySelector(".weather").style.display = "none";
//   } else {
//     var data = await response.json();

// document.querySelector(".city").innerHTML =" data.name";
// document.querySelector(".temp").innerHTML =
//   "main.temp" + "°C";
// document.querySelector(".humidity").innerHTML = "main.humidity" + "%";
// document.querySelector(".wind").innerHTML = "wind.speed" + " Km/h";
//     if (data.weather.main[1] == "Clouds") {
//       weatherIcon.src = "image/Cloudy.png";
//     } else if (data.weather.main[1] == "Clear") {
//       weatherIcon.src = "image/clear.png";
//     } else if (data.weather.main[1] == "Rain") {
//       weatherIcon.src = "image/rain.png";
//     } else if (data.weather.main[1] == "Drizzle") {
//       weatherIcon.src = "image/drizzel.png";
//     } else if (data.weather.main[1] == "Mist") {
//       weatherIcon.src = "image/mist.png";
//     }

//     document.querySelector(".weather").style.display = "block";
//     document.querySelector(".error").style.display = "none";
//   }
// }

// searchBtn.addEventListener("click", () => {
//   checkWeather(searchBox.value);
// });


document.getElementById("search-btn").addEventListener("click", function() {
  const city = document.getElementById("city-input").value;
  const apiKey = "978aa5d46935f18b75f5a85a1d77ef91"; // Replace with your OpenWeatherMap API key
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("Invalid city name");
      }
      return response.json();
    })
    .then(data => {
      document.querySelector(".error").style.display = "none";
      document.querySelector(".weather").style.display = "block";

      const weatherIcon = document.getElementById("weather-icon");
      const temp = document.getElementById("temp");
      const city = document.getElementById("city");
      const humidity = document.getElementById("humidity");
      const windSpeed = document.getElementById("wind-speed");

      const iconCode = data.weather[0].icon;
      weatherIcon.src = `http://openweathermap.org/img/wn/${iconCode}.png`;
      temp.innerHTML = `${Math.round(data.main.temp)}&#176;c`;
      city.innerHTML = data.name;
      humidity.innerHTML = `${data.main.humidity}%`;
      windSpeed.innerHTML = `${data.wind.speed} km/h`;
    })
    .catch(error => {
      document.querySelector(".error").style.display = "block";
      document.querySelector(".weather").style.display = "none";
    });
});



