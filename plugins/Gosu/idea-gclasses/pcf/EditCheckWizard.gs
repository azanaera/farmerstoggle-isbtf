package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/EditCheckWizard.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class EditCheckWizard extends com.guidewire.pl.web.codegen.WizardBase {
  static function createDestination (claim :  Claim, check :  Check) : pcf.api.Destination {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, check}, 0)
  }
  
  static function createDestination (claim :  Claim, payment :  Payment, check :  Check) : pcf.api.Destination {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, payment, check}, 1)
  }
  
  static function drilldown (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, check}, 0).drilldown()
  }
  
  static function drilldown (claim :  Claim, payment :  Payment, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, payment, check}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, check}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (claim :  Claim, payment :  Payment, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, payment, check}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, check}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (claim :  Claim, payment :  Payment, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, payment, check}, 1).goInMain()
  }
  
  static function printPage (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, check}, 0).printPage()
  }
  
  static function printPage (claim :  Claim, payment :  Payment, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, payment, check}, 1).printPage()
  }
  
  static function push (claim :  Claim, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, check}, 0).push()
  }
  
  static function push (claim :  Claim, payment :  Payment, check :  Check) : pcf.api.Location {
    return __newDestinationForWizard(pcf.EditCheckWizard, {claim, payment, check}, 1).push()
  }
  
  
}