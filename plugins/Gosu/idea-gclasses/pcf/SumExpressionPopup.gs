package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/bizrules/SumExpressionPopup.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class SumExpressionPopup extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (fragHolder :  gw.bizrules.pcf.SumExpressionFragmentHolder) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.SumExpressionPopup, {fragHolder}, 0)
  }
  
  static function push (fragHolder :  gw.bizrules.pcf.SumExpressionFragmentHolder) : pcf.api.Location {
    return __newDestinationForLocation(pcf.SumExpressionPopup, {fragHolder}, 0).push()
  }
  
  
}