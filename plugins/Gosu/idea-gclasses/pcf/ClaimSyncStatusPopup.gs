package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/ClaimSyncStatusPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimSyncStatusPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimSyncStatusPopup, {Claim}, 0)
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimSyncStatusPopup, {Claim}, 0).push()
  }
  
  
}