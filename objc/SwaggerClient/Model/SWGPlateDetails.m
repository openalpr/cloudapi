#import "SWGPlateDetails.h"

@implementation SWGPlateDetails

- (instancetype)init {
  self = [super init];
  if (self) {
    // initialize property's default value, if any
    
  }
  return self;
}


/**
 * Maps json key to property name.
 * This method is used by `JSONModel`.
 */
+ (JSONKeyMapper *)keyMapper {
  return [[JSONKeyMapper alloc] initWithDictionary:@{ @"plate": @"plate", @"matches_template": @"matchesTemplate", @"requested_topn": @"requestedTopn", @"processing_time_ms": @"processingTimeMs", @"confidence": @"confidence", @"region": @"region", @"region_confidence": @"regionConfidence", @"coordinates": @"coordinates", @"candidates": @"candidates", @"vehicle_region": @"vehicleRegion", @"vehicle": @"vehicle" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"plate", @"matchesTemplate", @"requestedTopn", @"processingTimeMs", @"confidence", @"region", @"regionConfidence", @"coordinates", @"candidates", @"vehicleRegion", @"vehicle"];
  return [optionalProperties containsObject:propertyName];
}

@end
