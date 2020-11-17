package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/subrogation/General/EditableAdverseGeneralLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class EditableAdverseGeneralLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/subrogation/General/EditableAdverseGeneralLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class EditableAdverseGeneralLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'initialValue' attribute on Variable at EditableAdverseGeneralLV.pcf: line 16, column 34
    function initialValue_0 () : SubrogationSummary {
      return Claim.SubrogationSummary
    }
    
    // 'initialValue' attribute on Variable at EditableAdverseGeneralLV.pcf: line 21, column 64
    function initialValue_1 () : gw.subrogation.financials.SubrogationAmountCache {
      return new gw.subrogation.financials.SubrogationAmountCache()
    }
    
    // 'value' attribute on CurrencyCell (id=Pending_Cell) at EditableAdverseGeneralLV.pcf: line 100, column 95
    function sortValue_11 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return cache.getPending(subroadverseparty)
    }
    
    // 'value' attribute on TextCell (id=AdverseParty_Cell) at EditableAdverseGeneralLV.pcf: line 42, column 29
    function sortValue_2 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return subroadverseparty.AdverseParty
    }
    
    // 'value' attribute on TypeKeyCell (id=Classification1_Cell) at EditableAdverseGeneralLV.pcf: line 50, column 29
    function sortValue_3 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return subroadverseparty.Classification
    }
    
    // 'value' attribute on TypeKeyCell (id=Strategy1_Cell) at EditableAdverseGeneralLV.pcf: line 58, column 28
    function sortValue_4 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return subroadverseparty.Strategy
    }
    
    // 'value' attribute on TextCell (id=LiabilityPercentage_Cell) at EditableAdverseGeneralLV.pcf: line 71, column 29
    function sortValue_5 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return subroadverseparty.Fault
    }
    
    // 'value' attribute on TextCell (id=ExpectedRecoveryPercentage_Cell) at EditableAdverseGeneralLV.pcf: line 80, column 29
    function sortValue_6 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return subroadverseparty.ExpectedRecovery
    }
    
    // 'value' attribute on CurrencyCell (id=ExpectedRecovery_Cell) at EditableAdverseGeneralLV.pcf: line 87, column 95
    function sortValue_7 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return cache.getExpectedRecoveryAmount(subroadverseparty)
    }
    
    // 'value' attribute on CurrencyCell (id=Recovered_Cell) at EditableAdverseGeneralLV.pcf: line 94, column 95
    function sortValue_9 (subroadverseparty :  entity.SubroAdverseParty) : java.lang.Object {
      return cache.getRecovered(subroadverseparty)
    }
    
    // 'toRemove' attribute on RowIterator at EditableAdverseGeneralLV.pcf: line 30, column 46
    function toRemove_46 (subroadverseparty :  entity.SubroAdverseParty) : void {
      SubrogationSummary.removeFromSubroAdverseParties(subroadverseparty)
    }
    
    // 'value' attribute on RowIterator at EditableAdverseGeneralLV.pcf: line 30, column 46
    function value_47 () : entity.SubroAdverseParty[] {
      return SubrogationSummary.SubroAdverseParties
    }
    
    // 'value' attribute on TextCell (id=AdversePartyLiability_Cell) at EditableAdverseGeneralLV.pcf: line 118, column 103
    function value_48 () : java.lang.String {
      return util.Display.DisplayPercent(Claim.AdversePartyLiabilityPercent().doubleValue(), 100)
    }
    
    // 'value' attribute on TextCell (id=AdversePartyExpectedRecovery_Cell) at EditableAdverseGeneralLV.pcf: line 124, column 110
    function value_50 () : java.lang.String {
      return util.Display.DisplayPercent(Claim.AdversePartyExpectedRecoveryPercent().doubleValue(), 100)
    }
    
    // 'value' attribute on CurrencyCell (id=AdversePartyExpectedRecoveryAmount_Cell) at EditableAdverseGeneralLV.pcf: line 130, column 114
    function value_52 () : gw.api.financials.CurrencyAmount {
      return SubrogationSummary.SubroAdverseParties.sum(\party -> cache.getExpectedRecoveryAmount(party))
    }
    
    // 'value' attribute on CurrencyCell (id=AdversePartyRecovered_Cell) at EditableAdverseGeneralLV.pcf: line 136, column 101
    function value_54 () : gw.api.financials.CurrencyAmount {
      return SubrogationSummary.SubroAdverseParties.sum(\party -> cache.getRecovered(party))
    }
    
    // 'value' attribute on CurrencyCell (id=AdversePartyPending_Cell) at EditableAdverseGeneralLV.pcf: line 142, column 99
    function value_56 () : gw.api.financials.CurrencyAmount {
      return SubrogationSummary.SubroAdverseParties.sum(\party -> cache.getPending(party))
    }
    
    // 'visible' attribute on Row at EditableAdverseGeneralLV.pcf: line 105, column 68
    function visible_58 () : java.lang.Boolean {
      return SubrogationSummary.HasNoSubroAdversePartyOverrides
    }
    
    // 'visible' attribute on CurrencyCell (id=ExpectedRecovery_Cell) at EditableAdverseGeneralLV.pcf: line 87, column 95
    function visible_8 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingPDF() or not CurrentLocation.InEditMode
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get SubrogationSummary () : SubrogationSummary {
      return getVariableValue("SubrogationSummary", 0) as SubrogationSummary
    }
    
    property set SubrogationSummary ($arg :  SubrogationSummary) {
      setVariableValue("SubrogationSummary", 0, $arg)
    }
    
    property get cache () : gw.subrogation.financials.SubrogationAmountCache {
      return getVariableValue("cache", 0) as gw.subrogation.financials.SubrogationAmountCache
    }
    
    property set cache ($arg :  gw.subrogation.financials.SubrogationAmountCache) {
      setVariableValue("cache", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/subrogation/General/EditableAdverseGeneralLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends EditableAdverseGeneralLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextCell (id=AdverseParty_Cell) at EditableAdverseGeneralLV.pcf: line 42, column 29
    function action_14 () : void {
      SubrogationParties.push(Claim, new gw.subrogation.financials.AdversePartyWrapper(subroadverseparty))
    }
    
    // 'action' attribute on TextCell (id=AdverseParty_Cell) at EditableAdverseGeneralLV.pcf: line 42, column 29
    function action_dest_15 () : pcf.api.Destination {
      return pcf.SubrogationParties.createDestination(Claim, new gw.subrogation.financials.AdversePartyWrapper(subroadverseparty))
    }
    
    // 'available' attribute on TextCell (id=AdverseParty_Cell) at EditableAdverseGeneralLV.pcf: line 42, column 29
    function available_13 () : java.lang.Boolean {
      return not subroadverseparty.New
    }
    
    // 'value' attribute on TypeKeyCell (id=Classification1_Cell) at EditableAdverseGeneralLV.pcf: line 50, column 29
    function defaultSetter_22 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.Classification = (__VALUE_TO_SET as typekey.SubroClassification)
    }
    
    // 'value' attribute on TypeKeyCell (id=Strategy1_Cell) at EditableAdverseGeneralLV.pcf: line 58, column 28
    function defaultSetter_26 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.Strategy = (__VALUE_TO_SET as typekey.SubroStrategy)
    }
    
    // 'value' attribute on TextCell (id=LiabilityPercentage_Cell) at EditableAdverseGeneralLV.pcf: line 71, column 29
    function defaultSetter_30 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.Fault = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=ExpectedRecoveryPercentage_Cell) at EditableAdverseGeneralLV.pcf: line 80, column 29
    function defaultSetter_34 (__VALUE_TO_SET :  java.lang.Object) : void {
      subroadverseparty.ExpectedRecovery = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'onPick' attribute on TextCell (id=AdverseParty_Cell) at EditableAdverseGeneralLV.pcf: line 42, column 29
    function onPick_16 (PickedValue :  java.lang.Object) : void {
      subroadverseparty.Claim.createClaimContact(subroadverseparty.AdverseParty)
    }
    
    // 'value' attribute on TextCell (id=AdverseParty_Cell) at EditableAdverseGeneralLV.pcf: line 42, column 29
    function valueRoot_18 () : java.lang.Object {
      return subroadverseparty
    }
    
    // 'value' attribute on TextCell (id=AdverseParty_Cell) at EditableAdverseGeneralLV.pcf: line 42, column 29
    function value_17 () : entity.Contact {
      return subroadverseparty.AdverseParty
    }
    
    // 'value' attribute on TypeKeyCell (id=Classification1_Cell) at EditableAdverseGeneralLV.pcf: line 50, column 29
    function value_21 () : typekey.SubroClassification {
      return subroadverseparty.Classification
    }
    
    // 'value' attribute on TypeKeyCell (id=Strategy1_Cell) at EditableAdverseGeneralLV.pcf: line 58, column 28
    function value_25 () : typekey.SubroStrategy {
      return subroadverseparty.Strategy
    }
    
    // 'value' attribute on TextCell (id=LiabilityPercentage_Cell) at EditableAdverseGeneralLV.pcf: line 71, column 29
    function value_29 () : java.math.BigDecimal {
      return subroadverseparty.Fault
    }
    
    // 'value' attribute on TextCell (id=ExpectedRecoveryPercentage_Cell) at EditableAdverseGeneralLV.pcf: line 80, column 29
    function value_33 () : java.math.BigDecimal {
      return subroadverseparty.ExpectedRecovery
    }
    
    // 'value' attribute on CurrencyCell (id=ExpectedRecovery_Cell) at EditableAdverseGeneralLV.pcf: line 87, column 95
    function value_37 () : gw.api.financials.CurrencyAmount {
      return cache.getExpectedRecoveryAmount(subroadverseparty)
    }
    
    // 'value' attribute on CurrencyCell (id=Recovered_Cell) at EditableAdverseGeneralLV.pcf: line 94, column 95
    function value_40 () : gw.api.financials.CurrencyAmount {
      return cache.getRecovered(subroadverseparty)
    }
    
    // 'value' attribute on CurrencyCell (id=Pending_Cell) at EditableAdverseGeneralLV.pcf: line 100, column 95
    function value_43 () : gw.api.financials.CurrencyAmount {
      return cache.getPending(subroadverseparty)
    }
    
    // 'visible' attribute on CurrencyCell (id=ExpectedRecovery_Cell) at EditableAdverseGeneralLV.pcf: line 87, column 95
    function visible_38 () : java.lang.Boolean {
      return gw.api.print.PrintUtil.isPrintingPDF() or not CurrentLocation.InEditMode
    }
    
    property get subroadverseparty () : entity.SubroAdverseParty {
      return getIteratedValue(1) as entity.SubroAdverseParty
    }
    
    
  }
  
  
}