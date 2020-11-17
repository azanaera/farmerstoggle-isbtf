package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/lossdetails/associations/ClaimAssociationDetail.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimAssociationDetail extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation}, 0)
  }
  
  static function createDestination (Claim :  Claim, ClaimAssociation :  ClaimAssociation, startInEditMode :  boolean) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation, startInEditMode}, 1)
  }
  
  static function drilldown (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation}, 0).drilldown()
  }
  
  static function drilldown (Claim :  Claim, ClaimAssociation :  ClaimAssociation, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation, startInEditMode}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, ClaimAssociation :  ClaimAssociation, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation, startInEditMode}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, ClaimAssociation :  ClaimAssociation, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation, startInEditMode}, 1).goInMain()
  }
  
  static function printPage (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation}, 0).printPage()
  }
  
  static function printPage (Claim :  Claim, ClaimAssociation :  ClaimAssociation, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation, startInEditMode}, 1).printPage()
  }
  
  static function push (Claim :  Claim, ClaimAssociation :  ClaimAssociation) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation}, 0).push()
  }
  
  static function push (Claim :  Claim, ClaimAssociation :  ClaimAssociation, startInEditMode :  boolean) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimAssociationDetail, {Claim, ClaimAssociation, startInEditMode}, 1).push()
  }
  
  
}