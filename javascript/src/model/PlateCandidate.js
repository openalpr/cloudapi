// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PlateCandidate', ['jquery'],
    function($) {
      return PlateCandidate;
   });
}


var PlateCandidate = function PlateCandidate() { 
  var self = this;
  
  /**
   * Plate number
   * datatype: String
   **/
  self.plate = null;
  
  /**
   * Confidence percentage that the plate number is correct
   * datatype: Number
   **/
  self.confidence = null;
  
  /**
   * Indicates whether the plate matched a regional text pattern
   * datatype: Integer
   **/
  self.matchesTemplate = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.plate = data.plate;
    
    self.confidence = data.confidence;
    
    self.matchesTemplate = data.matches_template;
    
  }

  
  /**
   * get Plate number
   * @return {String}
   **/
  self.getPlate = function() {
    return self.plate;
  }

  /**
   * set Plate number
   * @param {String} plate
   **/
  self.setPlate = function (plate) {
    self.plate = plate;
  }
  
  /**
   * get Confidence percentage that the plate number is correct
   * @return {Number}
   **/
  self.getConfidence = function() {
    return self.confidence;
  }

  /**
   * set Confidence percentage that the plate number is correct
   * @param {Number} confidence
   **/
  self.setConfidence = function (confidence) {
    self.confidence = confidence;
  }
  
  /**
   * get Indicates whether the plate matched a regional text pattern
   * @return {Integer}
   **/
  self.getMatchesTemplate = function() {
    return self.matchesTemplate;
  }

  /**
   * set Indicates whether the plate matched a regional text pattern
   * @param {Integer} matchesTemplate
   **/
  self.setMatchesTemplate = function (matchesTemplate) {
    self.matchesTemplate = matchesTemplate;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PlateCandidate;
}
