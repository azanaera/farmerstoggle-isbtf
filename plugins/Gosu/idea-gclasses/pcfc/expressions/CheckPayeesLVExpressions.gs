package pcfc.expressions

uses pcf.*
uses entity.*
uses typekey.*
uses gw.api.locale.DisplayKey
@javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/CheckPayeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
class CheckPayeesLVExpressions {
  @javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/CheckPayeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class CheckPayeesLVExpressionsImpl extends gw.api.web.ScopeBaseClass {
    public construct(widget :  Object) {
      super(widget, 0)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'value' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at CheckPayeesLV.pcf: line 25, column 64
    function sortValue_0 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=CheckPayee_PayeeType_Cell) at CheckPayeesLV.pcf: line 30, column 44
    function sortValue_1 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.PayeeType
    }
    
    // 'value' attribute on PrivacyCell (id=TaxID_Cell) at CheckPayeesLV.pcf: line 35, column 43
    function sortValue_2 (CheckPayee :  entity.CheckPayee) : java.lang.Object {
      return CheckPayee.Payee.TaxID
    }
    
    // 'value' attribute on RowIterator at CheckPayeesLV.pcf: line 16, column 39
    function value_28 () : entity.CheckPayee[] {
      return Check.Payees
    }
    
    property get Check () : Check {
      return getRequireValue("Check", 0) as Check
    }
    
    property set Check ($arg :  Check) {
      setRequireValue("Check", 0, $arg)
    }
    
    
  }
  
  @javax.annotation.processing.Generated("config/web/pcf/claim/financials/checks/CheckPayeesLV.pcf", "", "com.guidewire.pcfgen.PCFClassGenerator")
  public static class IteratorEntryExpressionsImpl extends CheckPayeesLVExpressionsImpl {
    public construct(widget :  Object) {
      super(widget, 1)
    }
    
    protected construct(widget :  Object, scopeDepth :  int) {
      super(widget, scopeDepth)
    }
    
    // 'action' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_10 () : void {
      ClaimContactDetailPopup.push(CheckPayee.Payee, CheckPayee.Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_7 () : void {
      AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), CheckPayee.Check.Claim, null as List<SpecialistService>)
    }
    
    // 'action' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 18, column 285
    function action_9 () : void {
      if (CheckPayee.Payee != null) { ClaimContactDetailPopup.push(CheckPayee.Payee, CheckPayee.Check.Claim, false, !CurrentLocation.InEditMode) } else { NullClaimContactDetailPopup.push() }
    }
    
    // 'action' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function action_dest_11 () : pcf.api.Destination {
      return pcf.ClaimContactDetailPopup.createDestination(CheckPayee.Payee, CheckPayee.Check.Claim)
    }
    
    // 'action' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 16, column 225
    function action_dest_8 () : pcf.api.Destination {
      return pcf.AddressBookPickerPopup.createDestination(statictypeof (CheckPayee.Payee), CheckPayee.Check.Claim, null as List<SpecialistService>)
    }
    
    // 'def' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_onEnter_4 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.onEnter(statictypeof (CheckPayee.Payee), null, CheckPayee.Check.Claim)
    }
    
    // 'def' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 14, column 229
    function def_refreshVariables_5 (def :  pcf.ClaimNewContactPickerMenuItemSet) : void {
      def.refreshVariables(statictypeof (CheckPayee.Payee), null, CheckPayee.Check.Claim)
    }
    
    // 'encryptionExpression' attribute on PrivacyCell (id=TaxID_Cell) at CheckPayeesLV.pcf: line 35, column 43
    function encryptionExpression_26 (VALUE :  java.lang.String) : java.lang.String {
      return CheckPayee.Payee.maskTaxId(VALUE)
    }
    
    // 'onPick' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function onPick_12 (PickedValue :  Contact) : void {
      var contactType = statictypeof (CheckPayee.Payee); var result = eval("CheckPayee.Payee = CheckPayee.Check.Claim.resolveContact(CheckPayee.Payee) as " + contactType.Name + ";return null;"); ;
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRange_15 () : java.lang.Object {
      return CheckPayee.Check.Claim.RelatedContacts
    }
    
    // 'value' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function valueRoot_14 () : java.lang.Object {
      return CheckPayee
    }
    
    // 'value' attribute on PrivacyCell (id=TaxID_Cell) at CheckPayeesLV.pcf: line 35, column 43
    function valueRoot_25 () : java.lang.Object {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function value_13 () : entity.Contact {
      return CheckPayee.Payee
    }
    
    // 'value' attribute on TypeKeyCell (id=CheckPayee_PayeeType_Cell) at CheckPayeesLV.pcf: line 30, column 44
    function value_21 () : typekey.ContactRole {
      return CheckPayee.PayeeType
    }
    
    // 'value' attribute on PrivacyCell (id=TaxID_Cell) at CheckPayeesLV.pcf: line 35, column 43
    function value_24 () : java.lang.String {
      return CheckPayee.Payee.TaxID
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  entity.Contact[]) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  gw.api.database.IQueryBeanResult<entity.Contact>) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRangeIsAllowedType_16 ($$arg :  java.util.List) : void {
      // No-op:  This method is only for verification purposes and is never actually executed
    }
    
    // 'valueRange' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 12, column 273
    function verifyValueRange_17 () : void {
      var __valueRangeArg = CheckPayee.Check.Claim.RelatedContacts
      // If this call fails to compile, possibly with an error saying it's an ambiguous method call,
      // that means that the type of the valueRange is not compatible with the valueType 
      // The valueRange must be an array, list or query whose member type matches the valueType
      verifyValueRangeIsAllowedType_16(__valueRangeArg)
    }
    
    // 'visible' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 14, column 229
    function visible_3 () : java.lang.Boolean {
      return perm.Contact.createlocal
    }
    
    // 'visible' attribute on ClaimContactCell (id=CheckPayee_Payee_Cell) at ClaimContactWidget.xml: line 16, column 225
    function visible_6 () : java.lang.Boolean {
      return "AddressBookPickerPopup.push(statictypeof (CheckPayee.Payee), CheckPayee.Check.Claim, null as List<SpecialistService>)" != "" && true
    }
    
    property get CheckPayee () : entity.CheckPayee {
      return getIteratedValue(1) as entity.CheckPayee
    }
    
    
  }
  
  
}