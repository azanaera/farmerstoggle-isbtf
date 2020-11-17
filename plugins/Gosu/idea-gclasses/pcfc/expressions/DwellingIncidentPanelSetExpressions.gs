package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/incidents/DwellingIncidentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class DwellingIncidentPanelSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/incidents/DwellingIncidentPanelSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class DwellingIncidentPanelSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at DwellingIncidentPanelSet.pcf: line 44, column 65
    function def_onEnter_13 (def :  pcf.FireDamageInfoInputSet) : void {
      def.onEnter(dwellingIncident)
    }
    
    // 'def' attribute on PanelRef at DwellingIncidentPanelSet.pcf: line 80, column 90
    function def_onEnter_35 (def :  pcf.HomeownersPanelSet) : void {
      def.onEnter(Claim, dwellingIncident, null, unusedServiceRequests)
    }
    
    // 'def' attribute on InputSetRef at DwellingIncidentPanelSet.pcf: line 98, column 68
    function def_onEnter_40 (def :  pcf.DwellingAttributeInputSet) : void {
      def.onEnter(dwellingIncident)
    }
    
    // 'def' attribute on PanelRef at DwellingIncidentPanelSet.pcf: line 104, column 55
    function def_onEnter_42 (def :  pcf.IncidentExposuresLV) : void {
      def.onEnter(dwellingIncident)
    }
    
    // 'def' attribute on InputSetRef at DwellingIncidentPanelSet.pcf: line 44, column 65
    function def_refreshVariables_14 (def :  pcf.FireDamageInfoInputSet) : void {
      def.refreshVariables(dwellingIncident)
    }
    
    // 'def' attribute on PanelRef at DwellingIncidentPanelSet.pcf: line 80, column 90
    function def_refreshVariables_36 (def :  pcf.HomeownersPanelSet) : void {
      def.refreshVariables(Claim, dwellingIncident, null, unusedServiceRequests)
    }
    
    // 'def' attribute on InputSetRef at DwellingIncidentPanelSet.pcf: line 98, column 68
    function def_refreshVariables_41 (def :  pcf.DwellingAttributeInputSet) : void {
      def.refreshVariables(dwellingIncident)
    }
    
    // 'def' attribute on PanelRef at DwellingIncidentPanelSet.pcf: line 104, column 55
    function def_refreshVariables_43 (def :  pcf.IncidentExposuresLV) : void {
      def.refreshVariables(dwellingIncident)
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at DwellingIncidentPanelSet.pcf: line 41, column 56
    function defaultSetter_10 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.LossEstimate = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at DwellingIncidentPanelSet.pcf: line 53, column 43
    function defaultSetter_16 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.EstimatesReceived = (__VALUE_TO_SET as typekey.YesNo)
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at DwellingIncidentPanelSet.pcf: line 29, column 56
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.PropertyDesc = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at DwellingIncidentPanelSet.pcf: line 61, column 73
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.EstRepairCost = (__VALUE_TO_SET as gw.api.financials.CurrencyAmount)
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at DwellingIncidentPanelSet.pcf: line 67, column 73
    function defaultSetter_27 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.EstRepairTime = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on BooleanRadioInput (id=AlreadyRepaired_Input) at DwellingIncidentPanelSet.pcf: line 72, column 58
    function defaultSetter_32 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.AlreadyRepaired = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at DwellingIncidentPanelSet.pcf: line 36, column 55
    function defaultSetter_6 (__VALUE_TO_SET :  java.lang.Object) : void {
      dwellingIncident.Description = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'initialValue' attribute on Variable at DwellingIncidentPanelSet.pcf: line 16, column 21
    function initialValue_0 () : Claim {
      return dwellingIncident.Claim
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at DwellingIncidentPanelSet.pcf: line 29, column 56
    function valueRoot_3 () : java.lang.Object {
      return dwellingIncident
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at DwellingIncidentPanelSet.pcf: line 95, column 45
    function valueRoot_38 () : java.lang.Object {
      return dwellingIncident.Claim
    }
    
    // 'value' attribute on TextInput (id=PropertyDescription_Input) at DwellingIncidentPanelSet.pcf: line 29, column 56
    function value_1 () : java.lang.String {
      return dwellingIncident.PropertyDesc
    }
    
    // 'value' attribute on TypeKeyInput (id=EstimatedReceived_Input) at DwellingIncidentPanelSet.pcf: line 53, column 43
    function value_15 () : typekey.YesNo {
      return dwellingIncident.EstimatesReceived
    }
    
    // 'value' attribute on CurrencyInput (id=EstimateCost_Input) at DwellingIncidentPanelSet.pcf: line 61, column 73
    function value_20 () : gw.api.financials.CurrencyAmount {
      return dwellingIncident.EstRepairCost
    }
    
    // 'value' attribute on TextInput (id=EstimateTime_Input) at DwellingIncidentPanelSet.pcf: line 67, column 73
    function value_26 () : java.lang.String {
      return dwellingIncident.EstRepairTime
    }
    
    // 'value' attribute on BooleanRadioInput (id=AlreadyRepaired_Input) at DwellingIncidentPanelSet.pcf: line 72, column 58
    function value_31 () : java.lang.Boolean {
      return dwellingIncident.AlreadyRepaired
    }
    
    // 'value' attribute on TextInput (id=Address_Input) at DwellingIncidentPanelSet.pcf: line 95, column 45
    function value_37 () : entity.Address {
      return dwellingIncident.Claim.LossLocation
    }
    
    // 'value' attribute on TextAreaInput (id=Description_Input) at DwellingIncidentPanelSet.pcf: line 36, column 55
    function value_5 () : java.lang.String {
      return dwellingIncident.Description
    }
    
    // 'value' attribute on CurrencyInput (id=LossEstimate_Input) at DwellingIncidentPanelSet.pcf: line 41, column 56
    function value_9 () : gw.api.financials.CurrencyAmount {
      return dwellingIncident.LossEstimate
    }
    
    // 'visible' attribute on CurrencyInput (id=EstimateCost_Input) at DwellingIncidentPanelSet.pcf: line 61, column 73
    function visible_19 () : java.lang.Boolean {
      return dwellingIncident.EstimatesReceived == TC_YES
    }
    
    property get Claim () : Claim {
      return getVariableValue("Claim", 0) as Claim
    }
    
    property set Claim ($arg :  Claim) {
      setVariableValue("Claim", 0, $arg)
    }
    
    property get dwellingIncident () : DwellingIncident {
      return getRequireValue("dwellingIncident", 0) as DwellingIncident
    }
    
    property set dwellingIncident ($arg :  DwellingIncident) {
      setRequireValue("dwellingIncident", 0, $arg)
    }
    
    property get unusedServiceRequests () : java.util.Set<ServiceRequest> {
      return getRequireValue("unusedServiceRequests", 0) as java.util.Set<ServiceRequest>
    }
    
    property set unusedServiceRequests ($arg :  java.util.Set<ServiceRequest>) {
      setRequireValue("unusedServiceRequests", 0, $arg)
    }
    
    
  }
  
  
}