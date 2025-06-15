let APIkey = "e1e12f336e194e46ec1911642739d075";
let defaultCity = "Hajdúböszörmény";
let varos = "";
let orszag = "";

function loadCityWeather(cityName) {
  getcoordinates(APIkey, cityName)
    .then((coords) => {
      const lat = coords[0];
      const lon = coords[1];
      varos = `${coords[2]}`;
      orszag = `${coords[3]}`;
      adatlekeres(lat, lon);
    })
    .catch((err) => {
      console.error("Hiba a város betöltésekor:", err);
      alert("Nem sikerült lekérdezni az időjárást ehhez a városhoz.");
    });
}

document.addEventListener("DOMContentLoaded", () => {
  window.addEventListener("load", () => {
    loadCityWeather(defaultCity);
  });
});

const kereses = document.getElementById("textbox");
kereses.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    const keresettVaros = kereses.value.trim();
    if (keresettVaros) {
      loadCityWeather(keresettVaros);
    }
  }
});

function getcoordinates(APIkey, varos) {
  return fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${varos}&limit=2&appid=${APIkey}`
  )
    .then((r) => r.json())
    .then((data) => {
      return [data[0].lat, data[0].lon, data[0].name, data[0].country];
    });
}

function adatlekeres(lat, lon) {
  fetch(
    `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current=temperature_2m,rain,relative_humidity_2m,wind_speed_10m&timezone=auto&daily=weather_code&current=weather_code`
  )
    .then((resposne) => resposne.json())
    .then((data) => {
      adatfeltoltes(data);
      console.log(data);
    });
}

function melyiknap(datum) {
  const date = new Date(datum);

  // Napok nevei
  const daysOfWeek = ["Vas", "H", "Ke", "Szer", "Csüt", "Pén", "Szo"];

  const dayName = daysOfWeek[date.getDay()];

  return dayName;
}

function adatfeltoltes(data) {
  // Aktuális adatok
  const currentDate = data.current.time.split("T")[0];
  const currentTime = data.current.time.split("T")[1];
  const currentTemperature = data.current.temperature_2m;
  const currentRain = data.current.rain;
  const currentHumidity = data.current.relative_humidity_2m;
  const currentWindSpeed = data.current.wind_speed_10m;

  // Napi adatok
  const dailyTime = data.daily.time;
  const dailyMaxTemperature = data.daily.temperature_2m_max;
  const dailyMinTemperature = data.daily.temperature_2m_min;
  const dailySunrise = data.daily.sunrise;
  const dailySunset = data.daily.sunset;

  document.querySelector(".hőmérséklet").innerText = `${currentTemperature}°C`;
  document.querySelector(
    ".dátum"
  ).innerText = `📆 Ma: ${currentDate} ${currentTime}`;
  document.querySelector(
    ".esovaloszinuseg"
  ).innerText = `🌧️ Csapadék: ${currentRain}%`;
  document.querySelector(".nap").innerText = melyiknap(currentDate);
  document.querySelector(".maiidojaras").innerHTML = `${
    getWeatherIcon(data.daily.weather_code[0]).icon
  } ${getWeatherIcon(data.daily.weather_code[0]).description}`;
  document.querySelector(".varos").innerHTML = `📍 ${varos}, ${orszag}`;

  const days = document.querySelectorAll(".day");
  days.forEach((day, index) => {
    if (index < dailyTime.length) {
      const dayName = melyiknap(dailyTime[index + 1]);
      const maxTemp = dailyMaxTemperature[index + 1];
      const weathertype = data.daily.weather_code[index + 1];
      const minTemp = dailyMinTemperature[index + 1];

      day.innerHTML = `
                <p><b>${dayName}:</b> ${getWeatherIcon(weathertype).icon} ${
        getWeatherIcon(weathertype).description
      }</p>
                <p>🌡️ ${minTemp}° ➡️ ${maxTemp}°</p>
            `;
    }
  });

  document.querySelector(".osszhom").innerHTML = `
    <p><b>Mai hőmérséklet</b></p>
    <p>🌡️ ${dailyMinTemperature[0]}° ➡️ ${dailyMaxTemperature[0]}°</p>`;
  document.querySelector(
    ".szelsebesseg"
  ).innerText = `💨 Szélsebesség: ${currentWindSpeed}km/h`;
  document.querySelector(
    ".paratartalom"
  ).innerText = `💧 Páratartalom: ${currentHumidity}%`;
  document.querySelector(".napkelte").innerText = `🌅 Napfelkelte: ${
    dailySunrise[0].split("T")[1]
  }`;
  document.querySelector(".napnyugta").innerText = `🌄 Napnyugta: ${
    dailySunset[0].split("T")[1]
  }`;
}

function getWeatherIcon(weatherCode) {
  const weatherMap = {
    0: { icon: "☀️", description: "Derült égbolt" },
    1: { icon: "🌤️", description: "Többnyire derült" },
    2: { icon: "⛅", description: "Részben felhős" },
    3: { icon: "☁️", description: "Borult" },
    45: { icon: "🌫️", description: "Köd" },
    48: { icon: "🌫️", description: "Zúzmarás köd" },
    51: { icon: "🌧️", description: "Enyhe szitálás" },
    53: { icon: "🌧️", description: "Mérsékelt szitálás" },
    55: { icon: "🌧️", description: "Sűrű szitálás" },
    56: { icon: "🌨️", description: "Enyhe ónos szitálás" },
    57: { icon: "🌨️", description: "Sűrű ónos szitálás" },
    61: { icon: "🌦️", description: "Enyhe eső" },
    63: { icon: "🌦️", description: "Mérsékelt eső" },
    65: { icon: "🌧️", description: "Heves eső" },
    66: { icon: "🌨️", description: "Enyhe ónos eső" },
    67: { icon: "🌨️", description: "Heves ónos eső" },
    71: { icon: "❄️", description: "Enyhe havazás" },
    73: { icon: "❄️", description: "Mérsékelt havazás" },
    75: { icon: "❄️", description: "Heves havazás" },
    77: { icon: "🌨️", description: "Hószemcsék" },
    80: { icon: "🌦️", description: "Enyhe záporok" },
    81: { icon: "🌦️", description: "Mérsékelt záporok" },
    82: { icon: "⛈️", description: "Heves záporok" },
    85: { icon: "🌨️", description: "Enyhe hózáporok" },
    86: { icon: "🌨️", description: "Heves hózáporok" },
    95: { icon: "⛈️", description: "Zivatar" },
    96: { icon: "⛈️", description: "Zivatar enyhe jégesővel" },
    99: { icon: "⛈️", description: "Zivatar heves jégesővel" },
  };

  return (
    weatherMap[weatherCode] || { icon: "❓", description: "Unknown weather" }
  );
}
