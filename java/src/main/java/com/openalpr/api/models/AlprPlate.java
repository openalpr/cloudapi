package com.openalpr.api.models;

import java.util.Objects;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonValue;
import com.openalpr.api.models.PlateDetails;
import com.openalpr.api.models.RegionOfInterest;
import io.swagger.annotations.ApiModel;
import io.swagger.annotations.ApiModelProperty;
import java.math.BigDecimal;
import java.util.*;



/**
 * Results from plate analysis task
 **/

@ApiModel(description = "Results from plate analysis task")
@javax.annotation.Generated(value = "class io.swagger.codegen.languages.JavaClientCodegen", date = "2016-02-17T14:18:32.383-05:00")
public class AlprPlate   {
  
  private List<PlateDetails> results = new ArrayList<PlateDetails>();
  private Integer imgWidth = null;
  private Integer imgHeight = null;
  private List<RegionOfInterest> regionsOfInterest = new ArrayList<RegionOfInterest>();
  private BigDecimal epochTime = null;
  private Integer version = null;


  public enum DataTypeEnum {
    ALPR_RESULTS("alpr_results"),
    ALPR_GROUP("alpr_group"),
    HEARTBEAT("heartbeat");

    private String value;

    DataTypeEnum(String value) {
      this.value = value;
    }

    @Override
    @JsonValue
    public String toString() {
      return value;
    }
  }

  private DataTypeEnum dataType = null;
  private BigDecimal processingTimeMs = null;

  
  /**
   **/
  
  @ApiModelProperty(value = "")
  @JsonProperty("results")
  public List<PlateDetails> getResults() {
    return results;
  }
  public void setResults(List<PlateDetails> results) {
    this.results = results;
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
   * Describes the areas analyzed in the input image
   **/
  
  @ApiModelProperty(value = "Describes the areas analyzed in the input image")
  @JsonProperty("regions_of_interest")
  public List<RegionOfInterest> getRegionsOfInterest() {
    return regionsOfInterest;
  }
  public void setRegionsOfInterest(List<RegionOfInterest> regionsOfInterest) {
    this.regionsOfInterest = regionsOfInterest;
  }

  
  /**
   * Epoch time that the image was processed in milliseconds
   **/
  
  @ApiModelProperty(value = "Epoch time that the image was processed in milliseconds")
  @JsonProperty("epoch_time")
  public BigDecimal getEpochTime() {
    return epochTime;
  }
  public void setEpochTime(BigDecimal epochTime) {
    this.epochTime = epochTime;
  }

  
  /**
   * API format version
   **/
  
  @ApiModelProperty(value = "API format version")
  @JsonProperty("version")
  public Integer getVersion() {
    return version;
  }
  public void setVersion(Integer version) {
    this.version = version;
  }

  
  /**
   * Specifies the type of data in this response
   **/
  
  @ApiModelProperty(value = "Specifies the type of data in this response")
  @JsonProperty("data_type")
  public DataTypeEnum getDataType() {
    return dataType;
  }
  public void setDataType(DataTypeEnum dataType) {
    this.dataType = dataType;
  }

  
  /**
   * Number of milliseconds to process all license plates
   **/
  
  @ApiModelProperty(value = "Number of milliseconds to process all license plates")
  @JsonProperty("processing_time_ms")
  public BigDecimal getProcessingTimeMs() {
    return processingTimeMs;
  }
  public void setProcessingTimeMs(BigDecimal processingTimeMs) {
    this.processingTimeMs = processingTimeMs;
  }

  

  @Override
  public boolean equals(Object o) {
    if (this == o) {
      return true;
    }
    if (o == null || getClass() != o.getClass()) {
      return false;
    }
    AlprPlate alprPlate = (AlprPlate) o;
    return Objects.equals(results, alprPlate.results) &&
        Objects.equals(imgWidth, alprPlate.imgWidth) &&
        Objects.equals(imgHeight, alprPlate.imgHeight) &&
        Objects.equals(regionsOfInterest, alprPlate.regionsOfInterest) &&
        Objects.equals(epochTime, alprPlate.epochTime) &&
        Objects.equals(version, alprPlate.version) &&
        Objects.equals(dataType, alprPlate.dataType) &&
        Objects.equals(processingTimeMs, alprPlate.processingTimeMs);
  }

  @Override
  public int hashCode() {
    return Objects.hash(results, imgWidth, imgHeight, regionsOfInterest, epochTime, version, dataType, processingTimeMs);
  }

  @Override
  public String toString() {
    StringBuilder sb = new StringBuilder();
    sb.append("class AlprPlate {\n");
    
    sb.append("    results: ").append(toIndentedString(results)).append("\n");
    sb.append("    imgWidth: ").append(toIndentedString(imgWidth)).append("\n");
    sb.append("    imgHeight: ").append(toIndentedString(imgHeight)).append("\n");
    sb.append("    regionsOfInterest: ").append(toIndentedString(regionsOfInterest)).append("\n");
    sb.append("    epochTime: ").append(toIndentedString(epochTime)).append("\n");
    sb.append("    version: ").append(toIndentedString(version)).append("\n");
    sb.append("    dataType: ").append(toIndentedString(dataType)).append("\n");
    sb.append("    processingTimeMs: ").append(toIndentedString(processingTimeMs)).append("\n");
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

