# OpenalprApi.DefaultApi

All URIs are relative to *https://api.openalpr.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recognizeBytes**](DefaultApi.md#recognizeBytes) | **POST** /recognize_bytes | 
[**recognizeFile**](DefaultApi.md#recognizeFile) | **POST** /recognize | 
[**recognizeUrl**](DefaultApi.md#recognizeUrl) | **POST** /recognize_url | 


<a name="recognizeBytes"></a>
# **recognizeBytes**
> InlineResponse200 recognizeBytes(imageBytes, secretKey, country, opts)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as base64 encoded bytes. 

### Example
```javascript
var OpenalprApi = require('openalpr_api');

var apiInstance = new OpenalprApi.DefaultApi();

var imageBytes = "imageBytes_example"; // String | The image file that you wish to analyze encoded in base64 

var secretKey = "secretKey_example"; // String | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 

var country = "country_example"; // String | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 

var opts = { 
  'recognizeVehicle': 0, // Integer | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request 
  'state': "", // String | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns. 
  'returnImage': 0, // Integer | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response 
  'topn': 10, // Integer | The number of results you would like to be returned for plate  candidates and vehicle classifications 
  'prewarp': "" // String | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recognizeBytes(imageBytes, secretKey, country, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageBytes** | **String**| The image file that you wish to analyze encoded in base64  | 
 **secretKey** | **String**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **String**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **Integer**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **String**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **Integer**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **Integer**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **String**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="recognizeFile"></a>
# **recognizeFile**
> InlineResponse200 recognizeFile(image, secretKey, country, opts)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a file using a form data POST 

### Example
```javascript
var OpenalprApi = require('openalpr_api');

var apiInstance = new OpenalprApi.DefaultApi();

var image = "/path/to/file.txt"; // File | The image file that you wish to analyze 

var secretKey = "secretKey_example"; // String | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 

var country = "country_example"; // String | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 

var opts = { 
  'recognizeVehicle': 0, // Integer | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request 
  'state': "", // String | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns. 
  'returnImage': 0, // Integer | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response 
  'topn': 10, // Integer | The number of results you would like to be returned for plate  candidates and vehicle classifications 
  'prewarp': "" // String | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recognizeFile(image, secretKey, country, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **File**| The image file that you wish to analyze  | 
 **secretKey** | **String**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **String**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **Integer**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **String**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **Integer**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **Integer**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **String**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="recognizeUrl"></a>
# **recognizeUrl**
> InlineResponse200 recognizeUrl(imageUrl, secretKey, country, opts)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a URL.  The OpenALPR service will download the image  and process it 

### Example
```javascript
var OpenalprApi = require('openalpr_api');

var apiInstance = new OpenalprApi.DefaultApi();

var imageUrl = "imageUrl_example"; // String | A URL to an image that you wish to analyze 

var secretKey = "secretKey_example"; // String | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 

var country = "country_example"; // String | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 

var opts = { 
  'recognizeVehicle': 0, // Integer | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request 
  'state': "", // String | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns. 
  'returnImage': 0, // Integer | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response 
  'topn': 10, // Integer | The number of results you would like to be returned for plate  candidates and vehicle classifications 
  'prewarp': "" // String | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration 
};

var callback = function(error, data, response) {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
};
apiInstance.recognizeUrl(imageUrl, secretKey, country, opts, callback);
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageUrl** | **String**| A URL to an image that you wish to analyze  | 
 **secretKey** | **String**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **String**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **Integer**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **String**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **Integer**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **Integer**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **String**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

