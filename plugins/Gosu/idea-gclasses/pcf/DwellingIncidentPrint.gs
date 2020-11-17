package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/print/DwellingIncidentPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DwellingIncidentPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (c :  Claim, incident :  DwellingIncident) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DwellingIncidentPrint, {c, incident}, 0)
  }
  
  static function drilldown (c :  Claim, incident :  DwellingIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DwellingIncidentPrint, {c, incident}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (c :  Claim, incident :  DwellingIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DwellingIncidentPrint, {c, incident}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (c :  Claim, incident :  DwellingIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DwellingIncidentPrint, {c, incident}, 0).goInMain()
  }
  
  static function printPage (c :  Claim, incident :  DwellingIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DwellingIncidentPrint, {c, incident}, 0).printPage()
  }
  
  static function push (c :  Claim, incident :  DwellingIncident) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DwellingIncidentPrint, {c, incident}, 0).push()
  }
  
  
}