// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('RegionOfInterest', ['jquery'],
    function($) {
      return RegionOfInterest;
   });
}


var RegionOfInterest = function RegionOfInterest() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.x = null;
  
  /**
   * datatype: Integer
   **/
  self.y = null;
  
  /**
   * datatype: Integer
   **/
  self.width = null;
  
  /**
   * datatype: Integer
   **/
  self.height = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.x = data.x;
    
    self.y = data.y;
    
    self.width = data.width;
    
    self.height = data.height;
    
  }

  
  /**
   * @return {Integer}
   **/
  self.getX = function() {
    return self.x;
  }

  /**
   * @param {Integer} x
   **/
  self.setX = function (x) {
    self.x = x;
  }
  
  /**
   * @return {Integer}
   **/
  self.getY = function() {
    return self.y;
  }

  /**
   * @param {Integer} y
   **/
  self.setY = function (y) {
    self.y = y;
  }
  
  /**
   * @return {Integer}
   **/
  self.getWidth = function() {
    return self.width;
  }

  /**
   * @param {Integer} width
   **/
  self.setWidth = function (width) {
    self.width = width;
  }
  
  /**
   * @return {Integer}
   **/
  self.getHeight = function() {
    return self.height;
  }

  /**
   * @param {Integer} height
   **/
  self.setHeight = function (height) {
    self.height = height;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = RegionOfInterest;
}
