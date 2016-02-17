if (typeof module === 'object' && module.exports) {
  var OpenalprApi = {};
  
  OpenalprApi.classification = require('./model/classification.js');
  
  OpenalprApi.coordinate = require('./model/coordinate.js');
  
  OpenalprApi.region_of_interest = require('./model/region_of_interest.js');
  
  OpenalprApi.plate_candidate = require('./model/plate_candidate.js');
  
  OpenalprApi.plate_details = require('./model/plate_details.js');
  
  OpenalprApi.alpr_plate = require('./model/alpr_plate.js');
  
  OpenalprApi.inline_response_200 = require('./model/inline_response_200.js');
  
  OpenalprApi.inline_response_400 = require('./model/inline_response_400.js');
  
  
  OpenalprApi.DefaultApi = require('./api/DefaultApi.js');
  
  module.exports = OpenalprApi;
}