# openalpr_api

## Requirements

Building the API client library requires [Maven](https://maven.apache.org/) to be installed.

## Installation

To install the API client library to your local Maven repository, simply execute:

```shell
mvn install
```

To deploy it to a remote Maven repository instead, configure the settings of the repository and execute:

```shell
mvn deploy
```

Refer to the [official documentation](https://maven.apache.org/plugins/maven-deploy-plugin/usage.html) for more information.

### Maven users

Add this dependency to your project's POM:

```xml
<dependency>
    <groupId>io.swagger</groupId>
    <artifactId>openalpr_api</artifactId>
    <version>2.0.1</version>
    <scope>compile</scope>
</dependency>
```

### Gradle users

Add this dependency to your project's build file:

```groovy
compile "io.swagger:openalpr_api:2.0.1"
```

### Others

At first generate the JAR by executing:

    mvn package

Then manually install the following JARs:

* target/openalpr_api-2.0.1.jar
* target/lib/*.jar

## Getting Started

Please follow the [installation](#installation) instruction and execute the following Java code:

```java

import com.openalpr.api.invoker.*;
import com.openalpr.api.invoker.auth.*;
import com.openalpr.api.models.*;
import com.openalpr.api.DefaultApi;

import java.io.File;
import java.util.*;

public class DefaultApiExample {

    public static void main(String[] args) {
        
        DefaultApi apiInstance = new DefaultApi();
        String imageBytes = "imageBytes_example"; // String | The image file that you wish to analyze encoded in base64 
        String secretKey = "secretKey_example"; // String | The secret key used to authenticate your account.  You can view your  secret key by visiting  https://cloud.openalpr.com/ 
        String country = "country_example"; // String | Defines the training data used by OpenALPR.  \"us\" analyzes  North-American style plates.  \"eu\" analyzes European-style plates.  This field is required if using the \"plate\" task  You may use multiple datasets by using commas between the country  codes.  For example, 'au,auwide' would analyze using both the  Australian plate styles.  A full list of supported country codes  can be found here https://github.com/openalpr/openalpr/tree/master/runtime_data/config 
        Integer recognizeVehicle = 0; // Integer | If set to 1, the vehicle will also be recognized in the image This requires an additional credit per request 
        String state = ""; // String | Corresponds to a US state or EU country code used by OpenALPR pattern  recognition.  For example, using \"md\" matches US plates against the  Maryland plate patterns.  Using \"fr\" matches European plates against  the French plate patterns. 
        Integer returnImage = 0; // Integer | If set to 1, the image you uploaded will be encoded in base64 and  sent back along with the response 
        Integer topn = 10; // Integer | The number of results you would like to be returned for plate  candidates and vehicle classifications 
        String prewarp = ""; // String | Prewarp configuration is used to calibrate the analyses for the  angle of a particular camera.  More information is available here http://doc.openalpr.com/accuracy_improvements.html#calibration 
        try {
            InlineResponse200 result = apiInstance.recognizeBytes(imageBytes, secretKey, country, recognizeVehicle, state, returnImage, topn, prewarp);
            System.out.println(result);
        } catch (ApiException e) {
            System.err.println("Exception when calling DefaultApi#recognizeBytes");
            e.printStackTrace();
        }
    }
}

```

## Documentation for API Endpoints

All URIs are relative to *https://api.openalpr.com/v2*

Class | Method | HTTP request | Description
------------ | ------------- | ------------- | -------------
*DefaultApi* | [**recognizeBytes**](docs/DefaultApi.md#recognizeBytes) | **POST** /recognize_bytes | 
*DefaultApi* | [**recognizeFile**](docs/DefaultApi.md#recognizeFile) | **POST** /recognize | 
*DefaultApi* | [**recognizeUrl**](docs/DefaultApi.md#recognizeUrl) | **POST** /recognize_url | 


## Documentation for Models

 - [Coordinate](docs/Coordinate.md)
 - [InlineResponse200](docs/InlineResponse200.md)
 - [InlineResponse200ProcessingTime](docs/InlineResponse200ProcessingTime.md)
 - [InlineResponse400](docs/InlineResponse400.md)
 - [PlateCandidate](docs/PlateCandidate.md)
 - [PlateDetails](docs/PlateDetails.md)
 - [RegionOfInterest](docs/RegionOfInterest.md)
 - [VehicleCandidate](docs/VehicleCandidate.md)
 - [VehicleDetails](docs/VehicleDetails.md)


## Documentation for Authorization

All endpoints do not require authorization.
Authentication schemes defined for the API:

## Recommendation

It's recommended to create an instance of `ApiClient` per thread in a multithreaded environment to avoid any potential issues.

## Author



