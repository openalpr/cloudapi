# OpenAlprApi.Api.DefaultApi

All URIs are relative to *https://api.openalpr.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**RecognizeBytes**](DefaultApi.md#recognizebytes) | **POST** /recognize_bytes | 
[**RecognizeFile**](DefaultApi.md#recognizefile) | **POST** /recognize | 
[**RecognizeUrl**](DefaultApi.md#recognizeurl) | **POST** /recognize_url | 


<a name="recognizebytes"></a>
# **RecognizeBytes**
> InlineResponse200 RecognizeBytes (string imageBytes, string secretKey, string country, int? recognizeVehicle = null, string state = null, int? returnImage = null, int? topn = null, string prewarp = null)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as base64 encoded bytes. 

### Example
```csharp
using System;
using System.Diagnostics;
using OpenAlprApi.Api;
using OpenAlprApi.Client;
using OpenAlprApi.Model;

namespace Example
{
    public class RecognizeBytesExample
    {
        public void main()
        {
            
            var apiInstance = new DefaultApi();
            var imageBytes = imageBytes_example;  // string | The image file that you wish to analyze encoded in base64 
            var secretKey = secretKey_example;  // string | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
            var country = country_example;  // string | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
            var recognizeVehicle = 56;  // int? | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional)  (default to 0)
            var state = state_example;  // string | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional)  (default to )
            var returnImage = 56;  // int? | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional)  (default to 0)
            var topn = 56;  // int? | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional)  (default to 10)
            var prewarp = prewarp_example;  // string | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional)  (default to )

            try
            {
                InlineResponse200 result = apiInstance.RecognizeBytes(imageBytes, secretKey, country, recognizeVehicle, state, returnImage, topn, prewarp);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.RecognizeBytes: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageBytes** | **string**| The image file that you wish to analyze encoded in base64  | 
 **secretKey** | **string**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **string**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **int?**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **string**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **int?**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int?**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **string**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recognizefile"></a>
# **RecognizeFile**
> InlineResponse200 RecognizeFile (System.IO.Stream image, string secretKey, string country, int? recognizeVehicle = null, string state = null, int? returnImage = null, int? topn = null, string prewarp = null)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a file using a form data POST 

### Example
```csharp
using System;
using System.Diagnostics;
using OpenAlprApi.Api;
using OpenAlprApi.Client;
using OpenAlprApi.Model;

namespace Example
{
    public class RecognizeFileExample
    {
        public void main()
        {
            
            var apiInstance = new DefaultApi();
            var image = new System.IO.Stream(); // System.IO.Stream | The image file that you wish to analyze 
            var secretKey = secretKey_example;  // string | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
            var country = country_example;  // string | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
            var recognizeVehicle = 56;  // int? | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional)  (default to 0)
            var state = state_example;  // string | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional)  (default to )
            var returnImage = 56;  // int? | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional)  (default to 0)
            var topn = 56;  // int? | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional)  (default to 10)
            var prewarp = prewarp_example;  // string | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional)  (default to )

            try
            {
                InlineResponse200 result = apiInstance.RecognizeFile(image, secretKey, country, recognizeVehicle, state, returnImage, topn, prewarp);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.RecognizeFile: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **System.IO.Stream**| The image file that you wish to analyze  | 
 **secretKey** | **string**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **string**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **int?**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **string**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **int?**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int?**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **string**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

<a name="recognizeurl"></a>
# **RecognizeUrl**
> InlineResponse200 RecognizeUrl (string imageUrl, string secretKey, string country, int? recognizeVehicle = null, string state = null, int? returnImage = null, int? topn = null, string prewarp = null)



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a URL.  The OpenALPR service will download the image  and process it 

### Example
```csharp
using System;
using System.Diagnostics;
using OpenAlprApi.Api;
using OpenAlprApi.Client;
using OpenAlprApi.Model;

namespace Example
{
    public class RecognizeUrlExample
    {
        public void main()
        {
            
            var apiInstance = new DefaultApi();
            var imageUrl = imageUrl_example;  // string | A URL to an image that you wish to analyze 
            var secretKey = secretKey_example;  // string | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
            var country = country_example;  // string | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
            var recognizeVehicle = 56;  // int? | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional)  (default to 0)
            var state = state_example;  // string | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional)  (default to )
            var returnImage = 56;  // int? | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional)  (default to 0)
            var topn = 56;  // int? | The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional)  (default to 10)
            var prewarp = prewarp_example;  // string | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional)  (default to )

            try
            {
                InlineResponse200 result = apiInstance.RecognizeUrl(imageUrl, secretKey, country, recognizeVehicle, state, returnImage, topn, prewarp);
                Debug.WriteLine(result);
            }
            catch (Exception e)
            {
                Debug.Print("Exception when calling DefaultApi.RecognizeUrl: " + e.Message );
            }
        }
    }
}
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageUrl** | **string**| A URL to an image that you wish to analyze  | 
 **secretKey** | **string**| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **string**| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **int?**| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **string**| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **int?**| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **int?**| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **string**| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**InlineResponse200**](InlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

