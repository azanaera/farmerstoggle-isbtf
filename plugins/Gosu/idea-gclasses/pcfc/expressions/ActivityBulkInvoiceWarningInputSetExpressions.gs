package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/workspace/activity/ActivityBulkInvoiceWarningInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class ActivityBulkInvoiceWarningInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/workspace/activity/ActivityBulkInvoiceWarningInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class ActivityBulkInvoiceWarningInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on TextInput (id=InvoiceNumber_Input) at ActivityBulkInvoiceWarningInputSet.pcf: line 17, column 42
    function action_0 () : void {
      BulkPay.go()
    }
    
    // 'action' attribute on TextInput (id=InvoiceNumber_Input) at ActivityBulkInvoiceWarningInputSet.pcf: line 17, column 42
    function action_dest_1 () : pcf.api.Destination {
      return pcf.BulkPay.createDestination()
    }
    
    // 'value' attribute on TextInput (id=InvoiceNumber_Input) at ActivityBulkInvoiceWarningInputSet.pcf: line 17, column 42
    function valueRoot_3 () : java.lang.Object {
      return BulkInvoice
    }
    
    // 'value' attribute on TextInput (id=InvoiceNumber_Input) at ActivityBulkInvoiceWarningInputSet.pcf: line 17, column 42
    function value_2 () : java.lang.String {
      return BulkInvoice.InvoiceNumber
    }
    
    // 'value' attribute on TextInput (id=Payee_Input) at ActivityBulkInvoiceWarningInputSet.pcf: line 22, column 35
    function value_5 () : entity.Contact {
      return BulkInvoice.Payee
    }
    
    // 'value' attribute on CurrencyInput (id=TotalAmount_Input) at ActivityBulkInvoiceWarningInputSet.pcf: line 26, column 51
    function value_8 () : gw.api.financials.CurrencyAmount {
      return BulkInvoice.TotalTransactionAmount
    }
    
    property get BulkInvoice () : BulkInvoice {
      return getRequireValue("BulkInvoice", 0) as BulkInvoice
    }
    
    property set BulkInvoice ($arg :  BulkInvoice) {
      setRequireValue("BulkInvoice", 0, $arg)
    }
    
    
  }
  
  
}