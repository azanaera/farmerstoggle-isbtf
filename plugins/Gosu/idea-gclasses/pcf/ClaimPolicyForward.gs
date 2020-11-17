package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/quickjump/contextualforward/ClaimPolicyForward.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimPolicyForward extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (ClaimInfo :  ClaimInfo) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimPolicyForward, {ClaimInfo}, 0)
  }
  
  static function drilldown (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyForward, {ClaimInfo}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyForward, {ClaimInfo}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyForward, {ClaimInfo}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInWorkspace (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyForward, {ClaimInfo}, 0).goInWorkspace()
  }
  
  static function printPage (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyForward, {ClaimInfo}, 0).printPage()
  }
  
  static function push (ClaimInfo :  ClaimInfo) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimPolicyForward, {ClaimInfo}, 0).push()
  }
  
  
}