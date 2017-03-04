
# InlineResponse200

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**processingTime** | [**InlineResponse200ProcessingTime**](InlineResponse200ProcessingTime.md) |  |  [optional]
**imgWidth** | **Integer** | Width of the uploaded image in pixels |  [optional]
**imgHeight** | **Integer** | Height of the input image in pixels |  [optional]
**creditCost** | **Integer** | The number of API credits that were used to process this image |  [optional]
**creditsMonthlyUsed** | **Integer** | The number of API credits used this month |  [optional]
**creditsMonthlyTotal** | **Integer** | The maximum number of API credits available this month according to your plan |  [optional]
**results** | [**List&lt;PlateDetails&gt;**](PlateDetails.md) |  |  [optional]
**regionsOfInterest** | [**List&lt;RegionOfInterest&gt;**](RegionOfInterest.md) | Describes the areas analyzed in the input image |  [optional]
**epochTime** | [**BigDecimal**](BigDecimal.md) | Epoch time that the image was processed in milliseconds |  [optional]
**version** | **Integer** | API format version |  [optional]
**dataType** | [**DataTypeEnum**](#DataTypeEnum) | Specifies the type of data in this response |  [optional]


<a name="DataTypeEnum"></a>
## Enum: DataTypeEnum
Name | Value
---- | -----
ALPR_RESULTS | &quot;alpr_results&quot;
ALPR_GROUP | &quot;alpr_group&quot;
HEARTBEAT | &quot;heartbeat&quot;



