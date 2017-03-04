#import "SWGDefaultApi.h"
#import "SWGQueryParamCollection.h"
#import "SWGInlineResponse400.h"
#import "SWGInlineResponse200.h"


@interface SWGDefaultApi ()

@property (nonatomic, strong) NSMutableDictionary *defaultHeaders;

@end

@implementation SWGDefaultApi

NSString* kSWGDefaultApiErrorDomain = @"SWGDefaultApiErrorDomain";
NSInteger kSWGDefaultApiMissingParamErrorCode = 234513;

@synthesize apiClient = _apiClient;

#pragma mark - Initialize methods

- (instancetype) init {
    self = [super init];
    if (self) {
        SWGConfiguration *config = [SWGConfiguration sharedConfig];
        if (config.apiClient == nil) {
            config.apiClient = [[SWGApiClient alloc] init];
        }
        _apiClient = config.apiClient;
        _defaultHeaders = [NSMutableDictionary dictionary];
    }
    return self;
}

- (id) initWithApiClient:(SWGApiClient *)apiClient {
    self = [super init];
    if (self) {
        _apiClient = apiClient;
        _defaultHeaders = [NSMutableDictionary dictionary];
    }
    return self;
}

#pragma mark -

+ (instancetype)sharedAPI {
    static SWGDefaultApi *sharedAPI;
    static dispatch_once_t once;
    dispatch_once(&once, ^{
        sharedAPI = [[self alloc] init];
    });
    return sharedAPI;
}

-(NSString*) defaultHeaderForKey:(NSString*)key {
    return self.defaultHeaders[key];
}

-(void) addHeader:(NSString*)value forKey:(NSString*)key {
    [self setDefaultHeaderValue:value forKey:key];
}

-(void) setDefaultHeaderValue:(NSString*) value forKey:(NSString*)key {
    [self.defaultHeaders setValue:value forKey:key];
}

-(NSUInteger) requestQueueSize {
    return [SWGApiClient requestQueueSize];
}

#pragma mark - Api Methods

///
/// 
/// Send an image for OpenALPR to analyze and provide metadata back The image is sent as base64 encoded bytes. 
///  @param imageBytes The image file that you wish to analyze encoded in base64  
///
///  @param secretKey The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  
///
///  @param country Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  
///
///  @param recognizeVehicle If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional, default to 0)
///
///  @param state Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional, default to )
///
///  @param returnImage If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional, default to 0)
///
///  @param topn The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional, default to 10)
///
///  @param prewarp Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional, default to )
///
///  @returns SWGInlineResponse200*
///
-(NSNumber*) recognizeBytesWithImageBytes: (NSString*) imageBytes
    secretKey: (NSString*) secretKey
    country: (NSString*) country
    recognizeVehicle: (NSNumber*) recognizeVehicle
    state: (NSString*) state
    returnImage: (NSNumber*) returnImage
    topn: (NSNumber*) topn
    prewarp: (NSString*) prewarp
    completionHandler: (void (^)(SWGInlineResponse200* output, NSError* error)) handler {
    // verify the required parameter 'imageBytes' is set
    if (imageBytes == nil) {
        NSParameterAssert(imageBytes);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"imageBytes"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'secretKey' is set
    if (secretKey == nil) {
        NSParameterAssert(secretKey);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"secretKey"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'country' is set
    if (country == nil) {
        NSParameterAssert(country);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"country"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/recognize_bytes"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (secretKey != nil) {
        queryParams[@"secret_key"] = secretKey;
    }
    if (recognizeVehicle != nil) {
        queryParams[@"recognize_vehicle"] = recognizeVehicle;
    }
    if (country != nil) {
        queryParams[@"country"] = country;
    }
    if (state != nil) {
        queryParams[@"state"] = state;
    }
    if (returnImage != nil) {
        queryParams[@"return_image"] = returnImage;
    }
    if (topn != nil) {
        queryParams[@"topn"] = topn;
    }
    if (prewarp != nil) {
        queryParams[@"prewarp"] = prewarp;
    }
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"application/json"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"application/json"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    bodyParam = imageBytes;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"SWGInlineResponse200*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((SWGInlineResponse200*)data, error);
                                }
                           }
          ];
}

///
/// 
/// Send an image for OpenALPR to analyze and provide metadata back The image is sent as a file using a form data POST 
///  @param image The image file that you wish to analyze  
///
///  @param secretKey The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  
///
///  @param country Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  
///
///  @param recognizeVehicle If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional, default to 0)
///
///  @param state Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional, default to )
///
///  @param returnImage If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional, default to 0)
///
///  @param topn The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional, default to 10)
///
///  @param prewarp Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional, default to )
///
///  @returns SWGInlineResponse200*
///
-(NSNumber*) recognizeFileWithImage: (NSURL*) image
    secretKey: (NSString*) secretKey
    country: (NSString*) country
    recognizeVehicle: (NSNumber*) recognizeVehicle
    state: (NSString*) state
    returnImage: (NSNumber*) returnImage
    topn: (NSNumber*) topn
    prewarp: (NSString*) prewarp
    completionHandler: (void (^)(SWGInlineResponse200* output, NSError* error)) handler {
    // verify the required parameter 'image' is set
    if (image == nil) {
        NSParameterAssert(image);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"image"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'secretKey' is set
    if (secretKey == nil) {
        NSParameterAssert(secretKey);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"secretKey"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'country' is set
    if (country == nil) {
        NSParameterAssert(country);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"country"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/recognize"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (secretKey != nil) {
        queryParams[@"secret_key"] = secretKey;
    }
    if (recognizeVehicle != nil) {
        queryParams[@"recognize_vehicle"] = recognizeVehicle;
    }
    if (country != nil) {
        queryParams[@"country"] = country;
    }
    if (state != nil) {
        queryParams[@"state"] = state;
    }
    if (returnImage != nil) {
        queryParams[@"return_image"] = returnImage;
    }
    if (topn != nil) {
        queryParams[@"topn"] = topn;
    }
    if (prewarp != nil) {
        queryParams[@"prewarp"] = prewarp;
    }
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"application/json"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"multipart/form-data"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];
    localVarFiles[@"image"] = image;

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"SWGInlineResponse200*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((SWGInlineResponse200*)data, error);
                                }
                           }
          ];
}

