# SWGDefaultApi

All URIs are relative to *https://api.openalpr.com/v2*

Method | HTTP request | Description
------------- | ------------- | -------------
[**recognizeBytes**](SWGDefaultApi.md#recognizebytes) | **POST** /recognize_bytes | 
[**recognizeFile**](SWGDefaultApi.md#recognizefile) | **POST** /recognize | 
[**recognizeUrl**](SWGDefaultApi.md#recognizeurl) | **POST** /recognize_url | 


# **recognizeBytes**
```objc
-(NSNumber*) recognizeBytesWithImageBytes: (NSString*) imageBytes
    secretKey: (NSString*) secretKey
    country: (NSString*) country
    recognizeVehicle: (NSNumber*) recognizeVehicle
    state: (NSString*) state
    returnImage: (NSNumber*) returnImage
    topn: (NSNumber*) topn
    prewarp: (NSString*) prewarp
        completionHandler: (void (^)(SWGInlineResponse200* output, NSError* error)) handler;
```



Send an image for OpenALPR to analyze and provide metadata back The image is sent as base64 encoded bytes. 

### Example 
```objc

NSString* imageBytes = imageBytes_example; // The image file that you wish to analyze encoded in base64 
NSString* secretKey = @"secretKey_example"; // The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
NSString* country = @"country_example"; // Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
NSNumber* recognizeVehicle = @0; // If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
NSString* state = @""; // Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional) (default to )
NSNumber* returnImage = @0; // If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
NSNumber* topn = @10; // The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)
NSString* prewarp = @""; // Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional) (default to )

SWGDefaultApi*apiInstance = [[SWGDefaultApi alloc] init];

[apiInstance recognizeBytesWithImageBytes:imageBytes
              secretKey:secretKey
              country:country
              recognizeVehicle:recognizeVehicle
              state:state
              returnImage:returnImage
              topn:topn
              prewarp:prewarp
          completionHandler: ^(SWGInlineResponse200* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGDefaultApi->recognizeBytes: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageBytes** | **NSString***| The image file that you wish to analyze encoded in base64  | 
 **secretKey** | **NSString***| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **NSString***| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **NSNumber***| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **NSString***| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **NSNumber***| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **NSNumber***| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **NSString***| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**SWGInlineResponse200***](SWGInlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognizeFile**
```objc
-(NSNumber*) recognizeFileWithImage: (NSURL*) image
    secretKey: (NSString*) secretKey
    country: (NSString*) country
    recognizeVehicle: (NSNumber*) recognizeVehicle
    state: (NSString*) state
    returnImage: (NSNumber*) returnImage
    topn: (NSNumber*) topn
    prewarp: (NSString*) prewarp
        completionHandler: (void (^)(SWGInlineResponse200* output, NSError* error)) handler;
```



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a file using a form data POST 

### Example 
```objc

NSURL* image = [NSURL fileURLWithPath:@"/path/to/file.txt"]; // The image file that you wish to analyze 
NSString* secretKey = @"secretKey_example"; // The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
NSString* country = @"country_example"; // Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
NSNumber* recognizeVehicle = @0; // If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
NSString* state = @""; // Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional) (default to )
NSNumber* returnImage = @0; // If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
NSNumber* topn = @10; // The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)
NSString* prewarp = @""; // Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional) (default to )

SWGDefaultApi*apiInstance = [[SWGDefaultApi alloc] init];

[apiInstance recognizeFileWithImage:image
              secretKey:secretKey
              country:country
              recognizeVehicle:recognizeVehicle
              state:state
              returnImage:returnImage
              topn:topn
              prewarp:prewarp
          completionHandler: ^(SWGInlineResponse200* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGDefaultApi->recognizeFile: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **image** | **NSURL***| The image file that you wish to analyze  | 
 **secretKey** | **NSString***| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **NSString***| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **NSNumber***| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **NSString***| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **NSNumber***| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **NSNumber***| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **NSString***| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**SWGInlineResponse200***](SWGInlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **recognizeUrl**
```objc
-(NSNumber*) recognizeUrlWithImageUrl: (NSString*) imageUrl
    secretKey: (NSString*) secretKey
    country: (NSString*) country
    recognizeVehicle: (NSNumber*) recognizeVehicle
    state: (NSString*) state
    returnImage: (NSNumber*) returnImage
    topn: (NSNumber*) topn
    prewarp: (NSString*) prewarp
        completionHandler: (void (^)(SWGInlineResponse200* output, NSError* error)) handler;
```



Send an image for OpenALPR to analyze and provide metadata back The image is sent as a URL.  The OpenALPR service will download the image  and process it 

### Example 
```objc

NSString* imageUrl = @"imageUrl_example"; // A URL to an image that you wish to analyze 
NSString* secretKey = @"secretKey_example"; // The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
NSString* country = @"country_example"; // Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
NSNumber* recognizeVehicle = @0; // If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional) (default to 0)
NSString* state = @""; // Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional) (default to )
NSNumber* returnImage = @0; // If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional) (default to 0)
NSNumber* topn = @10; // The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional) (default to 10)
NSString* prewarp = @""; // Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional) (default to )

SWGDefaultApi*apiInstance = [[SWGDefaultApi alloc] init];

[apiInstance recognizeUrlWithImageUrl:imageUrl
              secretKey:secretKey
              country:country
              recognizeVehicle:recognizeVehicle
              state:state
              returnImage:returnImage
              topn:topn
              prewarp:prewarp
          completionHandler: ^(SWGInlineResponse200* output, NSError* error) {
                        if (output) {
                            NSLog(@"%@", output);
                        }
                        if (error) {
                            NSLog(@"Error calling SWGDefaultApi->recognizeUrl: %@", error);
                        }
                    }];
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **imageUrl** | **NSString***| A URL to an image that you wish to analyze  | 
 **secretKey** | **NSString***| The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  | 
 **country** | **NSString***| Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes  North-American style plates.  \&quot;eu\&quot; analyzes European-style plates.  This field is required if using the \&quot;plate\&quot; task  You may use multiple datasets by using commas between the country  codes.  For example, &#39;au,auwide&#39; would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  | 
 **recognizeVehicle** | **NSNumber***| If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  | [optional] [default to 0]
 **state** | **NSString***| Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \&quot;md\&quot; matches US plates against the  Maryland plate patterns.  Using \&quot;fr\&quot; matches European plates against  the French plate patterns.  | [optional] [default to ]
 **returnImage** | **NSNumber***| If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  | [optional] [default to 0]
 **topn** | **NSNumber***| The number of results you would like to be returned for plate  candidates and vehicle classifications  | [optional] [default to 10]
 **prewarp** | **NSString***| Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  | [optional] [default to ]

### Return type

[**SWGInlineResponse200***](SWGInlineResponse200.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

