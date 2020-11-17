package pcf

uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/financials/transactions/ClaimFinancialsTransactions.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
public class ClaimFinancialsTransactions extends com.guidewire.pl.web.codegen.LocationBase {
  static function createDestination (Claim :  Claim) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim}, 0)
  }
  
  static function createDestination (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Destination {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim, requestedOption}, 1)
  }
  
  static function drilldown (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim}, 0).drilldown()
  }
  
  static function drilldown (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim, requestedOption}, 1).drilldown()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim}, 0).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function go (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim, requestedOption}, 1).go()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim}, 0).goInMain()
  }
  
  @com.guidewire.pl.system.expression.WebImmediate
  static function goInMain (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim, requestedOption}, 1).goInMain()
  }
  
  static function printPage (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim}, 0).printPage()
  }
  
  static function printPage (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim, requestedOption}, 1).printPage()
  }
  
  static function push (Claim :  Claim) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim}, 0).push()
  }
  
  static function push (Claim :  Claim, requestedOption :  gw.api.financials.ClaimFinancialsTransactionsOption) : pcf.api.Location {
    return __newDestinationForLocation(pcf.ClaimFinancialsTransactions, {Claim, requestedOption}, 1).push()
  }
  
  
}