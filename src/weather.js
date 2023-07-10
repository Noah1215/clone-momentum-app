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

      city.innerHTML = data.name;
      weather.innerHTML = `${data.weather[0].main} / ${data.main.temp}`;
    });
}

function onGeoError() {
  alert("Can't find you");
}
