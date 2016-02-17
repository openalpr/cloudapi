// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('Classification', ['jquery'],
    function($) {
      return Classification;
   });
}


var Classification = function Classification() { 
  var self = this;
  
  /**
   * datatype: Number
   **/
  self.confidence = null;
  
  /**
   * datatype: String
   **/
  self.value = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.confidence = data.confidence;
    
    self.value = data.value;
    
  }

  
  /**
   * @return {Number}
   **/
  self.getConfidence = function() {
    return self.confidence;
  }

  /**
   * @param {Number} confidence
   **/
  self.setConfidence = function (confidence) {
    self.confidence = confidence;
  }
  
  /**
   * @return {String}
   **/
  self.getValue = function() {
    return self.value;
  }

  /**
   * @param {String} value
   **/
  self.setValue = function (value) {
    self.value = value;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = Classification;
}
