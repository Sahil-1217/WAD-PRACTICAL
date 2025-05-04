function getWeather() {
  const city = document.getElementById("cityInput").value.trim();
  const resultDiv = document.getElementById("weatherResult");
  const errorDiv = document.getElementById("errorMsg");

  resultDiv.innerHTML = "";
  errorDiv.textContent = "";

  fetch("weather.json")
    .then(response => {
      if (!response.ok) throw new Error("Network response was not ok");
      return response.json();
    })
    .then(data => {
      const weather = data[city];
      if (weather) {
        resultDiv.innerHTML = `
          <h3>${city}</h3>
          <p><strong>Temperature:</strong> ${weather.temperature}</p>
          <p><strong>Humidity:</strong> ${weather.humidity}</p>
          <p><strong>Condition:</strong> ${weather.condition}</p>
        `;
      } else {
        errorDiv.textContent = "City not found in local data.";
      }
    })
    .catch(() => {
      errorDiv.textContent = "Error fetching weather data.";
    });
}
