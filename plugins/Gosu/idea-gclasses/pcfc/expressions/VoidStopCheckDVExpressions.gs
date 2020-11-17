package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/VoidStopCheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class VoidStopCheckDVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/VoidStopCheckDV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class VoidStopCheckDVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'def' attribute on ListViewInput at VoidStopCheckDV.pcf: line 57, column 27
    function def_onEnter_23 (def :  pcf.CheckSummaryPaymentsLV) : void {
      def.onEnter(Check.Payments)
    }
    
    // 'def' attribute on ListViewInput at VoidStopCheckDV.pcf: line 57, column 27
    function def_refreshVariables_24 (def :  pcf.CheckSummaryPaymentsLV) : void {
      def.refreshVariables(Check.Payments)
    }
    
    // 'value' attribute on TypeKeyInput (id=Comments_Input) at VoidStopCheckDV.pcf: line 19, column 48
    function defaultSetter_2 (__VALUE_TO_SET :  java.lang.Object) : void {
      Check.VoidStopChkReason_Ext = (__VALUE_TO_SET as typekey.VoidStopReason_Ext)
    }
    
    // 'onChange' attribute on PostOnChange at VoidStopCheckDV.pcf: line 21, column 80
    function onChange_0 () : void {
      Check.Comments = Check.VoidStopChkReason_Ext.Description
    }
    
    // 'value' attribute on TextInput (id=CreateUser_Input) at VoidStopCheckDV.pcf: line 46, column 55
    function valueRoot_18 () : java.lang.Object {
      return Check.CreateUser.Contact
    }
    
    // 'value' attribute on TypeKeyInput (id=Comments_Input) at VoidStopCheckDV.pcf: line 19, column 48
    function valueRoot_3 () : java.lang.Object {
      return Check
    }
    
    // 'value' attribute on TypeKeyInput (id=Comments_Input) at VoidStopCheckDV.pcf: line 19, column 48
    function value_1 () : typekey.VoidStopReason_Ext {
      return Check.VoidStopChkReason_Ext
    }
    
    // 'value' attribute on CurrencyInput (id=GrossAmount_Input) at VoidStopCheckDV.pcf: line 38, column 59
    function value_11 () : gw.api.financials.CurrencyAmountPair {
      return Check.GrossAmountPair
    }
    
    // 'value' attribute on DateInput (id=IssueDate_Input) at VoidStopCheckDV.pcf: line 42, column 34
    function value_14 () : java.util.Date {
      return Check.IssueDate
    }
    
    // 'value' attribute on TextInput (id=CreateUser_Input) at VoidStopCheckDV.pcf: line 46, column 55
    function value_17 () : java.lang.String {
      return Check.CreateUser.Contact.DisplayName
    }
    
    // 'value' attribute on DateInput (id=CreateTime_Input) at VoidStopCheckDV.pcf: line 50, column 35
    function value_20 () : java.util.Date {
      return Check.CreateTime
    }
    
    // 'value' attribute on TextInput (id=PayTo_Input) at VoidStopCheckDV.pcf: line 29, column 30
    function value_5 () : java.lang.String {
      return Check.PayTo
    }
    
    // 'value' attribute on TextInput (id=CheckNumber_Input) at VoidStopCheckDV.pcf: line 33, column 36
    function value_8 () : java.lang.String {
      return Check.CheckNumber
    }
    
    property get Check () : Check {
      return getRequireValue("Check", 0) as Check
    }
    
    property set Check ($arg :  Check) {
      setRequireValue("Check", 0, $arg)
    }
    
    
  }
  
  
}