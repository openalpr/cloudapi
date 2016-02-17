// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('Coordinate', ['jquery'],
    function($) {
      return Coordinate;
   });
}


var Coordinate = function Coordinate() { 
  var self = this;
  
  /**
   * datatype: Integer
   **/
  self.x = null;
  
  /**
   * datatype: Integer
   **/
  self.y = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.x = data.x;
    
    self.y = data.y;
    
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
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = Coordinate;
}
