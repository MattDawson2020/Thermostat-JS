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

    it("Can reset the temperature to 20", function() {
      thermostat.increaseTemp()
      thermostat.reset()
      expect(thermostat.temperature).toEqual(20)
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

    it("When on - power saving mode sets max temp to 25", function() {
      let i;
      for(i = 0; i <= 10; i++) {
        thermostat.increaseTemp(); 
      };
      expect(thermostat.temperature).toEqual(25)
    });

    it("When power saving mode off - sets max temp to 32", function() {
      thermostat.switchOffPowerSave()
      let i;
      for(i = 0; i <= 15; i++) {
        thermostat.increaseTemp(); 
      };
      expect(thermostat.temperature).toEqual(32)
    });
  });

  describe("Energy usage", function() {

    it("Returns 'low usage' when temperature less than 18", function() {
      let thermostatLow = new Thermostat(17, true, 25)
      expect(thermostatLow.energyUsage()).toEqual("low-usage") 
    });

    it("Returns 'medium usage' when temperature <= 25", function() {
      let thermostatMid = new Thermostat(25, true, 25)
      expect(thermostatMid.energyUsage()).toEqual("medium-usage") 
    });

    it("Returns 'high usage' when temperature more than 25", function() {
      let thermostatHigh = new Thermostat(28, true, 25)
      expect(thermostatHigh.energyUsage()).toEqual("high-usage") 
    });

  });

});
