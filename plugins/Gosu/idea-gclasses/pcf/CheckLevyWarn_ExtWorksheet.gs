package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/CheckLevyWarn_ExtWorksheet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class CheckLevyWarn_ExtWorksheet extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination () : pcf.api.Destination {
    return __newDestinationForLocation(pcf.CheckLevyWarn_ExtWorksheet, {}, 0)
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace () : pcf.api.Location {
    return __newDestinationForLocation(pcf.CheckLevyWarn_ExtWorksheet, {}, 0).goInWorkspace()
  }
  
  static function push () : pcf.api.Location {
    return __newDestinationForLocation(pcf.CheckLevyWarn_ExtWorksheet, {}, 0).push()
  }
  
  
}