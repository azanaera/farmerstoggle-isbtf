package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/FNOLWizard_PolicySearchInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class FNOLWizard_PolicySearchInputSet_defaultExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/FNOL/FNOLWizard_PolicySearchInputSet.default.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class FNOLWizard_PolicySearchInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_PolicySearchInputSet.default.pcf: line 26, column 46
    function def_onEnter_1 (def :  pcf.CCAddressInputSet) : void {
      def.onEnter(addressOwner)
    }
    
    // 'def' attribute on InputSetRef at FNOLWizard_PolicySearchInputSet.default.pcf: line 26, column 46
    function def_refreshVariables_2 (def :  pcf.CCAddressInputSet) : void {
      def.refreshVariables(addressOwner)
    }
    
    // 'value' attribute on TextInput (id=vin_Input) at FNOLWizard_PolicySearchInputSet.default.pcf: line 33, column 33
    function defaultSetter_4 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicySearch.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at FNOLWizard_PolicySearchInputSet.default.pcf: line 18, column 45
    function initialValue_0 () : gw.api.address.CCAddressOwner {
      return new gw.api.address.PolicySearchAddressOwner(PolicySearch)
    }
    
    // 'value' attribute on TextInput (id=vin_Input) at FNOLWizard_PolicySearchInputSet.default.pcf: line 33, column 33
    function valueRoot_5 () : java.lang.Object {
      return PolicySearch
    }
    
    // 'value' attribute on TextInput (id=vin_Input) at FNOLWizard_PolicySearchInputSet.default.pcf: line 33, column 33
    function value_3 () : java.lang.String {
      return PolicySearch.Vin
    }
    
    property get Claim () : Claim {
      return getRequireValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setRequireValue("Claim", 0, $arg)
    }
    
    property get PolicySearch () : PolicySearchCriteria {
      return getRequireValue("PolicySearch", 0) as PolicySearchCriteria
    }
    
    property set PolicySearch ($arg :  PolicySearchCriteria) {
      setRequireValue("PolicySearch", 0, $arg)
    }
    
    property get addressOwner () : gw.api.address.CCAddressOwner {
      return getVariableValue("addressOwner", 0) as gw.api.address.CCAddressOwner
    }
    
    property set addressOwner ($arg :  gw.api.address.CCAddressOwner) {
      setVariableValue("addressOwner", 0, $arg)
    }
    
    
  }
  
  
}