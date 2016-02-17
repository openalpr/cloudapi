// require files in Node.js environment
var PlateDetails;var RegionOfInterest;
if (typeof module === 'object' && module.exports) {
  
  PlateDetails = require('./PlateDetails.js');
  RegionOfInterest = require('./RegionOfInterest.js');
}



//export module
if ( typeof define === "function" && define.amd ) {     
	define('DataTypeEnum', ['jquery'], function($) {
        return DataTypeEnum;
	 });
}

var DataTypeEnum = function DataTypeEnum() {
	var self = this;
	

	/**
	 * @const 
	 */ 
	self.ALPR_RESULTS = "alpr_results",
	
	/**
	 * @const 
	 */ 
	self.ALPR_GROUP = "alpr_group",
	
	/**
	 * @const 
	 */ 
	self.HEARTBEAT = "heartbeat";

}


//export module
if ( typeof define === "function" && define.amd ) {
  define('AlprPlate', ['jquery', 'Array', 'Array'],
    function($, Array, Array) {
      return AlprPlate;
   });
}

/**
 * Results from plate analysis task
 **/
var AlprPlate = function AlprPlate() { 
  var self = this;
  
  /**
   * datatype: Array
   **/
  self.results = [];
  
  /**
   * Width of the uploaded image in pixels
   * datatype: Integer
   **/
  self.imgWidth = null;
  
  /**
   * Height of the input image in pixels
   * datatype: Integer
   **/
  self.imgHeight = null;
  
  /**
   * Describes the areas analyzed in the input image
   * datatype: Array
   **/
  self.regionsOfInterest = [];
  
  /**
   * Epoch time that the image was processed in milliseconds
   * datatype: Number
   **/
  self.epochTime = null;
  
  /**
   * API format version
   * datatype: Integer
   **/
  self.version = null;
  
  /**
   * Specifies the type of data in this response
   * datatype: DataTypeEnum
   **/
  self.dataType = null;
  
  /**
   * Number of milliseconds to process all license plates
   * datatype: Number
   **/
  self.processingTimeMs = null;
  
  
  self.constructFromObject = function(data) {
    if (!data) {
      return;
    }
    
    self.results = new Array();
    
    self.imgWidth = data.img_width;
    
    self.imgHeight = data.img_height;
    
    self.regionsOfInterest = new Array();
    
    self.epochTime = data.epoch_time;
    
    self.version = data.version;
    
    self.dataType = data.data_type;
    
    self.processingTimeMs = data.processing_time_ms;
    
  }

  
  /**
   * @return {Array}
   **/
  self.getResults = function() {
    return self.results;
  }

  /**
   * @param {Array} results
   **/
  self.setResults = function (results) {
    self.results = results;
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
   * get Describes the areas analyzed in the input image
   * @return {Array}
   **/
  self.getRegionsOfInterest = function() {
    return self.regionsOfInterest;
  }

  /**
   * set Describes the areas analyzed in the input image
   * @param {Array} regionsOfInterest
   **/
  self.setRegionsOfInterest = function (regionsOfInterest) {
    self.regionsOfInterest = regionsOfInterest;
  }
  
  /**
   * get Epoch time that the image was processed in milliseconds
   * @return {Number}
   **/
  self.getEpochTime = function() {
    return self.epochTime;
  }

  /**
   * set Epoch time that the image was processed in milliseconds
   * @param {Number} epochTime
   **/
  self.setEpochTime = function (epochTime) {
    self.epochTime = epochTime;
  }
  
  /**
   * get API format version
   * @return {Integer}
   **/
  self.getVersion = function() {
    return self.version;
  }

  /**
   * set API format version
   * @param {Integer} version
   **/
  self.setVersion = function (version) {
    self.version = version;
  }
  
  /**
   * get Specifies the type of data in this response
   * @return {DataTypeEnum}
   **/
  self.getDataType = function() {
    return self.dataType;
  }

  /**
   * set Specifies the type of data in this response
   * @param {DataTypeEnum} dataType
   **/
  self.setDataType = function (dataType) {
    self.dataType = dataType;
  }
  
  /**
   * get Number of milliseconds to process all license plates
   * @return {Number}
   **/
  self.getProcessingTimeMs = function() {
    return self.processingTimeMs;
  }

  /**
   * set Number of milliseconds to process all license plates
   * @param {Number} processingTimeMs
   **/
  self.setProcessingTimeMs = function (processingTimeMs) {
    self.processingTimeMs = processingTimeMs;
  }
  

  self.toJson = function () {
    return JSON.stringify(self);
  }
}

if (typeof module === 'object' && module.exports) {
  module.exports = AlprPlate;
}
