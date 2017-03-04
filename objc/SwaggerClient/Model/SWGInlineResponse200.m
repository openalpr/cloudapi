#import "SWGInlineResponse200.h"

@implementation SWGInlineResponse200

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
  return [[JSONKeyMapper alloc] initWithDictionary:@{ @"processing_time": @"processingTime", @"img_width": @"imgWidth", @"img_height": @"imgHeight", @"credit_cost": @"creditCost", @"credits_monthly_used": @"creditsMonthlyUsed", @"credits_monthly_total": @"creditsMonthlyTotal", @"results": @"results", @"regions_of_interest": @"regionsOfInterest", @"epoch_time": @"epochTime", @"version": @"version", @"data_type": @"dataType" }];
}

/**
 * Indicates whether the property with the given name is optional.
 * If `propertyName` is optional, then return `YES`, otherwise return `NO`.
 * This method is used by `JSONModel`.
 */
+ (BOOL)propertyIsOptional:(NSString *)propertyName {

  NSArray *optionalProperties = @[@"processingTime", @"imgWidth", @"imgHeight", @"creditCost", @"creditsMonthlyUsed", @"creditsMonthlyTotal", @"results", @"regionsOfInterest", @"epochTime", @"version", @"dataType"];
  return [optionalProperties containsObject:propertyName];
}

@end