///
/// 
/// Send an image for OpenALPR to analyze and provide metadata back The image is sent as a URL.  The OpenALPR service will download the image  and process it 
///  @param imageUrl A URL to an image that you wish to analyze  
///
///  @param secretKey The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/  
///
///  @param country Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config  
///
///  @param recognizeVehicle If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request  (optional, default to 0)
///
///  @param state Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns.  (optional, default to )
///
///  @param returnImage If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response  (optional, default to 0)
///
///  @param topn The number of results you would like to be returned for plate  candidates and vehicle classifications  (optional, default to 10)
///
///  @param prewarp Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration  (optional, default to )
///
///  @returns SWGInlineResponse200*
///
-(NSNumber*) recognizeUrlWithImageUrl: (NSString*) imageUrl
    secretKey: (NSString*) secretKey
    country: (NSString*) country
    recognizeVehicle: (NSNumber*) recognizeVehicle
    state: (NSString*) state
    returnImage: (NSNumber*) returnImage
    topn: (NSNumber*) topn
    prewarp: (NSString*) prewarp
    completionHandler: (void (^)(SWGInlineResponse200* output, NSError* error)) handler {
    // verify the required parameter 'imageUrl' is set
    if (imageUrl == nil) {
        NSParameterAssert(imageUrl);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"imageUrl"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'secretKey' is set
    if (secretKey == nil) {
        NSParameterAssert(secretKey);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"secretKey"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    // verify the required parameter 'country' is set
    if (country == nil) {
        NSParameterAssert(country);
        if(handler) {
            NSDictionary * userInfo = @{NSLocalizedDescriptionKey : [NSString stringWithFormat:NSLocalizedString(@"Missing required parameter '%@'", nil),@"country"] };
            NSError* error = [NSError errorWithDomain:kSWGDefaultApiErrorDomain code:kSWGDefaultApiMissingParamErrorCode userInfo:userInfo];
            handler(nil, error);
        }
        return nil;
    }

    NSMutableString* resourcePath = [NSMutableString stringWithFormat:@"/recognize_url"];

    // remove format in URL if needed
    [resourcePath replaceOccurrencesOfString:@".{format}" withString:@".json" options:0 range:NSMakeRange(0,resourcePath.length)];

    NSMutableDictionary *pathParams = [[NSMutableDictionary alloc] init];

    NSMutableDictionary* queryParams = [[NSMutableDictionary alloc] init];
    if (imageUrl != nil) {
        queryParams[@"image_url"] = imageUrl;
    }
    if (secretKey != nil) {
        queryParams[@"secret_key"] = secretKey;
    }
    if (recognizeVehicle != nil) {
        queryParams[@"recognize_vehicle"] = recognizeVehicle;
    }
    if (country != nil) {
        queryParams[@"country"] = country;
    }
    if (state != nil) {
        queryParams[@"state"] = state;
    }
    if (returnImage != nil) {
        queryParams[@"return_image"] = returnImage;
    }
    if (topn != nil) {
        queryParams[@"topn"] = topn;
    }
    if (prewarp != nil) {
        queryParams[@"prewarp"] = prewarp;
    }
    NSMutableDictionary* headerParams = [NSMutableDictionary dictionaryWithDictionary:self.apiClient.configuration.defaultHeaders];
    [headerParams addEntriesFromDictionary:self.defaultHeaders];
    // HTTP header `Accept`
    NSString *acceptHeader = [self.apiClient.sanitizer selectHeaderAccept:@[@"application/json"]];
    if(acceptHeader.length > 0) {
        headerParams[@"Accept"] = acceptHeader;
    }

    // response content type
    NSString *responseContentType = [[acceptHeader componentsSeparatedByString:@", "] firstObject] ?: @"";

    // request content type
    NSString *requestContentType = [self.apiClient.sanitizer selectHeaderContentType:@[@"application/json"]];

    // Authentication setting
    NSArray *authSettings = @[];

    id bodyParam = nil;
    NSMutableDictionary *formParams = [[NSMutableDictionary alloc] init];
    NSMutableDictionary *localVarFiles = [[NSMutableDictionary alloc] init];

    return [self.apiClient requestWithPath: resourcePath
                                    method: @"POST"
                                pathParams: pathParams
                               queryParams: queryParams
                                formParams: formParams
                                     files: localVarFiles
                                      body: bodyParam
                              headerParams: headerParams
                              authSettings: authSettings
                        requestContentType: requestContentType
                       responseContentType: responseContentType
                              responseType: @"SWGInlineResponse200*"
                           completionBlock: ^(id data, NSError *error) {
                                if(handler) {
                                    handler((SWGInlineResponse200*)data, error);
                                }
                           }
          ];
}



@end
