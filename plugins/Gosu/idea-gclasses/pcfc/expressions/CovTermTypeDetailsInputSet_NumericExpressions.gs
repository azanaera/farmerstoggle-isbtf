package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/CovTerm/CovTermTypeDetailsInputSet.Numeric.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CovTermTypeDetailsInputSet_NumericExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/CovTerm/CovTermTypeDetailsInputSet.Numeric.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CovTermTypeDetailsInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=NumericValue_Input) at CovTermTypeDetailsInputSet.Numeric.pcf: line 22, column 41
    function defaultSetter_3 (__VALUE_TO_SET :  java.lang.Object) : void {
      NumericCovTerm.NumericValue = (__VALUE_TO_SET as java.math.BigDecimal)
    }
    
    // 'value' attribute on TypeKeyInput (id=Units_Input) at CovTermTypeDetailsInputSet.Numeric.pcf: line 28, column 44
    function defaultSetter_7 (__VALUE_TO_SET :  java.lang.Object) : void {
      NumericCovTerm.Units = (__VALUE_TO_SET as typekey.CovTermModelVal)
    }
    
    // 'format' attribute on TextInput (id=NumericValue_Input) at CovTermTypeDetailsInputSet.Numeric.pcf: line 22, column 41
    function format_1 () : java.lang.String {
      return NumericCovTerm.NumericFormat
    }
    
    // 'initialValue' attribute on Variable at CovTermTypeDetailsInputSet.Numeric.pcf: line 14, column 30
    function initialValue_0 () : NumericCovTerm {
      return CovTerm as NumericCovTerm
    }
    
    // 'value' attribute on TextInput (id=NumericValue_Input) at CovTermTypeDetailsInputSet.Numeric.pcf: line 22, column 41
    function valueRoot_4 () : java.lang.Object {
      return NumericCovTerm
    }
    
    // 'value' attribute on TextInput (id=NumericValue_Input) at CovTermTypeDetailsInputSet.Numeric.pcf: line 22, column 41
    function value_2 () : java.math.BigDecimal {
      return NumericCovTerm.NumericValue
    }
    
    // 'value' attribute on TypeKeyInput (id=Units_Input) at CovTermTypeDetailsInputSet.Numeric.pcf: line 28, column 44
    function value_6 () : typekey.CovTermModelVal {
      return NumericCovTerm.Units
    }
    
    property get CovTerm () : CovTerm {
      return getRequireValue("CovTerm", 0) as CovTerm
    }
    
    property set CovTerm ($arg :  CovTerm) {
      setRequireValue("CovTerm", 0, $arg)
    }
    
    property get NumericCovTerm () : NumericCovTerm {
      return getVariableValue("NumericCovTerm", 0) as NumericCovTerm
    }
    
    property set NumericCovTerm ($arg :  NumericCovTerm) {
      setVariableValue("NumericCovTerm", 0, $arg)
    }
    
    
  }
  
  
}