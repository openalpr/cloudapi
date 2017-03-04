# OpenalprApi.InlineResponse200

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processingTime** | [**InlineResponse200ProcessingTime**](InlineResponse200ProcessingTime.md) |  | [optional] 
**imgWidth** | **Integer** | Width of the uploaded image in pixels | [optional] 
**imgHeight** | **Integer** | Height of the input image in pixels | [optional] 
**creditCost** | **Integer** | The number of API credits that were used to process this image | [optional] 
**creditsMonthlyUsed** | **Integer** | The number of API credits used this month | [optional] 
**creditsMonthlyTotal** | **Integer** | The maximum number of API credits available this month according to your plan | [optional] 
**results** | [**[PlateDetails]**](PlateDetails.md) |  | [optional] 
**regionsOfInterest** | [**[RegionOfInterest]**](RegionOfInterest.md) | Describes the areas analyzed in the input image | [optional] 
**epochTime** | **Number** | Epoch time that the image was processed in milliseconds | [optional] 
**version** | **Integer** | API format version | [optional] 
**dataType** | **String** | Specifies the type of data in this response | [optional] 


<a name="DataTypeEnum"></a>
## Enum: DataTypeEnum


* `alpr_results` (value: `"alpr_results"`)

* `alpr_group` (value: `"alpr_group"`)

* `heartbeat` (value: `"heartbeat"`)




