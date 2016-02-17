// require files in Node.js environment
var Coordinate;var PlateCandidate;
if (typeof module === 'object' && module.exports) {
  
  Coordinate = require('./Coordinate.js');
  PlateCandidate = require('./PlateCandidate.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('PlateDetails', ['jquery', 'Array', 'Array'],
    function($, ArrayArray) {
      return PlateDetails;
   });
}


var PlateDetails = function PlateDetails() { 
  var self = this;
  
  /**
   * Best plate number for this plate
   * datatype: String
   **/
  self.plate = null;
  
  /**
   * Indicates whether the plate matched a regional text pattern
   * datatype: Integer
   **/
  self.matchesTemplate = null;
  
  /**
   * The max number of results requested
   * datatype: Integer
   **/
  self.requestedTopn = null;
  
  /**
   * Number of milliseconds to process the license plate
   * datatype: Number
   **/
  self.processingTimeMs = null;
  
  /**
   * Confidence percentage that the plate number is correct
   * datatype: Number
   **/
  self.confidence = null;
  
  /**
   * Specified or detected region (e.g., tx for Texas)
   * datatype: String
   **/
  self.region = null;
  
  /**
   * Confidence percentage that the plate region is correct
   * datatype: Number
   **/
  self.regionConfidence = null;
  
  /**
   * The X/Y coordinates of the license plate in the image\nFour coordinates are provided that form a polygon starting\nfrom the top-left and moving clockwise ending in the bottom left
   * datatype: Array
   **/
  self.coordinates = [];
  
  /**
   * All the top N candidates that could be the correct plate number
   * datatype: Array
   **/
  self.candidates = [];
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.plate = data.plate;
    
    self.matchesTemplate = data.matches_template;
    
    self.requestedTopn = data.requested_topn;
    
    self.processingTimeMs = data.processing_time_ms;
    
    self.confidence = data.confidence;
    
    self.region = data.region;
    
    self.regionConfidence = data.region_confidence;
    
    self.coordinates = new Array();
    
    self.candidates = new Array();
    
  }

  
  /**
   * get Best plate number for this plate
   * @return {String}
   **/
  self.getPlate = function() {
    return self.plate;
  }

  /**
   * set Best plate number for this plate
   * @param {String} plate
   **/
  self.setPlate = function (plate) {
    self.plate = plate;
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
  
  /**
   * get The max number of results requested
   * @return {Integer}
   **/
  self.getRequestedTopn = function() {
    return self.requestedTopn;
  }

  /**
   * set The max number of results requested
   * @param {Integer} requestedTopn
   **/
  self.setRequestedTopn = function (requestedTopn) {
    self.requestedTopn = requestedTopn;
  }
  
  /**
   * get Number of milliseconds to process the license plate
   * @return {Number}
   **/
  self.getProcessingTimeMs = function() {
    return self.processingTimeMs;
  }

  /**
   * set Number of milliseconds to process the license plate
   * @param {Number} processingTimeMs
   **/
  self.setProcessingTimeMs = function (processingTimeMs) {
    self.processingTimeMs = processingTimeMs;
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
   * get Specified or detected region (e.g., tx for Texas)
   * @return {String}
   **/
  self.getRegion = function() {
    return self.region;
  }

  /**
   * set Specified or detected region (e.g., tx for Texas)
   * @param {String} region
   **/
  self.setRegion = function (region) {
    self.region = region;
  }
  
  /**
   * get Confidence percentage that the plate region is correct
   * @return {Number}
   **/
  self.getRegionConfidence = function() {
    return self.regionConfidence;
  }

  /**
   * set Confidence percentage that the plate region is correct
   * @param {Number} regionConfidence
   **/
  self.setRegionConfidence = function (regionConfidence) {
    self.regionConfidence = regionConfidence;
  }
  
  /**
   * get The X/Y coordinates of the license plate in the image\nFour coordinates are provided that form a polygon starting\nfrom the top-left and moving clockwise ending in the bottom left
   * @return {Array}
   **/
  self.getCoordinates = function() {
    return self.coordinates;
  }

  /**
   * set The X/Y coordinates of the license plate in the image\nFour coordinates are provided that form a polygon starting\nfrom the top-left and moving clockwise ending in the bottom left
   * @param {Array} coordinates
   **/
  self.setCoordinates = function (coordinates) {
    self.coordinates = coordinates;
  }
  
  /**
   * get All the top N candidates that could be the correct plate number
   * @return {Array}
   **/
  self.getCandidates = function() {
    return self.candidates;
  }

  /**
   * set All the top N candidates that could be the correct plate number
   * @param {Array} candidates
   **/
  self.setCandidates = function (candidates) {
    self.candidates = candidates;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = PlateDetails;
}
