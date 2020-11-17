package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/metro/MetroReportDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class MetroReportDetailsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.MetroReportDetailsPopup, {claim}, 0)
  }
  
  static function createDestination (claim :  Claim, metroReport :  MetroReport) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.MetroReportDetailsPopup, {claim, metroReport}, 1)
  }
  
  function pickValueAndCommit (value :  MetroReport) : void {
    __widgetOf(this, pcf.MetroReportDetailsPopup, LOCATION_WIDGET_CLASS).setPickedValueAndCommitChanges(value)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.MetroReportDetailsPopup, {claim}, 0).push()
  }
  
  static function push (claim :  Claim, metroReport :  MetroReport) : pcf.api.Location {
    return __newDestinationForLocation(pcf.MetroReportDetailsPopup, {claim, metroReport}, 1).push()
  }
  
  
}