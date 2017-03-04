# SWGPlateDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plate** | **NSString*** | Best plate number for this plate | [optional] 
**matchesTemplate** | **NSNumber*** | Indicates whether the plate matched a regional text pattern | [optional] 
**requestedTopn** | **NSNumber*** | The max number of results requested | [optional] 
**processingTimeMs** | **NSNumber*** | Number of milliseconds to process the license plate | [optional] 
**confidence** | **NSNumber*** | Confidence percentage that the plate number is correct | [optional] 
**region** | **NSString*** | Specified or detected region (e.g., tx for Texas) | [optional] 
**regionConfidence** | **NSNumber*** | Confidence percentage that the plate region is correct | [optional] 
**coordinates** | [**NSArray&lt;SWGCoordinate&gt;***](SWGCoordinate.md) | The X/Y coordinates of the license plate in the image Four coordinates are provided that form a polygon starting from the top-left and moving clockwise ending in the bottom left  | [optional] 
**candidates** | [**NSArray&lt;SWGPlateCandidate&gt;***](SWGPlateCandidate.md) | All the top N candidates that could be the correct plate number | [optional] 
**vehicleRegion** | [**SWGRegionOfInterest***](SWGRegionOfInterest.md) |  | [optional] 
**vehicle** | [**SWGVehicleDetails***](SWGVehicleDetails.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


