fetch(
  "https://api.open-meteo.com/v1/forecast?latitude=47.6667&longitude=21.5167&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset&current=temperature_2m,rain,relative_humidity_2m,wind_speed_10m&timezone=auto"
)
  .then((resposne) => resposne.json())
  .then((data) => {
      adatfeltoltes(data);
    });
    
function melyiknap(datum) {
      const date = new Date(datum);
    
      // Napok nevei
      const daysOfWeek = [
        "Vasárnap",
        "Hétfő",
        "Kedd",
        "Szerda",
        "Csütörtök",
        "Péntek",
        "Szombat",
      ];
    
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

    // Egyéb metaadatok
    const latitude = data.latitude;
    const longitude = data.longitude;
    const timezone = data.timezone;
    const elevation = data.elevation;

    document.querySelector(
      ".hőmérséklet"
    ).innerText = `${currentTemperature}°C`;
    document.querySelector(
      ".dátum"
    ).innerText = `📆 Ma: ${currentDate} ${currentTime}`;
    document.querySelector(
      ".esovaloszinuseg"
    ).innerText += `🌧️ Csapadék: ${currentRain}%`;
    document.querySelector(".nap").innerText = melyiknap(currentDate);

    const days = document.querySelectorAll('.day');
    days.forEach((day, index) => {
        if (index < dailyTime.length) {
            const dayName = melyiknap(dailyTime[index+1]);
            const maxTemp = dailyMaxTemperature[index+1];
            const minTemp = dailyMinTemperature[index+1];

            day.innerHTML = `
                <p><b>${dayName}:</b></p>
                <p>🌡️ ${maxTemp}° ➡️ ${minTemp}°</p>
            `;
        }
    });

    document.querySelector(".osszhom").innerHTML = `
    <p><b>Mai hőmérséklet</b></p>
    <p>🌡️ ${dailyMaxTemperature[0]}° ➡️ ${dailyMinTemperature[0]}°</p>`;
    document.querySelector(".szelsebesseg").innerText += ` ${currentWindSpeed}km/h`;
    document.querySelector(".paratartalom").innerText += ` ${currentHumidity}%`;
    document.querySelector(".napkelte").innerText = `🌅 Napfelkelte: ${dailySunrise[0].split("T")[1]}`;
    document.querySelector(".napnyugta").innerText = `🌄 Napnyugta: ${dailySunset[0].split("T")[1]}`;
}