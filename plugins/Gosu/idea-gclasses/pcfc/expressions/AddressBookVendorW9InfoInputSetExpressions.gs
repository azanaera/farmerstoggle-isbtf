package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookVendorW9InfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class AddressBookVendorW9InfoInputSetExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/addressbook/AddressBookVendorW9InfoInputSet.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class AddressBookVendorW9InfoInputSetExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxStatus_Input) at AddressBookVendorW9InfoInputSet.pcf: line 15, column 38
    function defaultSetter_1 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.TaxStatus = (__VALUE_TO_SET as typekey.TaxStatus)
    }
    
    // 'value' attribute on DateInput (id=W9ValidFrom_Input) at AddressBookVendorW9InfoInputSet.pcf: line 30, column 36
    function defaultSetter_13 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.W9ValidFrom = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on DateInput (id=W9ValidTo_Input) at AddressBookVendorW9InfoInputSet.pcf: line 35, column 34
    function defaultSetter_17 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.W9ValidTo = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on BooleanRadioInput (id=W9received_Input) at AddressBookVendorW9InfoInputSet.pcf: line 20, column 35
    function defaultSetter_5 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.W9Received = (__VALUE_TO_SET as java.lang.Boolean)
    }
    
    // 'value' attribute on DateInput (id=W9receivedDate_Input) at AddressBookVendorW9InfoInputSet.pcf: line 25, column 39
    function defaultSetter_9 (__VALUE_TO_SET :  java.lang.Object) : void {
      contact.W9ReceivedDate = (__VALUE_TO_SET as java.util.Date)
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxStatus_Input) at AddressBookVendorW9InfoInputSet.pcf: line 15, column 38
    function valueRoot_2 () : java.lang.Object {
      return contact
    }
    
    // 'value' attribute on TypeKeyInput (id=TaxStatus_Input) at AddressBookVendorW9InfoInputSet.pcf: line 15, column 38
    function value_0 () : typekey.TaxStatus {
      return contact.TaxStatus
    }
    
    // 'value' attribute on DateInput (id=W9ValidFrom_Input) at AddressBookVendorW9InfoInputSet.pcf: line 30, column 36
    function value_12 () : java.util.Date {
      return contact.W9ValidFrom
    }
    
    // 'value' attribute on DateInput (id=W9ValidTo_Input) at AddressBookVendorW9InfoInputSet.pcf: line 35, column 34
    function value_16 () : java.util.Date {
      return contact.W9ValidTo
    }
    
    // 'value' attribute on BooleanRadioInput (id=W9received_Input) at AddressBookVendorW9InfoInputSet.pcf: line 20, column 35
    function value_4 () : java.lang.Boolean {
      return contact.W9Received
    }
    
    // 'value' attribute on DateInput (id=W9receivedDate_Input) at AddressBookVendorW9InfoInputSet.pcf: line 25, column 39
    function value_8 () : java.util.Date {
      return contact.W9ReceivedDate
    }
    
    property get contact () : Contact {
      return getRequireValue("contact", 0) as Contact
    }
    
    property set contact ($arg :  Contact) {
      setRequireValue("contact", 0, $arg)
    }
    
    
  }
  
  
}