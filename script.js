const apiKey = 'YOUR_OPENWEATHER_API_KEY';
const city = 'Brooklyn';
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`)
  .then(res => res.json())
  .then(data => {
    document.getElementById('weather').innerHTML =
      `🌤️ ${data.name}: ${data.weather[0].description}, ${data.main.temp}°F`;
  });
