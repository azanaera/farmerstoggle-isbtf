package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/DuplicateClaimLossDetailsPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class DuplicateClaimLossDetailsPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.DuplicateClaimLossDetailsPopup, {claim}, 0)
  }
  
  static function push (claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.DuplicateClaimLossDetailsPopup, {claim}, 0).push()
  }
  
  
}