package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicySearchPolicyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class PolicySearchPolicyInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/policy/PolicySearchPolicyInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class PolicySearchPolicyInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicySearchPolicyInputSet.pcf: line 17, column 50
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicySearchCriteria.PolicyNumber = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at PolicySearchPolicyInputSet.pcf: line 39, column 102
    function defaultSetter_19 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicySearchCriteria.Vin = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TextInput (id=PropertyCity_Input) at PolicySearchPolicyInputSet.pcf: line 45, column 296
    function defaultSetter_25 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicySearchCriteria.PropertyAddress.City = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyState_Input) at PolicySearchPolicyInputSet.pcf: line 53, column 296
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicySearchCriteria.PropertyAddress.State = (__VALUE_TO_SET as typekey.State)
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeArchivedPolicies_Input) at PolicySearchPolicyInputSet.pcf: line 59, column 86
    function defaultSetter_39 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicySearchCriteria.IncludeArchived = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on RangeInput (id=PolicyType_Input) at PolicySearchPolicyInputSet.pcf: line 29, column 39
    function defaultSetter_8 (__VALUE_TO_SET :  java.lang.Object) : void {
      PolicySearchCriteria.PolicyType = (__VALUE_TO_SET as typekey.PolicyType)
    }
    
    // 'label' attribute on TypeKeyInput (id=PropertyState_Input) at PolicySearchPolicyInputSet.pcf: line 53, column 296
    function label_30 () : java.lang.Object {
      return PolicySearchCriteria.PropertyAddress.Country == Country.TC_CA ? DisplayKey.get("Web.Address.Default.Province") : DisplayKey.get("Web.Address.Default.State")
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyType_Input) at PolicySearchPolicyInputSet.pcf: line 29, column 39
    function valueRange_10 () : java.lang.Object {
      return gw.api.policy.PolicyTypeUtil.getPolicyTypes(PolicySearchCriteria)
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicySearchPolicyInputSet.pcf: line 17, column 50
    function valueRoot_2 () : java.lang.Object {
      return PolicySearchCriteria
    }
    
    // 'value' attribute on TextInput (id=PropertyCity_Input) at PolicySearchPolicyInputSet.pcf: line 45, column 296
    function valueRoot_26 () : java.lang.Object {
      return PolicySearchCriteria.PropertyAddress
    }
    
    // 'value' attribute on TextInput (id=PolicyNumber_Input) at PolicySearchPolicyInputSet.pcf: line 17, column 50
    function value_0 () : java.lang.String {
      return PolicySearchCriteria.PolicyNumber
    }
    
    // 'value' attribute on DateInput (id=LossDate_Input) at PolicySearchPolicyInputSet.pcf: line 33, column 46
    function value_14 () : java.util.Date {
      return PolicySearchCriteria.LossDate
    }
    
    // 'value' attribute on TextInput (id=Vin_Input) at PolicySearchPolicyInputSet.pcf: line 39, column 102
    function value_18 () : java.lang.String {
      return PolicySearchCriteria.Vin
    }
    
    // 'value' attribute on TextInput (id=PropertyCity_Input) at PolicySearchPolicyInputSet.pcf: line 45, column 296
    function value_24 () : java.lang.String {
      return PolicySearchCriteria.PropertyAddress.City
    }
    
    // 'value' attribute on TypeKeyInput (id=PropertyState_Input) at PolicySearchPolicyInputSet.pcf: line 53, column 296
    function value_31 () : typekey.State {
      return PolicySearchCriteria.PropertyAddress.State
    }
    
    // 'value' attribute on CheckBoxInput (id=IncludeArchivedPolicies_Input) at PolicySearchPolicyInputSet.pcf: line 59, column 86
    function value_38 () : java.lang.Boolean {
      return PolicySearchCriteria.IncludeArchived
    }
    
    // 'value' attribute on TypeKeyInput (id=LossType_Input) at PolicySearchPolicyInputSet.pcf: line 22, column 37
    function value_4 () : typekey.LossType {
      return PolicySearchCriteria.LossType
    }
    
    // 'value' attribute on RangeInput (id=PolicyType_Input) at PolicySearchPolicyInputSet.pcf: line 29, column 39
    function value_7 () : typekey.PolicyType {
      return PolicySearchCriteria.PolicyType
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyType_Input) at PolicySearchPolicyInputSet.pcf: line 29, column 39
    function verifyValueRangeIsAllowedType_11 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyType_Input) at PolicySearchPolicyInputSet.pcf: line 29, column 39
    function verifyValueRangeIsAllowedType_11 ($$arg :  typekey.PolicyType[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on RangeInput (id=PolicyType_Input) at PolicySearchPolicyInputSet.pcf: line 29, column 39
    function verifyValueRange_12 () : void {
      var __valueRangeArg = gw.api.policy.PolicyTypeUtil.getPolicyTypes(PolicySearchCriteria)
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_11(__valueRangeArg)
    }
    
    // 'visible' attribute on TextInput (id=Vin_Input) at PolicySearchPolicyInputSet.pcf: line 39, column 102
    function visible_17 () : java.lang.Boolean {
      return PolicySearchCriteria.LossType == gw.config.LOBAbstraction.ForClaim.ForLossType.Auto
    }
    
    // 'visible' attribute on TextInput (id=PropertyCity_Input) at PolicySearchPolicyInputSet.pcf: line 45, column 296
    function visible_23 () : java.lang.Boolean {
      return PolicySearchCriteria.LossType == gw.config.LOBAbstraction.ForClaim.ForLossType.Property or PolicySearchCriteria.LossType == gw.config.LOBAbstraction.ForClaim.ForLossType.GeneralLiability or PolicySearchCriteria.LossType == gw.config.LOBAbstraction.ForClaim.ForLossType.WorkComp
    }
    
    // 'visible' attribute on CheckBoxInput (id=IncludeArchivedPolicies_Input) at PolicySearchPolicyInputSet.pcf: line 59, column 86
    function visible_37 () : java.lang.Boolean {
      return gw.api.system.CCConfigParameters.PolicySystemArchivingEnabled.Value
    }
    
    property get PolicySearchCriteria () : PolicySearchCriteria {
      return getRequireValue("PolicySearchCriteria", 0) as PolicySearchCriteria
    }
    
    property set PolicySearchCriteria ($arg :  PolicySearchCriteria) {
      setRequireValue("PolicySearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}