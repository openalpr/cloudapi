# InlineResponse200

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processing_time** | [**\Swagger\Client\Model\InlineResponse200ProcessingTime**](InlineResponse200ProcessingTime.md) |  | [optional] 
**img_width** | **int** | Width of the uploaded image in pixels | [optional] 
**img_height** | **int** | Height of the input image in pixels | [optional] 
**credit_cost** | **int** | The number of API credits that were used to process this image | [optional] 
**credits_monthly_used** | **int** | The number of API credits used this month | [optional] 
**credits_monthly_total** | **int** | The maximum number of API credits available this month according to your plan | [optional] 
**results** | [**\Swagger\Client\Model\PlateDetails[]**](PlateDetails.md) |  | [optional] 
**regions_of_interest** | [**\Swagger\Client\Model\RegionOfInterest[]**](RegionOfInterest.md) | Describes the areas analyzed in the input image | [optional] 
**epoch_time** | **float** | Epoch time that the image was processed in milliseconds | [optional] 
**version** | **int** | API format version | [optional] 
**data_type** | **string** | Specifies the type of data in this response | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


