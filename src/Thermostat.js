'use strict';

class Thermostat {

  constructor(temperature = 20, powerSavingMode = true) {
    this.temperature = temperature
    this.minimumTemperature = 10
    this.powerSavingMode = powerSavingMode
  };

  increaseTemp() {
    this.temperature += 1
  };

  decreaseTemp() {
    if(this.temperature > this.minimumTemperature) {
      this.temperature -= 1
    };
  };

  switchOffPowerSave() {
    this.powerSavingMode = false
  }

  switchOnPowerSave() {
    this.powerSavingMode = true
  }

};