// require files in Node.js environment
var $, InlineResponse200, InlineResponse400;
if (typeof module === 'object' && module.exports) {
  $ = require('jquery');
  InlineResponse200 = require('../model/InlineResponse200.js');
  InlineResponse400 = require('../model/InlineResponse400.js');
}

// export module for AMD
if ( typeof define === "function" && define.amd ) {     
	define(['jquery', 'InlineResponse200', 'InlineResponse400'], function($, InlineResponse200, InlineResponse400) {
        return DefaultApi;
	 });
}

var DefaultApi = function DefaultApi() {
	var self = this;
  
  
  /**
   * 
   * Send an image for OpenALPR to analyze and provide metadata back
   * @param {String}  secretKey The secret key used to authenticate your account.  You can view your \nsecret key by visiting \nhttps://cloud.openalpr.com/
   * @param {Array}  tasks Tasks to execute.  You can choose to detect the license plate, \nas well as additional metadata about the vehicle.  Each additional \noption costs an API credit.
   * @param {File}  image The image file that you wish to analyze\nAt least one value for image, image_bytes, or image_url must be provided
   * @param {String}  imageBytes The image file that you wish to analyze encoded in base64\nAt least one value for image, image_bytes, or image_url must be provided
   * @param {String}  imageUrl A URL to an image that you wish to analyze\nAt least one value for image, image_bytes, or image_url must be provided
   * @param {String}  country Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes \nNorth-American style plates.  \&quot;eu\&quot; analyzes European-style plates.\n\nThis field is required if using the \&quot;plate\&quot; task\n\nYou may use multiple datasets by using commas between the country \ncodes.  For example, &#39;au,auwide&#39; would analyze using both the \nAustralian plate styles.  A full list of supported country codes \ncan be found here\nhttps://github.com/openalpr/openalpr/tree/master/runtime_data/config
   * @param {String}  state Corresponds to a US state or EU country code used by OpenALPR pattern \nrecognition.  For example, using \&quot;md\&quot; matches US plates against the \nMaryland plate patterns.  Using \&quot;fr\&quot; matches European plates against \nthe French plate patterns.
   * @param {Integer}  returnImage If set to 1, the image you uploaded will be encoded in base64 and \nsent back along with the response
   * @param {Integer}  topn The number of results you would like to be returned for plate \ncandidates and vehicle classifications
   * @param {String}  prewarp Prewarp configuration is used to calibrate the analyses for the \nangle of a particular camera.  More information is available here\nhttp://doc.openalpr.com/accuracy_improvements.html#calibration
   * @param {function} callback the callback function
   * @return InlineResponse200
   */
  self.recognizePost = function(secretKey, tasks, image, imageBytes, imageUrl, country, state, returnImage, topn, prewarp, callback) {
    var postBody = null;
    var postBinaryBody = null;
    
     // verify the required parameter 'secretKey' is set
     if (secretKey == null) {
        //throw new ApiException(400, "Missing the required parameter 'secretKey' when calling recognizePost");
        var errorRequiredMsg = "Missing the required parameter 'secretKey' when calling recognizePost";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'tasks' is set
     if (tasks == null) {
        //throw new ApiException(400, "Missing the required parameter 'tasks' when calling recognizePost");
        var errorRequiredMsg = "Missing the required parameter 'tasks' when calling recognizePost";
        throw errorRequiredMsg;
     }
     
     // verify the required parameter 'image' is set
     if (image == null) {
        //throw new ApiException(400, "Missing the required parameter 'image' when calling recognizePost");
        var errorRequiredMsg = "Missing the required parameter 'image' when calling recognizePost";
        throw errorRequiredMsg;
     }
     
    // create path and map variables
    var basePath = 'https://api.openalpr.com/v1';
    // if basePath ends with a /, remove it as path starts with a leading /
    if (basePath.substring(basePath.length-1, basePath.length)=='/') {
    	basePath = basePath.substring(0, basePath.length-1);
    }
    
    var path = basePath + replaceAll(replaceAll("/recognize", "\\{format\\}","json"));

    var queryParams = {};
    var headerParams =  {};
    var formParams =  {};

    
    queryParams.secret_key = secretKey;
    
    queryParams.tasks = tasks;
    
    queryParams.image_bytes = imageBytes;
    
    queryParams.image_url = imageUrl;
    
    queryParams.country = country;
    
    queryParams.state = state;
    
    queryParams.return_image = returnImage;
    
    queryParams.topn = topn;
    
    queryParams.prewarp = prewarp;
    
    
    if (image != null)
      formParams["image"] = image; 
    

    path += createQueryString(queryParams);

    var options = {type: "POST", async: true, contentType: "application/json", dataType: "json", data: postBody};
    var request = $.ajax(path, options);

    request.fail(function(jqXHR, textStatus, errorThrown){
      if (callback) {
        var error = errorThrown || textStatus || jqXHR.statusText || 'error';
        callback(null, textStatus, jqXHR, error);
      }
    });
		
    request.done(function(response, textStatus, jqXHR){
      
      /**
        * @returns InlineResponse200
        */
      
      var myResponse = new InlineResponse200();
      myResponse.constructFromObject(response);
      if (callback) {
        callback(myResponse, textStatus, jqXHR);
      }
      
    });
 
    return request;
  }
  
  

 	function replaceAll (haystack, needle, replace) {
		var result= haystack;
		if (needle !=null && replace!=null) {
			result= haystack.replace(new RegExp(needle, 'g'), replace);
		}
		return result;
	}

 	function createQueryString (queryParams) {
		var queryString ='';
		var i = 0;
		for (var queryParamName in queryParams) {
			if (i==0) {
				queryString += '?' ;
			} else {
				queryString += '&' ;
			}
			
			queryString +=  queryParamName + '=' + encodeURIComponent(queryParams[queryParamName]);
			i++;
		}
		
		return queryString;
	}
}

// export module for Node.js
if (typeof module === 'object' && module.exports) {
  module.exports = DefaultApi;
}
