'use strict';

describe("Thermostat", function() {
  
  let thermostat;

  beforeEach(function() {
    thermostat = new Thermostat;
  });

  describe("Constructor", function() {

    it("Starts with a default of 20", function() {
      expect(thermostat.temperature).toEqual(20)
    });

    it("Starts with powersaving mode on", function() {
      expect(thermostat.powerSavingMode).toEqual(true)
    });

  });

  describe("Changing the temperature", function() {

    it("Can increase the temperature", function() {
      thermostat.increaseTemp()
      expect(thermostat.temperature).toEqual(21)
    });
  
    it("Can descrease the temperature", function() {
      thermostat.decreaseTemp()
      expect(thermostat.temperature).toEqual(19)
    });

    it("Has a minimum temperature that it cannot exceed", function(){
      let i;
      for (i = 0; i <= 10; i++) {
        thermostat.decreaseTemp();
      };
      expect(thermostat.temperature).toEqual(10)
      // add test / error for minimum temperature
    });

  });

  describe("Power saving mode", function() {

    it("Power saving mode can be turned off", function() {
      thermostat.switchOffPowerSave()
      expect(thermostat.powerSavingMode).toEqual(false)
    });

    it("Power saving mode can be turned on", function() {
      thermostat.switchOffPowerSave()
      thermostat.switchOnPowerSave()
      expect(thermostat.powerSavingMode).toEqual(true)
    });

    it("Power saving mode sets max temp to 25", function() {
      let i;
      for(i = 0; i <= 10; i++) {
        thermostat.increaseTemp(); 
      };
      expect(thermostat.temperature).toEqual(25)
    });
  });

});
