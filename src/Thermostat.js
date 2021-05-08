'use strict';

class Thermostat {

  constructor(temperature = 20, powerSavingMode = true) {
    this.temperature = temperature
    this.minimumTemperature = 10
    this.powerSavingMode = powerSavingMode
    this.maximumTemperature = this._setMaximumTemperature()
  };

  getCurrentTemperature() {
    return this.temperature
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

  reset() {
    this.temperature = 20
  };

  switchOffPowerSave() {
    this.powerSavingMode = false
    this._setMaximumTemperature()
  };

  switchOnPowerSave() {
    this.powerSavingMode = true
    this._setMaximumTemperature()
  };

  getPowerSavingMode() {
    return this.getPowerSavingMode
  };

  energyUsage() {
    if(this.temperature < 18) {
      return "low-usage"
    } else if(this.temperature <= 25) {
        return "medium-usage"
    } else {
      return "high-usage"
    };
  };

  _setMaximumTemperature() {
    if(this.powerSavingMode === true) {
      return this.maximumTemperature = 25
    } else {
      return this.maximumTemperature = 32
    };
  };

};