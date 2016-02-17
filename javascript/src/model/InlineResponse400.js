// require files in Node.js environment

if (typeof module === 'object' && module.exports) {
  
}




//export module
if ( typeof define === "function" && define.amd ) {
  define('InlineResponse400', ['jquery'],
    function($) {
      return InlineResponse400;
   });
}


var InlineResponse400 = function InlineResponse400() { 
  var self = this;
  
  /**
   * Text error message describing the invalid input
   * datatype: String
   **/
  self.error = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.error = data.error;
    
  }

  
  /**
   * get Text error message describing the invalid input
   * @return {String}
   **/
  self.getError = function() {
    return self.error;
  }

  /**
   * set Text error message describing the invalid input
   * @param {String} error
   **/
  self.setError = function (error) {
    self.error = error;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = InlineResponse400;
}
