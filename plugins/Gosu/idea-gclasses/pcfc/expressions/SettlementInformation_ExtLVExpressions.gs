package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/shared/exposures/SettlementInformation_ExtLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class SettlementInformation_ExtLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/shared/exposures/SettlementInformation_ExtLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends SettlementInformation_ExtLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=delayedDate_Cell) at SettlementInformation_ExtLV.pcf: line 39, column 47
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      Settlement.DelayedDate_Ext = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=date_Cell) at SettlementInformation_ExtLV.pcf: line 28, column 42
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      Settlement.SettleDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CurrencyCell (id=amount_Cell) at SettlementInformation_ExtLV.pcf: line 33, column 44
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      Settlement.SettleAmount = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on DateCell (id=date_Cell) at SettlementInformation_ExtLV.pcf: line 28, column 42
    function valueRoot_5 () : java.lang.Object {
      return Settlement
    }
    
    // 'value' attribute on DateCell (id=delayedDate_Cell) at SettlementInformation_ExtLV.pcf: line 39, column 47
    function value_11 () : java.util.Date {
      return Settlement.DelayedDate_Ext
    }
    
    // 'value' attribute on DateCell (id=date_Cell) at SettlementInformation_ExtLV.pcf: line 28, column 42
    function value_3 () : java.util.Date {
      return Settlement.SettleDate
    }
    
    // 'value' attribute on CurrencyCell (id=amount_Cell) at SettlementInformation_ExtLV.pcf: line 33, column 44
    function value_7 () : gw.api.financials.CurrencyAmount {
      return Settlement.SettleAmount
    }
    
    property get Settlement () : entity.Settlement {
      return getIteratedValue(1) as entity.Settlement
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/shared/exposures/SettlementInformation_ExtLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class SettlementInformation_ExtLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=date_Cell) at SettlementInformation_ExtLV.pcf: line 28, column 42
    function sortValue_0 (Settlement :  entity.Settlement) : java.lang.Object {
      return Settlement.SettleDate
    }
    
    // 'value' attribute on CurrencyCell (id=amount_Cell) at SettlementInformation_ExtLV.pcf: line 33, column 44
    function sortValue_1 (Settlement :  entity.Settlement) : java.lang.Object {
      return Settlement.SettleAmount
    }
    
    // 'value' attribute on DateCell (id=delayedDate_Cell) at SettlementInformation_ExtLV.pcf: line 39, column 47
    function sortValue_2 (Settlement :  entity.Settlement) : java.lang.Object {
      return Settlement.DelayedDate_Ext
    }
    
    // 'toAdd' attribute on RowIterator at SettlementInformation_ExtLV.pcf: line 21, column 39
    function toAdd_15 (Settlement :  entity.Settlement) : void {
      Exposure.addToSettlements(Settlement)
    }
    
    // 'toRemove' attribute on RowIterator at SettlementInformation_ExtLV.pcf: line 21, column 39
    function toRemove_16 (Settlement :  entity.Settlement) : void {
      Exposure.removeFromSettlements(Settlement)
    }
    
    // 'value' attribute on RowIterator at SettlementInformation_ExtLV.pcf: line 21, column 39
    function value_17 () : entity.Settlement[] {
      return Exposure.Settlements
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}