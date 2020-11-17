package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/shared/exposures/Medicare_ExtInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class Medicare_ExtInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/shared/exposures/Medicare_ExtInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class Medicare_ExtInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ORM_Input) at Medicare_ExtInputSet.pcf: line 17, column 32
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ORM_Ext = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=ExhaustDate_Input) at Medicare_ExtInputSet.pcf: line 31, column 77
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ExhaustDate_Ext = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on CurrencyInput (id=NoFaultLimit_Input) at Medicare_ExtInputSet.pcf: line 40, column 78
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.NoFaultLimit_Ext = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on BooleanRadioInput (id=ClaimantRepresentation_Input) at Medicare_ExtInputSet.pcf: line 45, column 52
    function defaultSetter_24 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ClaimantRepresentation_Ext = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=ORMTermDate_Input) at Medicare_ExtInputSet.pcf: line 25, column 34
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      Exposure.ORMTermDate_Ext = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'onChange' attribute on PostOnChange at Medicare_ExtInputSet.pcf: line 33, column 111
    function onChange_10 () : void {
      if(Exposure.ExhaustDate_Ext != null){Exposure.ORMTermDate_Ext = Exposure.ExhaustDate_Ext}
    }
    
    // 'value' attribute on BooleanRadioInput (id=ORM_Input) at Medicare_ExtInputSet.pcf: line 17, column 32
    function valueRoot_2 () : java.lang.Object {
      return Exposure
    }
    
    // 'value' attribute on BooleanRadioInput (id=ORM_Input) at Medicare_ExtInputSet.pcf: line 17, column 32
    function value_0 () : java.lang.Boolean {
      return Exposure.ORM_Ext
    }
    
    // 'value' attribute on DateInput (id=ExhaustDate_Input) at Medicare_ExtInputSet.pcf: line 31, column 77
    function value_12 () : java.util.Date {
      return Exposure.ExhaustDate_Ext
    }
    
    // 'value' attribute on CurrencyInput (id=NoFaultLimit_Input) at Medicare_ExtInputSet.pcf: line 40, column 78
    function value_18 () : gw.api.financials.CurrencyAmount {
      return Exposure.NoFaultLimit_Ext
    }
    
    // 'value' attribute on BooleanRadioInput (id=ClaimantRepresentation_Input) at Medicare_ExtInputSet.pcf: line 45, column 52
    function value_23 () : java.lang.Boolean {
      return Exposure.ClaimantRepresentation_Ext
    }
    
    // 'value' attribute on DateInput (id=ORMTermDate_Input) at Medicare_ExtInputSet.pcf: line 25, column 34
    function value_5 () : java.util.Date {
      return Exposure.ORMTermDate_Ext
    }
    
    // 'visible' attribute on DateInput (id=ExhaustDate_Input) at Medicare_ExtInputSet.pcf: line 31, column 77
    function visible_11 () : java.lang.Boolean {
      return Exposure.ExposureType != ExposureType.TC_BODILYINJURYDAMAGE
    }
    
    property get Exposure () : Exposure {
      return getRequireValue("Exposure", 0) as Exposure
    }
    
    property set Exposure ($arg :  Exposure) {
      setRequireValue("Exposure", 0, $arg)
    }
    
    
  }
  
  
}