package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/tools/workflow/MetroFlowsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class MetroFlowsDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/tools/workflow/MetroFlowsDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class MetroFlowsDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on InputSetRef at MetroFlowsDV.pcf: line 47, column 41
    function def_onEnter_24 (def :  pcf.SearchAndResetInputSet) : void {
      def.onEnter()
    }
    
    // 'def' attribute on InputSetRef at MetroFlowsDV.pcf: line 47, column 41
    function def_refreshVariables_25 (def :  pcf.SearchAndResetInputSet) : void {
      def.refreshVariables()
    }
    
    // 'value' attribute on DateInput (id=StartDateFrom_Input) at MetroFlowsDV.pcf: line 15, column 47
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.StartDateFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=UpdateDateTo_Input) at MetroFlowsDV.pcf: line 30, column 46
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.UpdateDateTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TextInput (id=CurrentStep_Input) at MetroFlowsDV.pcf: line 37, column 45
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.CurrentStep = (__VALUE_TO_SET as java.lang.String)
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at MetroFlowsDV.pcf: line 43, column 44
    function defaultSetter_21 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.State = (__VALUE_TO_SET as typekey.WorkflowState)
    }
    
    // 'value' attribute on DateInput (id=StartDateTo_Input) at MetroFlowsDV.pcf: line 20, column 45
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.StartDateTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=UpdateDateFrom_Input) at MetroFlowsDV.pcf: line 25, column 48
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      SearchCriteria.UpdateDateFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=StartDateFrom_Input) at MetroFlowsDV.pcf: line 15, column 47
    function valueRoot_2 () : java.lang.Object {
      return SearchCriteria
    }
    
    // 'value' attribute on DateInput (id=StartDateFrom_Input) at MetroFlowsDV.pcf: line 15, column 47
    function value_0 () : java.util.Date {
      return SearchCriteria.StartDateFrom
    }
    
    // 'value' attribute on DateInput (id=UpdateDateTo_Input) at MetroFlowsDV.pcf: line 30, column 46
    function value_12 () : java.util.Date {
      return SearchCriteria.UpdateDateTo
    }
    
    // 'value' attribute on TextInput (id=CurrentStep_Input) at MetroFlowsDV.pcf: line 37, column 45
    function value_16 () : java.lang.String {
      return SearchCriteria.CurrentStep
    }
    
    // 'value' attribute on TypeKeyInput (id=State_Input) at MetroFlowsDV.pcf: line 43, column 44
    function value_20 () : typekey.WorkflowState {
      return SearchCriteria.State
    }
    
    // 'value' attribute on DateInput (id=StartDateTo_Input) at MetroFlowsDV.pcf: line 20, column 45
    function value_4 () : java.util.Date {
      return SearchCriteria.StartDateTo
    }
    
    // 'value' attribute on DateInput (id=UpdateDateFrom_Input) at MetroFlowsDV.pcf: line 25, column 48
    function value_8 () : java.util.Date {
      return SearchCriteria.UpdateDateFrom
    }
    
    property get SearchCriteria () : WorkflowSearchCriteria {
      return getRequireValue("SearchCriteria", 0) as WorkflowSearchCriteria
    }
    
    property set SearchCriteria ($arg :  WorkflowSearchCriteria) {
      setRequireValue("SearchCriteria", 0, $arg)
    }
    
    
  }
  
  
}