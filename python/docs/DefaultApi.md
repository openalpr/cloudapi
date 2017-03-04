# openalpr_api.DefaultApi

All URIs are relative to *https://api.openalpr.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recognize_bytes**](DefaultApi.md#recognize_bytes) | **POST** /recognize_bytes | 
[**recognize_file**](DefaultApi.md#recognize_file) | **POST** /recognize | 
[**recognize_url**](DefaultApi.md#recognize_url) | **POST** /recognize_url | 


# **recognize_bytes**
> InlineResponse200 recognize_bytes(image_bytes, secret_key, country, recognize_vehicle=recognize_vehicle, state=state, return_image=return_image, topn=topn, prewarp=prewarp)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as base64 encoded bytes. 

### Example 
```python
import time
import openalpr_api
from openalpr_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openalpr_api.DefaultApi()
image_bytes = 'image_bytes_example' # str | The image file that you wish to analyze encoded in base64 
secret_key = 'secret_key_example' # str | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
country = 'country_example' # str | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
recognize_vehicle = 0 # int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
state = '' # str | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional) (default to )
return_image = 0 # int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
topn = 10 # int | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)
prewarp = '' # str | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional) (default to )

try: 
    api_response = api_instance.recognize_bytes(image_bytes, secret_key, country, recognize_vehicle=recognize_vehicle, state=state, return_image=return_image, topn=topn, prewarp=prewarp)
    pprint(api_response)
except ApiException as e:
    print "Exception when calling DefaultApi->recognize_bytes: %s\n" % e
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_bytes** | **str**| The image file that you wish to analyze encoded in base64  | 
 **secret_key** | **str**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **str**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **str**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **str**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognize_file**
> InlineResponse200 recognize_file(image, secret_key, country, recognize_vehicle=recognize_vehicle, state=state, return_image=return_image, topn=topn, prewarp=prewarp)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a file using a form data POST 

### Example 
```python
import time
import openalpr_api
from openalpr_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openalpr_api.DefaultApi()
image = '/path/to/file.txt' # file | The image file that you wish to analyze 
secret_key = 'secret_key_example' # str | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
country = 'country_example' # str | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
recognize_vehicle = 0 # int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
state = '' # str | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional) (default to )
return_image = 0 # int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
topn = 10 # int | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)
prewarp = '' # str | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional) (default to )

try: 
    api_response = api_instance.recognize_file(image, secret_key, country, recognize_vehicle=recognize_vehicle, state=state, return_image=return_image, topn=topn, prewarp=prewarp)
    pprint(api_response)
except ApiException as e:
    print "Exception when calling DefaultApi->recognize_file: %s\n" % e
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **file**| The image file that you wish to analyze  | 
 **secret_key** | **str**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **str**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **str**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **str**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognize_url**
> InlineResponse200 recognize_url(image_url, secret_key, country, recognize_vehicle=recognize_vehicle, state=state, return_image=return_image, topn=topn, prewarp=prewarp)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a URL.  The OpenALPR service will download the image  and process it 

### Example 
```python
import time
import openalpr_api
from openalpr_api.rest import ApiException
from pprint import pprint

# create an instance of the API class
api_instance = openalpr_api.DefaultApi()
image_url = 'image_url_example' # str | A URL to an image that you wish to analyze 
secret_key = 'secret_key_example' # str | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
country = 'country_example' # str | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
recognize_vehicle = 0 # int | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
state = '' # str | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional) (default to )
return_image = 0 # int | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
topn = 10 # int | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)
prewarp = '' # str | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional) (default to )

try: 
    api_response = api_instance.recognize_url(image_url, secret_key, country, recognize_vehicle=recognize_vehicle, state=state, return_image=return_image, topn=topn, prewarp=prewarp)
    pprint(api_response)
except ApiException as e:
    print "Exception when calling DefaultApi->recognize_url: %s\n" % e
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image_url** | **str**| A URL to an image that you wish to analyze  | 
 **secret_key** | **str**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **str**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognize_vehicle** | **int**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **str**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **return_image** | **int**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **str**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

