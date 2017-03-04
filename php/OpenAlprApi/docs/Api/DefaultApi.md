# Swagger\Client\DefaultApi

All URIs are relative to *https://api.openalpr.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recognizeBytes**](DefaultApi.md#recognizeBytes) | **POST** /recognize_bytes | 
[**recognizeFile**](DefaultApi.md#recognizeFile) | **POST** /recognize | 
[**recognizeUrl**](DefaultApi.md#recognizeUrl) | **POST** /recognize_url | 


# **recognizeBytes**
> \Swagger\Client\Model\InlineResponse200 recognizeBytes($image_bytes, $secret_key, $country, $recognize_vehicle, $state, $return_image, $topn, $prewarp)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as base64 encoded bytes.

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi();
$image_bytes = "image_bytes_example"; // string | The image file that you wish to analyze encoded in base64
$secret_key = "secret_key_example"; // string | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/
$country = "country_example"; // string | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config
$recognize_vehicle = 0; // int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request
$state = ""; // string | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.
$return_image = 0; // int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response
$topn = 10; // int | The number of results you would like to be returned for plate  candidates and vehicle classifications
$prewarp = ""; // string | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration

try {
    $result = $api_instance->recognizeBytes($image_bytes, $secret_key, $country, $recognize_vehicle, $state, $return_image, $topn, $prewarp);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recognizeBytes: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_bytes** | **string**| The image file that you wish to analyze encoded in base64 |
 **secret_key** | **string**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ |
 **country** | **string**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config |
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request | [optional] [default to 0]
 **state** | **string**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns. | [optional] [default to ]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications | [optional] [default to 10]
 **prewarp** | **string**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration | [optional] [default to ]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **recognizeFile**
> \Swagger\Client\Model\InlineResponse200 recognizeFile($image, $secret_key, $country, $recognize_vehicle, $state, $return_image, $topn, $prewarp)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a file using a form data POST

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi();
$image = "/path/to/file.txt"; // \SplFileObject | The image file that you wish to analyze
$secret_key = "secret_key_example"; // string | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/
$country = "country_example"; // string | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config
$recognize_vehicle = 0; // int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request
$state = ""; // string | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.
$return_image = 0; // int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response
$topn = 10; // int | The number of results you would like to be returned for plate  candidates and vehicle classifications
$prewarp = ""; // string | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration

try {
    $result = $api_instance->recognizeFile($image, $secret_key, $country, $recognize_vehicle, $state, $return_image, $topn, $prewarp);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recognizeFile: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **\SplFileObject**| The image file that you wish to analyze |
 **secret_key** | **string**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ |
 **country** | **string**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config |
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request | [optional] [default to 0]
 **state** | **string**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns. | [optional] [default to ]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications | [optional] [default to 10]
 **prewarp** | **string**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration | [optional] [default to ]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

# **recognizeUrl**
> \Swagger\Client\Model\InlineResponse200 recognizeUrl($image_url, $secret_key, $country, $recognize_vehicle, $state, $return_image, $topn, $prewarp)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a URL.  The OpenALPR service will download the image  and process it

### Example
```php
<?php
require_once(__DIR__ . '/vendor/autoload.php');

$api_instance = new Swagger\Client\Api\DefaultApi();
$image_url = "image_url_example"; // string | A URL to an image that you wish to analyze
$secret_key = "secret_key_example"; // string | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/
$country = "country_example"; // string | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config
$recognize_vehicle = 0; // int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request
$state = ""; // string | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.
$return_image = 0; // int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response
$topn = 10; // int | The number of results you would like to be returned for plate  candidates and vehicle classifications
$prewarp = ""; // string | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration

try {
    $result = $api_instance->recognizeUrl($image_url, $secret_key, $country, $recognize_vehicle, $state, $return_image, $topn, $prewarp);
    print_r($result);
} catch (Exception $e) {
    echo 'Exception when calling DefaultApi->recognizeUrl: ', $e->getMessage(), PHP_EOL;
}
?>
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **string**| A URL to an image that you wish to analyze |
 **secret_key** | **string**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ |
 **country** | **string**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config |
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request | [optional] [default to 0]
 **state** | **string**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns. | [optional] [default to ]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications | [optional] [default to 10]
 **prewarp** | **string**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration | [optional] [default to ]

### Return type

[**\Swagger\Client\Model\InlineResponse200**](../Model/InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../../README.md#documentation-for-api-endpoints) [[Back to Model list]](../../README.md#documentation-for-models) [[Back to README]](../../README.md)

