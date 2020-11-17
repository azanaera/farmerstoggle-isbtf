package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/policylocations/PolicyLocationPrint.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class PolicyLocationPrint extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (PolicyLocation :  PolicyLocation, Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.PolicyLocationPrint, {PolicyLocation, Claim}, 0)
  }
  
  static function drilldown (PolicyLocation :  PolicyLocation, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyLocationPrint, {PolicyLocation, Claim}, 0).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (PolicyLocation :  PolicyLocation, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyLocationPrint, {PolicyLocation, Claim}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (PolicyLocation :  PolicyLocation, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyLocationPrint, {PolicyLocation, Claim}, 0).goInMain()
  }
  
  static function printPage (PolicyLocation :  PolicyLocation, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyLocationPrint, {PolicyLocation, Claim}, 0).printPage()
  }
  
  static function push (PolicyLocation :  PolicyLocation, Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.PolicyLocationPrint, {PolicyLocation, Claim}, 0).push()
  }
  
  
}