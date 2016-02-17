package com.openalpr.api.models;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.openalpr.api.models.AlprPlate;
import com.openalpr.api.models.Classification;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.util.*;





@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2016-02-17T14:18:32.383-05:00")
public class InlineResponse200   {
  
  private Integer creditsMonthlyUsed = null;
  private Integer creditsMonthlyTotal = null;
  private Integer imgWidth = null;
  private List<Classification> color = new ArrayList<Classification>();
  private List<Classification> makemodel = new ArrayList<Classification>();
  private BigDecimal totalProcessingTime = null;
  private Integer imgHeight = null;
  private Integer creditCost = null;
  private AlprPlate plate = null;
  private List<Classification> make = new ArrayList<Classification>();

  
  /**
   * The number of API credits used this month
   **/
  
  @ApiModelProperty(value = "The number of API credits used this month")
  @JsonProperty("credits_monthly_used")
  public Integer getCreditsMonthlyUsed() {
    return creditsMonthlyUsed;
  }
  public void setCreditsMonthlyUsed(Integer creditsMonthlyUsed) {
    this.creditsMonthlyUsed = creditsMonthlyUsed;
  }

  
  /**
   * The maximum number of API credits available this month according to your plan
   **/
  
  @ApiModelProperty(value = "The maximum number of API credits available this month according to your plan")
  @JsonProperty("credits_monthly_total")
  public Integer getCreditsMonthlyTotal() {
    return creditsMonthlyTotal;
  }
  public void setCreditsMonthlyTotal(Integer creditsMonthlyTotal) {
    this.creditsMonthlyTotal = creditsMonthlyTotal;
  }

  
  /**
   * Width of the uploaded image in pixels
   **/
  
  @ApiModelProperty(value = "Width of the uploaded image in pixels")
  @JsonProperty("img_width")
  public Integer getImgWidth() {
    return imgWidth;
  }
  public void setImgWidth(Integer imgWidth) {
    this.imgWidth = imgWidth;
  }

  
  /**
   * Results from color vehicle analysis task
   **/
  
  @ApiModelProperty(value = "Results from color vehicle analysis task")
  @JsonProperty("color")
  public List<Classification> getColor() {
    return color;
  }
  public void setColor(List<Classification> color) {
    this.color = color;
  }

  
  /**
   * Results from makemodel vehicle analysis task
   **/
  
  @ApiModelProperty(value = "Results from makemodel vehicle analysis task")
  @JsonProperty("makemodel")
  public List<Classification> getMakemodel() {
    return makemodel;
  }
  public void setMakemodel(List<Classification> makemodel) {
    this.makemodel = makemodel;
  }

  
  /**
   * Time spent processing all tasks (in milliseconds)
   **/
  
  @ApiModelProperty(value = "Time spent processing all tasks (in milliseconds)")
  @JsonProperty("total_processing_time")
  public BigDecimal getTotalProcessingTime() {
    return totalProcessingTime;
  }
  public void setTotalProcessingTime(BigDecimal totalProcessingTime) {
    this.totalProcessingTime = totalProcessingTime;
  }

  
  /**
   * Height of the input image in pixels
   **/
  
  @ApiModelProperty(value = "Height of the input image in pixels")
  @JsonProperty("img_height")
  public Integer getImgHeight() {
    return imgHeight;
  }
  public void setImgHeight(Integer imgHeight) {
    this.imgHeight = imgHeight;
  }

  
  /**
   * The number of API credits that were used to process this image
   **/
  
  @ApiModelProperty(value = "The number of API credits that were used to process this image")
  @JsonProperty("credit_cost")
  public Integer getCreditCost() {
    return creditCost;
  }
  public void setCreditCost(Integer creditCost) {
    this.creditCost = creditCost;
  }

  
  /**
   **/
  
  @ApiModelProperty(value = "")
  @JsonProperty("plate")
  public AlprPlate getPlate() {
    return plate;
  }
  public void setPlate(AlprPlate plate) {
    this.plate = plate;
  }

  
  /**
   * Results from make vehicle analysis task
   **/
  
  @ApiModelProperty(value = "Results from make vehicle analysis task")
  @JsonProperty("make")
  public List<Classification> getMake() {
    return make;
  }
  public void setMake(List<Classification> make) {
    this.make = make;
  }

  

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    InlineResponse200 inlineResponse200 = (InlineResponse200) o;
    return Objects.equals(creditsMonthlyUsed, inlineResponse200.creditsMonthlyUsed) &&
        Objects.equals(creditsMonthlyTotal, inlineResponse200.creditsMonthlyTotal) &&
        Objects.equals(imgWidth, inlineResponse200.imgWidth) &&
        Objects.equals(color, inlineResponse200.color) &&
        Objects.equals(makemodel, inlineResponse200.makemodel) &&
        Objects.equals(totalProcessingTime, inlineResponse200.totalProcessingTime) &&
        Objects.equals(imgHeight, inlineResponse200.imgHeight) &&
        Objects.equals(creditCost, inlineResponse200.creditCost) &&
        Objects.equals(plate, inlineResponse200.plate) &&
        Objects.equals(make, inlineResponse200.make);
  }

  @Override
  public int hashCode() {
    return Objects.hash(creditsMonthlyUsed, creditsMonthlyTotal, imgWidth, color, makemodel, totalProcessingTime, imgHeight, creditCost, plate, make);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class InlineResponse200 {\n");
    
    sb.append("    creditsMonthlyUsed: ").append(toIndentedString(creditsMonthlyUsed)).append("\n");
    sb.append("    creditsMonthlyTotal: ").append(toIndentedString(creditsMonthlyTotal)).append("\n");
    sb.append("    imgWidth: ").append(toIndentedString(imgWidth)).append("\n");
    sb.append("    color: ").append(toIndentedString(color)).append("\n");
    sb.append("    makemodel: ").append(toIndentedString(makemodel)).append("\n");
    sb.append("    totalProcessingTime: ").append(toIndentedString(totalProcessingTime)).append("\n");
    sb.append("    imgHeight: ").append(toIndentedString(imgHeight)).append("\n");
    sb.append("    creditCost: ").append(toIndentedString(creditCost)).append("\n");
    sb.append("    plate: ").append(toIndentedString(plate)).append("\n");
    sb.append("    make: ").append(toIndentedString(make)).append("\n");
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

