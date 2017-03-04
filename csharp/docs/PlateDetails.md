# OpenAlprApi.Model.PlateDetails
## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**Plate** | **string** | Best plate number for this plate | [optional] 
**MatchesTemplate** | **int?** | Indicates whether the plate matched a regional text pattern | [optional] 
**RequestedTopn** | **int?** | The max number of results requested | [optional] 
**ProcessingTimeMs** | **decimal?** | Number of milliseconds to process the license plate | [optional] 
**Confidence** | **decimal?** | Confidence percentage that the plate number is correct | [optional] 
**Region** | **string** | Specified or detected region (e.g., tx for Texas) | [optional] 
**RegionConfidence** | **decimal?** | Confidence percentage that the plate region is correct | [optional] 
**Coordinates** | [**List&lt;Coordinate&gt;**](Coordinate.md) | The X/Y coordinates of the license plate in the image Four coordinates are provided that form a polygon starting from the top-left and moving clockwise ending in the bottom left  | [optional] 
**Candidates** | [**List&lt;PlateCandidate&gt;**](PlateCandidate.md) | All the top N candidates that could be the correct plate number | [optional] 
**VehicleRegion** | [**RegionOfInterest**](RegionOfInterest.md) |  | [optional] 
**Vehicle** | [**VehicleDetails**](VehicleDetails.md) |  | [optional] 

[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)

