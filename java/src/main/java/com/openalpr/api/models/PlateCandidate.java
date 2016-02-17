package com.openalpr.api.models;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;





@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2016-02-17T14:18:32.383-05:00")
public class PlateCandidate   {
  
  private String plate = null;
  private BigDecimal confidence = null;
  private Integer matchesTemplate = null;

  
  /**
   * Plate number
   **/
  
  @ApiModelProperty(value = "Plate number")
  @JsonProperty("plate")
  public String getPlate() {
    return plate;
  }
  public void setPlate(String plate) {
    this.plate = plate;
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

  

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    PlateCandidate plateCandidate = (PlateCandidate) o;
    return Objects.equals(plate, plateCandidate.plate) &&
        Objects.equals(confidence, plateCandidate.confidence) &&
        Objects.equals(matchesTemplate, plateCandidate.matchesTemplate);
  }

  @Override
  public int hashCode() {
    return Objects.hash(plate, confidence, matchesTemplate);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class PlateCandidate {\n");
    
    sb.append("    plate: ").append(toIndentedString(plate)).append("\n");
    sb.append("    confidence: ").append(toIndentedString(confidence)).append("\n");
    sb.append("    matchesTemplate: ").append(toIndentedString(matchesTemplate)).append("\n");
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

