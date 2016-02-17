// require files in Node.js environment
var AlprPlate;var Classification;
if (typeof module === 'object' && module.exports) {
  
  AlprPlate = require('./AlprPlate.js');
  Classification = require('./Classification.js');
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('InlineResponse200', ['jquery', 'Array', 'Array', 'AlprPlate', 'Array'],
    function($, Array, Array, AlprPlateArray) {
      return InlineResponse200;
   });
}


var InlineResponse200 = function InlineResponse200() { 
  var self = this;
  
  /**
   * The number of API credits used this month
   * datatype: Integer
   **/
  self.creditsMonthlyUsed = null;
  
  /**
   * The maximum number of API credits available this month according to your plan
   * datatype: Integer
   **/
  self.creditsMonthlyTotal = null;
  
  /**
   * Width of the uploaded image in pixels
   * datatype: Integer
   **/
  self.imgWidth = null;
  
  /**
   * Results from color vehicle analysis task
   * datatype: Array
   **/
  self.color = [];
  
  /**
   * Results from makemodel vehicle analysis task
   * datatype: Array
   **/
  self.makemodel = [];
  
  /**
   * Time spent processing all tasks (in milliseconds)
   * datatype: Number
   **/
  self.totalProcessingTime = null;
  
  /**
   * Height of the input image in pixels
   * datatype: Integer
   **/
  self.imgHeight = null;
  
  /**
   * The number of API credits that were used to process this image
   * datatype: Integer
   **/
  self.creditCost = null;
  
  /**
   * datatype: AlprPlate
   **/
  self.plate = null;
  
  /**
   * Results from make vehicle analysis task
   * datatype: Array
   **/
  self.make = [];
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.creditsMonthlyUsed = data.credits_monthly_used;
    
    self.creditsMonthlyTotal = data.credits_monthly_total;
    
    self.imgWidth = data.img_width;
    
    self.color = data.color;
    
    self.makemodel = data.makemodel;
    
    self.totalProcessingTime = data.total_processing_time;
    
    self.imgHeight = data.img_height;
    
    self.creditCost = data.credit_cost;
    
    self.plate = data.plate;
    
    self.make = data.make;
    
  }

  
  /**
   * get The number of API credits used this month
   * @return {Integer}
   **/
  self.getCreditsMonthlyUsed = function() {
    return self.creditsMonthlyUsed;
  }

  /**
   * set The number of API credits used this month
   * @param {Integer} creditsMonthlyUsed
   **/
  self.setCreditsMonthlyUsed = function (creditsMonthlyUsed) {
    self.creditsMonthlyUsed = creditsMonthlyUsed;
  }
  
  /**
   * get The maximum number of API credits available this month according to your plan
   * @return {Integer}
   **/
  self.getCreditsMonthlyTotal = function() {
    return self.creditsMonthlyTotal;
  }

  /**
   * set The maximum number of API credits available this month according to your plan
   * @param {Integer} creditsMonthlyTotal
   **/
  self.setCreditsMonthlyTotal = function (creditsMonthlyTotal) {
    self.creditsMonthlyTotal = creditsMonthlyTotal;
  }
  
  /**
   * get Width of the uploaded image in pixels
   * @return {Integer}
   **/
  self.getImgWidth = function() {
    return self.imgWidth;
  }

  /**
   * set Width of the uploaded image in pixels
   * @param {Integer} imgWidth
   **/
  self.setImgWidth = function (imgWidth) {
    self.imgWidth = imgWidth;
  }
  
  /**
   * get Results from color vehicle analysis task
   * @return {Array}
   **/
  self.getColor = function() {
    return self.color;
  }

  /**
   * set Results from color vehicle analysis task
   * @param {Array} color
   **/
  self.setColor = function (color) {
    self.color = color;
  }
  
  /**
   * get Results from makemodel vehicle analysis task
   * @return {Array}
   **/
  self.getMakemodel = function() {
    return self.makemodel;
  }

  /**
   * set Results from makemodel vehicle analysis task
   * @param {Array} makemodel
   **/
  self.setMakemodel = function (makemodel) {
    self.makemodel = makemodel;
  }
  
  /**
   * get Time spent processing all tasks (in milliseconds)
   * @return {Number}
   **/
  self.getTotalProcessingTime = function() {
    return self.totalProcessingTime;
  }

  /**
   * set Time spent processing all tasks (in milliseconds)
   * @param {Number} totalProcessingTime
   **/
  self.setTotalProcessingTime = function (totalProcessingTime) {
    self.totalProcessingTime = totalProcessingTime;
  }
  
  /**
   * get Height of the input image in pixels
   * @return {Integer}
   **/
  self.getImgHeight = function() {
    return self.imgHeight;
  }

  /**
   * set Height of the input image in pixels
   * @param {Integer} imgHeight
   **/
  self.setImgHeight = function (imgHeight) {
    self.imgHeight = imgHeight;
  }
  
  /**
   * get The number of API credits that were used to process this image
   * @return {Integer}
   **/
  self.getCreditCost = function() {
    return self.creditCost;
  }

  /**
   * set The number of API credits that were used to process this image
   * @param {Integer} creditCost
   **/
  self.setCreditCost = function (creditCost) {
    self.creditCost = creditCost;
  }
  
  /**
   * @return {AlprPlate}
   **/
  self.getPlate = function() {
    return self.plate;
  }

  /**
   * @param {AlprPlate} plate
   **/
  self.setPlate = function (plate) {
    self.plate = plate;
  }
  
  /**
   * get Results from make vehicle analysis task
   * @return {Array}
   **/
  self.getMake = function() {
    return self.make;
  }

  /**
   * set Results from make vehicle analysis task
   * @param {Array} make
   **/
  self.setMake = function (make) {
    self.make = make;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = InlineResponse200;
}
