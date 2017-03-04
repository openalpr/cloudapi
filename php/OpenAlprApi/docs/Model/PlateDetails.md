# PlateDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plate** | **string** | Best plate number for this plate | [optional] 
**matches_template** | **int** | Indicates whether the plate matched a regional text pattern | [optional] 
**requested_topn** | **int** | The max number of results requested | [optional] 
**processing_time_ms** | **float** | Number of milliseconds to process the license plate | [optional] 
**confidence** | **float** | Confidence percentage that the plate number is correct | [optional] 
**region** | **string** | Specified or detected region (e.g., tx for Texas) | [optional] 
**region_confidence** | **float** | Confidence percentage that the plate region is correct | [optional] 
**coordinates** | [**\Swagger\Client\Model\Coordinate[]**](Coordinate.md) | The X/Y coordinates of the license plate in the image Four coordinates are provided that form a polygon starting from the top-left and moving clockwise ending in the bottom left | [optional] 
**candidates** | [**\Swagger\Client\Model\PlateCandidate[]**](PlateCandidate.md) | All the top N candidates that could be the correct plate number | [optional] 
**vehicle_region** | [**\Swagger\Client\Model\RegionOfInterest**](RegionOfInterest.md) |  | [optional] 
**vehicle** | [**\Swagger\Client\Model\VehicleDetails**](VehicleDetails.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


