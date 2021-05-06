'use strict';

class Thermostat {

  constructor(temperature = 20, powerSavingMode = true, maximumTemperature = 25) {
    this.temperature = temperature
    this.minimumTemperature = 10
    this.maximumTemperature = maximumTemperature
    this.powerSavingMode = powerSavingMode
  };

  increaseTemp() {
    if(this.temperature < this.maximumTemperature) {
      this.temperature += 1
    };
  };

  decreaseTemp() {
    if(this.temperature > this.minimumTemperature) {
      this.temperature -= 1
    };
  };

  switchOffPowerSave() {
    this.powerSavingMode = false
    this._setMaximumTemperature()
  };

  switchOnPowerSave() {
    this.powerSavingMode = true
    this._setMaximumTemperature()
  };

  _setMaximumTemperature() {
    if(this.powerSavingMode === true) {
      this.maximumTemperature = 25
    } else {
      this.maximumTemperature = 32
    };
  };

};