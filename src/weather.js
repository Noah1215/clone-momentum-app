const WEB_API = "960b81642bde386a35f3c9be3f055668";
navigator.geolocation.getCurrentPosition(onGeoSucess, onGeoError);

function onGeoSucess(position) {
  const latitude = position.coords.latitude;
  const longitude = position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${WEB_API}&units=metric`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
      const city = document.querySelector("#weather span:first-child");
      const weather = document.querySelector("#weather span:last-child");
      const container = document.querySelector("#weather__Icon");
      const icon = data.weather[0].icon;
      const weatherIcon = document.createElement("img");
      weatherIcon.src = `http://openweathermap.org/img/wn/${icon}@2x.png`;
      weatherIcon.alt = "weather Icon";
      container.appendChild(weatherIcon);
      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${Math.ceil(
        data.main.temp
      )}°C`;
    });
}

function onGeoError() {
  alert("Can't find you");
}
