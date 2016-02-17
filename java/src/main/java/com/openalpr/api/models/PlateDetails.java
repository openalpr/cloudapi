package com.openalpr.api.models;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.openalpr.api.models.Coordinate;
import com.openalpr.api.models.PlateCandidate;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.util.*;





@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2016-02-17T14:18:32.383-05:00")
public class PlateDetails   {
  
  private String plate = null;
  private Integer matchesTemplate = null;
  private Integer requestedTopn = null;
  private BigDecimal processingTimeMs = null;
  private BigDecimal confidence = null;
  private String region = null;
  private BigDecimal regionConfidence = null;
  private List<Coordinate> coordinates = new ArrayList<Coordinate>();
  private List<PlateCandidate> candidates = new ArrayList<PlateCandidate>();

  
  /**
   * Best plate number for this plate
   **/
  
  @ApiModelProperty(value = "Best plate number for this plate")
  @JsonProperty("plate")
  public String getPlate() {
    return plate;
  }
  public void setPlate(String plate) {
    this.plate = plate;
  }

  
  /**
   * Indicates whether the plate matched a regional text pattern
   **/
  
  @ApiModelProperty(value = "Indicates whether the plate matched a regional text pattern")
  @JsonProperty("matches_template")
  public Integer getMatchesTemplate() {
    return matchesTemplate;
  }
  public void setMatchesTemplate(Integer matchesTemplate) {
    this.matchesTemplate = matchesTemplate;
  }

  
  /**
   * The max number of results requested
   **/
  
  @ApiModelProperty(value = "The max number of results requested")
  @JsonProperty("requested_topn")
  public Integer getRequestedTopn() {
    return requestedTopn;
  }
  public void setRequestedTopn(Integer requestedTopn) {
    this.requestedTopn = requestedTopn;
  }

  
  /**
   * Number of milliseconds to process the license plate
   **/
  
  @ApiModelProperty(value = "Number of milliseconds to process the license plate")
  @JsonProperty("processing_time_ms")
  public BigDecimal getProcessingTimeMs() {
    return processingTimeMs;
  }
  public void setProcessingTimeMs(BigDecimal processingTimeMs) {
    this.processingTimeMs = processingTimeMs;
  }

  
  /**
   * Confidence percentage that the plate number is correct
   **/
  
  @ApiModelProperty(value = "Confidence percentage that the plate number is correct")
  @JsonProperty("confidence")
  public BigDecimal getConfidence() {
    return confidence;
  }
  public void setConfidence(BigDecimal confidence) {
    this.confidence = confidence;
  }

  
  /**
   * Specified or detected region (e.g., tx for Texas)
   **/
  
  @ApiModelProperty(value = "Specified or detected region (e.g., tx for Texas)")
  @JsonProperty("region")
  public String getRegion() {
    return region;
  }
  public void setRegion(String region) {
    this.region = region;
  }

  
  /**
   * Confidence percentage that the plate region is correct
   **/
  
  @ApiModelProperty(value = "Confidence percentage that the plate region is correct")
  @JsonProperty("region_confidence")
  public BigDecimal getRegionConfidence() {
    return regionConfidence;
  }
  public void setRegionConfidence(BigDecimal regionConfidence) {
    this.regionConfidence = regionConfidence;
  }

  
  /**
   * The X/Y coordinates of the license plate in the image\nFour coordinates are provided that form a polygon starting\nfrom the top-left and moving clockwise ending in the bottom left
   **/
  
  @ApiModelProperty(value = "The X/Y coordinates of the license plate in the image\nFour coordinates are provided that form a polygon starting\nfrom the top-left and moving clockwise ending in the bottom left")
  @JsonProperty("coordinates")
  public List<Coordinate> getCoordinates() {
    return coordinates;
  }
  public void setCoordinates(List<Coordinate> coordinates) {
    this.coordinates = coordinates;
  }

  
  /**
   * All the top N candidates that could be the correct plate number
   **/
  
  @ApiModelProperty(value = "All the top N candidates that could be the correct plate number")
  @JsonProperty("candidates")
  public List<PlateCandidate> getCandidates() {
    return candidates;
  }
  public void setCandidates(List<PlateCandidate> candidates) {
    this.candidates = candidates;
  }

  

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PlateDetails plateDetails = (PlateDetails) o;
    return Objects.equals(plate, plateDetails.plate) &&
        Objects.equals(matchesTemplate, plateDetails.matchesTemplate) &&
        Objects.equals(requestedTopn, plateDetails.requestedTopn) &&
        Objects.equals(processingTimeMs, plateDetails.processingTimeMs) &&
        Objects.equals(confidence, plateDetails.confidence) &&
        Objects.equals(region, plateDetails.region) &&
        Objects.equals(regionConfidence, plateDetails.regionConfidence) &&
        Objects.equals(coordinates, plateDetails.coordinates) &&
        Objects.equals(candidates, plateDetails.candidates);
  }

  @Override
  public int hashCode() {
    return Objects.hash(plate, matchesTemplate, requestedTopn, processingTimeMs, confidence, region, regionConfidence, coordinates, candidates);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PlateDetails {\n");
    
    sb.append("    plate: ").append(toIndentedString(plate)).append("\n");
    sb.append("    matchesTemplate: ").append(toIndentedString(matchesTemplate)).append("\n");
    sb.append("    requestedTopn: ").append(toIndentedString(requestedTopn)).append("\n");
    sb.append("    processingTimeMs: ").append(toIndentedString(processingTimeMs)).append("\n");
    sb.append("    confidence: ").append(toIndentedString(confidence)).append("\n");
    sb.append("    region: ").append(toIndentedString(region)).append("\n");
    sb.append("    regionConfidence: ").append(toIndentedString(regionConfidence)).append("\n");
    sb.append("    coordinates: ").append(toIndentedString(coordinates)).append("\n");
    sb.append("    candidates: ").append(toIndentedString(candidates)).append("\n");
    sb.append("}");
    return sb.toString();
  }

  /**
   * Convert the given object to string with each line indented by 4 spaces
   * (except the first line).
   */
  private String toIndentedString(Object o) {
    if (o == null) {
      return "null";
    }
    return o.toString().replace("\n", "\n    ");
  }
}

