# OpenAlprApi.Model.InlineResponse200
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ProcessingTime** | [**InlineResponse200ProcessingTime**](InlineResponse200ProcessingTime.md) |  | [optional] 
**ImgWidth** | **int?** | Width of the uploaded image in pixels | [optional] 
**ImgHeight** | **int?** | Height of the input image in pixels | [optional] 
**CreditCost** | **int?** | The number of API credits that were used to process this image | [optional] 
**CreditsMonthlyUsed** | **int?** | The number of API credits used this month | [optional] 
**CreditsMonthlyTotal** | **int?** | The maximum number of API credits available this month according to your plan | [optional] 
**Results** | [**List&lt;PlateDetails&gt;**](PlateDetails.md) |  | [optional] 
**RegionsOfInterest** | [**List&lt;RegionOfInterest&gt;**](RegionOfInterest.md) | Describes the areas analyzed in the input image | [optional] 
**EpochTime** | **decimal?** | Epoch time that the image was processed in milliseconds | [optional] 
**Version** | **int?** | API format version | [optional] 
**DataType** | **string** | Specifies the type of data in this response | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

