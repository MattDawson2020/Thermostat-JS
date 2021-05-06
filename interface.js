document.addEventListener("DOMContentLoaded", function() {
    updateTemperature = function() {
    document.querySelector('#getCurrentTemperature').innerText = thermostat.temperature;
    document.querySelector('#getCurrentTemperature').className = thermostat.energyUsage();
  }

  const thermostat = new Thermostat();
  updateTemperature();


  document.querySelector('#increaseTemp').addEventListener('click', function() {
    thermostat.increaseTemp()
    updateTemperature();
  });

  document.querySelector('#decreaseTemp').addEventListener('click', () => {
    thermostat.decreaseTemp()
    updateTemperature();
  });

  document.querySelector('#reset').addEventListener('click', () => {
    thermostat.reset()
    updateTemperature();
  });

  document.querySelector('#switchOnPowerSave').addEventListener('click', () => {
    thermostat.switchOnPowerSave()
    document.querySelector('#power-saving-status').innerText = 'on';
    updateTemperature();
  });

  document.querySelector('#switchOffPowerSave').addEventListener('click', () => {
    thermostat.switchOffPowerSave()
    document.querySelector('#power-saving-status').innerText = 'off';
    updateTemperature();
  });

});