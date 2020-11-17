package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/admin/wcparms/WCPDWeeksAndLimitsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class WCPDWeeksAndLimitsLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/admin/wcparms/WCPDWeeksAndLimitsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends WCPDWeeksAndLimitsLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on DateCell (id=PD_BenefitStartDate_Cell) at WCPDWeeksAndLimitsLV.pcf: line 42, column 29
    function defaultSetter_12 (__VALUE_TO_SET :  java.lang.Object) : void {
      ref_WC_PD_WeeksAndLimits.PD_BenefitStartDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateCell (id=PD_BenefitEndDate_Cell) at WCPDWeeksAndLimitsLV.pcf: line 51, column 29
    function defaultSetter_18 (__VALUE_TO_SET :  java.lang.Object) : void {
      ref_WC_PD_WeeksAndLimits.PD_BenefitEndDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextCell (id=DisabilityPercent_Cell) at WCPDWeeksAndLimitsLV.pcf: line 60, column 29
    function defaultSetter_23 (__VALUE_TO_SET :  java.lang.Object) : void {
      ref_WC_PD_WeeksAndLimits.DisabilityPercent = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TextCell (id=PD_NumWeeks_Cell) at WCPDWeeksAndLimitsLV.pcf: line 70, column 29
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      ref_WC_PD_WeeksAndLimits.PD_NumWeeks = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at WCPDWeeksAndLimitsLV.pcf: line 33, column 29
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      ref_WC_PD_WeeksAndLimits.JurisdictionState = (__VALUE_TO_SET as typekey.Jurisdiction)
    }
    
    // 'filter' attribute on TypeKeyCell (id=JurisdictionState_Cell) at WCPDWeeksAndLimitsLV.pcf: line 33, column 29
    function filter_8 (VALUE :  typekey.Jurisdiction, VALUES :  typekey.Jurisdiction[]) : java.lang.Boolean {
      return VALUE.hasCategory(JurisdictionType.TC_INSURANCE)
    }
    
    // 'validationExpression' attribute on DateCell (id=PD_BenefitStartDate_Cell) at WCPDWeeksAndLimitsLV.pcf: line 42, column 29
    function validationExpression_10 () : java.lang.Object {
      return (ref_WC_PD_WeeksAndLimits.PD_BenefitStartDate > ref_WC_PD_WeeksAndLimits.PD_BenefitEndDate ? DisplayKey.get("Rules.Validation.Admin.EffDateGTExpiryDate") : null)
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at WCPDWeeksAndLimitsLV.pcf: line 33, column 29
    function valueRoot_7 () : java.lang.Object {
      return ref_WC_PD_WeeksAndLimits
    }
    
    // 'value' attribute on DateCell (id=PD_BenefitStartDate_Cell) at WCPDWeeksAndLimitsLV.pcf: line 42, column 29
    function value_11 () : java.util.Date {
      return ref_WC_PD_WeeksAndLimits.PD_BenefitStartDate
    }
    
    // 'value' attribute on DateCell (id=PD_BenefitEndDate_Cell) at WCPDWeeksAndLimitsLV.pcf: line 51, column 29
    function value_17 () : java.util.Date {
      return ref_WC_PD_WeeksAndLimits.PD_BenefitEndDate
    }
    
    // 'value' attribute on TextCell (id=DisabilityPercent_Cell) at WCPDWeeksAndLimitsLV.pcf: line 60, column 29
    function value_22 () : java.math.BigDecimal {
      return ref_WC_PD_WeeksAndLimits.DisabilityPercent
    }
    
    // 'value' attribute on TextCell (id=PD_NumWeeks_Cell) at WCPDWeeksAndLimitsLV.pcf: line 70, column 29
    function value_26 () : java.math.BigDecimal {
      return ref_WC_PD_WeeksAndLimits.PD_NumWeeks
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at WCPDWeeksAndLimitsLV.pcf: line 33, column 29
    function value_5 () : typekey.Jurisdiction {
      return ref_WC_PD_WeeksAndLimits.JurisdictionState
    }
    
    property get ref_WC_PD_WeeksAndLimits () : entity.ref_WC_PD_WeeksAndLimits {
      return getIteratedValue(1) as entity.ref_WC_PD_WeeksAndLimits
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/admin/wcparms/WCPDWeeksAndLimitsLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class WCPDWeeksAndLimitsLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyCell (id=JurisdictionState_Cell) at WCPDWeeksAndLimitsLV.pcf: line 33, column 29
    function sortValue_0 (ref_WC_PD_WeeksAndLimits :  entity.ref_WC_PD_WeeksAndLimits) : java.lang.Object {
      return ref_WC_PD_WeeksAndLimits.JurisdictionState
    }
    
    // 'value' attribute on DateCell (id=PD_BenefitStartDate_Cell) at WCPDWeeksAndLimitsLV.pcf: line 42, column 29
    function sortValue_1 (ref_WC_PD_WeeksAndLimits :  entity.ref_WC_PD_WeeksAndLimits) : java.lang.Object {
      return ref_WC_PD_WeeksAndLimits.PD_BenefitStartDate
    }
    
    // 'value' attribute on DateCell (id=PD_BenefitEndDate_Cell) at WCPDWeeksAndLimitsLV.pcf: line 51, column 29
    function sortValue_2 (ref_WC_PD_WeeksAndLimits :  entity.ref_WC_PD_WeeksAndLimits) : java.lang.Object {
      return ref_WC_PD_WeeksAndLimits.PD_BenefitEndDate
    }
    
    // 'value' attribute on TextCell (id=DisabilityPercent_Cell) at WCPDWeeksAndLimitsLV.pcf: line 60, column 29
    function sortValue_3 (ref_WC_PD_WeeksAndLimits :  entity.ref_WC_PD_WeeksAndLimits) : java.lang.Object {
      return ref_WC_PD_WeeksAndLimits.DisabilityPercent
    }
    
    // 'value' attribute on TextCell (id=PD_NumWeeks_Cell) at WCPDWeeksAndLimitsLV.pcf: line 70, column 29
    function sortValue_4 (ref_WC_PD_WeeksAndLimits :  entity.ref_WC_PD_WeeksAndLimits) : java.lang.Object {
      return ref_WC_PD_WeeksAndLimits.PD_NumWeeks
    }
    
    // 'toCreateAndAdd' attribute on RowIterator at WCPDWeeksAndLimitsLV.pcf: line 22, column 91
    function toCreateAndAdd_30 () : entity.ref_WC_PD_WeeksAndLimits {
      return new ref_WC_PD_WeeksAndLimits()
    }
    
    // 'toRemove' attribute on RowIterator at WCPDWeeksAndLimitsLV.pcf: line 22, column 91
    function toRemove_31 (ref_WC_PD_WeeksAndLimits :  entity.ref_WC_PD_WeeksAndLimits) : void {
      ref_WC_PD_WeeksAndLimits.remove()
    }
    
    // 'value' attribute on RowIterator at WCPDWeeksAndLimitsLV.pcf: line 22, column 91
    function value_32 () : gw.api.database.IQueryBeanResult<entity.ref_WC_PD_WeeksAndLimits> {
      return ref_WC_PD_WeeksAndLimitsList
    }
    
    property get ref_WC_PD_WeeksAndLimitsList () : gw.api.database.IQueryBeanResult<ref_WC_PD_WeeksAndLimits> {
      return getRequireValue("ref_WC_PD_WeeksAndLimitsList", 0) as gw.api.database.IQueryBeanResult<ref_WC_PD_WeeksAndLimits>
    }
    
    property set ref_WC_PD_WeeksAndLimitsList ($arg :  gw.api.database.IQueryBeanResult<ref_WC_PD_WeeksAndLimits>) {
      setRequireValue("ref_WC_PD_WeeksAndLimitsList", 0, $arg)
    }
    
    
  }
  
  
}