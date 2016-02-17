package com.openalpr.api;

import com.sun.jersey.api.client.GenericType;

import com.openalpr.api.invoker.ApiException;
import com.openalpr.api.invoker.ApiClient;
import com.openalpr.api.invoker.Configuration;
import com.openalpr.api.invoker.Pair;

import com.openalpr.api.models.InlineResponse200;
import com.openalpr.api.models.InlineResponse400;
import java.io.File;

import java.util.*;

@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2016-02-17T14:18:32.383-05:00")
public class DefaultApi {
  private ApiClient apiClient;

  public DefaultApi() {
    this(Configuration.getDefaultApiClient());
  }

  public DefaultApi(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  public ApiClient getApiClient() {
    return apiClient;
  }

  public void setApiClient(ApiClient apiClient) {
    this.apiClient = apiClient;
  }

  
  /**
   * 
   * Send an image for OpenALPR to analyze and provide metadata back
   * @param secretKey The secret key used to authenticate your account.  You can view your \nsecret key by visiting \nhttps://cloud.openalpr.com/
   * @param tasks Tasks to execute.  You can choose to detect the license plate, \nas well as additional metadata about the vehicle.  Each additional \noption costs an API credit.
   * @param image The image file that you wish to analyze\nAt least one value for image, image_bytes, or image_url must be provided
   * @param imageBytes The image file that you wish to analyze encoded in base64\nAt least one value for image, image_bytes, or image_url must be provided
   * @param imageUrl A URL to an image that you wish to analyze\nAt least one value for image, image_bytes, or image_url must be provided
   * @param country Defines the training data used by OpenALPR.  \&quot;us\&quot; analyzes \nNorth-American style plates.  \&quot;eu\&quot; analyzes European-style plates.\n\nThis field is required if using the \&quot;plate\&quot; task\n\nYou may use multiple datasets by using commas between the country \ncodes.  For example, &#39;au,auwide&#39; would analyze using both the \nAustralian plate styles.  A full list of supported country codes \ncan be found here\nhttps://github.com/openalpr/openalpr/tree/master/runtime_data/config
   * @param state Corresponds to a US state or EU country code used by OpenALPR pattern \nrecognition.  For example, using \&quot;md\&quot; matches US plates against the \nMaryland plate patterns.  Using \&quot;fr\&quot; matches European plates against \nthe French plate patterns.
   * @param returnImage If set to 1, the image you uploaded will be encoded in base64 and \nsent back along with the response
   * @param topn The number of results you would like to be returned for plate \ncandidates and vehicle classifications
   * @param prewarp Prewarp configuration is used to calibrate the analyses for the \nangle of a particular camera.  More information is available here\nhttp://doc.openalpr.com/accuracy_improvements.html#calibration
   * @return InlineResponse200
   */
  public InlineResponse200 recognizePost(String secretKey, List<String> tasks, File image, String imageBytes, String imageUrl, String country, String state, Integer returnImage, Integer topn, String prewarp) throws ApiException {
    Object postBody = null;
    
     // verify the required parameter 'secretKey' is set
     if (secretKey == null) {
        throw new ApiException(400, "Missing the required parameter 'secretKey' when calling recognizePost");
     }
     
     // verify the required parameter 'tasks' is set
     if (tasks == null) {
        throw new ApiException(400, "Missing the required parameter 'tasks' when calling recognizePost");
     }
     
     // verify the required parameter 'image' is set
     if (image == null) {
        throw new ApiException(400, "Missing the required parameter 'image' when calling recognizePost");
     }
     
    // create path and map variables
    String path = "/recognize".replaceAll("\\{format\\}","json");

    // query params
    List<Pair> queryParams = new ArrayList<Pair>();
    Map<String, String> headerParams = new HashMap<String, String>();
    Map<String, Object> formParams = new HashMap<String, Object>();

    
    queryParams.addAll(apiClient.parameterToPairs("", "secret_key", secretKey));
    
    queryParams.addAll(apiClient.parameterToPairs("csv", "tasks", tasks));
    
    queryParams.addAll(apiClient.parameterToPairs("", "image_bytes", imageBytes));
    
    queryParams.addAll(apiClient.parameterToPairs("", "image_url", imageUrl));
    
    queryParams.addAll(apiClient.parameterToPairs("", "country", country));
    
    queryParams.addAll(apiClient.parameterToPairs("", "state", state));
    
    queryParams.addAll(apiClient.parameterToPairs("", "return_image", returnImage));
    
    queryParams.addAll(apiClient.parameterToPairs("", "topn", topn));
    
    queryParams.addAll(apiClient.parameterToPairs("", "prewarp", prewarp));
    

    

    if (image != null)
      formParams.put("image", image);
    

    final String[] accepts = {
      "application/json"
    };
    final String accept = apiClient.selectHeaderAccept(accepts);

    final String[] contentTypes = {
      "multipart/form-data"
    };
    final String contentType = apiClient.selectHeaderContentType(contentTypes);

    String[] authNames = new String[] {  };

    
    GenericType<InlineResponse200> returnType = new GenericType<InlineResponse200>() {};
    return apiClient.invokeAPI(path, "POST", queryParams, postBody, headerParams, formParams, accept, contentType, authNames, returnType);
    
  }
  
}
