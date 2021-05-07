document.addEventListener("DOMContentLoaded", function() {
    updateTemperature = function() {
    document.querySelector('#getCurrentTemperature').innerText = thermostat.temperature;
    document.querySelector('#getCurrentTemperature').className = thermostat.energyUsage();
  }

  const thermostat = new Thermostat();
  updateTemperature();


  document.querySelector('#increaseTemp').addEventListener('click', () => {
    thermostat.increaseTemp();
    updateTemperature();
  });

  document.querySelector('#decreaseTemp').addEventListener('click', () => {
    thermostat.decreaseTemp();
    updateTemperature();
  });

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.reset();
    updateTemperature();
  });

  document.querySelector('#switchOnPowerSave').addEventListener('click', () => {
    thermostat.switchOnPowerSave();
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  });

  document.querySelector('#switchOffPowerSave').addEventListener('click', () => {
    thermostat.switchOffPowerSave();
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  });

  document.getElementById("getCity").addEventListener("click", () => {
    const citySearch = document.getElementById("getCityText").value;
    document.getElementById("getCityText").value = '';

    async function getCityWeather(){
      await fetch (`https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&units=metric&appid=7128292c1f8f799b763f5b63ce9c1b27`)
        .then(response => {
          return response.json()})
        .then((data) => {
          document.getElementById("cityTemp").innerHTML = `${data.main.temp} degrees in ${citySearch}`;
        })
    };
    getCityWeather();
  });


  async function getPostData() {
    await fetch ('https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&appid=7128292c1f8f799b763f5b63ce9c1b27')
      .then(response => {
        return response.json()})
      .then((data) => {
        document.getElementById("cityTemp").innerHTML = `${data.main.temp} degrees in London`;
      })
    };

getPostData();

});
	