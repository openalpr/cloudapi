
# PlateDetails

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**plate** | **String** | Best plate number for this plate |  [optional]
**matchesTemplate** | **Integer** | Indicates whether the plate matched a regional text pattern |  [optional]
**requestedTopn** | **Integer** | The max number of results requested |  [optional]
**processingTimeMs** | [**BigDecimal**](BigDecimal.md) | Number of milliseconds to process the license plate |  [optional]
**confidence** | [**BigDecimal**](BigDecimal.md) | Confidence percentage that the plate number is correct |  [optional]
**region** | **String** | Specified or detected region (e.g., tx for Texas) |  [optional]
**regionConfidence** | [**BigDecimal**](BigDecimal.md) | Confidence percentage that the plate region is correct |  [optional]
**coordinates** | [**List&lt;Coordinate&gt;**](Coordinate.md) | The X/Y coordinates of the license plate in the image Four coordinates are provided that form a polygon starting from the top-left and moving clockwise ending in the bottom left  |  [optional]
**candidates** | [**List&lt;PlateCandidate&gt;**](PlateCandidate.md) | All the top N candidates that could be the correct plate number |  [optional]
**vehicleRegion** | [**RegionOfInterest**](RegionOfInterest.md) |  |  [optional]
**vehicle** | [**VehicleDetails**](VehicleDetails.md) |  |  [optional]



